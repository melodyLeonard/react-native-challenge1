import React, {ReactNode, FC} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

interface IProps {
  color: string;
  icon: ReactNode;
}

const ServiceItem: FC<IProps> = ({color, icon}) => {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>{icon}</View>
  );
};

export default ServiceItem;

const styles = StyleSheet.create({
  container: {
    height: width / 6,
    width: width / 6,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
