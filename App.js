

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

// Import Navigators from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/Screen/Auth/RegisterScreen';
import LoginScreen from './src/Screen/Auth/LoginScreen';
import SplashScreen from './src/Screen/SplashScreen';
import DrawerNavigatorRoutes from './src/Routes/DrawerNavigationRoutes';
import {RoutesName} from './src/Constant'

const Stack = createStackNavigator();

const AuthStack = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName={RoutesName.LOGIN}>
      <Stack.Screen
        name={RoutesName.LOGIN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RoutesName.REGISTER}
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RoutesName.SPLASH}>
        <Stack.Screen
          name={RoutesName.SPLASH}
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesName.AUTH_STACK}
          component={AuthStack}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={RoutesName.DRAWER_NAVIGATION_ROUTES}
          component={DrawerNavigatorRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
