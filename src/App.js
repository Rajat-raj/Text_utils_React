import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";



function App() {
  const[mode,setMode]=useState('light');
  const[toggleBtnMode,settoggleBtnMode]=useState('Enable Dark Mode')

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      settoggleBtnMode('Enable light mode');
      document.body.style.backgroundColor='#6c757d'
    }
    else{
      setMode('light');
      settoggleBtnMode('Enable Dark mode');
      document.body.style.backgroundColor='White'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="AboutTextutils" mode={mode} toggleMode={toggleMode} toggleBtnMode={toggleBtnMode}/>
      {/* <Navbar /> */}

      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
