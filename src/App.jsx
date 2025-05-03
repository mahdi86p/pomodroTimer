import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  let work = true;
  let timerRef = useRef(null)
  let [min, setMin] = useState(1);
  let [sec, setSec] = useState(0);
  let [started, setStarted] = useState(false);

  function decreaseSec() {
    if(min == 0 && sec == 0 && work == true){
      setMin(4)
      setSec(59)
      work = false
      console.log(min , ':' , sec)
    }
    else{
      if(min == 0){
        setSec(--sec)
        if(sec == 0){
          console.log(sec , 'is 0')
          setMin(24)
          setSec(59)
        }
      }
      else{
        if (sec == 0) {
          decreaseMin();
          setSec(59);
          sec = 59
        }
        else{
          setSec(--sec)
        }
      }
    }
  }

  function decreaseMin() {
    setMin(--min);
  }

  function start() {
    if (started) {
      console.log("You started this Before!");
      return;
    }
    timerRef.current = setInterval(() => {
      decreaseSec();
    }, 700);
    setStarted(true);
  }

  function stop() {
    if(started){
      console.log('STOP')
      clearInterval(timerRef.current)
      setStarted(false)
    }
  }

  return (
    <div className="App">
      <div className="h1" id="clock">
        <span className="Min">{min < 10 ? (min = "0" + min) : min}</span>:
        <span className="Sec">{sec < 10 ? (sec = "0" + sec) : sec}</span>
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
