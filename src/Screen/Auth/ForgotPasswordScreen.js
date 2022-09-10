import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const ForgotPasswordScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
     <Text>ForgotPasswordScreen</Text>
    </View>
  );
};
 
export default ForgotPasswordScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
});
