import React from 'react';
import Card from '../common/Card';
import Avatar from '../common/Avatar';

export default function EngineerRanking({ engineers }) {
  const defaultEngineers = [
    { initials: 'AS', name: 'Anita Sharma', count: '148' },
    { initials: 'RV', name: 'Rahul Varma', count: '131' },
    { initials: 'PK', name: 'Priya Kumar', count: '122' },
    { initials: 'SM', name: 'Suresh M.', count: '118' },
  ];

  const displayList = engineers || defaultEngineers;

  return (
    <Card>
      <div className="card-title">
        <div>
          <h3>Top engineers</h3>
          <p>By completed assessments</p>
        </div>
      </div>
      <ul className="rank">
        {displayList.map((eng, i) => (
          <li key={i}>
            <span>0{i + 1}</span>
            <Avatar initials={eng.initials} />
            <div>
              <b>{eng.name}</b>
              <small>Field Engineer</small>
            </div>
            <strong>{eng.count}</strong>
          </li>
        ))}
      </ul>
    </Card>
  );
}
