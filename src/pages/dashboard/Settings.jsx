import React from 'react';

export default function Settings() {
  return (
    <div className="card">
      <h3>Settings</h3>
      <p>Adjust your settings here.</p>

      <div style={{marginTop:12}}>
        <label className="form-group">
          <span>Notification Email</span>
          <input type="text" placeholder="notifications@example.com" />
        </label>

        <label className="form-group">
          <span>Timezone</span>
          <select style={{padding:'8px 10px', borderRadius:6}}>
            <option>UTC</option>
            <option>America/New_York</option>
            <option>Europe/London</option>
          </select>
        </label>

        <div style={{marginTop:8}}>
          <button className="btn-primary">Save settings</button>
        </div>
      </div>
    </div>
  );
}
