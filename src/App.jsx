import React from "react";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Weather Check App</h1>
        <Weather></Weather>
      </div>
    </div>
  );
};

export default App;
