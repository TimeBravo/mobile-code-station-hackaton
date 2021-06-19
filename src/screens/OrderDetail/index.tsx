import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { BackButton } from '../../components/BackButton';

import {
  Container,
  Header,
  Title,
  ButtonsContainer,
  ButtonImage,
  ButtonApprove,
  ButtonDescription
} from './styles';

export function OrderDetail() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  async function handleOPenCamera() {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={handleBack}/>
        <Title>
          Teste de step atual
        </Title>
      </Header>

      <ButtonsContainer>
        <ButtonImage onPress={handleOPenCamera}>
          <Feather name="camera" size={60} color="#fff" />
        </ButtonImage>
        <ButtonDescription>
          Abrir câmera
        </ButtonDescription>

        <ButtonApprove>
          <Feather name="check-circle" size={60} color="#fff" />
        </ButtonApprove>
        <ButtonDescription>
          Aprovar step
        </ButtonDescription>
      </ButtonsContainer>
    </Container>
  );
}