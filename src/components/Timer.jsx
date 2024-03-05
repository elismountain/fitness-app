import React, { useState, useEffect } from "react";
import "./Timer.css";
import TimerRecordsTable from "./TimerRecordsTable";

const Timer = ({ onTimerStateChange }) => {
  const [time, setTime] = useState(600);
  const [timerOn, setTimerOn] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    let interval;
    if (timerOn && !isPaused && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      onTimerStateChange(true);
    } else if (time === 0 || isPaused) {
      clearInterval(interval);
      onTimerStateChange(isPaused);
      if (!isPaused) {
        setTimerOn(false);
        const endTime = new Date();
        let durationInSeconds = Math.abs(endTime - startTime) / 1000;
        let durationInMinutes = Math.ceil(durationInSeconds / 60);
        if (durationInMinutes === 0) {
          durationInMinutes = 1;
        }
        setRecords((prevRecords) => [
          ...prevRecords,
          { startTime, duration: durationInMinutes },
        ]);
      }
    }
    return () => clearInterval(interval);
  }, [timerOn, isPaused, time, startTime]);

  const startTimer = () => {
    setTimerOn(true);
    setIsPaused(false);
    setStartTime(new Date());
    onTimerStateChange(true);
  };

  const pauseTimer = () => {
    setIsPaused(true);
    onTimerStateChange(false);
  };

  const stopTimer = () => {
    if (startTime) {
      setTime(600);
      setTimerOn(false);
      onTimerStateChange(false);
      setIsPaused(false);
      const endTime = new Date();
      let durationInSeconds = Math.abs(endTime - startTime) / 1000;
      let durationInMinutes = Math.ceil(durationInSeconds / 60);
      if (durationInMinutes === 0) {
        durationInMinutes = 1;
      }
      setRecords((prevRecords) => [
        ...prevRecords,
        { startTime, duration: durationInMinutes },
      ]);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  // React hook added to store the duration of exercise
  useEffect(() => {
    const durations = records.map((record) => record.duration);
    localStorage.setItem("timerDurations", JSON.stringify(durations));
  }, [records]);

  return (
    <div>
      <div className="timer">
        <div className="circle" style={{ backgroundColor: "pink" }}>
          <span className="time">{formatTime(time)}</span>
        </div>
      </div>
      <div className="buttons">
        {!timerOn && time === 600 && (
          <button onClick={startTimer}>Start</button>
        )}
        {timerOn && !isPaused && <button onClick={pauseTimer}>Pause</button>}
        {timerOn && isPaused && <button onClick={startTimer}>Resume</button>}
        <button onClick={stopTimer}>Stop</button>
      </div>
      {/* <TimerRecordsTable records={records} /> */}
    </div>
  );
};

export default Timer;
