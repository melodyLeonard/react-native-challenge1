import {Dimensions, Platform, PixelRatio, Alert} from 'react-native';
const {width: SCREEN_WIDTH} = Dimensions.get('window');
import GetLocation from 'react-native-get-location';
import {locationErrorMapper} from './constant';

const guidelineBaseWidth = 320;
const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;

export function normalizeFont(size: number) {
  const newSize = scale(size);
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getUserLocation = async () => {
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 50000,
  })
    .then(data => {
      return data;
    })
    .catch(({code}) => Alert.alert(locationErrorMapper[code]));
};
