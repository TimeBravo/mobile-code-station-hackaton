import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// import Logo from '../../assets/logo.svg';

import { Order } from '../../components/Order';

import api from '../../services/api';

import { OrderDTO } from '../../dtos/OrderDTO';

// import { LoadAnimation } from '../../components/LoadAnimation';

import {
  Container,
  Header,
  OrderList,
  Title,
  Photos,
  ContainerImages
} from './styles';
import { BackButton } from '../../components/BackButton';

interface Params {
  order: OrderDTO;
}

export function Gallery() {
  const [orders, setOrders] = useState<OrderDTO[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const { order } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchOrder() {
      try {
        const response = await api.get(`/order/${order.id}`);
        const [stages] = response.data.stages.filter(stage => stage.status === 'STARTED');

        console.log(JSON.stringify(stages));

        setOrders(stages)
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
          {orders.name}
        </Title>
      </Header>
      {loading ? <ActivityIndicator /> :
        <OrderList
          data={orders.pictures_url}
          keyExtractor={item => String(item)}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
          renderItem={({ item }) => (
            <ContainerImages>
              <Photos source={{ uri: String(item) }} />
            </ContainerImages>
          )}
        />
      }
    </Container>
  );
}