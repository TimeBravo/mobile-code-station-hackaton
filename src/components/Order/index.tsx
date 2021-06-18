import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

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

// interface Props extends RectButtonProps {
//   data: CarDTO;
// }

export function Order(){

  return (
    <Container>
      <Details>
        <About>
          <OrderColumn>
            <Title>Ordem</Title>
            <Description>1</Description>
          </OrderColumn>
          
          {/* <OrderColumn>
            <Title>Emissão</Title>
            <Description>15/06/2021</Description>
          </OrderColumn> */}
        </About>

        <About style={{marginBottom: 16 }}>
          <OrderColumn>
            <Title>Descrição</Title>
            <Description>Criação de algo</Description>
          </OrderColumn>
          
          <OrderColumn>
            <Title>Etapa atual</Title>
            <Description>Corte</Description>
          </OrderColumn>
        </About>
      </Details>
    </Container>
  );
}