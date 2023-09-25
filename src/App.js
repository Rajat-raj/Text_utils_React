import React from "react";
import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";


// import { BrowserRouter as Router,Routes, Route} from "react-router-dom";



function App() {
  const[mode,setMode]=useState('light');
  const[toggleBtnMode,settoggleBtnMode]=useState('Enable Dark Mode')
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      settoggleBtnMode('Enable light mode');
      document.body.style.backgroundColor='#6c757d'
      showAlert('Dark mode enabled','success');
    }
    else{
      setMode('light');
      settoggleBtnMode('Enable Dark mode');
      document.body.style.backgroundColor='White'
      showAlert('Light mode enabled','success');
    }
  }
  return (
    <> 
    {/* <Router> */}
          <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} toggleBtnMode={toggleBtnMode}/>
          <Alert Alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the Text to analyze" mode={mode} showAlert={showAlert}/>} ></Route>
        </Routes> */}
        <TextForm heading="Enter the Text to analyze" mode={mode} showAlert={showAlert}/>
      </div>
    {/* </Router>   */}
    </>
  );
}

export default App;
