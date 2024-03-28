import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Contactus from './components/Contactus';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";


 
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const removeBodyClass=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-Warning')
    document.body.classList.remove('bg-Success')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (cls)=>{
    removeBodyClass();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
     <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About"
          contactus="Contact us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" >
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/Contactus" element={<Contactus mode={mode} />}></Route>
            <Route
              exact path="/" 
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="TextUtils - Enter The Text To Analyze Below  "
                  mode={mode}
                />
              }
              ></Route>
          </Routes>
        </div>
      </BrowserRouter>
        <Footer/>
    </> 
  );
}

export default App;