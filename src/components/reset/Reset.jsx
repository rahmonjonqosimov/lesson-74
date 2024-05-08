import React from "react";
import { useDispatch } from "react-redux";
import { res } from "../../redux/counterSlice";

const Reset = () => {
  let dispatch = useDispatch();
  return (
    <button className="reset" onClick={() => dispatch(res(0))}>
      Reset
    </button>
  );
};

export default Reset;
