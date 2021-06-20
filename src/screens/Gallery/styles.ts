import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { OrderDTO } from '../../dtos/OrderDTO';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.poppins_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const OrderList = styled(FlatList as new () => FlatList<OrderDTO>).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showVerticalScrollIndicator: false,
})`
`;

export const MyCarsbutton = styled(RectButton)`
  width: 60px;
  height: 60px;
  
  border-radius: 30px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.main};

  position: absolute;
  bottom: 13px;
  right: 32px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.poppins_600};
  color: ${({ theme }) => theme.colors.title};

  margin-left: 40px;
`;

export const ContainerImages = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Photos = styled.Image`
  width: 200px;
  height: 200px;

  border-radius: 40px;

  margin-top: 10px;

  align-items: center;
  justify-content: center;
`;