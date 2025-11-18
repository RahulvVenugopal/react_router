# React Router SPA with Protected Nested Dashboard

This is a minimal Single Page Application demonstrating React Router v6 with a Dashboard that contains nested routes (Profile, Settings, Notifications) and protected routing that requires login.

How to run (Windows):

1. Install dependencies:

```bash
cd c:\Users\anuge\Downloads\react_router
npm install
```

2. Start dev server:

```bash
npm start
```

App routes:
- / -> Home
- /login -> Login page (fake auth)
- /dashboard -> Protected dashboard layout; nested routes:
  - /dashboard/profile
  - /dashboard/settings
  - /dashboard/notifications

Notes:
- This example uses localStorage for a tiny fake auth. It's only for demo purposes.
