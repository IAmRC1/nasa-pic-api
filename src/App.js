import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route component={Home} path="/home" />
          <Route component={NasaPhoto} path="/nasaphoto" />
        </Switch>
      </Router>
    </div>
  );
}