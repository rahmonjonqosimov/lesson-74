import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  let result = useSelector((state) => state.counter.value);
  return <span className="result">{result >= 0 ? result : 0}</span>;
};

export default Result;
