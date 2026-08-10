import React from 'react';
import DashboardLayout from './layouts/DashboardLayout';

function App() {
  return (
    <DashboardLayout>
      <div style={{ padding: '1rem', border: '1px dashed #9ca3af', borderRadius: '4px' }}>
        <h2>Main Content Area</h2>
        <p>DashboardLayout loaded successfully. Ready for role-specific module implementation.</p>
      </div>
    </DashboardLayout>
  );
}

export default App;

