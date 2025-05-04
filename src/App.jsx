import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const timerRef = useRef(null);
  // let [work, setWork] = useState(true);
  let [min, setMin] = useState(2);
  let [sec, setSec] = useState(21);
  let [started, setStarted] = useState(false);

  function decreaseMin() {
    setMin(min - 1);
  }

  function decreaseSec() {
    if (sec <= 0) {
      decreaseMin()
      setSec(59)
      sec = 59
    } else {
      setSec(sec -= 1);
      console.log(sec)
    }
  }

  function start() {
    if (started) {
      console.log("You started this Before!");
      return;
    }
    timerRef.current = setInterval(() => {
      decreaseSec();
    }, 800);
    setStarted(true);
  }

  function stop() {
    if (started) {
      clearInterval(timerRef.current);
      setStarted(false);
    }
  }

  return (
    <div className="App">
      <div className="h1" id="clock">
        <span className="Min">
          {min < 10 ? min.toString().padStart(2, 0) : min}
        </span>
        :
        <span className="Sec">
          {sec < 10 ? sec.toString().padStart(2, 0) : sec}
        </span>
      </div>
      <button className="btn btn-primary m-2" onClick={() => start()}>
        Start
      </button>
      <button className="btn btn-danger m-2" onClick={() => stop()}>
        Stop
      </button>
    </div>
  );
}

export default App;
