import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

import { AuthProvider } from './src/contexts/AuthContext';
import { ThemeProvider, useThemeContext } from './src/contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthProvider>
          <StatusBarConfig />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

// Componente para deixar o StatusBar dinâmico conforme o tema
function StatusBarConfig() {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <StatusBar
      backgroundColor={isDark ? '#0F1C2E' : '#fff'}
      barStyle={isDark ? 'light-content' : 'dark-content'}
      translucent={false}
    />
  );
}
