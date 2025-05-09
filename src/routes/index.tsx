import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { AuthContext } from '../contexts/AuthContext';
import { useThemeContext } from '../contexts/ThemeContext'; // 🔥 aqui entra o tema

function Routes() {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  // ⚠️ Substitua com seu contexto real
  const isAuthenticated = false;
  const loading = false;

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: isDark ? '#0F1C2E' : '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator size={60} color={isDark ? '#FFF' : '#333'} />
      </View>
    );
  }

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
