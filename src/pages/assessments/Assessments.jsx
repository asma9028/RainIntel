import React, { useState } from 'react';
import PageHeading from '../../components/common/PageHeading';
import Button from '../../components/common/Button';
import AssessmentFilters from '../../components/assessments/AssessmentFilters';
import AssessmentTable from '../../components/assessments/AssessmentTable';

export default function Assessments({ onNewAssessment, onRowClick }) {
  const initialAssessments = [
    {
      id: 'RIN-2026-0483',
      building: 'Municipal Community Hall',
      engineer: 'Anita Sharma',
      status: 'Draft',
      roofArea: '1,240 sq ft',
      potential: '-',
      updated: 'Now',
    },
    {
      id: 'RIN-2026-0482',
      building: 'Govt. High School, Patamata',
      engineer: 'Anita Sharma',
      status: 'Completed',
      roofArea: '7,200 sq ft',
      potential: '48,600 L',
      updated: 'Today',
    },
    {
      id: 'RIN-2026-0481',
      building: 'Municipal Office, Benz Circle',
      engineer: 'Rahul Varma',
      status: 'In review',
      roofArea: '4,180 sq ft',
      potential: '32,400 L',
      updated: 'Today',
    },
    {
      id: 'RIN-2026-0480',
      building: 'District Library, Moghalrajpuram',
      engineer: 'Anita Sharma',
      status: 'Processing',
      roofArea: '3,870 sq ft',
      potential: '-',
      updated: 'Yesterday',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <PageHeading
        title="Assessments"
        subtitle="Manage field surveys and monitor AI processing progress."
        actions={
          <Button variant="primary" icon="plus" onClick={onNewAssessment}>
            New assessment
          </Button>
        }
      />

      <AssessmentFilters
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        statusFilter="All statuses"
        timeFilter="This month"
      />

      <AssessmentTable
        assessments={initialAssessments}
        onRowClick={onRowClick}
      />
    </>
  );
}
