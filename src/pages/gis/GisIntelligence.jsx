import React, { useState, useEffect } from 'react';
import PageHeading from '../../components/common/PageHeading';
import Button from '../../components/common/Button';
import GisFilters from '../../components/gis/GisFilters';
import GisMap from '../../components/gis/GisMap';
import GisMapControls from '../../components/gis/GisMapControls';
import GisLegend from '../../components/gis/GisLegend';
import GisSiteCard from '../../components/gis/GisSiteCard';
import { api } from '../../services/api';

export default function GisIntelligence({ onNewAssessment, triggerToast }) {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function loadGisData() {
      try {
        const res = await api.assessments.list();
        const mapped = res.map((a, i) => {
          const pinClasses = ['one', 'two', 'three'];
          // Spread locations across the stylized map layout
          const leftVal = 15 + ((a.longitude * 12345) % 70);
          const topVal = 15 + ((a.latitude * 54321) % 65);
          return {
            id: String(a.assessmentId),
            buildingName: a.buildingName,
            details: `Roof area ${a.roofAreaSqFt.toLocaleString()} sq ft · Potential ${a.harvestPotentialL ? Math.round(a.harvestPotentialL).toLocaleString() : 0} L`,
            status: a.status === 'APPROVED' ? 'Completed' : a.status === 'SUBMITTED' ? 'In review' : 'Processing',
            pinClass: pinClasses[i % 3],
            left: `${leftVal}%`,
            top: `${topVal}%`
          };
        });
        setLocations(mapped);
        if (mapped.length > 0) {
          setSelectedLocation(mapped[0]);
        }
      } catch (err) {
        if (triggerToast) triggerToast('Failed to load GIS assessments: ' + err.message, 'circle-alert');
      } finally {
        setLoading(false);
      }
    }
    loadGisData();
  }, [triggerToast]);

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

      {loading ? (
        <div style={{ display: 'grid', placeItems: 'center', height: '550px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', color: '#64748b', fontSize: '13px' }}>
          <span>Loading GIS locations...</span>
        </div>
      ) : (
        <GisMap
          locations={locations}
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
      )}
    </>
  );
}
