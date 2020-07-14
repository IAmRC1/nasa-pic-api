import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={NasaPhoto} path="/nasaphoto" />
        </Switch>
      </Router>
    </div>
  );
}
