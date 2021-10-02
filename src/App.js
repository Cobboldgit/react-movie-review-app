import React from "react";
import ReviewClass from "./component/ReviewClass";
import "./App.css";
import ReviewFunction from "./component/ReviewFunction";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          color: "dodgerblue",
          backgroundColor: "gray",
          padding: "30px",
        }}
      >
        Class Component
      </h1>
      <ReviewClass />
      <h1
        style={{
          textAlign: "center",
          color: "dodgerblue",
          backgroundColor: "gray",
          padding: "30px",
        }}
      >
        Function Component
      </h1>
      <ReviewFunction/>
    </div>
  );
}

export default App;
