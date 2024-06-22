import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Quiz-list.css';
import QuizModal from "./QuizModal";

const QuizList = ({ handleQuizResults, activateChatBot, handleQuizSelected }) => { // Add handleQuizSelected as a prop
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedQuizId, setSelectedQuizId] = useState(null);

    const list = [
        { title: 'ISTQB Foundation Quiz' },
        { title: 'Agile Tester Quiz' },
        { title: 'Test Automation Engineer' },
        { title: 'ISTQB Foundation: Static Testing' },
        { title: 'ISTQB Foundation: Test Analysis and Design' },
        { title: 'ISTQB Foundation: Test Techniques' },
        { title: 'ISTQB Foundation: Test Tools and Automation' },
        { title: 'ISTQB Foundation: Test Management' },
        { title: 'ISTQB Foundation: Testing throughout the Software Life Cycle' },
        { title: 'Certified Tester Automotive Software' },
    ];

    const openModal = (quizId) => {
        setSelectedQuizId(quizId);
        setModalIsOpen(true);
        handleQuizSelected(); // Close chatbot when a new quiz is started
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <ol className="list">
                {list.map((quiz, index) => (
                    <li key={quiz.title}>
                        <Link to="#" onClick={() => openModal(index)}>
                            {quiz.title}
                        </Link>
                    </li>
                ))}
            </ol>
            <QuizModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                quizId={selectedQuizId}
                closeModal={closeModal} // Pass the closeModal function
                handleQuizResults={handleQuizResults} // Pass the handleQuizResults function
                activateChatBot={activateChatBot} // Pass the activateChatBot function
                handleQuizSelected={handleQuizSelected} // Pass the handleQuizSelected function
            />
        </>
    );
};

export default QuizList;
