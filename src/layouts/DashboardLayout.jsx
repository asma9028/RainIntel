import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import PageContainer from '../components/layout/PageContainer';

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-layout__main">
        <Navbar />
        <main className="dashboard-layout__content">
          <PageContainer>
            {children}
          </PageContainer>
        </main>
      </div>
    </div>
  );
}

