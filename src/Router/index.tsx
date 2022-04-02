import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../Redux';

export type RootStackParamList = {
  Login: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Routers: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName='Login'>
          <RootStack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Routers;
