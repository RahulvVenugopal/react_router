import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { logout } from '../auth';

export default function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/', { replace: true });
  }

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar card">
        <h2 style={{marginTop:0}}>Dashboard</h2>
        <nav className="dashboard-nav">
          <Link to="profile">Profile</Link>
          <Link to="settings">Settings</Link>
          <Link to="notifications">Notifications</Link>
        </nav>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </aside>

      <section className="dashboard-content">
        <Outlet />
      </section>
    </div>
  );
}
