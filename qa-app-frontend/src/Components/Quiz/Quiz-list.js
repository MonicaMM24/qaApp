import React from "react";
import "./Quiz-list.css";
import { Link } from "react-router-dom";

const QuizList = () => {
    const list = [
        {title: 'Quiz 1'},
        {title: 'Quiz 2'},
        {title: 'Quiz 3'},
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