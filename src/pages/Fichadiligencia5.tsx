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

  const [nomepessoadef, setNomePessoaDef] = useState('');
  const [deficiencia, setDeficiencia] = useState('');
  const [nomepessoacronica, setNomePessoaCronica] = useState('');
  const [nomecronica, setNomeCronica] = useState('');
  const [valordespesas, setValorDespesas] = useState('');
  const [alimentacao, setAlimentacao] = useState('');
  const [gas, setGas] = useState('');
  const [internet, setInternet] = useState('');
  const [agua, setAgua] = useState('');
  const [luz, setLuz] = useState('');
  const [condominio, setCondominio] = useState('');
  const [obs, setObs] = useState('');
  const [outrotransporte, setOutroTransporte] = useState('');
  const [transporteproprio, setTransporteProprio] = useState('');
  const [familiarperguntas, setFamiliarPerguntas] = useState('');
  const [obsadicional, setObsadicional] = useState('');

  const [selectedForma, setSelectedForma] = useState('');
  const formaOptions = ['Não', 'Sim'];

  const [selectedFormaSN, setSelectedFormaSN] = useState('');
  const formaSNOptions = ['Não', 'Sim'];

  const [selectedFormaSNN, setSelectedFormaSNN] = useState('');
  const formaSNNOptions = ['Não', 'Sim'];

  const [selectedForma2, setSelectedForma2] = useState('');
  const formaTransporteOptions = [
    'Transporte Público (Custo Próprio)',
    'Transporte Público (Vale Transporte/Cartão Tarifa Social)',
    'Transporte fornecido pelo empregador',
    'A pé',
    'Outros',
  ];

  const [selectedForma3, setSelectedForma3] = useState('');
  const formaMeioTransporteOptions = ['Carro', 'Moto', 'Bicicleta', 'Bicicleta Elétrica', 'Outros'];

  const [selectedForma4, setSelectedForma4] = useState('');
  const formaRespostasOptions = ['Candidato(a)', 'Domiciliado/Familiar'];

  const steps = [
    { number: 1, label: 'Dados Gerais' },
    { number: 2, label: 'Identificação do Candidato' },
    { number: 3, label: 'Familiares e Escolaridade' },
    { number: 4, label: 'Socioeconômico e Habitação' },
    { number: 5, label: 'Despesas e Transporte' },
  ];
  const [currentStep, setCurrentStep] = useState(5);

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
      <View>
        <View style={styles.menuHeader}>
          <TouchableOpacity onPress={toggleMenu}>
            <Image source={require('../../assets/Menu.png')} style={styles.logoMenu} />
          </TouchableOpacity>
          <Image source={require('../../assets/logo2.png')} style={styles.logoImage} />
          <Image source={require('../../assets/bell.png')} style={styles.bellIcon} />
        </View>

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

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.backIconWrapper}>
            <Feather name="chevron-left" size={20} color="#0F4C81" />
          </View>
          <Text style={styles.backText}>Ficha de Diligência</Text>
        </TouchableOpacity>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.stepperScrollContainer}
        >
          {steps.map((step) => {
            const isCurrent = step.number === currentStep;
            const isPast = step.number < currentStep;

            const opacity = isPast ? 0.5 : 1;
            const circleColor = isCurrent || isPast ? '#B0CB0E' : '#ccc';
            const labelBgColor = isCurrent || isPast ? '#006497' : '#e5e7eb';
            const labelTextColor = isCurrent || isPast ? '#fff' : '#374151';

            return (
              <View key={step.number} style={[styles.stepWrapper, { opacity }]}>
                <View style={[styles.stepCircle, { backgroundColor: circleColor }]}>
                  <Text style={styles.stepNumber}>{step.number}</Text>
                </View>
                <View style={[styles.stepLabelContainer, { backgroundColor: labelBgColor }]}>
                  <Text style={[styles.stepLabel, { color: labelTextColor }]}>{step.label}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

<ScrollView>
  <View style={styles.section}>
    <Text style={styles.Titulos}>Estimativa de Despesas Diversas</Text>
    <Text style={styles.Titulo2}>Há no domicílio, pessoas com deficiências (PCD)?</Text>
    <View style={styles.row}>
      <View style={[styles.horizontalOptions, { flex: 1, marginRight: 10 }]}>
        {formaOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.optionContainer}
            onPress={() => setSelectedForma(option)}
          >
            <View style={[styles.radioCircle, selectedForma === option && styles.radioCircleSelected]}>
              {selectedForma === option && <Feather name="check" size={14} color="#fff" />}
            </View>
            <Text style={styles.optionLabel}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={[styles.input, { flex: 1, marginRight: 10 }]}
        placeholder="Nome"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={nomepessoadef}
        onChangeText={setNomePessoaDef}
      />
      <TextInput
        style={styles.input}
        placeholder="Deficiência"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={deficiencia}
        onChangeText={setDeficiencia}
      />
    </View>

    <Text style={styles.Titulo2}>O/a Candidato(a) e/ou familiar possui doenças crônicas?</Text>
    <View style={styles.row}>
      <View style={[styles.horizontalOptions, { flex: 1 }]}>
        {formaSNOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.optionContainer}
            onPress={() => setSelectedFormaSN(option)}
          >
            <View style={[styles.radioCircle, selectedFormaSN === option && styles.radioCircleSelected]}>
              {selectedFormaSN === option && <Feather name="check" size={14} color="#fff" />}
            </View>
            <Text style={styles.optionLabel}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={[styles.input, { flex: 1, marginRight: 10 }]}
        placeholder="Nome"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={nomepessoacronica}
        onChangeText={setNomePessoaCronica}
      />
      <TextInput
        style={styles.input}
        placeholder="Doença Crônica"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={nomecronica}
        onChangeText={setNomeCronica}
      />
    </View>

    <Text style={styles.Titulo2}>Estimativa de despesas mensais com medicações e ou tratamento de doenças crônicas:</Text>
    <TextInput
      style={styles.inputValorMedio}
      placeholder="Valor Médio (R$)"
      placeholderTextColor={isDark ? '#aaa' : '#888'}
      value={valordespesas}
      onChangeText={setValorDespesas}
    />

    <Text style={styles.Titulo2}>Utiliza medicação fornecida pelo Setor Público?</Text>
    <View style={[styles.horizontalOptions, { flex: 1, marginBottom: 20 }]}>
      {formaSNNOptions.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.optionContainer}
          onPress={() => setSelectedFormaSNN(option)}
        >
          <View style={[styles.radioCircle, selectedFormaSNN === option && styles.radioCircleSelected]}>
            {selectedFormaSNN === option && <Feather name="check" size={14} color="#fff" />}
          </View>
          <Text style={styles.optionLabel}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
  </ScrollView>
      
      <ScrollView>
  {/* Estimativa das despesas mensais */}
  <View style={styles.section}>
    <Text style={styles.Titulo2}>Estimativa das despesas mensais:</Text>
    <View style={styles.row}>
      <TextInput
        style={[styles.input, { flex: 1, marginRight: 10 }]}
        placeholder="Alimentação (R$)"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={alimentacao}
        onChangeText={setAlimentacao}
      />
      <TextInput
        style={[styles.input, { flex: 1, marginRight: 10 }]}
        placeholder="Gás (R$)"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={gas}
        onChangeText={setGas}
      />
      <TextInput
        style={[styles.input, { flex: 1, marginRight: 10 }]}
        placeholder="Internet (R$)"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={internet}
        onChangeText={setInternet}
      />
    </View>
    <View style={styles.row}>
      <TextInput
        style={[styles.input, { flex: 1, marginRight: 10 }]}
        placeholder="Água (R$)"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={agua}
        onChangeText={setAgua}
      />
      <TextInput
        style={[styles.input, { flex: 1, marginRight: 10 }]}
        placeholder="Luz (R$)"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={luz}
        onChangeText={setLuz}
      />
      <TextInput
        style={[styles.input, { flex: 1, marginRight: 10 }]}
        placeholder="Condomínio (R$)"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={condominio}
        onChangeText={setCondominio}
      />
    </View>
  </View>

  {/* Observações */}
  <View style={styles.section}>
    <Text style={styles.Titulo2}>Observações:</Text>
    <View style={styles.row}>
      <TextInput
        style={[styles.inputOBS]}
        placeholder="Descreva"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={obs}
        onChangeText={setObs}
      />
    </View>
  </View>
      </ScrollView>

      <ScrollView>
  {/* Meios de transporte */}
  <View style={styles.section}>
    <Text style={styles.Titulos}>Meios de Transporte do Candidato e/ou Domiciliados</Text>
    <Text style={styles.Titulo2}>Meio de transporte utilizado para trabalho/estudo:</Text>
    <View style={styles.row}>
      <View style={[styles.horizontalOptions, { flex: 2, marginRight: 10 }]}>
        {formaTransporteOptions.map((option) => (
          <TouchableOpacity key={option} style={styles.optionContainer} onPress={() => setSelectedForma2(option)}>
            <View style={[styles.radioCircle, selectedForma2 === option && styles.radioCircleSelected]}>
              {selectedForma2 === option && <Feather name="check" size={14} color="#fff" />}
            </View>
            <Text style={styles.optionLabel}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={[styles.inputOutros, { flex: 1, marginRight: 10 }]}
        placeholder="Qual?"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={outrotransporte}
        onChangeText={setOutroTransporte}
      />
    </View>

    <Text style={styles.Titulo2}>Candidato(a) e/ou familiar possui transporte próprio?</Text>
    <View style={styles.row}>
      <View style={[styles.horizontalOptions, { flex: 1, marginRight: 10 }]}>
        {formaOptions.map((option) => (
          <TouchableOpacity key={option} style={styles.optionContainer} onPress={() => setSelectedForma(option)}>
            <View style={[styles.radioCircle, selectedForma === option && styles.radioCircleSelected]}>
              {selectedForma === option && <Feather name="check" size={14} color="#fff" />}
            </View>
            <Text style={styles.optionLabel}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.horizontalOptions, { flex: 2, marginRight: 10 }]}>
        {formaMeioTransporteOptions.map((option) => (
          <TouchableOpacity key={option} style={styles.optionContainer} onPress={() => setSelectedForma3(option)}>
            <View style={[styles.radioCircle, selectedForma3 === option && styles.radioCircleSelected]}>
              {selectedForma3 === option && <Feather name="check" size={14} color="#fff" />}
            </View>
            <Text style={styles.optionLabel}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={[styles.inputOutros, { flex: 1, marginRight: 10 }]}
        placeholder="Qual?"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={transporteproprio}
        onChangeText={setTransporteProprio}
      />
    </View>
  </View></ScrollView>

    <ScrollView>
  {/* Finalização */}
  <View style={styles.section}>
    <Text style={styles.Titulos}>Finalização</Text>
    <Text style={styles.Titulo2}>Quem respondeu as perguntas durante a visita?</Text>
    <View style={styles.row}>
      <View style={[styles.horizontalOptions, { flex: 1, marginRight: 10 }]}>
        {formaRespostasOptions.map((option) => (
          <TouchableOpacity key={option} style={styles.optionContainer} onPress={() => setSelectedForma4(option)}>
            <View style={[styles.radioCircle, selectedForma4 === option && styles.radioCircleSelected]}>
              {selectedForma4 === option && <Feather name="check" size={14} color="#fff" />}
            </View>
            <Text style={styles.optionLabel}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={[styles.input, { flex: 1, marginRight: 10 }]}
        placeholder="Nome"
        placeholderTextColor={isDark ? '#aaa' : '#888'}
        value={familiarperguntas}
        onChangeText={setFamiliarPerguntas}
      />
    </View>
  </View>
  </ScrollView>

            <ScrollView>{/* Observações adicionais */}
            <View style={styles.section}>
            <Text style={styles.Titulo2}>Observações adicionais:</Text>
            <View style={styles.row}>
            <TextInput
            style={[styles.inputOBS]}
            placeholder="Descreva"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            value={obsadicional}
            onChangeText={setObsadicional}
          />
          </View>
        </View>
        </ScrollView>

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
  },
  inner: {
    width: containerWidth,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 25,
    marginHorizontal: 10,
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
    marginLeft: 20,
    padding: 10,
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
    marginLeft: 5,
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
    marginLeft: 20,
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
    marginLeft: 20,
    marginRight: 20,
  },
  //campos de texto
    Titulos: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 29.6,
    marginBottom: 10,
    marginLeft: 20,
    color: isDark ? '#fff' : '#000',
    },
    Titulo2: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 13.33,
    lineHeight: 13.33, // 100% de 13.33px
    letterSpacing: 0,
    textAlignVertical: 'center',
    padding: 5,
    marginLeft: 20,
    },
    input: {
        fontWeight: 'bold',
        height: 40,
        borderRadius: 60,
        borderWidth: 1,
        paddingHorizontal: 12,
        borderColor: 'rgba(0, 30, 49, 1)',
        fontSize: 16,
        marginLeft: 20,
    },
    input2: {
        fontWeight: 'bold',
        height: 118,
        borderRadius: 50,
        borderWidth: 1,
        paddingHorizontal: 12,
        borderColor: 'rgb(0, 0, 0)',
        fontSize: 16,
        //borderColor: isDark ? '#555' : '#ccc',
        color: isDark ? '#fff' : '#000',
        backgroundColor: isDark ? '#1e293b' : '#f9fafb',
        marginLeft: 20,
      },

    inputIdade: {
      //fontWeight: 'bold',
        width: 198,
        height: 40,
        borderRadius: 60,
        borderWidth: 1,
        paddingTop: 10.5,
        paddingRight: 16,
        paddingBottom: 11.5,
        paddingLeft: 10,
        marginLeft: 20,
    },
    inputOBS: {
        //fontWeight: 'bold',
        width: 760,
        height: 118,
        borderRadius: 30,
        borderWidth: 1,
        paddingRight: 16,
        paddingBottom: 11.5,
        paddingLeft: 10,
        paddingHorizontal: 12,
        borderColor: 'rgb(0, 0, 0)',
        fontSize: 16,
        marginLeft: 20,
    },
    inputValorMedio:{
      //fontWeight: 'bold',
      width: 350,
      height: 50,
      borderRadius: 60,
      borderWidth: 1,
      paddingHorizontal: 10,
      marginLeft: 20,
    },
    inputOutros: {
      //fontWeight: 'bold',
        width: 198,
        height: 40,
        borderRadius: 60,
        borderWidth: 1,
        paddingTop: 10.5,
        paddingRight: 16,
        paddingBottom: 11.5,
        paddingLeft: 10,
        marginTop: 90,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      marginLeft: 20,
    },
    radioCircle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'rgb(0, 0, 0)',
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