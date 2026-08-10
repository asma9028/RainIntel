import React from 'react';
import Card from '../common/Card';
import LucideIcon from '../common/LucideIcon';

export default function FAQList({ articles, onArticleSelect }) {
  const defaultArticles = [
    'How to capture an accurate rooftop GPS location',
    'Understanding AI confidence and recommendation scores',
    'Required photos for a complete rooftop survey',
    'How rainwater potential is calculated',
    'Exporting a signed assessment report',
  ];

  const list = articles || defaultArticles;

  return (
    <Card>
      <div className="card-title">
        <div>
          <h3>Popular articles</h3>
          <p>Most useful for field engineers</p>
        </div>
      </div>
      <ul className="support-list">
        {list.map((article, index) => (
          <li
            key={index}
            style={{ cursor: onArticleSelect ? 'pointer' : 'default' }}
            onClick={() => onArticleSelect && onArticleSelect(article)}
          >
            {article}
            <LucideIcon name="chevron-right" />
          </li>
        ))}
      </ul>
    </Card>
  );
}
