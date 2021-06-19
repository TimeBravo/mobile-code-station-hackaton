import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.poppins_600};
  color: ${({ theme }) => theme.colors.title};

  margin-left: 40px;
`;

export const ButtonsContainer = styled.View`
  /* background-color: ${({ theme }) => theme.colors.main}; */
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const ButtonImage = styled(RectButton)`
  width: 150px;
  height: 150px;
  
  border-radius: 40px;

  background-color: ${({ theme }) => theme.colors.main_light};

  align-items: center;
  justify-content: center;
`;

export const ButtonApprove = styled(RectButton)`
  width: 150px;
  height: 150px;

  border-radius: 40px;

  margin-top: 32px;

  background-color: ${({ theme }) => theme.colors.main_light};

  align-items: center;
  justify-content: center;
`;

export const ButtonDescription = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.poppins_600};
  color: ${({ theme }) => theme.colors.title};
`;