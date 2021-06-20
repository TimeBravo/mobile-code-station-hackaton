import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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
  HeaderContent,
  OrderList
} from './styles';

export function Dashboard() {
  const [orders, setOrders] = useState<OrderDTO[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function handleOrderDetail(order: OrderDTO) {
    navigation.navigate('OrderDetail', { order })
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchOrders() {
      try {
        const response = await api.get('/order');
        if(isMounted) {
          setOrders(response.data)
        }
      } catch (error) {
        console.log(error)
      } finally {
        if(isMounted) {
          setLoading(false)
        }
      }
    }

    fetchOrders();

    // Previne memory leak
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          {/* <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          /> */}
        </HeaderContent>
      </Header>
      { loading ? <ActivityIndicator /> :
        <OrderList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Order data={item} onPress={() => handleOrderDetail(item)} />}
        />
      }
    </Container>
  );
}