import React, { useState } from 'react';
import PageHeading from '../../components/common/PageHeading';
import SupportSearch from '../../components/support/SupportSearch';
import SupportCategoryCard from '../../components/support/SupportCategoryCard';
import FAQList from '../../components/support/FAQList';
import ContactSupport from '../../components/support/ContactSupport';

export default function Support({ onContact, triggerToast }) {
  const [searchVal, setSearchVal] = useState('');

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
  };

  const categories = [
    {
      icon: 'book-open',
      iconColor: 'teal',
      title: 'Getting started',
      desc: 'Learn the assessment workflow, location capture, and AI review process.',
    },
    {
      icon: 'map',
      iconColor: 'blue',
      title: 'GIS & location help',
      desc: 'Resolve GPS accuracy, map layers, satellite imagery, and boundary issues.',
    },
    {
      icon: 'file-text',
      iconColor: 'amber',
      title: 'Reports & exports',
      desc: 'Create, print, download, and share government-ready assessment reports.',
    },
  ];

  const handleArticleClick = (title) => {
    if (triggerToast) triggerToast(`Opening article: "${title}"`);
  };

  const handleCategoryClick = (title) => {
    if (triggerToast) triggerToast(`Opening category: "${title}"`);
  };

  return (
    <>
      <PageHeading
        title="Support center"
        subtitle="Guides, assistance, and field-engineer resources."
      />

      <SupportSearch value={searchVal} onChange={handleSearch} />

      <div className="support-grid">
        {categories.map((cat, index) => (
          <SupportCategoryCard
            key={index}
            {...cat}
            onClick={() => handleCategoryClick(cat.title)}
          />
        ))}
      </div>

      <div className="content-grid" style={{ marginTop: '17px' }}>
        <FAQList onArticleSelect={handleArticleClick} />
        <ContactSupport onContact={onContact} />
      </div>
    </>
  );
}
