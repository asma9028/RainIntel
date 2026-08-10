import React from 'react';

export default function AIProcessingProgress({ progress = '85%', label = 'ANALYSING', remainingTime = '01:24 min' }) {
  return (
    <>
      <div className="progress-ring">
        <div>
          <b>{progress}</b>
          <span>{label}</span>
        </div>
      </div>
      <p style={{ color: '#64748b', fontSize: '12px' }}>
        Estimated time remaining: <b>{remainingTime}</b>
      </p>
    </>
  );
}
