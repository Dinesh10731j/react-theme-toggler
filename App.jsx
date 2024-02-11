import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [theme,setTheme] = useState('#2c3e50');

  const handleChange = (e) => {

    if(e.target.checked === true){
      setTheme('whitesmoke');
    }else{
      setTheme("#2c3e50");
    }

  }
  
  return (
    <>
      <main style={{background:theme,height:"100vh",
  width:"100%",
  display: "flex",
  flexDirection: "column",
  alignItems:"center",
  justifyContent: "center",
  transition: "all 0.5s"}}>
      <label className="toggle" style={{background:theme }}>
      <input type="checkbox" onChange={handleChange}/>
        <span className="slider" style={{position: "absolute",
  height: "45px",
  width: "45px",
  borderRadius: "50%",
  backgroundColor: "#2d3436",
  top: "2px",
  left: "3px",
  cursor: "pointer",
  transition: "0.5s",}}></span>
      </label>
      </main>
    </>
  )
}

export default App;
