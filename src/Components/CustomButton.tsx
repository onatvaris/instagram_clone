import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  ViewStyle,
  StyleProp,
  GestureResponderEvent,
  TextStyle,
  ImageStyle
} from 'react-native';
import React from 'react';

type Props = {
  buttonText: string;
  image?: ImageSourcePropType;
  buttonStyle?: StyleProp<ViewStyle>;
  click: (event: GestureResponderEvent) => void;
  textStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ImageStyle>;
};

const CustomButton: React.FC<Props> = ({
  buttonText,
  image,
  buttonStyle,
  click,
  textStyle,
  imageStyle
}) => {
  return (
    <TouchableOpacity onPress={click} style={buttonStyle}>
      {image && <Image style={imageStyle} source={image} />}
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
