import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);

  // every time state changes, load time
  React.useEffect(() => {
    console.log(
      "useEffect without dependency count: " + count + " count1: " + count1
    );
  });
  // load time
  React.useEffect(() => {
    console.log(
      "useEffect with empty dependency count: " + count + " count1: " + count1
    );
  }, []);
  // 
  React.useEffect(() => {
    console.log(
        "useEffect with dependency count: " + count + " count1: " + count1
      );
  }, [count1])
  return (
    <div>
      <div>
        <p>Count</p>
        <button onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <p>Count1</p>
        <button onClick={() => setCount1(count1 - 1)}>-</button>
        {count1}
        <button onClick={() => setCount1(count1 + 1)}>+</button>
      </div>
      <p>CounterCustom</p>
      <p>CounterCustom1</p>
      <p>CounterCustom2</p>
    </div>
  );
}

export default Counter;
