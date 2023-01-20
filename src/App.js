import Header from "./components/Header";
import Footer from "./components/Footer";
import React, {useEffect, useState} from "react"
import { Maincontext } from "./context";
import "./style.css"

function App() {

  const [theme,setTheme]=useState("light")

  useEffect(()=>{
    document.body.className=theme;


  },[theme])
  const data={
    theme,
    setTheme

  }
  return (
    <Maincontext.Provider value={data}>
      <Header></Header>
      <Footer></Footer>
      
    </Maincontext.Provider>
  );
}

export default App;
