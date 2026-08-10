import React from 'react';
import Card from '../common/Card';
import LucideIcon from '../common/LucideIcon';

export default function AssessmentTrendChart({ onYearClick }) {
  return (
    <Card>
      <div className="card-title">
        <div>
          <h3>Monthly assessment trend</h3>
          <p>Completed assessments in 2026</p>
        </div>
        <button className="select" type="button" onClick={onYearClick}>
          2026 <LucideIcon name="chevron-down" />
        </button>
      </div>
      <div className="line-graphic"></div>
    </Card>
  );
}
