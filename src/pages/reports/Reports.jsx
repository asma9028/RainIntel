import React, { useState } from 'react';
import PageHeading from '../../components/common/PageHeading';
import Button from '../../components/common/Button';
import ReportFilters from '../../components/reports/ReportFilters';
import ReportTable from '../../components/reports/ReportTable';

export default function Reports({ onExport, onReportSelect }) {
  const reportsData = [
    {
      id: 'RIN-2026-0482',
      building: 'Govt. High School, Patamata',
      engineer: 'Anita Sharma',
      date: 'Today',
      status: 'Completed',
      potential: '48,600 L',
    },
    {
      id: 'RIN-2026-0481',
      building: 'Municipal Office, Benz Circle',
      engineer: 'Rahul Varma',
      date: 'Today',
      status: 'In review',
      potential: '32,400 L',
    },
    {
      id: 'RIN-2026-0480',
      building: 'District Library, Moghalrajpuram',
      engineer: 'Anita Sharma',
      date: '04 Aug',
      status: 'Completed',
      potential: '28,900 L',
    },
    {
      id: 'RIN-2026-0479',
      building: 'Primary Health Centre, Gunadala',
      engineer: 'Priya Kumar',
      date: '03 Aug',
      status: 'Completed',
      potential: '41,240 L',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleExportClick = () => {
    if (onExport) onExport();
  };

  return (
    <>
      <PageHeading
        title="Assessment reports"
        subtitle="Government-ready assessment reports and design recommendations."
        actions={
          <Button variant="secondary" icon="download" onClick={handleExportClick}>
            Export register
          </Button>
        }
      />

      <ReportFilters
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        districtFilter="All districts"
        statusFilter="All status"
      />

      <ReportTable
        reports={reportsData}
        onReportSelect={onReportSelect}
      />
    </>
  );
}
