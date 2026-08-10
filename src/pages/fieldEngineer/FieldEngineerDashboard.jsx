import React from 'react';
import Button from '../../components/common/Button';
import KpiCard from '../../components/fieldEngineer/KpiCard';
import { WaterHarvestChart, DistrictPerformanceCard } from '../../components/fieldEngineer/PerformanceCard';
import RecentAssessmentsTable from '../../components/fieldEngineer/RecentAssessmentsTable';
import QuickActions from '../../components/fieldEngineer/QuickActions';

export default function FieldEngineerDashboard({ onNewAssessment, onQuickAction }) {
  const kpis = [
    {
      title: 'Total assessments',
      value: '1,284',
      trend: '12.5%',
      trendType: 'up',
      icon: 'clipboard-list',
      iconColor: 'teal',
      subtitle: 'vs. 1,141 last month',
      sparkText: '▁▂▃▂▄▃▅▆',
      sparkColorClass: 'teal-spark',
    },
    {
      title: 'Harvest potential',
      value: '45.8',
      valueUnit: ' M L',
      trend: '8.2%',
      trendType: 'up',
      icon: 'cloud-rain-wind',
      iconColor: 'blue',
      subtitle: 'Annual water potential',
      sparkText: '▁▃▂▄▃▅▄▇',
      sparkColorClass: 'blue-spark',
    },
    {
      title: 'Recharge potential',
      value: '18.2',
      valueUnit: ' M L',
      trend: '6.8%',
      trendType: 'up',
      icon: 'waves',
      iconColor: 'green',
      subtitle: 'Groundwater contribution',
      sparkText: '▂▃▅▄▅▄▆▇',
      sparkColorClass: 'green-spark',
    },
    {
      title: 'Completion rate',
      value: '94.6',
      valueUnit: '%',
      trend: 'This month',
      trendType: 'neutral',
      icon: 'circle-check-big',
      iconColor: 'amber',
      subtitle: '1,215 assessments completed',
      showProgressBar: true,
      progressWidth: '94.6%',
    },
  ];

  const recentAssessments = [
    {
      id: 'EDU-2026-0482',
      buildingName: 'Govt. High School, Patamata',
      status: 'Completed',
      potential: '48,600 L',
      date: 'Today, 10:32 AM',
      icon: 'warehouse',
      iconColorClass: '',
    },
    {
      id: 'COM-2026-0481',
      buildingName: 'Municipal Office, Benz Circle',
      status: 'In review',
      potential: '32,400 L',
      date: 'Today, 09:18 AM',
      icon: 'building',
      iconColorClass: 'purple',
    },
    {
      id: 'GOV-2026-0480',
      buildingName: 'District Library, Moghalrajpuram',
      status: 'Processing',
      potential: '—',
      date: 'Yesterday, 04:45 PM',
      icon: 'landmark',
      iconColorClass: 'blue-bg',
    },
  ];

  const handleQuickAction = (actionKey) => {
    if (actionKey === 'new-assessment') {
      if (onNewAssessment) onNewAssessment();
    } else {
      if (onQuickAction) onQuickAction(actionKey);
    }
  };

  return (
    <>
      <div className="hero-row">
        <div>
          <p className="lead">Here’s how your water intelligence network is performing today.</p>
        </div>
        <Button
          variant="primary"
          icon="plus"
          onClick={onNewAssessment}
        >
          New assessment
        </Button>
      </div>

      <div className="kpis">
        {kpis.map((kpi, index) => (
          <KpiCard key={index} {...kpi} />
        ))}
      </div>

      <div className="content-grid">
        <WaterHarvestChart />
        <DistrictPerformanceCard />
      </div>

      <div className="lower-grid">
        <RecentAssessmentsTable assessments={recentAssessments} />
        <QuickActions onAction={handleQuickAction} />
      </div>
    </>
  );
}
