import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, isAuthenticated } from '../auth';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    // basic validation for demo
    if (!email.trim() || !password) {
      setError('Please provide your email and password.');
      return;
    }

    // Demo login: in a real app you'd call an API here
    login();
    // Optionally persist auth if remember checked (demo)
    if (remember) {
      localStorage.setItem('remember', 'true');
    } else {
      localStorage.removeItem('remember');
    }
    navigate('/dashboard', { replace: true });
  }

  return (
    <div className="center-container">
      <div className="card login-card" style={{padding:24}}>
        <div style={{textAlign:'center', marginBottom:10}}>
          <div style={{width:72, height:72, borderRadius:12, background:'#0366d6', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700}}>A</div>
          <div style={{height:8}} />
          <h2 style={{margin:0}}>Sign in to Your Account</h2>
          <div style={{color:'#64748b', marginTop:6}}>Secure access to your dashboard</div>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <div style={{color:'#a11', marginBottom:12}}>{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoFocus
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Your password"
              required
            />
          </div>

          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12}}>
            <label style={{display:'flex', alignItems:'center', gap:8}}>
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
              <span style={{fontSize:'0.95rem'}}>Remember me</span>
            </label>

            <a href="#" onClick={(e)=>{e.preventDefault(); alert('Forgot password flow (demo)');}} style={{fontSize:'0.95rem', color:'#0366d6'}}>Forgot?</a>
          </div>

          <div>
            <button className="btn-primary" type="submit" style={{width:'100%'}}>Sign in</button>
          </div>

          <div style={{display:'flex', gap:8, marginTop:10}}>
            <button type="button" className="btn-primary" style={{flex:1}} onClick={() => { setEmail('demo@example.com'); setPassword('password'); setRemember(true); /* auto-submit demo */ login(); navigate('/dashboard', {replace:true}); }}>Sign in as Demo</button>
            <button type="button" style={{flex:1, background:'#e5e7eb', border:'none', borderRadius:6}} onClick={() => { setEmail(''); setPassword(''); setRemember(false); setError(''); }}>Clear</button>
          </div>
        </form>

        <div style={{textAlign:'center', marginTop:14, color:'#6b7280'}}>
          <small>Or sign in using your organization's SSO (demo)</small>
        </div>
      </div>
    </div>
  );
}
