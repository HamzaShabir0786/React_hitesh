// import { useState } from "react";
//import "./App.css";

// function App() {
//   let [count, setCount] = useState(1);
//   const handler = () => {
//     if (count >= 10) {
//       setCount((count = false));
//     }
//     setCount(count + 1);
//   };
//   const handler2 = () => {
//     if (count <= 0) {
//       setCount((count = 11));
//     }
//     setCount(count - 1);
//   };

//   return (
//     <>
//       <h1>Update your values through buttons</h1>
//       <h2>value is {count}</h2>
//       <button onClick={handler}>Increase value by 1</button>
//       <br></br>
//       <button onClick={handler2}>decrease value by -1</button>
//     </>
//   );
// }

// export default App;

// color project start from here
import { useState } from "react";
function App() {
  const [red, setRed] = useState();
  const [green, setGreen] = useState();
  const [blue, setBlue] = useState();
  const [pink, setPink] = useState();
  const [orange, setOrange] = useState();
  function res() {
    setRed("black");
    setGreen("black");
    setBlue("black");
    setPink("black");
    setOrange("black");
  }

  return (
    <div className="container">
      <p>Touch your Fav color</p>
      <div className="my-div">
        <button
          onClick={() => {
            setRed("red");
          }}
          style={{ backgroundColor: red }}
        >
          red
        </button>
        <button
          onClick={() => {
            setGreen("green");
          }}
          style={{ backgroundColor: green }}
        >
          green
        </button>
        <button
          onClick={() => {
            setBlue("blue");
          }}
          style={{ backgroundColor: blue }}
        >
          blue
        </button>
        <button
          onClick={() => {
            setPink("deeppink");
          }}
          style={{ backgroundColor: pink }}
        >
          pink
        </button>
        <button
          onClick={() => {
            setOrange("orange");
          }}
          style={{ backgroundColor: orange }}
        >
          orange
        </button>
      </div>
      <button
        onClick={() => {
          res();
        }}
        style={{
          marginTop: "4rem",
          width: "7rem",
          padding: "1rem",
          background: "linear-gradient(45deg, black, darkred)",
        }}
      >
        reset
      </button>
      <h1 className="text-red-600">Hello I ma here </h1>
    </div>
  );
}
export default App;
