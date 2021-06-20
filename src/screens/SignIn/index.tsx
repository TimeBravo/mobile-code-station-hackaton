import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { 
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { useAuth } from '../../hooks/auth';

import Logotipo from '../../assets/Logo.png';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Footer,
  Form,
  Logo
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { signIn } = useAuth();

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
  
        password: Yup.string()
          .required('A senha é obrigatória')
      });
  
      await schema.validate({ email, password });
      
      signIn({ email, password });
    } catch (error) {
       if(error instanceof Yup.ValidationError){
        Alert.alert('Opa', error.message)
       } else {
         console.log(error)
        Alert.alert('Erro na autenticação', 
        'Ocorreu um erro ao fazer login, verifique as credencias')
       }
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
        <StatusBar 
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Header>
          <Logo source={Logotipo} resizeMode="contain" />
        </Header>

      <Form>
          <Input 
            iconName="mail"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />
          <PasswordInput 
            iconName="lock"
            placeholder="Senha"
            onChangeText={setPassword}
            value={password}
          />
      </Form>

        <Footer>
          <Button 
            title="Login"
            onPress={handleSignIn}
            enabled={true}
            loading={false}
          />
        </Footer>
      </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}