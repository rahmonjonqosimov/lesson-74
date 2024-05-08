import React, { useState } from "react";
import { dec } from "../../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Decrement = () => {
  let [count, setCount] = useState("");
  let dispatch = useDispatch();
  let result = useSelector((state) => state.counter.value);
  return (
    <div className="decrement">
      <input onChange={(e) => setCount((p) => +e.target.value)} type="number" />
      <button disabled={result <= 0} onClick={() => dispatch(dec(count || 1))}>
        Decrement
      </button>
    </div>
  );
};

export default Decrement;
