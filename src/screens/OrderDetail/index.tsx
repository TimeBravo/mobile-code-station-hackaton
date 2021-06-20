import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { BackButton } from '../../components/BackButton';
import { OrderDTO } from '../../dtos/OrderDTO';

import {
  Container,
  Header,
  Title,
  ButtonsContainer,
  ButtonImage,
  ButtonApprove,
  ButtonDescription
} from './styles';
import api from '../../services/api';

interface Params {
  order: OrderDTO;
}

interface StageParams {
  description: string;
  id: string;
  name: string;
  pictures_url: string[];
  status: string;
}

export function OrderDetail() {
  const [stageOrder, setStageOrder] = useState<StageParams>({} as StageParams);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const { order } = route.params as Params;

  useEffect(() => {
    let isMounted = true;

    async function fetchOrder() {
      try {
        const response = await api.get(`/order/${order.id}`);
        if (isMounted) {
          const [stages] = response.data.stages.filter(stage => stage.status === 'STARTED');

          setStageOrder(stages)
        }
      } catch (error) {
        console.log(error)
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchOrder();

    // Previne memory leak
    return () => {
      isMounted = false;
    };
  }, []);

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

    if (result.cancelled) {
      return;
    }

    if (result.uri) {
      const formData = new FormData();
      formData.append('report_images', result.uri);

      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }

      const response = await api.patch(`/stage/${stageOrder.id}`, formData, config);

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Imagem adicionada com sucesso!');
      }
    }
  }

  async function handleApproveStage() {
    try {
      console.log(stageOrder.id)
      const response = await api.put(`/stage/${stageOrder.id}`);

      if (response.status === 200) {
        Alert.alert('Step atual', 'O step atual foi atualizado com sucesso!')
        handleBack();
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  async function handleOpenGalery() {
    navigation.navigate('Gallery', { order });
  }

  console.log(stageOrder)

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={handleBack} />
        <Title>
          {stageOrder.name}
        </Title>
      </Header>

      <ButtonsContainer>
        {stageOrder?.pictures_url?.length > 0 &&
          <>
            <ButtonImage onPress={handleOpenGalery}>
              <Feather name="image" size={60} color="#fff" />
            </ButtonImage>
            <ButtonDescription>
              Abrir Galeria
            </ButtonDescription>
          </>}

        <ButtonApprove onPress={handleOPenCamera}>
          <Feather name="camera" size={60} color="#fff" />
        </ButtonApprove>
        <ButtonDescription>
          Abrir câmera
        </ButtonDescription>

        <ButtonApprove onPress={handleApproveStage}>
          <Feather name="check-circle" size={60} color="#fff" />
        </ButtonApprove>
        <ButtonDescription>
          Aprovar step
        </ButtonDescription>
      </ButtonsContainer>
    </Container>
  );
}