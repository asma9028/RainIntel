import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import LucideIcon from '../common/LucideIcon';

export default function ContactSupport({ onContact }) {
  return (
    <Card>
      <span className="icon green">
        <LucideIcon name="headphones" />
      </span>
      <h3 style={{ font: '600 15px Poppins', margin: '14px 0 4px' }}>
        Need direct assistance?
      </h3>
      <p style={{ fontSize: '11px', color: '#64748b', lineHeight: 1.6 }}>
        Our field operations team is available Monday-Saturday, 9:00 AM-6:00 PM IST.
      </p>
      <Button
        variant="primary"
        icon="message-circle"
        iconPosition="right"
        style={{ marginTop: '12px' }}
        onClick={onContact}
      >
        Contact support
      </Button>
    </Card>
  );
}
