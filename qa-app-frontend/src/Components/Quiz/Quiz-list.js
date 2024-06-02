import React from "react";
import { Link } from "react-router-dom";
import './Quiz-list.css';

const QuizList = () => {
    const list = [
        {title: 'ISTQB Foundation Quiz'},
        {title: 'Agile Tester Quiz'},
        {title: 'Test Automation Engineer'},
    ]
  return (
    <ol className="list">
      {
        list.map((quiz, index) => (
            <li key={quiz.title}>
              <Link to={"/quiz/" + index}>{quiz.title}</Link>
            </li>
        ))
      }
    </ol>
  );
};

export default QuizList;