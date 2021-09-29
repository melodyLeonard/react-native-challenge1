import React, {FC, ReactNode} from 'react';
import {Dimensions, StyleSheet, View, ViewStyle} from 'react-native';
import {numberWithCommas} from '../../global/global.function';
import global from '../../global';
import useTheme from '../../hooks/useTheme';
import {Flex, Lead, Paragraph} from '../Typography';

const {width} = Dimensions.get('window');

interface IProps {
  color: string;
  accentColor: string;
  name: string;
  number: string;
  amount: number;
  expiry: string;
  currency: string;
  icon: ReactNode;
  style?: ViewStyle;
}

const CardItem: FC<IProps> = ({
  color,
  accentColor,
  icon,
  currency,
  name,
  number,
  amount,
  style,
  expiry,
}) => {
  const {colors, font, gutter} = useTheme();
  return (
    <View style={[styles.container, style, {backgroundColor: color}]}>
      <Flex.Row style={styles.row}>
        <Lead style={{color: colors._3}}>Current Balance</Lead>
        {icon}
      </Flex.Row>

      <Flex.Row style={[styles.row, {justifyContent: 'flex-start'}]}>
        <View
          style={{
            backgroundColor: accentColor,
            borderRadius: gutter.sm / 2,
            paddingVertical: gutter.sm / 3,
            paddingHorizontal: gutter.sm,
            marginRight: gutter.sm,
          }}>
          <Paragraph style={{fontSize: font.normal, color: colors._3}}>
            {currency.toUpperCase()}
          </Paragraph>
        </View>
        <Paragraph style={{fontSize: font.lg, color: colors._3}}>
          {numberWithCommas(amount)}
        </Paragraph>
      </Flex.Row>
      <Flex.Row>
        <Lead style={{color: colors._3}}>
          **** **** **** ${number.slice(-2)}
        </Lead>
      </Flex.Row>

      <Flex.Row style={styles.row}>
        <Paragraph style={{color: colors._3}}>{name}</Paragraph>
        <View>
          <Paragraph style={{fontSize: font.sm, color: colors._3}}>
            Exp. Date
          </Paragraph>
          <Paragraph style={{fontSize: font.sm, color: colors._3}}>
            {expiry}
          </Paragraph>
        </View>
      </Flex.Row>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    padding: global.gutter.md,
    borderRadius: global.gutter.md,
    width: width - global.gutter.md,
    elevation: 10,
    shadowOpacity: 0.27,
    shadowRadius: global.gutter.sm,
    shadowColor: global.colors.white,
    shadowOffset: {width: 5, height: 14},
  },
  row: {
    marginBottom: global.gutter.sm,
  },
});
