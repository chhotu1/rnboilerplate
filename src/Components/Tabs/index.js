import { Text, Image, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SettingsScreen } from "../../Screen";
import { COLORS, Icons, SIZES } from "../../Constant";
const Tab = createBottomTabNavigator();
export default function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                tabBarStyle: {
                    height: 80,
                    backgroundColor: COLORS.buttomTabBackgroundColor,
                    paddingBottom:
                        Platform.OS === "ios" ? SIZES.basePadding * 1.5 : SIZES.basePadding,
                    paddingTop: SIZES.base,
                },
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    headerBackTitleVisible: false,
                    
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={[
                                { color: COLORS.white },
                                { fontFamily: focused ? "Nunito-Bold" : "Nunito-Regular" },
                            ]}
                        >
                            Home
                        </Text>
                    ),
                    tabBarIcon: (tabInfo) => (
                        <Image
                            source={tabInfo.focused ? Icons.bellIcon : Icons.drawerWhiteIcon}
                            style={{ height: 24, width: 24 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SettingsScreen}
                options={{
                    headerShown: false,
                    headerBackTitleVisible: false,
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={[
                                { color: COLORS.white },
                                { fontFamily: focused ? "Nunito-Bold" : "Nunito-Regular" },
                            ]}
                        >
                            Profile
                        </Text>
                    ),
                    tabBarIcon: (tabInfo) => (
                        <Image
                            source={tabInfo.focused ? Icons.bellIcon : Icons.drawerWhiteIcon}
                            style={{ height: 24, width: 24 }}
                        />
                    ),
                }}
            />
             
        </Tab.Navigator>
    );
}
