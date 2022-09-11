

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/Screen/Auth/RegisterScreen';
import LoginScreen from './src/Screen/Auth/LoginScreen';
import SplashScreen from './src/Screen/SplashScreen';
import DrawerNavigatorRoutes from './src/Routes/DrawerNavigationRoutes';
import {COLORS, RoutesName} from './src/Constant'

const Stack = createStackNavigator();

const AuthStack = () => {
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
          title: 'Register',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
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
