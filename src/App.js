import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [start, setStart] = useState(0);
  const [flag, setFlag] = useState("");
  useEffect(() => {
    let interval;
    if (flag === "Start") {
      interval = setInterval(() => {
        setStart(start + 1);
      }, 1000);
    } else if (flag === "Pause") {
      setStart(start);
    } else if (flag === "Resume") {
      interval = setInterval(() => {
        setStart(start + 1);
      }, 1000);
    } else if (flag === "Reset") {
      setStart(0);
    }
    return () => {
      clearInterval(interval);
    };
  }, [flag, start]);
  const startClick = () => {
    setFlag("Start");
  };
  const pauseClick = () => {
    setFlag("Pause");
  };
  const resumeClick = () => {
    setFlag("Resume");
  };
  const resetClick = () => {
    setFlag("Reset");
  };
  return (
    <div className="App">
      <h1>Project</h1>
      <span>{start}</span>
      <div style={{ marginTop: "20px" }}>
        <button style={{ marginLeft: "10px" }} onClick={startClick}>
          Start
        </button>
        <button style={{ marginLeft: "10px" }} onClick={pauseClick}>
          Pause
        </button>
        <button style={{ marginLeft: "10px" }} onClick={resumeClick}>
          Resume
        </button>
        <button style={{ marginLeft: "10px" }} onClick={resetClick}>
          Reset
        </button>
      </div>
    </div>
  );
}
