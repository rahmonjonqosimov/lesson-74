import React from "react";
import Increment from "../../components/increment/Increment";
import Result from "../../components/result/Result";
import Decremet from "../../components/decrement/Decrement";
import Reset from "../../components/reset/Reset";

const Counter = () => {
  return (
    <div className="container">
      <h2 style={{ fontFamily: "sans-serif" }}>Counter App</h2>
      <div className="counter">
        <Increment />
        <Result />
        <Decremet />
      </div>
      <Reset />
    </div>
  );
};

export default Counter;
