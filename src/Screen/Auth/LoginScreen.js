import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { COLORS } from '../../Constant';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Text style={{color:'#fff',fontFamily:'Nunito-Bold'}}>Login</Text>
    </View>
  );
};
 
export default LoginScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});
