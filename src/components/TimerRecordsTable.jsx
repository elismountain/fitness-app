import React from 'react';
import './Timer.css';

const TimerRecordsTable = ({ records }) => {
  return (
    <div className="records records-timer__page">
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
  );
};

export default TimerRecordsTable;
