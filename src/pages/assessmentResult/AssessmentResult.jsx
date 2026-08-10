import React from 'react';
import PageHeading from '../../components/common/PageHeading';
import Button from '../../components/common/Button';
import AssessmentMetrics from '../../components/assessmentResult/AssessmentMetrics';
import RecommendationCard from '../../components/assessmentResult/RecommendationCard';
import WaterScoreCard from '../../components/assessmentResult/WaterScoreCard';

export default function AssessmentResult({ onReport, onDesign }) {
  return (
    <>
      <PageHeading
        title="Assessment completed"
        subtitle="RIN-2026-0483 — Municipal Community Hall"
        actions={
          <>
            <Button variant="secondary" icon="file-text" onClick={onReport}>
              Report preview
            </Button>
            <Button variant="primary" icon="box" onClick={onDesign}>
              View 3D design
            </Button>
          </>
        }
      />

      <AssessmentMetrics />

      <div className="content-grid">
        <RecommendationCard />
        <WaterScoreCard />
      </div>
    </>
  );
}
