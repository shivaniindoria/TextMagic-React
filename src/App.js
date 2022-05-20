import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether darkmode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#495057';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      // setInterval(() => {
      //   document.title = "textmagic is amazing mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "install textmagic now";
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");

    }
  }
  return (
    <>
      <Navbar title='Text Magic' link1='Home' link2='Functions' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the Text" showAlert={showAlert} mode={mode} />
        {/* <Router>
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the Text" showAlert={showAlert} mode={mode} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/textForm" element={<TextForm heading="Enter the Text" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
