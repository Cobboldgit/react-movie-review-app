import React from "react";
import ReviewClass from "./component/ReviewClass";
import ReviewFunction from "./component/ReviewFunction";
import "./App.css";

function App() {
  return (
    <div>
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
      <ReviewFunction />
    </div>
  );
}

export default App;
