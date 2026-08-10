import React, { useState } from 'react';
import PageHeading from '../../components/common/PageHeading';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import SettingsProfile from '../../components/settings/SettingsProfile';
import SettingsNotifications from '../../components/settings/SettingsNotifications';
import SettingsPreferences from '../../components/settings/SettingsPreferences';
import SettingsSecurity from '../../components/settings/SettingsSecurity';

export default function Settings({ onSave, triggerToast }) {
  const [activeTab, setActiveTab] = useState('Profile');

  const handleUpdatePassword = () => {
    if (triggerToast) triggerToast('Password updated successfully.');
  };

  const renderActivePanel = () => {
    switch (activeTab) {
      case 'Profile':
        return <SettingsProfile />;
      case 'Notifications':
        return <SettingsNotifications />;
      case 'Preferences':
        return <SettingsPreferences />;
      case 'Security':
        return <SettingsSecurity onUpdatePassword={handleUpdatePassword} />;
      case 'Privacy':
        return (
          <>
            <Card className="setting-group">
              <h3>Data & privacy</h3>
              <p>Control how RainIntel uses assessment and device information.</p>
              <div className="toggle-row">
                <div>
                  <b>Anonymous product analytics</b>
                  <small>Help improve RainIntel using non-identifiable usage data.</small>
                </div>
                <span className="switch" style={{ cursor: 'pointer', background: '#0f766e' }}>
                  <i style={{ marginLeft: 'auto' }}></i>
                </span>
              </div>
              <div className="toggle-row">
                <div>
                  <b>Precise location data</b>
                  <small>Allow GPS metadata in assessment records.</small>
                </div>
                <span className="switch" style={{ cursor: 'pointer', background: '#0f766e' }}>
                  <i style={{ marginLeft: 'auto' }}></i>
                </span>
              </div>
              <div className="toggle-row">
                <div>
                  <b>AI training feedback</b>
                  <small>Allow approved corrections to improve recommendation quality.</small>
                </div>
                <span className="switch" style={{ cursor: 'pointer', background: '#e2e8f0' }}>
                  <i style={{ marginLeft: '0' }}></i>
                </span>
              </div>
            </Card>

            <Card className="setting-group">
              <h3 style={{ color: '#dc2626' }}>Danger zone</h3>
              <p>Actions here affect your local workspace preferences only.</p>
              <Button
                variant="secondary"
                icon="trash-2"
                style={{ color: '#dc2626', borderColor: '#fecaca' }}
                onClick={() => triggerToast && triggerToast('Local cache cleared successfully.')}
              >
                Clear local cache
              </Button>
            </Card>
          </>
        );
      default:
        return null;
    }
  };

  const tabs = ['Profile', 'Notifications', 'Preferences', 'Security', 'Privacy'];

  return (
    <>
      <PageHeading
        title="Settings"
        subtitle="Manage your profile, preferences, and workspace security."
        actions={
          <Button variant="primary" icon="save" onClick={onSave}>
            Save changes
          </Button>
        }
      />

      <div className="settings-layout">
        <aside className="card settings-menu">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={tab === activeTab ? 'selected' : ''}
              type="button"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </aside>

        <div>{renderActivePanel()}</div>
      </div>
    </>
  );
}
