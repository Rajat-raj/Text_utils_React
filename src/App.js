import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

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
      <Navbar title="TextUtils" about="AboutTextutils" mode={mode} toggleMode={toggleMode} toggleBtnMode={toggleBtnMode}/>
      <Alert Alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
