import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import QuizList from "./Components/Quiz/Quiz-list";
import Community from "./Components/Community/Community";
import CarMode from "./Components/CarMode/CarMode";
import Certifications from "./Components/Certifications/Certifications";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const initialSteps = [
  {
    id: "0",
    message: "Hello, what is your name?",
    trigger: "1",
  },
  {
    id: "1",
    message: "Please write your username",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, how can I help you?",
    trigger: "4",
  },
  {
    id: "4",
    options: [
      { value: 1, label: "Recommend me more questions", trigger: "recommend" },
      { value: 2, label: "Explain my wrong answers", trigger: "explain" },
    ],
  },
  {
    id: "recommend",
    message:
      "Sure, I recommend you to try these questions: [Question 1, Question 2]",
    end: true,
  },
  {
    id: "explain",
    message: "Let me explain your wrong answers.",
    trigger: "show_explanations",
  },
  {
    id: "show_explanations",
    message: "Here are the explanations:",
    end: true,
  },
  {
    id: "reset",
    message: "Would you like to do something else?",
    trigger: "4",
  },
];

const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

const config = {
  botAvatar: "botlogo.jpg",
  floating: true,
};

function App() {
  const [chatBotSteps, setChatBotSteps] = useState(initialSteps);
  let isLoggedIn = false;

  const handleQuizResults = (results) => {
    const wrongAnswers = results.filter((result) => !result.isCorrect);
    const explanations = wrongAnswers.map((result, index) => ({
      id: `explain_${index}`,
      message: `Question: ${result.questionId}, Your answer: ${result.userAnswer}, Correct answer: ${result.correctAnswer}. Explanation: ${result.explanation}`,
      end: false,
      trigger:
        index === wrongAnswers.length - 1
          ? "show_explanations"
          : `explain_${index + 1}`,
    }));

    setChatBotSteps([
      ...initialSteps.slice(0, 5), // Steps before the explanation option
      ...explanations, // Dynamic explanations
      ...initialSteps.slice(5), // Steps after the explanation option
    ]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/quiz"
              element={<QuizList handleQuizResults={handleQuizResults} />}
            />
            <Route path="/community" element={<Community />} />
            <Route path="/car-mode" element={<CarMode />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </div>
        <ThemeProvider theme={theme}>
          {isLoggedIn && <ChatBot
            headerTitle="Ask for support"
            steps={chatBotSteps}
            {...config}
          />}
        </ThemeProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
