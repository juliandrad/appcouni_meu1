import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Modal,
} from 'react-native';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const { width: screenWidth } = useWindowDimensions();
  const styles = getStyles(isDark, screenWidth);
  const navigation = useNavigation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inner}>
    {/* Menu Topo */}
    <View style={styles.menuHeader}>
      <TouchableOpacity onPress={toggleMenu}>
      <Image
                source={require('../../assets/Menu.png')}
                style={styles.logoMenu}/>
      </TouchableOpacity>
      <Image
      source={require('../../assets/logo2.png')}
      style={styles.logoImage}/>

      <Image
      source={require('../../assets/bell.png')}
      style={styles.bellIcon}/>
    </View> </View>

 {/* Menu Lateral em Modal */}
<Modal visible={isMenuOpen} transparent animationType="fade">
  <View style={styles.modalOverlay}>
    <View style={styles.modalContent}>
      <TouchableOpacity onPress={toggleMenu}>
        <Image
          source={require('../../assets/menu-close.png')}
          style={styles.menuFechar}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemContent}>
          <Image source={require('../../assets/Home filled.png')} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Início</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemContent}>
          <Image source={require('../../assets/Form.png')} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Inscrição</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemContent}>
          <Image source={require('../../assets/Box Important.png')} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Pendências</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemContent}>
          <Image source={require('../../assets/Application Form.png')} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Requerimentos</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemContent}>
          <Image source={require('../../assets/user-pen-solid 1.png')} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Recadastramento</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemContent}>
          <Image source={require('../../assets/History.png')} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Histórico de Candidaturas</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemContent}>
          <Image source={require('../../assets/Automation.png')} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Configurações</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemContent}>
          <Image source={require('../../assets/Exittoapp.png')} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Ajuda e Suporte</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuItemContent}>
          <Image source={require('../../assets/Exittoapp.png')} style={styles.menuIcon} />
          <Text style={styles.menuItemText}>Sair</Text>
        </View>
      </TouchableOpacity>
         </View>
        </View>
        </Modal>

        <View>
            Inserir aqui o carrosel
        </View>
        </ScrollView>

  );
}

const getStyles = (isDark: boolean, screenWidth: number) => {
  const containerWidth = screenWidth > 600 ? 500 : screenWidth * 0.9;

  return StyleSheet.create({

    //menu lateral
    scrollContainer: {
      flexGrow: 1,
      backgroundColor: isDark ? '#0F1C2E' : '#fff',
      alignItems: 'center',
      paddingVertical: 1,
    },
    inner: { width: containerWidth },
    menuHeader: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      borderRadius: 8,
      marginBottom: 20,
    },
    menuTitle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    modalContent: {
      width: 322,
      height: 800,
      backgroundColor: '#F3F3F3',
      padding: 20,
      gap: 4,
      borderTopRightRadius: 16,
      borderBottomRightRadius: 16,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    logoMenu: {
      width: 40,
      height: 40,
      left: -115,
      position: 'relative',
      resizeMode: 'contain',
    },
    menuFechar: {
      width: 20,
      height: 20,
      position: 'relative',
      resizeMode: 'contain',
      padding: 15,
      right: -250,
    },
    closeButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    menuItem: {
      paddingVertical: 10,
    },
    menuItemText: {
      color: '#1A2353',
      fontSize: 16,
      fontFamily: 'Montserrat',
      fontWeight: '500',
      lineHeight: 16,
      letterSpacing: 0,
      textAlignVertical: 'center', // equivalente a vertical-align: middle
    },
    menuIcon: {
      width: 24,
      height: 24,
      color: '#1A2353',
      resizeMode: 'contain',
      marginRight: 12, 
    },
    menuItemContent: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12, 
    },
    bellIcon: {
      width: 20,
      height: 20,
      left: 110,
      color: '#1A2353',
      position: 'relative',
      resizeMode: 'contain',
    },

    //logo central
    logoImage: {
        width: 286,
        height: 40,
        position: "relative",
        resizeMode: 'contain',
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      marginBottom: 20,
    },
    backIconWrapper: {
      width: 32,
      height: 32,
      borderRadius: 16,
      borderWidth: 2,
      borderColor: '#0F4C81',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
    },
    backText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#0F4C81',
    },

  });
};