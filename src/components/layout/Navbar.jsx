import React from 'react';
import SearchInput from '../common/SearchInput';
import IconButton from '../common/IconButton';
import Avatar from '../common/Avatar';

export default function Navbar({ currentPage }) {
  const isDashboard = currentPage === 'Dashboard';

  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">WEDNESDAY, 05 AUGUST 2026</p>
        <h1 id="page-title">
          {isDashboard ? (
            <>
              Good morning, Anita <span>✦</span>
            </>
          ) : (
            currentPage
          )}
        </h1>
      </div>
      <div className="top-actions">
        <SearchInput placeholder="Search buildings, reports…" />
        <IconButton icon="bell" hasBadge={true} />
        <IconButton icon="message-square" />
        <Avatar initials="AS" className="top-avatar" onClick={() => {}} />
      </div>
    </header>
  );
}
