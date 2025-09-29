import axios from 'axios';
import type { LoginPayload, RegisterPayload, AuthResponse } from '@/types/auth';
import type { User } from '@/types/user';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Login user
export async function login(payload: LoginPayload): Promise<AuthResponse> {
  const res = await axios.post<AuthResponse>(`${API_URL}/users/login`, payload, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.data?.token) {
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
  }

  return res.data;
}

// Register user
export async function register(payload: RegisterPayload): Promise<AuthResponse> {
  const res = await axios.post<AuthResponse>(`${API_URL}/users/register`, payload, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.data?.token) {
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
  }

  return res.data;
}

// Logout
export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

// Get token
export function getToken() {
  return typeof window !== 'undefined' ? localStorage.getItem('token') : null;
}

// Get user
export function getUser(): User | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('user');
  return stored ? (JSON.parse(stored) as User) : null;
}
