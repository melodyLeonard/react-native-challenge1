import {Dimensions, Platform, PixelRatio, Alert} from 'react-native';
const {width: SCREEN_WIDTH} = Dimensions.get('window');
import RNLocation from 'react-native-location';
import {locationConfig, locationErrorMapper} from './constant';

RNLocation.configure({
  distanceFilter: undefined,
});

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
  let permission = await RNLocation.checkPermission({...locationConfig});
  if (!permission) {
    permission = await RNLocation.requestPermission({...locationConfig});
    return await RNLocation.getLatestLocation({timeout: 100});
  } else {
    return await RNLocation.getLatestLocation({timeout: 100});
  }
};
