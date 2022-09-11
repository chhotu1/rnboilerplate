import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './../Screen/HomeScreen';
import SettingScreen from '../Screen/SettingsScreen';
import { COLORS, RoutesName } from '../Constant';
import HeaderLeft from '../Components/SideBar/HeaderLeft';
import HeaderRight from '../Components/SideBar/HeaderRight';
import CustomSidebarMenu from '../Components/SideBar/CustomSidebarMenu';
import Tabs from '../Components/Tabs';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName={RoutesName.HOME}>
      <Stack.Screen
        name={RoutesName.HOME}
        component={Tabs}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <HeaderLeft navigationProps={navigation} />
          ),
          headerRight: () => (
            <HeaderRight navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: COLORS.NavigationDrawerHeaderColor,
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName={RoutesName.SETTING}
      screenOptions={{
        headerLeft: () => (
          <HeaderLeft navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: COLORS.NavigationDrawerHeaderColor
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name={RoutesName.SETTING}
        component={SettingScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false,drawerActiveTintColor:'#fff',drawerInactiveTintColor: "#fff" }}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name={RoutesName.HOME_STACK}
        options={{ drawerLabel: 'Home' }}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{ drawerLabel: 'Setting' }}
        component={SettingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
