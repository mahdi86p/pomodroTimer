import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const timerRef = useRef(null);
  let [work, setWork] = useState(true);
  let [min, setMin] = useState(25);
  let [sec, setSec] = useState(0);
  let [started, setStarted] = useState(false);

  useEffect(() => {
    document.title = work ? "Work Work Work!" : "Rest Time";
  }, [work]);

  function decreaseMin() {
    setMin((min = --min));
  }
  // decrease min function

  function decreaseSec() {
    // setSec((sec) => --sec);
    setSec(--sec);
    console.log(sec);
  }
  // decrease sec function

  function runTimer() {
    if (min == 0) {
      if (sec == 0) {
        // work?
        if (work) {
          setMin((min = 5));
          setSec((sec = 0));
          setWork((work = false));
        }

        // rest?
        else {
          setMin((min = 25));
          setSec((sec = 0));
          setWork((work = true));
        }
      }
      else{
        decreaseSec();
      }
    }

    // min !== 0
    else {
      if (sec <= 0) {
        decreaseMin();
        setSec((sec = 59));
      } else {
        decreaseSec();
      }
    }
  }

  function start() {
    if (started) {
      console.log("You started this Before!");
      return;
    }
    timerRef.current = setInterval(() => {
      runTimer();
    }, 1000);
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
