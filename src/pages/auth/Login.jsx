import React, { useState } from 'react';
import LucideIcon from '../../components/common/LucideIcon';
import Button from '../../components/common/Button';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('anita.sharma@jalshakti.gov.in');
  const [password, setPassword] = useState('<REMOVED_SECRET>');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <div className="login-page">
      <section className="login-hero">
        <div className="brand" style={{ color: '#fff', padding: 0 }}>
          <span className="brand-mark" style={{ background: '#fff', color: '#0f766e' }}>
            <LucideIcon name="cloud-rain" />
          </span>
          <span>Rain<span style={{ color: '#a7f3d0' }}>Intel</span></span>
        </div>
        <h1>AI-powered <span>rainwater harvesting</span> intelligence.</h1>
        <p>Empowering government engineers with GIS mapping, rooftop analysis and automated assessment reports for sustainable water management.</p>
        <div className="login-badges">
          <span><b>1,284</b><br />Buildings assessed</span>
          <span><b>45.8M L</b><br />Water potential</span>
          <span><b>96.2%</b><br />AI confidence</span>
        </div>
      </section>

      <section className="login-card-wrap">
        <article className="login-card">
          <div className="brand">
            <span className="brand-mark">
              <LucideIcon name="cloud-rain" />
            </span>
            <span>Rain<span>Intel</span></span>
          </div>
          <h2>Welcome back</h2>
          <p>Sign in to your Jal Shakti Mission workspace.</p>
          <form onSubmit={handleSubmit}>
            <label>
              Government email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="remember">
              <span>☑ Remember me</span>
              <a href="#" onClick={(e) => e.preventDefault()}>Forgot password?</a>
            </div>
            <Button
              type="submit"
              variant="primary"
              icon="arrow-right"
              iconPosition="right"
            >
              Sign in to workspace
            </Button>
          </form>
          <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '10px' }}>Powered by Ministry of Jal Shakti</p>
        </article>
      </section>
    </div>
  );
}
