import React, { useState, useEffect } from "react";
import "./CarMode.css";
import { translate } from '@vitalets/google-translate-api';

const CarMode = () => {
    const [isActive, setIsActive] = useState(false);
    const [recognition, setRecognition] = useState(null);

    useEffect(() => {
        const handlePageLoad = () => {
            if (isActive) {
                const text = getPageText();
                speak(text);
            }
        };

        const handleRouteChange = () => {
            if (isActive) {
                window.speechSynthesis.cancel();
                const text = getPageText();
                speak(text);
            }
        };

        const handleModalOpen = (mutationsList) => {
            if (isActive) {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList' && mutation.addedNodes.length) {
                        mutation.addedNodes.forEach(node => {
                            if (node.nodeType === 1 && node.classList.contains('ReactModal__Content')) {
                                const text = node.innerText;
                                window.speechSynthesis.cancel();
                                speak(text);
                            }
                        });
                    }
                }
            }
        };

        const handleVoiceCommand = async (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase();
            if (transcript.includes('start car mode')) {
                setIsActive(true);
            } else if (transcript.includes('stop car mode')) {
                setIsActive(false);
                window.speechSynthesis.cancel(); // Stop reading
            } else {
                // Handle Romanian to English translation
                const translatedText = await translateText(transcript, 'ro', 'en');
                speak(translatedText);
            }
        };

        const observer = new MutationObserver(handleModalOpen);
        observer.observe(document.body, { childList: true, subtree: true });

        document.addEventListener('DOMContentLoaded', handlePageLoad);
        window.addEventListener('load', handlePageLoad);
        window.addEventListener('popstate', handleRouteChange);

        const recognitionInstance = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognitionInstance.continuous = true;
        recognitionInstance.interimResults = false;
        recognitionInstance.lang = 'ro-RO'; // Set language to Romanian
        recognitionInstance.addEventListener('result', handleVoiceCommand);
        recognitionInstance.start();

        setRecognition(recognitionInstance);

        return () => {
            document.removeEventListener('DOMContentLoaded', handlePageLoad);
            window.removeEventListener('load', handlePageLoad);
            window.removeEventListener('popstate', handleRouteChange);
            observer.disconnect();
            recognitionInstance.removeEventListener('result', handleVoiceCommand);
            recognitionInstance.stop();
        };
    }, [isActive]);

    useEffect(() => {
        if (isActive) {
            speak(getPageText());
        } else {
            window.speechSynthesis.cancel(); // Stop reading when Car Mode is deactivated
        }
    }, [isActive]);

    const getPageText = () => {
        return document.body.innerText;
    };

    const speak = (text) => {
        if (text) {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.cancel(); // Ensure any previous speech is stopped
            window.speechSynthesis.speak(speech);
        }
    };

    const toggleCarMode = () => {
        setIsActive(!isActive);
        if (!isActive) {
            window.speechSynthesis.cancel(); // Stop reading if Car Mode is deactivated
        }
    };

    const translateText = async (text, sourceLang, targetLang) => {
        try {
            const res = await translate(text, { from: sourceLang, to: targetLang });
            return res.text;
        } catch (err) {
            console.error(err);
            return text; // Return original text in case of an error
        }
    };

    return (
        <div>
            <button onClick={toggleCarMode} className="car-mode-toggle">
                {isActive ? 'Stop Car Mode' : 'Start Car Mode'}
            </button>
        </div>
    );
};

export default CarMode;
