import React from "react";
import "./App.css";
import Footer from "./components/common/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Admission from "./pages/Admission/Admission";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admission" component={Admission} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
