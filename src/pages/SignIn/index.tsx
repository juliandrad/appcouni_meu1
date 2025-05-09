import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useThemeContext } from '../../contexts/ThemeContext';

export default function LoginScreen() {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === 'dark';

  const { width: screenWidth } = useWindowDimensions(); // Agora usa useWindowDimensions para ser responsivo!

  const styles = getStyles(isDark, screenWidth);

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.inner}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
          resizeMode="contain"
        />

        <Text style={styles.login}>Login</Text>
        <Text style={styles.subtext}>
          Entre com suas credenciais para acessar.
        </Text>

        <TextInput
          placeholder="CPF"
          placeholderTextColor={isDark ? '#AAA' : '#333'}
          style={styles.input}
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor={isDark ? '#AAA' : '#333'}
            style={styles.inputPassword}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={secureText}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Feather
              name={secureText ? 'eye-off' : 'eye'}
              size={22}
              color={isDark ? '#FFF' : '#333'}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotText}>
            Esqueceu a senha? <Text style={styles.linkText}>Clique aqui.</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
          <Feather name={isDark ? 'sun' : 'moon'} size={20} color={isDark ? '#FFD700' : '#333'} />
          <Text style={styles.themeToggleText}>
            {isDark ? 'Modo claro' : 'Modo escuro'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Estilos atualizados
const getStyles = (isDark: boolean, screenWidth: number) => {
  // Definir largura máxima
  const containerWidth = screenWidth > 600 ? 500 : screenWidth * 0.9;

  return StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      backgroundColor: isDark ? '#0F1C2E' : '#fff',
      alignItems: 'center', // Centraliza tudo no ScrollView
      justifyContent: 'center',
      paddingVertical: 40,
    },
    inner: {
      width: containerWidth,
      alignItems: 'center',
    },
    logo: {
      width: containerWidth * 0.6,
      height: 120,
      marginBottom: 30,
    },
    login: {
      fontSize: 28,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      color: isDark ? '#FFF' : '#000',
      marginBottom: 10,
    },
    subtext: {
      alignSelf: 'flex-start',
      marginBottom: 20,
      color: isDark ? '#DDD' : '#666',
      fontSize: 16,
    },
    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderRadius: 25,
      paddingHorizontal: 20,
      marginBottom: 15,
      borderColor: isDark ? '#555' : '#ccc',
      color: isDark ? '#FFF' : '#000',
      fontSize: 16,
    },
    passwordContainer: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderRadius: 25,
      paddingHorizontal: 20,
      marginBottom: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: isDark ? '#555' : '#ccc',
    },
    inputPassword: {
      flex: 1,
      color: isDark ? '#FFF' : '#000',
      fontSize: 16,
    },
    loginButton: {
      width: '100%',
      borderRadius: 25,
      paddingVertical: 15,
      alignItems: 'center',
      marginBottom: 10,
      backgroundColor: isDark ? '#00AEEF' : '#005F92',
    },
    loginButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    registerButton: {
      width: '100%',
      borderWidth: 2,
      borderRadius: 25,
      paddingVertical: 12,
      alignItems: 'center',
      marginBottom: 20,
      borderColor: '#A3B00B',
    },
    registerButtonText: {
      color: '#A3B00B',
      fontWeight: 'bold',
      fontSize: 16,
    },
    forgotText: {
      fontSize: 14,
      color: isDark ? '#DDD' : '#666',
    },
    linkText: {
      color: '#00AEEF',
      fontWeight: 'bold',
    },
    themeToggle: {
      marginTop: 30,
      flexDirection: 'row',
      alignItems: 'center',
    },
    themeToggleText: {
      fontSize: 14,
      marginLeft: 8,
      color: isDark ? '#FFD700' : '#333',
    },
  });
};
