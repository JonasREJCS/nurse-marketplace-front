import axios from 'axios';

const API_URL = 'https://nurse-marketplace-back.onrender.com';

export const api = axios.create({
  baseURL: API_URL,
});

export const registerUser = (name: string, email: string, password: string) =>
  api.post('/users/create', { name, email, password });

export const loginUser = (email: string, password: string) =>
  api.post('/auth/login', { email, password });

export const getUserProfile = () =>
  api.get('/user/profile', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
