import React, { useState } from 'react';
import Card from '../common/Card';

export default function SettingsPreferences() {
  const [language, setLanguage] = useState('English (India)');
  const [units, setUnits] = useState('Metric');
  const [mapStyle, setMapStyle] = useState('Standard');
  const [layout, setLayout] = useState('Executive overview');
  const [compact, setCompact] = useState(false);

  return (
    <>
      <Card className="setting-group">
        <h3>Workspace preferences</h3>
        <p>Set defaults for data entry, maps, and dashboard displays.</p>
        <div className="form-grid">
          <label>
            Language
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="English (India)">English (India)</option>
              <option value="Hindi">Hindi</option>
              <option value="Telugu">Telugu</option>
            </select>
          </label>
          <label>
            Measurement units
            <select value={units} onChange={(e) => setUnits(e.target.value)}>
              <option value="Metric">Metric</option>
              <option value="Imperial">Imperial</option>
            </select>
          </label>
          <label>
            Default map style
            <select value={mapStyle} onChange={(e) => setMapStyle(e.target.value)}>
              <option value="Standard">Standard</option>
              <option value="Satellite">Satellite</option>
              <option value="Terrain">Terrain</option>
            </select>
          </label>
          <label>
            Dashboard layout
            <select value={layout} onChange={(e) => setLayout(e.target.value)}>
              <option value="Executive overview">Executive overview</option>
              <option value="Field operations">Field operations</option>
            </select>
          </label>
        </div>
      </Card>

      <Card className="setting-group">
        <h3>Data display</h3>
        <p>Choose how information appears across your workspace.</p>
        <div className="toggle-row">
          <div>
            <b>Compact tables</b>
            <small>Show more assessment records per screen.</small>
          </div>
          <span
            className="switch"
            style={{
              cursor: 'pointer',
              background: compact ? '#0f766e' : '#e2e8f0',
            }}
            onClick={() => setCompact(!compact)}
          >
            <i
              style={{
                marginLeft: compact ? 'auto' : '0',
                transition: 'margin 0.2s ease',
              }}
            ></i>
          </span>
        </div>
      </Card>
    </>
  );
}
