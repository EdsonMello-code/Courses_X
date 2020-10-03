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
  const { navigate } = useNavigation();

  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [isCorrect, setIsCorrect] = useState(true);


  async function handleAuthenticateUser() {
    try {
      if (!email || !password) {
        return setIsCorrect(false);
      }

      const user = { email, password };

      const response = await api.post('/authenticate', user);

      response && navigate('Modal')

    } catch (error) {
      console.log('Usuário não existe');
      console.log(error);
    }
  }

  function handleSaveEmail(text: string) {
    setEmail(text);
    // api.post('/users', { email })
  }


  function handleSavePassword(text: string) {
    setPassword(text);
    // api.post('/users', { email })
  }



  function handleNavigationRegister() {
    navigate('Register')
    console.log('deu certo em');
  }

  return (
    <Container>
      <Logo>Courses X</Logo>
      <Field>
        <Input
          placeholder='email@gmail.com'
          onChangeText={handleSaveEmail}
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

      <Buttons>

        <ButtonLogin onPress={handleAuthenticateUser}>
          <Text>Entrar</Text>
        </ButtonLogin>

        <ButtonRegister onPress={handleNavigationRegister}>
          <Text>Registrar</Text>
        </ButtonRegister>

      </Buttons>
    </Container>
  )
}

export default Register;