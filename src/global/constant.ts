export const locationErrorMapper = {
  CANCELLED: 'Location cancelled by user or by another request',
  UNAVAILABLE: 'Location service is disabled or unavailable',
  TIMEOUT: 'Location request timed out',
  UNAUTHORIZED: 'Authorization denied to get user location',
};

export const locationConfig = {
  ios: 'whenInUse',
  android: {
    detail: 'coarse',
    rationale: {
      title: 'We need to access your location',
      message: 'We use your location to show where you are on the map',
      buttonPositive: 'OK',
      buttonNegative: 'Cancel',
    },
  },
};
