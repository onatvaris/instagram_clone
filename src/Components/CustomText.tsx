import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewProps
} from 'react-native';
import React from 'react';

type Props = {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewProps>;
};

const CustomText: React.FC<Props> = ({ text, textStyle, viewStyle }) => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
