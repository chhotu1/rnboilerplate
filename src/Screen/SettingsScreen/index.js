import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { COLORS } from '../../Constant';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Text style={{color:'#fff',fontFamily:'Nunito-Bold'}}>SettingScreen</Text>
    </View>
  );
};
 
export default SettingScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});
