import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="center-container">
      <div className="card" style={{maxWidth:800, textAlign:'center'}}>
        <h1>Welcome to the Demo App</h1>
        <p className="lead">A small React Router demo with protected nested dashboard routes.</p>

        <div style={{marginTop:16, display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap'}}>
          <Link to="/login" className="btn-primary" style={{padding:'10px 16px', textDecoration:'none'}}>Sign In</Link>
          <Link to="/dashboard" className="btn-primary" style={{background:'#6c757d', padding:'10px 16px', textDecoration:'none'}}>View Dashboard</Link>
        </div>

        <p style={{marginTop:18}}>Public: Try signing in to see the dashboard features.</p>
      </div>
    </div>
  );
}
