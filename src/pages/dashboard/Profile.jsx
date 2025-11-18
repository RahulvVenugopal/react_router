
import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'app_profile_v1';
const DEFAULT_PROFILE = {
  name: 'Alex Morgan',
  email: 'alex.morgan@example.com',
  about: 'Experienced product designer focused on building accessible, performant web applications.'
};

export default function Profile() {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(DEFAULT_PROFILE);
  const [message, setMessage] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setProfile(parsed);
        setForm(parsed);
      }
    } catch (err) {
      // ignore parse errors and keep defaults
    }
  }, []);

  function startEdit() {
    setForm(profile);
    setEditing(true);
    setMessage('');
  }

  function cancelEdit() {
    setForm(profile);
    setEditing(false);
    setMessage('');
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function saveProfile(e) {
    e && e.preventDefault();
    // Basic validation
    if (!form.name.trim() || !form.email.trim()) {
      setMessage('Name and email are required.');
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
      setProfile(form);
      setEditing(false);
      setMessage('Profile saved.');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setMessage('Failed to save profile.');
    }
  }

  function resetDemo() {
    setForm(DEFAULT_PROFILE);
    setProfile(DEFAULT_PROFILE);
    localStorage.removeItem(STORAGE_KEY);
    setMessage('Profile reset to demo values.');
    setTimeout(() => setMessage(''), 2500);
  }

  return (
    <div className="card">
      <h3>Profile</h3>
      {!editing && (
        <>
          <p style={{marginTop:8}}>{profile.about}</p>

          <div style={{marginTop:12}}>
            <strong>Name:</strong>
            <div>{profile.name}</div>
          </div>

          <div style={{marginTop:8}}>
            <strong>Email:</strong>
            <div>{profile.email}</div>
          </div>

          <div style={{marginTop:12, display:'flex', gap:8}}>
            <button className="btn-primary" onClick={startEdit}>Edit profile</button>
            <button onClick={resetDemo} style={{background:'#e5e7eb', border:'none', padding:'8px 10px', borderRadius:6}}>Reset</button>
          </div>
          {message && <div style={{marginTop:10, color:'#0b6'}}> {message} </div>}
        </>
      )}

      {editing && (
        <form onSubmit={saveProfile} style={{marginTop:8}}>
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="about">About</label>
            <textarea id="about" name="about" rows={4} value={form.about} onChange={handleChange} style={{padding:8, borderRadius:6}} />
          </div>

          <div style={{display:'flex', gap:8}}>
            <button className="btn-primary" type="submit">Save</button>
            <button type="button" onClick={cancelEdit} style={{background:'#e5e7eb', border:'none', padding:'8px 10px', borderRadius:6}}>Cancel</button>
          </div>
          {message && <div style={{marginTop:10, color:'#0b6'}}> {message} </div>}
        </form>
      )}
    </div>
  );
}
