import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Text>Register</Text>
    </View>
  );
};
 
export default RegisterScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
});
