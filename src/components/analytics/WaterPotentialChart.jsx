import React from 'react';
import Card from '../common/Card';

export default function WaterPotentialChart() {
  // Generate 50 empty i tags to match reference CSS heatmap styling
  const heatmapCells = Array(50).fill(0);

  return (
    <Card>
      <div className="card-title">
        <div>
          <h3>District heatmap</h3>
          <p>Water potential intensity</p>
        </div>
      </div>
      <div className="heatmap">
        {heatmapCells.map((_, index) => (
          <i key={index}></i>
        ))}
      </div>
    </Card>
  );
}
