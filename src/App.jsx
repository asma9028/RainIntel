import React, { useState, useEffect } from 'react';
import Login from './pages/auth/Login';
import DashboardLayout from './layouts/DashboardLayout';
import FieldEngineerDashboard from './pages/fieldEngineer/FieldEngineerDashboard';
import GisIntelligence from './pages/gis/GisIntelligence';
import Reports from './pages/reports/Reports';
import Analytics from './pages/analytics/Analytics';
import Assessments from './pages/assessments/Assessments';
import NewAssessment from './pages/assessments/NewAssessment';
import AIProcessing from './pages/aiProcessing/AIProcessing';
import AssessmentResult from './pages/assessmentResult/AssessmentResult';
import Design3D from './pages/design3D/Design3D';
import Settings from './pages/settings/Settings';
import Support from './pages/support/Support';
import ReportPreview from './pages/reportPreview/ReportPreview';
import Toast from './components/common/Toast';

function App() {
  const [currentPage, setCurrentPage] = useState('Login');
  const [selectedReport, setSelectedReport] = useState(null);
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
    setCurrentPage('New Assessment');
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
          <Assessments
            onNewAssessment={handleNewAssessment}
            onRowClick={(a) => triggerToast(`Viewing survey ${a.id}...`)}
          />
        );
      case 'New Assessment':
        return (
          <NewAssessment
            onCancel={() => setCurrentPage('Dashboard')}
            onSubmit={() => {
              triggerToast('Assessment submitted successfully.');
              setCurrentPage('AI Processing');
            }}
            triggerToast={triggerToast}
          />
        );
      case 'AI Processing':
        return (
          <AIProcessing onViewResults={() => setCurrentPage('Assessment Result')} />
        );
      case 'Assessment Result':
        return (
          <AssessmentResult
            onReport={() => {
              setSelectedReport({
                id: 'RIN-2026-0483',
                building: 'Municipal Community Hall',
                type: 'Government',
                potential: '48,600 L',
                date: '10 Aug 2026'
              });
              setCurrentPage('Report Preview');
            }}
            onDesign={() => setCurrentPage('3D Design')}
          />
        );
      case '3D Design':
        return (
          <Design3D
            onReset={() => triggerToast('3D view camera reset.')}
            onFullscreen={() => triggerToast('Entering fullscreen Mode...')}
          />
        );
      case 'GIS Intelligence':
        return (
          <GisIntelligence
            onNewAssessment={handleNewAssessment}
            triggerToast={triggerToast}
          />
        );
      case 'Reports':
        return (
          <Reports
            onExport={() => triggerToast('Exporting reports register...')}
            onReportSelect={(r) => {
              setSelectedReport(r);
              setCurrentPage('Report Preview');
            }}
          />
        );
      case 'Report Preview':
        return (
          <ReportPreview
            report={selectedReport}
            onPrint={() => triggerToast('Sending report to system printer...')}
            onDownload={() => triggerToast('Downloading report PDF document...')}
          />
        );
      case 'Analytics':
        return (
          <Analytics
            onExport={() => triggerToast('Exporting district analytics summary...')}
          />
        );
      case 'Settings':
        return (
          <Settings
            onSave={() => triggerToast('Settings saved successfully.')}
            triggerToast={triggerToast}
          />
        );
      case 'Support':
        return (
          <Support
            onContact={() => triggerToast('Support request created - we will contact you shortly.')}
            triggerToast={triggerToast}
          />
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
      <DashboardLayout
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        triggerToast={triggerToast}
      >
        {renderPage()}
      </DashboardLayout>
      <Toast show={toastShow} message={toastMessage} icon={toastIcon} />
    </>
  );
}

export default App;
