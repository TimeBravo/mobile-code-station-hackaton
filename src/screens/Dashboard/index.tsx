import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// import Logo from '../../assets/logo.svg';

import { Order } from '../../components/Order';

// import api from '../../services/api';

// import { CarDTO } from '../../dtos/CarDTO';

// import { LoadAnimation } from '../../components/LoadAnimation';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  OrderList
} from './styles';

export function Dashboard() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  // function handleCarDetails(car: CarDTO) {
  //   navigation.navigate('CarDetails', { car })
  // }

  // useEffect(() => {
  //   let isMounted = true;

  //   async function fetchCars() {
  //     try {
  //       const response = await api.get('/cars');
  //       if(isMounted) {
  //         setCars(response.data)
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     } finally {
  //       if(isMounted) {
  //         setLoading(false)
  //       }
  //     }
  //   }

  //   fetchCars();

  //   // Previne memory leak
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

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
          data={[1,2,3,4]}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Order />}
        />
      }
    </Container>
  );
}