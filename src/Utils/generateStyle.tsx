import { ColorValue, Dimensions, StyleProp, ViewStyle } from 'react-native';

const { width, height } = Dimensions.get('window');

const screenSize = {
  width,
  height
};

export default { screenSize };
