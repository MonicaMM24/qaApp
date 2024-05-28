import React from "react";
import "./Quiz-list.css";
import { Link } from "react-router-dom";

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
            <li>
              <Link to={"/quiz/" + index}>{quiz.title}</Link>
            </li>
        ))
      }
    </ol>
  );
};

export default QuizList;