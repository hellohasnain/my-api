import React, { useState } from "react";

const Setcount = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-5">
      <p>count: {count}</p>
      <button className="border-2" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="border-2" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <img src="nana.jpg" alt="" width={500} className="pt-10" />
    </div>
  );
};

export default Setcount;
