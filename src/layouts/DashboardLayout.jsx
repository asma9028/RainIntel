import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import PageContainer from '../components/layout/PageContainer';

export default function DashboardLayout({ children, currentPage, onPageChange }) {
  return (
    <>
      <Sidebar currentPage={currentPage} onPageChange={onPageChange} />
      <main>
        <Navbar currentPage={currentPage} />
        <PageContainer>
          {children}
        </PageContainer>
      </main>
    </>
  );
}
