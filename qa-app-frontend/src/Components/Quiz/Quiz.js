import React, { useState, useEffect } from 'react';
import './Quiz.css';
import { quizzes } from '../../Constants/Quizzes';

const Quiz = ({ quizId, handleQuizResults, handleQuizSelected, activateChatBot }) => {
    const quiz = quizzes[quizId];

    const [userAnswers, setUserAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setUserAnswers({});
        setSubmitted(false);
        if (handleQuizSelected) handleQuizSelected();
    }, [quizId]);

    if (!quiz) {
        return <div>Quiz not found</div>;
    }

    const handleOptionChange = (questionId, option) => {
        setUserAnswers({
            ...userAnswers,
            [questionId]: option
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        let questionsAnswers = quiz.questions.map(question => ({
            questionId: question.id,
            userAnswer: userAnswers[question.id] || null,
            correctAnswer: question.answer,
            explanation: question.explanation,
            isCorrect: userAnswers[question.id] === question.answer,
            quizName: quiz.quizName
        }));
        if (handleQuizResults) handleQuizResults(questionsAnswers);
        if (activateChatBot) activateChatBot(questionsAnswers); // Trigger the chatbot activation
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="quiz">
                <h1>{quiz.quizName}</h1>
                {quiz.questions.map(question => (
                    <div key={question.id} className="question">
                        <h3>{question.text}</h3>
                        {question.options.map(option => {
                            let className = "option-box";
                            if (submitted) {
                                if (option === question.answer) {
                                    className += " correct";
                                } else if (userAnswers[question.id] === option) {
                                    className += " incorrect";
                                }
                            } else if (userAnswers[question.id] === option) {
                                className += " selected";
                            }
                            return (
                                <div key={option} className={className}>
                                    <input
                                        type="radio"
                                        id={`question_${question.id}_${option}`}
                                        name={`question_${question.id}`}
                                        value={option}
                                        checked={userAnswers[question.id] === option}
                                        onChange={() => handleOptionChange(question.id, option)}
                                    />
                                    <label htmlFor={`question_${question.id}_${option}`}>{option}</label>
                                </div>
                            );
                        })}
                    </div>
                ))}
                <button type="submit" className="submit-button">Submit Answers</button>
            </form>
        </div>
    );
};

export default Quiz;
