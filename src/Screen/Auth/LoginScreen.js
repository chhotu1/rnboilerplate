import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const LoginScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
     <Text>Login</Text>
    </View>
  );
};
 
export default LoginScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
});
