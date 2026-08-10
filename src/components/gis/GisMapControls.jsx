import React from 'react';
import LucideIcon from '../common/LucideIcon';

export default function GisMapControls({ onZoomIn, onZoomOut, onLocate, onCompass }) {
  return (
    <div className="map-tools">
      <button type="button" onClick={onZoomIn}>
        <LucideIcon name="plus" />
      </button>
      <button type="button" onClick={onZoomOut}>
        <LucideIcon name="minus" />
      </button>
      <button type="button" onClick={onLocate}>
        <LucideIcon name="locate-fixed" />
      </button>
      <button type="button" onClick={onCompass}>
        <LucideIcon name="compass" />
      </button>
    </div>
  );
}
