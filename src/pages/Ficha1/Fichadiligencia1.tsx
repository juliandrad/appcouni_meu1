import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Modal,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
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

  const [motivo, setMotivo] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [curso, setCurso] = useState('');

  const [selectedForma, setSelectedForma] = useState('');
  const formaIngressoOptions = ['Vestibular', 'Enem', 'Em Curso / Declaração de Matrícula'];

  const steps = [
    { number: 1, label: "Dados Gerais", active: true },
    { number: 2, label: "Identificação do Candidato", active: false },
    { number: 3, label: "Familiares e Escolaridade", active: false },
    { number: 4, label: "Socioeconômico e Habitação", active: false },
    { number: 5, label: "Despesas e Transporte", active: false },
  ];

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
    </View>

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

      

        {/* Botão de Voltar */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.backIconWrapper}>
            <Feather name="chevron-left" size={20} color="#0F4C81" />
          </View>
          <Text style={styles.backText}>Ficha de Diligência</Text>
        </TouchableOpacity>

        {/* Etapas */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.stepperScrollContainer}>
          {steps.map((step) => (
            <View key={step.number} style={styles.stepWrapper}>
              <View style={[styles.stepCircle, { backgroundColor: step.active ? '#B0CB0E' : '#ccc' }]}>
                <Text style={styles.stepNumber}>{step.number}</Text>
              </View>
              <View style={[styles.stepLabelContainer, { backgroundColor: step.active ? '#006497' : '#e5e7eb' }]}>
                <Text style={[styles.stepLabel, { color: step.active ? '#fff' : '#374151' }]}>{step.label}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* MOTIVO DA INDICAÇÃO */}
        <View style={styles.section}>
          <Text style={styles.Titulos}>Motivo da Indicação da Diligência</Text>
          <TextInput
            style={styles.input2}
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            value={motivo}
            onChangeText={setMotivo}
          />
        </View>

        {/* DATA E HORA */}
        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            placeholder="Data"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            value={data}
            onChangeText={setData}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Hora"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            value={hora}
            onChangeText={setHora}
          />
        </View>

        {/* CURSO */}
        <View style={styles.section}>
          <Text style={styles.Titulos}>Curso</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            value={curso}
            onChangeText={setCurso}
          />
        </View>

        {/* FORMA DE INGRESSO */}
        <View style={styles.section}>
          <Text style={styles.Titulos}>Forma de Ingresso</Text>
          <View style={styles.horizontalOptions}>
            {formaIngressoOptions.map((option) => (
              <TouchableOpacity key={option} style={styles.optionContainer} onPress={() => setSelectedForma(option)}>
                <View style={[styles.radioCircle, selectedForma === option && styles.radioCircleSelected]}>
                  {selectedForma === option && <Feather name="check" size={14} color="#fff" />}
                </View>
                <Text style={styles.optionLabel}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* BOTÕES */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </View>
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

    //botão voltar ficha de diligencia
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

    //munu rolagem em tela
    stepperScrollContainer: {
      flexDirection: 'row',
      marginBottom: 30,
    },
    stepWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
    stepCircle: {
      width: 32,
      height: 32,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    stepNumber: {
      color: '#fff',
      fontWeight: 'bold',
      position: 'absolute',
    },
    stepLabelContainer: {
      marginLeft: -30,
      paddingLeft: 40,
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
    stepLabel: {
      fontSize: 12,
      fontWeight: '600',
    },
    section: {
      marginBottom: 20,
    },

    //campos de texto
    Titulos: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 29.6,
        letterSpacing: 0,
        textAlignVertical: 'center',
        marginBottom: 15,
        color: isDark ? '#fff' : '#000',
    },
    input: {
      height: 50,
      borderRadius: 60,
      borderWidth: 1,
      borderColor: 'rgba(0, 30, 49, 1)',   
      paddingHorizontal: 12,
      fontSize: 16,
        //borderColor: isDark ? '#555' : '#ccc',
      //color: isDark ? '#fff' : '#000',
      backgroundColor: isDark ? '#1e293b' : '#f9fafb',
    },
    input2: {
        height: 118,
        borderRadius: 16,
        borderWidth: 1,
        paddingHorizontal: 12,
        borderColor: 'rgba(0, 30, 49, 1)',
        fontSize: 16,
        //borderColor: isDark ? '#555' : '#ccc',
        color: isDark ? '#fff' : '#000',
        backgroundColor: isDark ? '#1e293b' : '#f9fafb',
      },
    row: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    radioCircle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#1e40af',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    radioCircleSelected: {
      backgroundColor: '#1e40af',
    },
    optionLabel: {
      fontSize: 14,
      color: isDark ? '#fff' : '#000',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 30,
    },
    horizontalOptions: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    saveButton: {
      backgroundColor: '#B0CB0E',
      marginTop: 50,
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 35,
      marginRight: 10,
    },
    nextButton: {
      backgroundColor: '#006497',
      paddingVertical: 10,
      marginTop: 50,
      paddingHorizontal: 30,
      borderRadius: 35,
      marginRight: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: '600',
    },
  });
};

// FALTA COLOCAR: AJUSTAR AOS TAMANHOS DO FIGMA, COLOCAR ICONS EM DATA E HORA, AJUSTAR O NOME DOS NUMERAIS, COLOCAR CALENDARIO E CAMPO PARA INSERIR HORA MAIS FACIL. 