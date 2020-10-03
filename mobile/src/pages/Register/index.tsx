import React, { useState } from 'react';

import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api';

import {
  Container,
  Input,
  Logo,
  Field,
  Buttons,
  ButtonRegister,
  ButtonLogin
} from './styles';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>()
  const [name, setName] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [isCorrect, setIsCorrect] = useState(true);
  const [isError, setError] = useState(false);
  const [isRegisted, setRegister] = useState(false);

  const { navigate } = useNavigation();

  function handleNavigationLogin() {
    navigate('Login')
    console.log('deu certo em');
  }


  function handleSaveEmail(text: string) {
    setEmail(text);
  }

  function handleSaveName(text: string) {
    setName(text);
  }

  function handleSavePassword(text: string) {
    setPassword(text);
  }

  async function handleUserRegister() {
    try {
      setError(false);
      if (!email || !name || !password) {
        return setIsCorrect(false);
      }

      setIsCorrect(true);

      const user = { email, name, password };

      const registed = await api.post('/users', user);

      registed && setRegister(true);
      return registed && navigate('Modal')
    } catch (error) {
      setRegister(false);
      setError(true)
      console.log(error)
    }
  }

  return (
    <Container>
      <Logo>Cousers X</Logo>
      <Field>
        <Input
          placeholder='email@gmail.com'
          onChangeText={handleSaveEmail}

          style={isCorrect
            ? { borderStyle: 'solid', borderColor: 'green', borderWidth: 1 }
            : { borderStyle: 'solid', borderColor: 'red', borderWidth: 1 }}
        />

        <Input
          placeholder='Nome'
          onChangeText={handleSaveName}
          style={isCorrect
            ? { borderStyle: 'solid', borderColor: 'green', borderWidth: 1 }
            : { borderStyle: 'solid', borderColor: 'red', borderWidth: 1 }}
        />

        <Input
          placeholder='Senha'
          onChangeText={handleSavePassword}
          style={isCorrect
            ? { borderStyle: 'solid', borderColor: 'green', borderWidth: 1 }
            : { borderStyle: 'solid', borderColor: 'red', borderWidth: 1 }}
        />
      </Field>
      { isError && <Text
        style={{
          color: 'red',
          position: 'absolute',
          marginTop: -10
        }}>Email já cadastrado</Text>
      }

      { isRegisted && <Text
        style={{
          color: 'green',
          position: 'absolute',
          marginTop: -10
        }}>Cadastro realizado</Text>
      }
      <Buttons>
        <ButtonRegister onPress={handleUserRegister}>
          <Text>Registrar</Text>
        </ButtonRegister>
        <ButtonLogin onPress={handleNavigationLogin}>
          <Text>Entrar</Text>
        </ButtonLogin>
      </Buttons>
    </Container>
  )
}

export default Register;