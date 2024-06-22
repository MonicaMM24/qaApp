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
import Quiz from "./Components/Quiz/Quiz";
import botlogo from "./botlogo.png";

const initialSteps = [
  {
    id: "0",
    message: "Hello! Welcome to your support chatbot!",
    trigger: "1",
  },
  {
    id: "1",
    message: "What is your name?",
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
      { value: 1, label: "Recommend me more quizzes", trigger: "recommend" },
      { value: 2, label: "Explain my wrong answers", trigger: "explain_0" },
    ],
  },
  {
    id: "recommend",
    component: <QuizList />,
    end: true,
  },
  {
    id: "explain_0",
    message: "Let me explain your wrong answers.",
    trigger: "show_explanations",
  },
  {
    id: "show_explanations",
    message: "Here are the explanations:",
    trigger: "explain_0",
  },
  {
    id: "reset",
    message: "Would you like to do something else?",
    trigger: "4",
  },
];

const theme = {
  background: "#F0FFF0",
  headerBgColor: "#ACE1AF",
  headerFontSize: "20px",
  botBubbleColor: "#ACE1AF",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#ACE1AF",
  userFontColor: "white",
};

const config = {
  botAvatar: botlogo,
  floating: true,
};

function App() {
  const [chatBotSteps, setChatBotSteps] = useState(initialSteps);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasSubmittedQuiz, setHasSubmittedQuiz] = useState(false);
  const [allQuizResults, setAllQuizResults] = useState([]);
  const [isChatBotVisible, setIsChatBotVisible] = useState(false); // Initial state is false

  const setAuthState = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  };

  const handleQuizResults = (results) => {
    console.log("Results received:", results);

    const wrongAnswers = results.filter((result) => !result.isCorrect);
    const explanations = wrongAnswers.map((result, index) => ({
      id: `explain_${index}`,
      message: `Question: ${result.questionId}, Your answer: ${result.userAnswer}, Correct answer: ${result.correctAnswer}. Explanation: ${result.explanation}`,
      end: false,
      trigger: index === wrongAnswers.length - 1 ? "reset" : `explain_${index + 1}`,
    }));

    const newSteps = [
      ...initialSteps.slice(0, 8), // Steps before the dynamic explanations
      ...explanations, // Dynamic explanations
      initialSteps[initialSteps.length - 1], // The final reset step
    ];

    setChatBotSteps(newSteps);
    setHasSubmittedQuiz(true);
    setAllQuizResults((prevResults) => [...prevResults, results]);
    setIsChatBotVisible(true); // Ensure chatbot remains visible after quiz submission
  };

  const handleQuizSelected = () => {
    setChatBotSteps(initialSteps);
    setHasSubmittedQuiz(false);
    setIsChatBotVisible(false); // Hide the chatbot when a new quiz is selected
  };

  const activateChatBot = (results) => {
    handleQuizResults(results);
    setHasSubmittedQuiz(true);
    setIsChatBotVisible(true); // Ensure chatbot remains visible after quiz submission
  };

  return (
      <Router>
        <div className="App">
          <Header setAuthState={setAuthState} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<Dashboard allQuizResults={allQuizResults} />} />
              <Route path="/quiz" element={<QuizList activateChatBot={activateChatBot} handleQuizSelected={handleQuizSelected} />} />
              <Route
                  path="/quiz/:id"
                  element={<Quiz handleQuizResults={handleQuizResults} handleQuizSelected={handleQuizSelected} />}
              />
              <Route path="/community" element={<Community />} />
              <Route path="/car-mode" element={<CarMode />} />
              <Route path="/certifications" element={<Certifications />} />
            </Routes>
          </div>
          <ThemeProvider theme={theme}>
            {isLoggedIn && isChatBotVisible && (
                <ChatBot headerTitle="Ask for support" steps={chatBotSteps} {...config} />
            )}
          </ThemeProvider>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
