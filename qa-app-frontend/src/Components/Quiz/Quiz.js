import React, { useState } from 'react';
import axios from "axios";
import './Quiz.css'; //Styling for the component

const Quiz = ({ handleQuizResults }) => {
    // Quiz questions data
    const [questions, setQuestions] = useState([
        {
            id: 1,
            text: '1. An input field takes the year of birth between 1900 and 2004.The boundary values for testing this field are:',
            options: ['0,1900, 2004, 2005', '1900, 2004', '1899, 1900,1901,2003,2004,2005', '1899,1900,2004,2000'],
            answer: '1899, 1900,1901,2003,2004,2005',
            explanation: 'Boundary value testing involves testing at the boundaries between partitions.'
        },
        {
            id: 2,
            text: '2. Which one of the following is a non-functional testing method?',
            options: ['System testing', 'Usability testing', 'Performance testing', 'Both B & C'],
            answer: 'Both B & C',
            explanation: 'Non-functional testing focuses on aspects not related to specific behaviors or functions.'
        },
        {
            id: 3,
            text: '3. Which of the following tools would be involved in the automation of regression tests?',
            options: ['Data tester', 'Boundary tester', 'Capture/Playback', 'Output comparator'],
            answer: 'Capture/Playback',
            explanation: 'Capture/Playback tools are used to record and playback user actions to automate tests.'
        },
        {
            id: 4,
            text: '4. The incorrect form of logic coverage is:',
            options: ['Statement Coverage', 'Pole Coverage', 'Condition Coverage', 'Path Coverage'],
            answer: 'Pole Coverage',
            explanation: 'Pole Coverage is not a standard form of logic coverage used in testing.'
        },
        {
            id: 5,
            text: '1. Which of the following is not a quality characteristic listed in ISO 9126 Standard?',
            options: ['Functionality', 'Usability', 'Supportability', 'Maintainability'],
            answer: 'Supportability',
            explanation: 'Supportability is not one of the quality characteristics listed in ISO 9126 Standard.'
        },
        {
            id: 6,
            text: '2. To test a function, the programmer has to write a _________, which calls the process to be tested and passes its test data.',
            options: ['Stub', 'Driver', 'Proxy', 'None of the above'],
            answer: 'Driver',
            explanation: 'A driver is a piece of code that calls a function to be tested and passes its test data.'
        },
        {
            id: 7,
            text: '3. Boundary value testing:',
            options: ['It is the same as equivalence partitioning tests', 'Test boundary conditions on, below and above the edges of input and output equivalence classes', 'Tests combinations of input circumstances', 'It is used in the white box testing strategy'],
            answer: 'Test boundary conditions on, below and above the edges of input and output equivalence classes',
            explanation: 'Boundary value testing focuses on values at the boundaries of input and output equivalence classes.'
        },
        {
            id: 8,
            text: '4. Pick the best definition of quality:',
            options: ['Quality is job one', 'Zero defects', 'Conformance to requirements', 'Work as designed'],
            answer: 'Conformance to requirements',
            explanation: 'Quality is defined as the degree to which a product conforms to specified requirements.'
        },
        {
            id: 9,
            text: '1. Fault Masking is:',
            options: ['Error condition hiding another error condition', 'Creating a test case that does not reveal a fault', 'Masking a fault by a developer', 'Masking a fault by a tester'],
            answer: 'Error condition hiding another error condition',
            explanation: 'Fault masking occurs when one error condition hides another error condition.'
        },
        {
            id: 10,
            text: '2. One Key reason why developers have difficulty testing their work is:',
            options: ['Lack of technical documentation', 'Lack of test tools on the market for developers', 'Lack of training', 'Lack of Objectivity'],
            answer: 'Lack of Objectivity',
            explanation: 'Developers often lack objectivity in testing their own work because they are too close to it.'
        },
        {
            id: 11,
            text: '3. Acceptance test cases are based on what?',
            options: ['Requirements', 'Design', 'Code', 'Decision table'],
            answer: 'Requirements',
            explanation: 'Acceptance test cases are derived from the requirements to ensure the system meets them.'
        },
        {
            id: 12,
            text: '4. Code Coverage is used as a measure of what?',
            options: ['Defects', 'Trends analysis', 'Test Effectiveness', 'Time Spent Testing'],
            answer: 'Test Effectiveness',
            explanation: 'Code coverage measures the extent to which the source code is tested by a test suite.'
        }
    ]);

    const [userAnswers, setUserAnswers] = useState({});
    const [submittedQuizzes, setSubmittedQuizzes] = useState([]);

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
        setSubmittedQuizzes([...submittedQuizzes, quizIndex]);
        let questionsAnswers = questions.map(question => ({
            questionId: question.id,
            userAnswer: userAnswers[question.id] || null,
            correctAnswer: question.answer,
            explanation: question.explanation,
            isCorrect: userAnswers[question.id] === question.answer
        }));
        handleQuizResults(questionsAnswers);
    };

    // Divide questions into three groups
    const formGroups = [questions.slice(0, 4), questions.slice(4, 8), questions.slice(8, 12)];

    return (
        <div className="form-container">
            {formGroups.map((group, index) => (
                <form key={index} onSubmit={(e) => handleSubmit(e, index)} className="quiz">
                    <h1>ISTQB Foundation Mock Test {index + 1}</h1>
                    {group.map(question => (
                        <div key={question.id} className="question">
                            <h3>{question.text}</h3>
                            {question.options.map(option => {
                                let className = "option-box";
                                if (submittedQuizzes.includes(index)) {
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
            ))}
        </div>
    );
};

export default Quiz;
