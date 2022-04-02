import {
  View,
  Text,
  TextInput,
  ColorValue,
  StyleProp,
  TextStyle,
  ViewStyle,
  Image,
  TouchableOpacity,
  KeyboardTypeOptions,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import React from 'react';
import GenerateStyle from '../Utils/generateStyle';

type Props = {
  inputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  viewStyle?: StyleProp<ViewStyle>;
  secureText?: boolean;
  iconStyle?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
};
const { width } = GenerateStyle.screenSize;

const CustomTextInput: React.FC<Props> = ({
  inputStyle,
  placeholder,
  viewStyle,
  secureText,
  iconStyle,
  keyboardType
}) => {
  const [secure, setSecure] = React.useState(secureText);

  return (
    <View style={viewStyle}>
      <TextInput
        placeholder={placeholder}
        style={inputStyle}
        onChangeText={text => {}}
        placeholderTextColor='#ccc'
        secureTextEntry={secure}
        keyboardType={keyboardType}
      />
      {secureText && (
        <TouchableOpacity onPress={() => setSecure(!secure)} style={iconStyle}>
          <Image
            source={
              secure
                ? require('../Images/Login/visibility.png')
                : require('../Images/Login/visibility_off.png')
            }
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
