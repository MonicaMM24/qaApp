import React from "react";
import "./Home.css";
import CarMode from "../Components/CarMode/CarMode";  // Import the CarMode component

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to the Junior QA Application</h2>
            <p>Your go-to resource for QA certifications, support, and automation frameworks.</p>

            <div className="section">
                <h3>Get Help</h3>
                <p>Have questions about the quizzes or need clarification? Our chatbot is here to assist you!</p>
                <textarea className="input-box" placeholder="Type your question here..."></textarea>
                <button className="button">Submit Question</button>
                <div className="help-list">
                    <h4>Recent Questions:</h4>
                    <ul>
                        <li>What is the difference between functional and non-functional testing?</li>
                        <li>How do I set up a Selenium WebDriver environment?</li>
                        <li>What are the key principles of Agile testing?</li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <h3>Chatbot Support</h3>
                <p>Our chatbot helps you by explaining your wrong answers, recommending new questions, and assisting you in finding out your quiz results.</p>
                <button className="button">Chat with Support</button>
            </div>

            <div className="section">
                <h3>Future Plans</h3>
                <p>We are constantly working to improve and expand our application. Upcoming features include:</p>
                <ul>
                    <li>Automation framework creation tools</li>
                    <li>Advanced test case management</li>
                    <li>Integration with popular CI/CD tools</li>
                </ul>
            </div>

            <CarMode />  {/* Add the CarMode component */}
        </div>
    );
};

export default Home;
