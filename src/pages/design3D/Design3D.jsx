import React from 'react';
import PageHeading from '../../components/common/PageHeading';
import Button from '../../components/common/Button';
import DesignViewer from '../../components/design3D/DesignViewer';

export default function Design3D({ onReset, onFullscreen }) {
  return (
    <>
      <PageHeading
        title="3D system design"
        subtitle="Interactive recommended rainwater harvesting layout."
        actions={
          <>
            <Button variant="secondary" icon="rotate-3d" onClick={onReset}>
              Reset
            </Button>
            <Button variant="secondary" icon="maximize" onClick={onFullscreen}>
              Fullscreen
            </Button>
          </>
        }
      />

      <DesignViewer />
    </>
  );
}
