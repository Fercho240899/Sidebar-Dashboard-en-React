import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Clients from "./pages/Clients";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div className="flex">
          <Sidebar />
          <div className="content">
            <Route path="/home" component={Home}></Route>
            <Route path="/Clients" component={Clients}></Route>
            <Route path="/Sales" component={Sales}></Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
