import React, { useState, useEffect } from 'react';
import PageHeading from '../../components/common/PageHeading';
import Button from '../../components/common/Button';
import AnalyticsFilters from '../../components/analytics/AnalyticsFilters';
import AnalyticsKpiCard from '../../components/analytics/AnalyticsKpiCard';
import AssessmentTrendChart from '../../components/analytics/AssessmentTrendChart';
import WaterPotentialChart from '../../components/analytics/WaterPotentialChart';
import EngineerRanking from '../../components/analytics/EngineerRanking';
import AnalyticsSummary from '../../components/analytics/AnalyticsSummary';
import { api } from '../../services/api';

export default function Analytics({ onExport }) {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const data = await api.analytics.getSummary();
        setSummary(data);
      } catch (err) {
        console.error('Failed to load analytics summary', err);
      } finally {
        setLoading(false);
      }
    }
    fetchSummary();
  }, []);

  const totalHarvest = summary ? (summary.totalHarvestedLiters / 1000000.0).toFixed(2) : '45.8';
  const totalAssessments = summary ? summary.totalAssessments : '1,284';
  const avgConf = summary ? summary.averageConfidence : '96.2';
  const rechargePotential = summary ? (summary.totalHarvestedLiters * 0.4 / 1000000.0).toFixed(2) : '18.2';

  const kpis = [
    {
      title: 'Water saved',
      value: String(totalHarvest),
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
      value: String(avgConf),
      valueUnit: '%',
      icon: 'circle-check',
      iconColor: 'green',
      subtitle: `Across ${totalAssessments} assessments`,
    },
    {
      title: 'Recharge contribution',
      value: String(rechargePotential),
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
