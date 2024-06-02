import React, { useState, useEffect } from 'react';
import './Quiz.css';
import { useParams } from 'react-router-dom';
import { quizzes } from '../../Constants/Quizzes';

const Quiz = ({ handleQuizResults, handleQuizSelected }) => {
    // Quiz questions data

    const { id } = useParams();
    const quiz = quizzes[id];

    const [userAnswers, setUserAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
    setUserAnswers({});
    setSubmitted(false);
    handleQuizSelected();
    }, [id]);

    // Handle options change
    const handleOptionChange = (questionId, option) => {
        setUserAnswers({
            ...userAnswers,
            [questionId]: option
        });
    };

    // Handle form submission
    const handleSubmit = (event, quizIndex) => {
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
        handleQuizResults(questionsAnswers);
    };

   
    return (
        <div className="form-container">
                <form onSubmit={(e) => handleSubmit(e)} className="quiz">
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
