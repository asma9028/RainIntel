import React from 'react';
import Card from '../common/Card';
import LucideIcon from '../common/LucideIcon';

export function WaterHarvestChart() {
  const chartData = [
    { month: 'Jan', height: '41%' },
    { month: 'Feb', height: '55%' },
    { month: 'Mar', height: '48%' },
    { month: 'Apr', height: '69%' },
    { month: 'May', height: '56%' },
    { month: 'Jun', height: '85%' },
    { month: 'Jul', height: '74%' },
    { month: 'Aug', height: '91%' },
    { month: 'Sep', height: '70%' },
    { month: 'Oct', height: '59%' },
    { month: 'Nov', height: '44%' },
    { month: 'Dec', height: '38%' },
  ];

  return (
    <Card className="performance">
      <div className="card-title">
        <div>
          <h3>Water harvest potential</h3>
          <p>
            Monthly projected yield <span className="legend"><b></b>2026</span>
          </p>
        </div>
        <button className="select">
          This year <LucideIcon name="chevron-down" />
        </button>
      </div>
      <div className="chart-wrap">
        <div className="y-axis">
          <span>6M L</span>
          <span>4M L</span>
          <span>2M L</span>
          <span>0</span>
        </div>
        <div className="bar-chart">
          <div className="grid-lines"></div>
          <div className="bars">
            {chartData.map((data, index) => (
              <i key={index} style={{ height: data.height }}></i>
            ))}
          </div>
          <div className="months">
            {chartData.map((data, index) => (
              <span key={index}>{data.month}</span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export function DistrictPerformanceCard() {
  const districts = [
    { name: 'Vijayawada', rate: '98%', colorClass: 'one' },
    { name: 'Guntur', rate: '95%', colorClass: 'two' },
    { name: 'Krishna', rate: '91%', colorClass: 'three' },
  ];

  return (
    <Card className="district">
      <div className="card-title">
        <div>
          <h3>District performance</h3>
          <p>Assessment completion</p>
        </div>
        <button className="dots">
          <LucideIcon name="ellipsis" />
        </button>
      </div>
      <div className="donut">
        <div>
          <b>94%</b>
          <span>Average</span>
        </div>
      </div>
      <ul className="district-list">
        {districts.map((d, index) => (
          <li key={index}>
            <span>
              <b className={`dot ${d.colorClass}`}></b>
              {d.name}
            </span>
            <strong>{d.rate}</strong>
          </li>
        ))}
      </ul>
      <a href="#" onClick={(e) => e.preventDefault()}>
        View district analytics <LucideIcon name="arrow-right" />
      </a>
    </Card>
  );
}
