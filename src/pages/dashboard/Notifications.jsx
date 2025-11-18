import React from 'react';

export default function Notifications() {
  const items = [
    { id: 1, text: 'Your report is ready to download.' },
    { id: 2, text: 'New comment on your post.' },
    { id: 3, text: 'Password changed successfully.' },
  ];

  return (
    <div className="card">
      <h3>Notifications</h3>
      <p>Recent activity and messages</p>

      <ul style={{marginTop:12}}>
        {items.map(i => (
          <li key={i.id} style={{marginBottom:8}}>{i.text}</li>
        ))}
      </ul>
    </div>
  );
}
