import React, { useState } from "react";
import { inc } from "../../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Increment = () => {
  let [count, setCount] = useState("");
  let dispatch = useDispatch();
  let result = useSelector((state) => state.counter.value);
  return (
    <div className="incremet">
      <input
        value={count}
        onChange={(e) => setCount((p) => +e.target.value)}
        type="number"
      />
      <button
        disabled={result >= 500}
        onClick={() => dispatch(inc(count || 1))}
      >
        Incremet
      </button>
    </div>
  );
};

export default Increment;
