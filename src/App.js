import React from "react";
import "./App.css";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <Display></Display>
      <p>NODE_ENV value is "{process.env.NODE_ENV}"</p>
      <p>NODE_ENV value is "{process.env.REACT_APP_WYKOP_API_KEY}"</p>
    </div>
  );
}

export default App;
