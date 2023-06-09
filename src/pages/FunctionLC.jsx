import React, { useState, useEffect } from "react";

const FunctionalLC = () => {
  const [counter, setCounter] = useState(0);

  console.log("Render called");

  useEffect(() => {
    console.log("Component did mount");
    const timer = setInterval(() => {
      console.log("Timer tick");
    }, 1000);

    return () => {
      console.log("Component will unmount");
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    console.log("Component did update");

    if (counter !== 0) {
      console.log("Counter has changed");
    }

    return () => {
      console.log("Component did update cleanup");
    };
  });

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <h1>Function Lifecycle Methods</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default FunctionalLC;
