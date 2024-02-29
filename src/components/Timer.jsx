import React, { useState, useEffect } from 'react';
import './Timer.css'; 

const Timer = () => {
    const [time, setTime] = useState(600); // 10 minutes in seconds
    const [timerOn, setTimerOn] = useState(false);
    const [isPaused, setIsPaused] = useState(false); 
    const [startTime, setStartTime] = useState(null); 
    const [records, setRecords] = useState([]);

    useEffect(() => {
        let interval;
        if (timerOn && !isPaused && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time === 0 || isPaused) {
            clearInterval(interval);
            if (!isPaused) {
                setTimerOn(false);
                const endTime = new Date();
                let durationInSeconds = Math.abs(endTime - startTime) / 1000; // Calculate duration in seconds
                let durationInMinutes = Math.ceil(durationInSeconds / 60); // Convert duration to minutes and round up
                if (durationInMinutes === 0) {
                    durationInMinutes = 1; // If duration is less than 1 minute, set it to 1 minute
                }
                setRecords(prevRecords => [...prevRecords, { startTime, duration: durationInMinutes }]);
            }
        }
        return () => clearInterval(interval);
    }, [timerOn, isPaused, time, startTime]);

    const startTimer = () => {
        setTimerOn(true);
        setIsPaused(false); // Resetting isPaused when timer starts
        setStartTime(new Date()); // Set start time when timer starts
    };

    const pauseTimer = () => {
        setIsPaused(true); // Pause the timer
    };

    const stopTimer = () => {
        setTime(600); // Reset time to 10 minutes
        setTimerOn(false);
        setIsPaused(false);
        const endTime = new Date();
        let durationInSeconds = Math.abs(endTime - startTime) / 1000; // Calculate duration in seconds
        let durationInMinutes = Math.ceil(durationInSeconds / 60); // Convert duration to minutes and round up
        if (durationInMinutes === 0) {
            durationInMinutes = 1; // If duration is less than 1 minute, set it to 1 minute
        }
        setRecords(prevRecords => [...prevRecords, { startTime, duration: durationInMinutes }]);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    };

    return (
        <div>
            <div className="timer">
                <div className="circle" style={{ backgroundColor: 'pink' }}>
                    <span className="time">{formatTime(time)}</span>
                </div>
            </div>
            <div className="buttons">
                {!timerOn && time === 600 && (
                    <button onClick={startTimer}>Start</button>
                )}
                {timerOn && !isPaused && (
                    <button onClick={pauseTimer}>Pause</button>
                )}
                {timerOn && isPaused && (
                    <button onClick={startTimer}>Resume</button>
                )}
                <button onClick={stopTimer}>Stop</button>
            </div>
            <div className="records">
                <h2>Exercise Time Records:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Start Time</th>
                            <th>Duration (minutes)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => (
                            <tr key={index}>
                                <td>{record.startTime.toLocaleDateString()}</td>
                                <td>{record.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Timer;
