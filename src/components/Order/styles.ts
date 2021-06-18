import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin-bottom: 16px;
`;

export const Details = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_500};
  color: ${({ theme }) => theme.colors.main_light};
  font-size: ${RFValue(15)}px;

  text-transform: uppercase;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;

export const About = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;

  margin-top: 16px;
`;

export const OrderColumn = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(15)}px;
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: 167px;
  height: 85px;
`;