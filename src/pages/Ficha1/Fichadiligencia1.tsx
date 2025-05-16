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
  { number: 1, label: "Dados Gerais" },
  { number: 2, label: "Identificação do Candidato" },
  { number: 3, label: "Familiares e Escolaridade" },
  { number: 4, label: "Socioeconômico e Habitação" },
  { number: 5, label: "Despesas e Transporte" },
]; const [currentStep, setCurrentStep] = useState(1);
  
  // Lista de itens do menu com ícones e labels
    const menuItems = [
  { label: 'Início', icon: require('../../assets/Home filled.png') },
  { label: 'Inscrição', icon: require('../../assets/Form.png') },
  { label: 'Pendências', icon: require('../../assets/Box Important.png') },
  { label: 'Requerimentos', icon: require('../../assets/Application Form.png') },
  { label: 'Recadastramento', icon: require('../../assets/user-pen-solid 1.png') },
  { label: 'Histórico de Candidaturas', icon: require('../../assets/History.png') },
  { label: 'Configurações', icon: require('../../assets/Automation.png') },
  { label: 'Ajuda e Suporte', icon: require('../../assets/Exittoapp.png') },
  { label: 'Sair', icon: require('../../assets/Exittoapp.png') },
  ];


  return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Container principal */}
      <View /*style={styles.inner}*/>
        {/* Menu Topo */}
        <View style={styles.menuHeader}>
          <TouchableOpacity onPress={toggleMenu}>
            <Image source={require('../../assets/Menu.png')} style={styles.logoMenu} />
          </TouchableOpacity>
          <Image source={require('../../assets/logo2.png')} style={styles.logoImage} />
          <Image source={require('../../assets/bell.png')} style={styles.bellIcon} />
        </View>
  
        {/* Menu Lateral em Modal */}
        <Modal visible={isMenuOpen} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={toggleMenu}>
                <Image source={require('../../assets/menu-close.png')} style={styles.menuFechar} />
              </TouchableOpacity>
  
              {menuItems.map((item, index) => (
                <TouchableOpacity key={index} style={styles.menuItem}>
                  <View style={styles.menuItemContent}>
                    <Image source={item.icon} style={styles.menuIcon} />
                    <Text style={styles.menuItemText}>{item.label}</Text>
                  </View>
                </TouchableOpacity>
              ))}
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
                 {steps.map((step) => {
                   const isCurrent = step.number === currentStep;
                   const isPast = step.number < currentStep;
       
                   const opacity = isPast ? 0.5 : 1;
                   const circleColor = isCurrent || isPast ? '#B0CB0E' : '#ccc';
                   const labelBgColor = isCurrent || isPast ? '#006497' : '#e5e7eb';
                   const labelTextColor = isCurrent || isPast ? '#fff' : '#374151';
       
                   return (
                     <View
                       key={step.number}
                       style={[styles.stepWrapper, { opacity }]}>
                       <View style={[styles.stepCircle, { backgroundColor: circleColor }]}>
                         <Text style={styles.stepNumber}>{step.number}</Text>
                       </View>
                       <View style={[styles.stepLabelContainer, { backgroundColor: labelBgColor }]}>
                         <Text style={[styles.stepLabel, { color: labelTextColor }]}>
                           {step.label}
                         </Text>
                       </View></View>
                   );
                 })}
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

    // Menu lateral
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: isDark ? '#0F1C2E' : '#fff',
    alignItems: 'center',
    paddingVertical: 1,
  //},
  //inner: {
    //width: containerWidth,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 25,
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
    height: '100%',
    backgroundColor: '#F3F3F3',
    padding: 20,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'flex-start',
  },
  logoMenu: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginLeft: -20,
  },
  logoImage: {
    width: 200,
    height: 40,
    resizeMode: 'contain',
  },
  bellIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  menuFechar: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  menuItem: {
    paddingVertical: 10,
    width: '100%',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  menuIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 12,
    color: '#1A2353',
  },
  menuItemText: {
    color: '#1A2353',
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0,
    textAlignVertical: 'center',
    flexShrink: 1,
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

     // Menu de rolagem horizontal (stepper)
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

  // Seções genéricas
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
        fontWeight: 'bold',
        height: 40,
        borderRadius: 60,
        borderWidth: 1,
        paddingTop: 10.5,
        paddingRight: 16,
        paddingBottom: 11.5,
        paddingLeft: 16, 
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