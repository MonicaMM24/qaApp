import React from "react";
import "./Home.css";
import CarMode from "../Components/CarMode/CarMode";  // Import the CarMode component

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to the Junior QA Application</h2>
            <p>Your go-to resource for QA certifications, support, and automation frameworks.</p>

            <div className="section">
                <h3>QA Certifications Mock Up</h3>
                <p>Take a quiz from various certifications and prepare better to take them</p>
                <div className="help-list">
                    <h4>Example of Certifications Questions:</h4>
                    <ul>
                        <li>ISTQB Foundation</li>
                        <li>Agile Tester</li>
                        <li>ISTQB Foundation: Static Testing</li>
                        <li>ISTQB Foundation: Test Analysis and Design</li>
                        <li>ISTQB Foundation: Test Techniques</li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <h3>Chatbot Support</h3>
                <p>When and if you get stuck and don't understand your results the Chatbot helps you by explaining your wrong answers, recommending new questions, and assisting you in finding out your quiz results.</p>
            </div>

            <div className="section">
                <h3>Dashboard</h3>
                <p>View your results in real time and see how you did a quiz!</p>
            </div>

            <div className="section">
                <h3>Community</h3>
                <p>Discuss your quiz issues and not only with fellow QA engineers.</p>
            </div>

            <div className="section">
                <h3>Certifications</h3>
                <p>Find out more about the existing certifications and where you can take them.</p>
            </div>

            <div className="section">
                <h3>Future Plans</h3>
                <p>We are constantly working to improve and expand our application. Upcoming features include:</p>
                <ol>
                    <li>Automation framework creation tools</li>
                    <li>Advanced test case management</li>
                    <li>Integration with popular CI/CD tools</li>
                </ol>
            </div>

            <CarMode />  {/* Add the CarMode component */}
        </div>
    );
};

export default Home;
