import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { OrderDTO } from '../../dtos/OrderDTO';

import {
  Container,
  Details,
  Title,
  Description,
  About,
  OrderColumn,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

interface Props extends RectButtonProps {
  data: OrderDTO;
}

export function Order({ data, ...rest } : Props){

  return (
    <Container {...rest}>
      <Details>
        <About>
          <OrderColumn>
            <Title>Produto</Title>
            <Description>{data.productName}</Description>
          </OrderColumn>
          
          {/* <OrderColumn>
            <Title>Emissão</Title>
            <Description>15/06/2021</Description>
          </OrderColumn> */}
        </About>

        <About style={{marginBottom: 16 }}>
          <OrderColumn>
            <Title>Cliente</Title>
            <Description>{data.clientName}</Description>
          </OrderColumn>
          
          <OrderColumn>
            <Title>Data da ordem</Title>
            <Description>{data.createdAt}</Description>
          </OrderColumn>
        </About>
      </Details>
    </Container>
  );
}