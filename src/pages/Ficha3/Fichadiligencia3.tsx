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

  const [nomecompleto, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [parentesco, setParentesco] = useState('');
  const [estadocivil, setEstadoCivil] = useState('');
  const [profissao, setProfissao] = useState('');
  const [renda, setRenda] = useState('');
  const [nomeinstituicao, setNomeinstituicao] = useState('');
  const [anoconclusao, setAnoConclusao] = useState('');

  const [selectedForma, setSelectedForma] = useState('');
  const formaInstituicaoOptions = ['Pública', 'Privada'];

const steps = [
  { number: 1, label: "Dados Gerais" },
  { number: 2, label: "Identificação do Candidato" },
  { number: 3, label: "Familiares e Escolaridade" },
  { number: 4, label: "Socioeconômico e Habitação" },
  { number: 5, label: "Despesas e Transporte" },
];
  const [currentStep, setCurrentStep] = useState(3); // Por exemplo, passo 3

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

      {/* Grupo Familiar */}
      <View style={styles.section}>
        <Text style={styles.Titulos}>Grupo familiar dos residentes no mesmo domicílio</Text>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            placeholder="Nome Completo"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            value={nomecompleto}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.inputIdade}
            placeholder="Idade"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            value={idade}
            onChangeText={setIdade}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            placeholder="Parentesco"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            value={parentesco}
            onChangeText={setParentesco}
          />
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            placeholder="Estado Civil"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            value={estadocivil}
            onChangeText={setEstadoCivil}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Profissão"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            value={profissao}
            onChangeText={setProfissao}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            placeholder="Renda (R$)"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            value={renda}
            onChangeText={setRenda}
          />
          <TouchableOpacity style={styles.AddButton}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Card de exibição dos dados */}
      <View style={styles.card}>
        <View style={styles.row2}>
          <View>
            <Text style={styles.label}>Nome Completo</Text>
            <Text style={styles.value}>{nomecompleto}</Text>
          </View>
          <View >
            <Text style={styles.label}>Idade</Text>
            <Text style={styles.value}>{idade}</Text>
          </View>
          <View >
            <Text style={styles.label}>Parentesco</Text>
            <Text style={styles.value}>{parentesco}</Text>
          </View>
          <View >
            <Text style={styles.label}>Estado Civil</Text>
            <Text style={styles.value}>{estadocivil}</Text>
          </View>
          <View >
            <Text style={styles.label}>Profissão</Text>
            <Text style={styles.value}>{profissao}</Text>
          </View>
          <View>
            <Text style={styles.label}>Renda (R$)</Text>
            <Text style={styles.value}>{parseFloat(renda).toFixed(2)}</Text>
          </View>
          <View>
            <Image source={require('../../assets/Delete.png')} style={styles.DeleteIcon} />
          </View>
        </View>
      </View>

      {/* Escolaridade */}
      <View style={styles.section}>
        <Text style={styles.Titulos}>Escolaridade</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome da instituição de ensino médio"
          placeholderTextColor={isDark ? '#aaa' : '#888'}
          value={nomeinstituicao}
          onChangeText={setNomeinstituicao}
        />
      </View>

      {/* Tipo de instituição */}
      <View style={styles.section}>
        <Text style={styles.Titulos}>Tipo de instituição</Text>
        <View style={styles.row}>
          <View style={[styles.horizontalOptions, { flex: 2 }]}>
            {formaInstituicaoOptions.map((option) => (
              <TouchableOpacity key={option} style={styles.optionContainer} onPress={() => setSelectedForma(option)}>
                <View style={[styles.radioCircle, selectedForma === option && styles.radioCircleSelected]}>
                  {selectedForma === option && <Feather name="check" size={14} color="#fff" />}
                </View>
                <Text style={styles.optionLabel}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Ano de conclusão"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            value={anoconclusao}
            onChangeText={setAnoConclusao}
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* Botões */}
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


  // Botão voltar ficha de diligência
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
        marginBottom: 10,
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
        fontWeight: 'bold',
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

    inputIdade: {
      fontWeight: 'bold',
        width: 198,
        height: 40,
        borderRadius: 60,
        borderWidth: 1,
        paddingTop: 10.5,
        paddingRight: 16,
        paddingBottom: 11.5,
        paddingLeft: 10,
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
    horizontalOptions: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    AddButton: {
        backgroundColor: '#006497',
        paddingVertical: 10,
        paddingHorizontal: 55,
        borderRadius: 35,
        justifyContent: "center",
       marginRight: 10,
    },
    // card informativo pessoal
    card: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
    },
    row2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6,
      flexWrap: 'wrap',
      fontFamily: 'Open Sans',
      fontWeight: '600',
      fontSize: 13,
      lineHeight: 15,
      letterSpacing: 0,
    },
    infoGroup: {
      flex: 1,
      minWidth: '30%',
      marginBottom: 4,
    },
    label: {
      fontSize: 12,
      color: '#555',
      fontWeight: '600',
    },
    value: {
      fontSize: 14,
      color: '#000',
    },
    DeleteIcon: {
      padding: 6,
      alignSelf: 'flex-start',
      flexWrap: 'wrap',
    },

    //BOTÕES FINAL DA TELA
    saveButton: {
      backgroundColor: '#B0CB0E',
      marginTop: 50,
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 35,
      marginRight: 10,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 30,
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