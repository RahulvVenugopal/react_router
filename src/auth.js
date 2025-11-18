// Very small auth helper using localStorage for demo purposes
export function login() {
  localStorage.setItem('auth', 'true');
}

export function logout() {
  localStorage.removeItem('auth');
}

export function isAuthenticated() {
  return localStorage.getItem('auth') === 'true';
}
