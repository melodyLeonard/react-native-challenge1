import React, {FC, ReactNode} from 'react';
import {Dimensions, StyleSheet, View, ViewStyle} from 'react-native';
import global from '../global';
import useTheme from '../hooks/useTheme';
import {Flex, Lead, Paragraph} from './Typography';

const {width} = Dimensions.get('window');

interface IProps {
  color: string;
  title: string;
  amount: number;
  subTitle: string;
  icon: ReactNode;
  style?: ViewStyle;
}

const TransactionItem: FC<IProps> = ({
  color,
  icon,
  title,
  subTitle,
  amount,
  style,
}) => {
  const {colors, gutter} = useTheme();
  return (
    <Flex.Row style={[style, styles.container]}>
      <View style={[styles.iconContainer, {backgroundColor: color}]}>
        {icon}
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: gutter.sm,
          height: '100%',
        }}>
        <Lead style={{color: colors.text}}>{title}</Lead>
        <Paragraph
          style={{color: colors.gray_text, fontSize: 13, flexWrap: 'wrap'}}>
          {subTitle}
        </Paragraph>
      </View>
      <View style={{paddingHorizontal: gutter.sm}}>
        <Lead style={{color: color}}>${amount}</Lead>
      </View>
    </Flex.Row>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: global.gutter.md,
    paddingHorizontal: global.gutter.sm,
    borderRadius: global.gutter.sm,
    backgroundColor: global.colors.white,
    width: width - global.gutter.md,
    elevation: 5,
    shadowOpacity: 0.27,
    shadowRadius: global.gutter.sm,
    shadowColor: global.colors.white,
    shadowOffset: {width: 0, height: 3},
  },
  iconContainer: {
    borderRadius: 10,
    height: width / 7,
    width: width / 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
