import React from 'react';
import PageHeading from '../../components/common/PageHeading';
import Button from '../../components/common/Button';
import AnalyticsFilters from '../../components/analytics/AnalyticsFilters';
import AnalyticsKpiCard from '../../components/analytics/AnalyticsKpiCard';
import AssessmentTrendChart from '../../components/analytics/AssessmentTrendChart';
import WaterPotentialChart from '../../components/analytics/WaterPotentialChart';
import EngineerRanking from '../../components/analytics/EngineerRanking';
import AnalyticsSummary from '../../components/analytics/AnalyticsSummary';

export default function Analytics({ onExport }) {
  const kpis = [
    {
      title: 'Water saved',
      value: '45.8',
      valueUnit: ' M L',
      icon: 'droplets',
      iconColor: 'teal',
      subtitle: 'Projected annually',
    },
    {
      title: 'Avg. assessment time',
      value: '38',
      valueUnit: ' min',
      icon: 'timer',
      iconColor: 'blue',
      subtitle: '18% faster than target',
    },
    {
      title: 'AI confidence',
      value: '96.2',
      valueUnit: '%',
      icon: 'circle-check',
      iconColor: 'green',
      subtitle: 'Across 1,284 assessments',
    },
    {
      title: 'Recharge contribution',
      value: '18.2',
      valueUnit: ' M L',
      icon: 'trees',
      iconColor: 'amber',
      subtitle: 'Annual groundwater potential',
    },
  ];

  return (
    <>
      <PageHeading
        title="Analytics"
        subtitle="Executive intelligence for your district."
        actions={
          <Button variant="secondary" icon="download" onClick={onExport}>
            Export
          </Button>
        }
      />

      <AnalyticsFilters
        districtFilter="Vijayawada"
        periodFilter="This year"
      />

      <div className="kpis">
        {kpis.map((kpi, index) => (
          <AnalyticsKpiCard key={index} {...kpi} />
        ))}
      </div>

      <div className="analytics-grid" style={{ marginTop: '17px' }}>
        <AssessmentTrendChart />
        <EngineerRanking />
        <WaterPotentialChart />
      </div>

      <AnalyticsSummary />
    </>
  );
}
