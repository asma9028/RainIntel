import React, { useState } from 'react';
import PageHeading from '../../components/common/PageHeading';
import Button from '../../components/common/Button';
import GisFilters from '../../components/gis/GisFilters';
import GisMap from '../../components/gis/GisMap';
import GisMapControls from '../../components/gis/GisMapControls';
import GisLegend from '../../components/gis/GisLegend';
import GisSiteCard from '../../components/gis/GisSiteCard';

export default function GisIntelligence({ onNewAssessment, triggerToast }) {
  const gisLocations = [
    {
      id: '1',
      buildingName: 'Govt. High School, Patamata',
      details: 'Roof area 7,200 sq ft · Potential 48,600 L',
      status: 'Completed',
      pinClass: 'one',
    },
    {
      id: '2',
      buildingName: 'Municipal Office, Benz Circle',
      details: 'Roof area 4,180 sq ft · Potential 32,400 L',
      status: 'In review',
      pinClass: 'two',
    },
    {
      id: '3',
      buildingName: 'District Library, Moghalrajpuram',
      details: 'Roof area 3,870 sq ft · Potential 28,900 L',
      status: 'Processing',
      pinClass: 'three',
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(gisLocations[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationSelect = (loc) => {
    setSelectedLocation(loc);
  };

  const pageActions = (
    <>
      <Button
        variant="secondary"
        icon="layers"
        onClick={() => triggerToast && triggerToast('Changing map layers...')}
      >
        Layers
      </Button>
      <Button variant="primary" icon="plus" onClick={onNewAssessment}>
        New assessment
      </Button>
    </>
  );

  return (
    <>
      <PageHeading
        title="GIS intelligence"
        subtitle="Explore assessment coverage and water potential across Vijayawada."
        actions={pageActions}
      />

      <GisFilters
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        districtFilter="Vijayawada"
        statusFilter="All"
      />

      <GisMap
        locations={gisLocations}
        selectedLocation={selectedLocation}
        onLocationSelect={handleLocationSelect}
      >
        <GisMapControls
          onZoomIn={() => triggerToast && triggerToast('Zooming in GIS map...')}
          onZoomOut={() => triggerToast && triggerToast('Zooming out GIS map...')}
          onLocate={() => triggerToast && triggerToast('Locating your position...')}
          onCompass={() => triggerToast && triggerToast('Recalibrating compass...')}
        />
        <GisLegend />
        <GisSiteCard location={selectedLocation} />
      </GisMap>
    </>
  );
}
