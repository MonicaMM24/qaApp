import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';
import Register from './components/Auth/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Quiz from './Components/Quiz/Quiz';
import Community from './Components/Community/Community';
import CarMode from './Components/CarMode/CarMode';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/community" element={<Community />} />
            <Route path="/car-mode" element={<CarMode />} />
          </Routes>
          <Chatbot />
          <Footer />
        </div>
      </Router>

  );
}

export default App;
