import React from 'react';
import LucideIcon from '../common/LucideIcon';

export default function GisMap({
  locations,
  selectedLocation,
  onLocationSelect,
  children
}) {
  return (
    <div className="map-canvas">
      {locations.map((loc) => {
        const isSelected = selectedLocation && selectedLocation.id === loc.id;
        return (
          <span
            key={loc.id}
            className={`pin ${loc.pinClass}`}
            style={{
              cursor: 'pointer',
              transform: isSelected ? 'rotate(-45deg) scale(1.15)' : 'rotate(-45deg)',
              boxShadow: isSelected ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
              transition: 'transform 0.15s ease-in-out'
            }}
            onClick={() => onLocationSelect && onLocationSelect(loc)}
          >
            <i>
              <LucideIcon name="map-pin" />
            </i>
          </span>
        );
      })}
      {children}
    </div>
  );
}
