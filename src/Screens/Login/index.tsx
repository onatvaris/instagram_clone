import { View, Text, Image } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Router';
import { styles } from './styles';
import CustomTextInput from '../../Components/CustomTextInput';
import Container from '../../Components/Container';
import GenerateStyle from '../../Utils/generateStyle';
import CustomButton from '../../Components/CustomButton';
import Login from '../../Containers/login';
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const { height } = GenerateStyle.screenSize;

const _login: React.FC = () => {
  return (
    <Container containerStyle={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../../Images/Login/instagram.png')}
        />
        <CustomTextInput
          placeholder='email'
          inputStyle={styles.inputStyle}
          viewStyle={styles.viewStyle}
          keyboardType={'email-address'}
        />
        <CustomTextInput
          viewStyle={styles.viewStyle}
          inputStyle={styles.inputStyle}
          placeholder='password'
          secureText={true}
          iconStyle={styles.iconStyle}
        />
        <CustomButton
          buttonText='Forgot Password?'
          click={() => console.log('first')}
          buttonStyle={{ alignSelf: 'flex-end', marginVertical: 10 }}
          textStyle={{ color: '#3797EF' }}
        />
        <CustomButton
          buttonText='Log in'
          click={() => console.log('first')}
          buttonStyle={styles.button}
          textStyle={{ color: '#fff' }}
        />
        <View
          style={{
            marginTop: 30,
            height: height * 0.2,
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <CustomButton
            buttonText='Log in with Facebook'
            click={() => console.log('first')}
            image={require('../../Images/Login/facebook_icon.png')}
            buttonStyle={{ flexDirection: 'row' }}
            textStyle={{ marginLeft: 7 }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <View
              style={{
                borderWidth: 0.33,
                borderColor: 'rgba(0,0,0,0.2)',
                width: '35%',
                alignSelf: 'center'
              }}
            />
            <Text style={{ color: 'rgba(0,0,0,0.4)' }}>OR</Text>
            <View
              style={{
                borderWidth: 0.33,
                borderColor: 'rgba(0,0,0,0.2)',
                width: '35%',
                alignSelf: 'center'
              }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'rgba(0,0,0,0.4)' }}>
              Don't have an account?
            </Text>
            <CustomButton
              buttonText='Sign Up'
              click={() => {}}
              textStyle={{ color: '#3797EF', marginLeft: 2 }}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Login({ content: _login });
