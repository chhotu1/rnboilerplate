import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, RoutesName } from '../Constant';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true); 
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(
          value === null ?RoutesName.AUTH_STACK :RoutesName.DRAWER_NAVIGATION_ROUTES
        ),
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
 
export default SplashScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
