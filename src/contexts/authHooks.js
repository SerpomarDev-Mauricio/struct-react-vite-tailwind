// src/contexts/authHooks.js
import { useContext } from 'react';
import { AuthContext } from './authConstants'; // Importa el contexto creado

// Hook Personalizado para Consumir el Contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};