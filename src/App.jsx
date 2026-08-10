import React, { useState, useEffect } from 'react';
import Login from './pages/auth/Login';
import DashboardLayout from './layouts/DashboardLayout';
import FieldEngineerDashboard from './pages/fieldEngineer/FieldEngineerDashboard';
import GisIntelligence from './pages/gis/GisIntelligence';
import Reports from './pages/reports/Reports';
import Toast from './components/common/Toast';

function App() {
  const [currentPage, setCurrentPage] = useState('Login');
  const [toastShow, setToastShow] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastIcon, setToastIcon] = useState('circle-check');

  // Sync body class 'login-mode' to hide shell on Login screen
  useEffect(() => {
    if (currentPage === 'Login') {
      document.body.classList.add('login-mode');
    } else {
      document.body.classList.remove('login-mode');
    }
  }, [currentPage]);

  const handleLogin = () => {
    setCurrentPage('Dashboard');
  };

  const triggerToast = (msg, iconName = 'circle-check') => {
    setToastMessage(msg);
    setToastIcon(iconName);
    setToastShow(true);
  };

  useEffect(() => {
    if (toastShow) {
      const timer = setTimeout(() => setToastShow(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastShow]);

  const handleNewAssessment = () => {
    triggerToast('New assessment workflow starting... (Milestone 4)');
  };

  const handleQuickAction = (actionKey) => {
    if (actionKey === 'open-map') {
      setCurrentPage('GIS Intelligence');
    } else if (actionKey === 'generate-report') {
      triggerToast('Report generation in progress...', 'file-down');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return (
          <FieldEngineerDashboard
            onNewAssessment={handleNewAssessment}
            onQuickAction={handleQuickAction}
          />
        );
      case 'Assessments':
        return (
          <div style={{ padding: '1rem', border: '1px dashed #9ca3af', borderRadius: '4px', background: '#fff' }}>
            <h2>Assessments</h2>
            <p>Main content area for Assessments.</p>
          </div>
        );
      case 'GIS Intelligence':
        return (
          <GisIntelligence onNewAssessment={handleNewAssessment} />
        );
      case 'Reports':
        return (
          <Reports
            onExport={() => triggerToast('Exporting reports register...')}
            onReportSelect={(r) => triggerToast(`Opening report ${r.id}...`)}
          />
        );
      case 'Analytics':
        return (
          <div style={{ padding: '1rem', border: '1px dashed #9ca3af', borderRadius: '4px', background: '#fff' }}>
            <h2>Analytics</h2>
            <p>Main content area for District performance charts.</p>
          </div>
        );
      case 'Settings':
        return (
          <div style={{ padding: '1rem', border: '1px dashed #9ca3af', borderRadius: '4px', background: '#fff' }}>
            <h2>Settings</h2>
            <p>Main content area for preferences.</p>
          </div>
        );
      case 'Support':
        return (
          <div style={{ padding: '1rem', border: '1px dashed #9ca3af', borderRadius: '4px', background: '#fff' }}>
            <h2>Support</h2>
            <p>Main content area for Support documentation.</p>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  if (currentPage === 'Login') {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <DashboardLayout currentPage={currentPage} onPageChange={setCurrentPage}>
        {renderPage()}
      </DashboardLayout>
      <Toast show={toastShow} message={toastMessage} icon={toastIcon} />
    </>
  );
}

export default App;
