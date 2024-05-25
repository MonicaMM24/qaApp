import React, {useState} from "react";
import './Quiz.css'; //Styling for the component

const Quiz = () => {
    //Quiz questions data
    const [questions, setQuestions] = useState([
        {
            id:1,
            text: 'An input field takes the year of birth between 1900 and 2004.The boundary values for testing this field are:',
            options: ['0,1900, 2004, 2005', '1900, 2004', '1899, 1900,1901,2003,2004,2005', '1899,1900,2004,2000'],
            answer: '1899, 1900,1901,2003,2004,2005'
        },
        {
            id:2,
            text: 'Which one of the following is a non-functional testing method?',
            options:['System testing', 'Usability testing', 'Performance testing', 'Both B & C'],
            answer: 'Both B & C'
        },
        {
            id:3,
            text: 'Which of the following tools would be involved in the automation of regression tests?',
            options:['Data tester', 'Boundary tester', 'Capture/Playback', 'Output comparator'],
            answer: 'Capture/Playback'
        },
        {
            id:4,
            text: 'The incorrect form of logic coverage is:',
            options:['Statement Coverage', 'Pole Coverage', 'Condition Coverage', 'Path Coverage'],
            answer: 'Pole Coverage'
        },
        {
            id:5,
            text: 'Which of the following is not a quality characteristic listed in ISO 9126 Standard?',
            options:['Functionality', 'Usability', 'Supportability', 'Maintainability'],
            answer: 'Supportability'
        },
        {
            id:6,
            text: 'To test a function, the programmer has to write a _________, which calls the process to be tested and passes its test data.',
            options:['Stub', 'Driver', 'Proxy', 'None of the above'],
            answer: 'Driver'
        },
        {
            id:7,
            text: 'Boundary value testing:',
            options:['It is the same as equivalence partitioning tests', 'Test boundary conditions on, below and above the edges of input and output equivalence classes', 'Tests combinations of input circumstances', 'It is used in the white box testing strategy'],
            answer: 'Test boundary conditions on, below and above the edges of input and output equivalence classes'
        },
        {
            id:8,
            text: 'Pick the best definition of quality:',
            options:['Quality is job one', 'Zero defects', 'Conformance to requirements', 'Work as designed'],
            answer: 'Conformance to requirements'
        },
        {
            id:9,
            text: 'Fault Masking is:',
            options:['Error condition hiding another error condition', 'Creating a test case that does not reveal a fault', 'Masking a fault by a developer', 'Masking a fault by a tester'],
            answer: 'Error condition hiding another error condition'
        },
        {
            id:10,
            text: 'One Key reason why developers have difficulty testing their work is:',
            options:['Lack of technical documentation', 'Lack of test tools on the market for developers', 'Lack of training', 'Lack of Objectivity'],
            answer: 'Lack of Objectivity'
        },
        {
            id:11,
            text: 'Acceptance test cases are based on what?',
            options:['Requirements', 'Design', 'Code', 'Decision table'],
            answer: 'Requirements'
        },
        {
            id:12,
            text: 'Code Coverage is used as a measure of what?',
            options:['Defects', 'Trends analysis', 'Test Effectiveness', 'Time Spent Testing'],
            answer: 'Test Effectiveness'
        }
    ]);

    //Handle options change

    const handleOptionChange = (questionId, option) => {
        setQuestions(questions.map(q =>
            q.id === questionId ? {...q, answer: option} : q
        ));
    };

    //Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submit answers:', questions);
        //Here you might want to send the responses to the server
    };

    return (
        <form onSubmit={handleSubmit} className="quiz">
            <h1>Quiz</h1>
            {questions.map(question => (
                <div key={question.id} className="question">
                    <h3>{question.text}</h3>
                    {question.options.map( option => (
                        <label key={option}>
                        <input
                            type="boundary"
                            name={`question_${question.id}`}
                            value={option}
                            checked={question.answer===option}
                            onChange={() => handleOptionChange(question.id, option)}
                        />
                        {option}
                        </label>
                    ))}
                </div>
            ))}
            <button type="submit">Submit Answers</button>
        </form>
    );

};

export default Quiz;