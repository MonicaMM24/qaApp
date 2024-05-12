import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';
import Quiz from './Components/Quiz';

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/home" component={Home} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/" component={LoginPage} />
          </Switch>
        </div>
      </Router>

  );
}

export default App;
