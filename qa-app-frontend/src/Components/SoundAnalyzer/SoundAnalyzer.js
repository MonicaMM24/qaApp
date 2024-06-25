import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./SoundAnalyzer.css";

const SoundAnalyzer = ({ onSoundDetected, quizActive }) => {
    const [audioContext, setAudioContext] = useState(null);
    const [analyzer, setAnalyzer] = useState(null);
    const [microphone, setMicrophone] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        let audioContext;
        let analyzer;
        let microphone;

        const initAudio = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                analyzer = audioContext.createAnalyser();
                microphone = audioContext.createMediaStreamSource(stream);
                microphone.connect(analyzer);

                setAudioContext(audioContext);
                setAnalyzer(analyzer);
                setMicrophone(microphone);
                setIsListening(true);
            } catch (err) {
                console.error('Error accessing microphone', err);
            }
        };

        if (quizActive) {
            initAudio();
        } else {
            if (audioContext) {
                audioContext.close();
            }
        }

        return () => {
            if (audioContext && audioContext.state !== 'closed') {
                audioContext.close();
            }
            setIsListening(false);
            setModalIsOpen(false);
        };
    }, [quizActive]);

    useEffect(() => {
        if (analyzer && quizActive) {
            const dataArray = new Uint8Array(analyzer.frequencyBinCount);

            const detectSound = () => {
                analyzer.getByteFrequencyData(dataArray);
                const average = dataArray.reduce((a, b) => a + b) / dataArray.length;

                // If average volume is above a threshold, we assume there's sound.
                if (average > 20) {  // This threshold can be adjusted based on environment
                    onSoundDetected(average);
                    handleSoundDetected();
                }

                if (quizActive) {
                    requestAnimationFrame(detectSound);
                }
            };

            detectSound();
        }
    }, [analyzer, onSoundDetected, quizActive]);

    const handleSoundDetected = () => {
        speak("Warning: Unusual sounds detected!");
        setModalIsOpen(true);
    };

    const speak = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.cancel(); // Ensure any previous speech is stopped
        window.speechSynthesis.speak(speech);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            {isListening ? <p>Listening for sounds...</p> : <p>Initializing microphone...</p>}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Sound Detected Warning"
                className="sound-analyzer-modal"
                overlayClassName="sound-analyzer-overlay"
            >
                <h2>Warning</h2>
                <p>Unusual sounds detected!</p>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default SoundAnalyzer;
