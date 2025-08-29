import axios from 'axios';
import { BASE_URL } from './baseURL';

const API_BASE = `${BASE_URL}api/users`;

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const register = async (data) => {
  try {
    const response = await api.post(`${API_BASE}/register/`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Registration failed' };
  }
};

export const login = async (data) => {
  try {
    const response = await api.post(`${API_BASE}/login/`, data);
    
    // Store token and user data
    if (response.data.access) {
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Login failed' };
  }
};

export const requestReset = async (data) => {
  try {
    const response = await api.post(`${API_BASE}/request-reset-password/`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Reset request failed' };
  }
};

export const resetPassword = async (uidb64, token, data) => {
  try {
    const response = await api.post(`${API_BASE}/reset-password/${uidb64}/${token}/`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Password reset failed' };
  }
};

export const verifyEmail = async (uidb64, token) => {
  try {
    const response = await api.get(`${API_BASE}/verify-email/${uidb64}/${token}/`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Verification failed' };
  }
};

// Add a function to get the user profile
export const getUserProfile = async () => {
  try {
    const response = await api.get('/api/user/profile/');
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return null; // Profile doesn't exist yet
    }
    throw error.response?.data || { error: 'Failed to get profile' };
  }
};

// Add a function to save the user profile
export const saveUserProfile = async (data) => {
  try {
    const response = await api.post('/api/user/profile/', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to save profile' };
  }
};

// Add a function to delete account
export const deleteAccount = async () => {
  try {
    const response = await api.delete('/api/user/delete-account/');
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to delete account' };
  }
};

export default api;