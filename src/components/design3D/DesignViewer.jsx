import React from 'react';

export default function DesignViewer() {
  return (
    <div className="design-view">
      <div className="building-3d"></div>
      <span className="design-label" style={{ left: '42%', top: '15%' }}>Roof catchment</span>
      <span className="design-label" style={{ left: '65%', top: '43%' }}>Filter unit</span>
      <span className="design-label" style={{ left: '25%', top: '68%' }}>15,000 L storage tank</span>
      <span className="design-label" style={{ left: '66%', top: '75%' }}>Recharge pit</span>
    </div>
  );
}
