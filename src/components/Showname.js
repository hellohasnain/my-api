import { useState } from "react";

const Showname = () => {
  const [showName, setShowName] = useState(false);

  const displayName = () => {
    setShowName(!showName);
  };

  return (
    <div className="pt-10 mx-5">
      {showName ? (
        <p>
          <img src="bhadwe.jpg" alt="" />

        </p>
        <p>Kyo Kara</p>
      ) : null}
      <button className="border-2" onClick={displayName}>
        {showName ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Showname;
