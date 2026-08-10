import React from 'react';
import Card from '../common/Card';
import Avatar from '../common/Avatar';
import Button from '../common/Button';

export default function SettingsProfile({ profile, onUploadClick, onRemoveClick, onChange }) {
  const defaultProfile = {
    name: 'Anita Sharma',
    employeeId: 'JSM-VJA-2047',
    email: 'anita.sharma@jalshakti.gov.in',
    phone: '+91 98765 43210',
    department: 'Jal Shakti Mission',
    district: 'Vijayawada',
  };

  const data = profile || defaultProfile;

  return (
    <>
      <Card className="setting-group">
        <h3>Personal profile</h3>
        <p>Manage your account details and profile information.</p>
        <div className="profile-edit">
          <Avatar initials="AS" />
          <Button variant="secondary" icon="upload-cloud" onClick={onUploadClick}>
            Upload new photo
          </Button>
          <Button
            variant="secondary"
            icon="trash-2"
            style={{ color: '#64748b', borderColor: 'transparent' }}
            onClick={onRemoveClick}
          >
            Remove
          </Button>
        </div>
        <div className="form-grid">
          <label>
            Full name
            <input
              value={data.name}
              onChange={(e) => onChange && onChange('name', e.target.value)}
            />
          </label>
          <label>
            Employee ID
            <input
              value={data.employeeId}
              onChange={(e) => onChange && onChange('employeeId', e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              value={data.email}
              onChange={(e) => onChange && onChange('email', e.target.value)}
            />
          </label>
          <label>
            Phone
            <input
              value={data.phone}
              onChange={(e) => onChange && onChange('phone', e.target.value)}
            />
          </label>
        </div>
      </Card>

      <Card className="setting-group">
        <h3>Department information</h3>
        <p>Your assigned organisation and operational district.</p>
        <div className="form-grid">
          <label>
            Department
            <input
              value={data.department}
              onChange={(e) => onChange && onChange('department', e.target.value)}
            />
          </label>
          <label>
            District
            <select
              value={data.district}
              onChange={(e) => onChange && onChange('district', e.target.value)}
            >
              <option value="Vijayawada">Vijayawada</option>
            </select>
          </label>
        </div>
      </Card>
    </>
  );
}
