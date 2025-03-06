// import logo from './logo.svg';
// import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#120b0b'
      showAlert(" Dark mode has been Enable", "success")
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert(" Light mode has been Enable", "success")
      document.title = "TextUtils - Home"
    }
  }
  // const [clrmode, setClrMode] = useState('Green')
  // const colorMode = () => {
  //   if (colorMode === 'Green') {
  //     setClrMode(document.body.style.backgroundColor = '#289c0e');
  //   }
  //   if (colorMode === 'Blue') {
  //     document.body.style.backgroundColor = '#022950'
  //   }
  //   if (colorMode === 'Red') {
  //     document.body.style.backgroundColor = '#a60a0a'
  //   }
  // }
  // const Home = () => <h2>Home Page</h2>;
  // const About = () => <h2>About Page</h2>;
  // const Contact = () => <h2>Contact Page</h2>;

  // return (
  // <>
  // <Router>
  //   <div>
  //   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
  //   <Alert alert={alert}/>
  //     <Routes>
  //       <Route exact path="/" element={<TextForm mode = {mode}showAlert={showAlert}/>} />
  //       <Route exact path="/about" element= {<About/>} />
  //       {/* <Route path="/contact" element={<Contact />} /> */}
  //     </Routes>
  //   </div>
  // </Router>
  return (
    <>
      <div>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
        <Alert alert={alert} />
      </div>
      <TextForm mode={mode} showAlert={showAlert} />
      {/* <About /> */}
      <div className="container my-3">
      </div>
    </>
  );
}

export default App;
