/* eslint-disable*/
import React, { useState, useEffect } from "react";
import "./App.css";
import Contents from "./components/Contents";
import Nav from "./components/Nav";

function App() {
  const [option, setOption] = useState("KR");

  const getOptionValue = (option) => {
    setOption(option);
  };

  return (
    <div className="App">
      <Nav value={option} getOptionValue={getOptionValue} />
      <Contents countryOption={option} />
    </div>
  );
}

export default App;
