import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const handler = () => {
    setCount(count + 1);
  };
  const handler2 = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Update your values through buttons</h1>
      <h2>value is {count}</h2>
      <button onClick={handler}>Increase value by 1</button>
      <br></br>
      <button onClick={handler2}>decrease value by -1</button>
    </>
  );
}

export default App;
