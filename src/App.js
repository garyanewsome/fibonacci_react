import React from "react";
import "./styles.css";

export const App = () => {
  const [fibStr, setFibStr] = React.useState();

  const fibonacci = (num) => {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  const handleChange = (val) => {
    if (!val) {
      setFibStr("");
      return;
    }

    const fibArr = [];

    let i = 0;
    while (i < val) {
      const fib = fibonacci(i);
      fibArr.push(fib);
      i++;
    }

    setFibStr(fibArr.join(", "));
  };

  return (
    <div className="App">
      <h1>
        <span>
          <small>The </small>
        </span>
        Fibonacci
        <span>
          <small> Sequence</small>
        </span>
      </h1>
      <div>
        <div className="label">Enter a number to Fibonacci</div>
        <input
          type="number"
          name="num"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="results">{fibStr}</div>
    </div>
  );
};

export default App;
