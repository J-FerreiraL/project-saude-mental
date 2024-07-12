// src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // URL base do seu backend
});

export const fetchWellnessTips = async () => {
  try {
    const response = await api.get('/wellness-tips');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dicas de bem-estar:', error);
    throw error;
  }
};

// Adicione mais funções para outras chamadas de API conforme necessário
