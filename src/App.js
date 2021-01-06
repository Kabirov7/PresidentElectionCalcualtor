import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import StartPage from "./Components/StartPage/StartPage";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
				<Route exact path={"/PresidentElectionCalcualtor"}>
					<StartPage/>
				</Route>
			</Router>
    </div>
  );
}

export default App;
