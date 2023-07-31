import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="AboutTextutils" />
      {/* <Navbar /> */}

      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze" />
      </div>
    </>
  );
}

export default App;
