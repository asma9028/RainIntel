import React from 'react';

export default function AIProcessingSteps({ steps }) {
  const defaultSteps = [
    { name: 'Fetching rainfall data', isComplete: true, isPending: false },
    { name: 'GIS mapping and rooftop detection', isComplete: true, isPending: false },
    { name: 'Calculating harvest potential', isComplete: true, isPending: false },
    { name: 'Recharge analysis', isComplete: true, isPending: false },
    { name: 'Machine-learning recommendation', isComplete: false, isPending: false },
    { name: 'Generating government report', isComplete: false, isPending: true },
  ];

  const list = steps || defaultSteps;

  return (
    <ul className="timeline">
      {list.map((step, i) => (
        <li key={i} className={step.isPending ? 'pending' : ''}>
          {step.name}
          {step.isComplete && ' — Complete'}
        </li>
      ))}
    </ul>
  );
}
