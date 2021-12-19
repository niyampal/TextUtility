import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark Mode has been enabled.", "success");
      document.title = "TextUtils | dark Mode";

      setInterval(() => {
        document.title = "TextUtils | Danger";
      }, 2000);

      setInterval(() => {
        document.title = "TextUtils | Amazing";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode has been enabled.", "success");
      document.title = "TextUtils | Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="textUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />        
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the Text to Analyze below"
                mode={mode}
              />
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
