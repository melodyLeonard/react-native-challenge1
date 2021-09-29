import styled from 'styled-components/native';
import global from '../global/global.color';
import {normalizeFont} from '../global/global.function';

const colors = global.colors;

export const H1 = styled.Text`
  color: ${colors.text};
  letter-spacing: -2px;
  font-size: ${normalizeFont(36)}px;
  font-family: Futura-Bold;
`;

export const H2 = styled.Text`
  color: rgb(63, 172, 157);
  font-size: ${normalizeFont(32)}px;
  font-family: Futura-Bold;
`;

export const H3 = styled.Text`
  color: rgb(63, 172, 157);
  letter-spacing: -1px;
  font-family: Futura-Bold;
  font-size: ${normalizeFont(24)}px;
`;

export const H4 = styled.Text`
  color: rgb(63, 172, 157);
  font-family: Futura-Bold;
  font-size: ${normalizeFont(18)}px;
`;

export const Paragraph = styled.Text`
  color: rgb(35, 35, 35);
  font-size: ${normalizeFont(16)}px;
  line-height: 26px;
  font-family: futura medium bt;
`;

export const BoldText = styled(Paragraph)`
  font-weight: bold;
`;

export const Lead = styled(Paragraph)`
  color: ${colors.text};
  font-size: ${normalizeFont(17)}px;
  font-weight: bold;
`;

export const Flex: any = styled.View``;

Flex.Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
