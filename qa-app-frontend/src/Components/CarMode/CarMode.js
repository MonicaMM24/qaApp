import React, {useState, useEffect} from "react";
import './CarMode.css';

const CarMode = () => {
    const [isActive, setIsActive] = useState(false);
    const [textToSpeak, setTextToSpeak] = useState("Welcome to Car Mode.Press any button to continue");

    useEffect(() => {
        if(isActive) {
            speak(textToSpeak);
        }
    }, [isActive, textToSpeak]);

    const toggleCarMode = () => {
        setIsActive(!isActive);
    };

    const speak = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    };

    return (
        <div>
            <button onClick={toggleCarMode} className="car-mode-toggle">
                {isActive ? 'Close Car Mode' : 'Open Car Mode'}
            </button>
            {isActive && (
                <div className="car-mode-popup">
                    <p>{textToSpeak}</p>
                    <button onClick={() => setTextToSpeak("You are navigating through the app safely.")}>
                        Test Speak
                    </button>
                </div>
            )}
        </div>
    );

};

export default CarMode;