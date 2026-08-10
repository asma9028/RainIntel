import React from 'react';
import LucideIcon from '../common/LucideIcon';
import Avatar from '../common/Avatar';

export default function Sidebar({ currentPage, onPageChange }) {
  const primaryNavItems = [
    { name: 'Dashboard', icon: 'layout-dashboard' },
    { name: 'Assessments', icon: 'clipboard-check', pill: 12 },
    { name: 'GIS Intelligence', icon: 'map' },
    { name: 'Reports', icon: 'file-bar-chart' },
    { name: 'Analytics', icon: 'chart-no-axes-combined' },
  ];

  const systemNavItems = [
    { name: 'Settings', icon: 'settings-2' },
    { name: 'Support', icon: 'circle-help' },
  ];

  return (
    <aside className="sidebar">
      <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onPageChange('Dashboard'); }}>
        <span className="brand-mark">
          <LucideIcon name="cloud-rain" />
        </span>
        <span>Rain<span>Intel</span></span>
      </a>

      <div className="workspace">
        <span className="workspace-icon">
          <LucideIcon name="building-2" />
        </span>
        <div>
          <b>Jal Shakti Mission</b>
          <small>Government Workspace</small>
        </div>
        <LucideIcon name="chevrons-up-down" />
      </div>

      <nav>
        {primaryNavItems.map((item) => (
          <button
            key={item.name}
            className={`nav-item ${currentPage === item.name ? 'active' : ''}`}
            onClick={() => onPageChange(item.name)}
          >
            <LucideIcon name={item.icon} />
            {item.name}
            {item.pill !== undefined && <span className="pill">{item.pill}</span>}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <span className="side-label">SYSTEM</span>
        
        {systemNavItems.map((item) => (
          <button
            key={item.name}
            className={`nav-item ${currentPage === item.name ? 'active' : ''}`}
            onClick={() => onPageChange(item.name)}
          >
            <LucideIcon name={item.icon} />
            {item.name}
          </button>
        ))}

        <button
          className={`nav-item ${currentPage === 'Login' ? 'active' : ''}`}
          onClick={() => onPageChange('Login')}
        >
          <LucideIcon name="log-out" />
          Sign out
        </button>

        <div className="user-card">
          <Avatar initials="AS" />
          <div>
            <b>Anita Sharma</b>
            <small>Field Engineer</small>
          </div>
          <LucideIcon name="more-horizontal" />
        </div>
      </div>
    </aside>
  );
}
