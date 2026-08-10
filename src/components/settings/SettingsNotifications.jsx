import React, { useState } from 'react';
import Card from '../common/Card';

export default function SettingsNotifications() {
  const [preferences, setPreferences] = useState({
    completion: true,
    performance: true,
    approval: false,
    announcements: true,
  });

  const toggle = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const notificationItems = [
    {
      key: 'completion',
      title: 'Assessment completion',
      desc: 'Get notified when AI processing is complete.',
    },
    {
      key: 'performance',
      title: 'Weekly performance digest',
      desc: 'Receive district and team insights every Monday.',
    },
    {
      key: 'approval',
      title: 'Report approval',
      desc: 'Receive alerts when a report needs review.',
    },
    {
      key: 'announcements',
      title: 'District announcements',
      desc: 'Updates from the district administrator.',
    },
  ];

  return (
    <Card className="setting-group">
      <h3>Notification preferences</h3>
      <p>Choose which important workspace events require your attention.</p>
      {notificationItems.map((item) => (
        <div key={item.key} className="toggle-row">
          <div>
            <b>{item.title}</b>
            <small>{item.desc}</small>
          </div>
          <span
            className="switch"
            style={{
              cursor: 'pointer',
              background: preferences[item.key] ? '#0f766e' : '#e2e8f0',
            }}
            onClick={() => toggle(item.key)}
          >
            <i
              style={{
                marginLeft: preferences[item.key] ? 'auto' : '0',
                transition: 'margin 0.2s ease',
              }}
            ></i>
          </span>
        </div>
      ))}
    </Card>
  );
}
