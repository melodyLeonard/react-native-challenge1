import React, {FC, useEffect} from 'react';
import {Image, StyleSheet, ImageStyle, ViewStyle, View} from 'react-native';
import {Flex, Paragraph, Lead} from '../Typography';
import Icon from 'react-native-vector-icons/Ionicons';
import global from '../../global/index';
import {getUserLocation} from '../../global/global.function';
import useTheme from '../../hooks/useTheme';

interface IProps {
  profile: string;
}

interface IStyle {
  avatar: ImageStyle;
  container: ViewStyle;
  nameContainer: ViewStyle;
  searchContainer: ViewStyle;
}

const Header: FC<IProps> = ({profile}) => {
  const {font} = useTheme();
  return (
    <Flex.Row style={styles.container}>
      <Flex.Row>
        <Image style={styles.avatar} source={{uri: profile}} />
        <View style={styles.nameContainer}>
          <Paragraph
            style={{
              fontSize: getUserLocation()?.latitude ? font.sm : font.normal,
            }}>
            {getUserLocation()?.latitude || 'Hello'}
          </Paragraph>
          <Paragraph
            style={{
              fontSize: getUserLocation()?.latitude ? font.sm : font.normal,
            }}>
            {getUserLocation()?.latitude || 'Hello'}
          </Paragraph>
          <Lead>Melody Leonard</Lead>
        </View>
      </Flex.Row>
      <View style={styles.searchContainer}>
        <Icon name="search" size={18} />
      </View>
    </Flex.Row>
  );
};

export default Header;

const styles = StyleSheet.create<IStyle>({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  avatar: {
    width: 40,
    backgroundColor: global.colors.white,
    height: 40,
    borderRadius: 800,
  },
  nameContainer: {
    paddingHorizontal: 10,
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: global.colors.white,
    minWidth: 30,
    minHeight: 30,
    padding: 5,
    marginRight: 20,
  },
});
