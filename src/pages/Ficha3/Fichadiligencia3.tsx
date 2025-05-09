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
    { number: 1, label: "Dados Gerais", active: false },
    { number: 2, label: "Identificação do Candidato", active: false },
    { number: 3, label: "Familiares e Escolaridade", active: true },
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


        {/* Grupo familiar */}
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
            style={[styles.inputIdade]}
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

        {/* Escolaridade */}
        <View style={styles.section}>
        <Text style={styles.Titulos}>Escolaridade</Text>
        <TextInput
            style={[styles.input]}
            placeholder="Nome da instituição de ensino médio"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            value={nomeinstituicao}
            onChangeText={setNomeinstituicao}
          />
        </View>

        {/* Tipo de instituição */}
            <View style={styles.section}>
            <Text style={styles.Titulos}>Tipo de instituição</Text>
            <View style={[styles.row]}>
                
         {/* Opções de seleção */}
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

        {/* Campo de ano de conclusão */}
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
    AddButton: {
        backgroundColor: '#006497',
        paddingVertical: 10,
        paddingHorizontal: 55,
        borderRadius: 35,
        justifyContent: "center",
       marginRight: 10,
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