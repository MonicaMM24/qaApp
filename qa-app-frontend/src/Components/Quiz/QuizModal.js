import React from "react";
import Modal from "react-modal";
import Quiz from "./Quiz"; // Ensure the path is correct

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '70%', // Adjusted width
        maxWidth: '700px', // Adjusted max-width
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        background: '#f0f4f3',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        overflow: 'auto'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    }
};

const QuizModal = ({ isOpen, onRequestClose, quizId, closeModal, handleQuizResults, activateChatBot, handleQuizSelected }) => {
    const closeQuiz = () => {
        closeModal();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Quiz Modal"
            style={customStyles}
            ariaHideApp={false}
        >
            <button onClick={onRequestClose} style={{ float: 'right', padding: '10px', background: 'transparent', border: 'none', fontSize: '16px', cursor: 'pointer' }}>×</button>
            <Quiz
                quizId={quizId}
                closeModal={closeModal}
                handleQuizResults={handleQuizResults}
                activateChatBot={activateChatBot} // Pass the activateChatBot function
                handleQuizSelected={handleQuizSelected}
                closeQuiz={closeQuiz} // Add closeQuiz prop
            />
        </Modal>
    );
};

export default QuizModal;
