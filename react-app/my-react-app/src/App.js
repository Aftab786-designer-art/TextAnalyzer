import React from "react";


import "./App.css";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";
// import About from "./components/About.js";



function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <Textform heading="Enter the Text to Analyze Below" /> 
    {/*<About></About> */}
      </div>
    
    </>
  );
}

export default App;
