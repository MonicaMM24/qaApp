import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Quiz from './Components/Quiz/Quiz';
import Community from './Components/Community/Community';
import CarMode from './Components/CarMode/CarMode';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'Hey Geek!',

        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',

        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',

        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [

            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'View Courses' },
            { value: 2, label: 'Read Articles' },

        ],
        end: true
    }
];

// Creating our own theme
const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};

// Set some properties of the bot
const config = {
    botAvatar: "img.png",
    floating: true,
};

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/community" element={<Community />} />
            <Route path="/car-mode" element={<CarMode />} />
          </Routes>
            <ThemeProvider theme={theme}>
                <ChatBot

                    // This appears as the header
                    // text for the chat bot
                    headerTitle="GeekBot"
                    steps={steps}
                    {...config}

                />
            </ThemeProvider>
          <Footer />
        </div>
      </Router>

  );
}

export default App;
