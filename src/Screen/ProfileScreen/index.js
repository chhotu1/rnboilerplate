import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { COLORS } from '../../Constant';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Text style={{color:'#fff',fontFamily:'Nunito-Bold'}}>ProfileScreen</Text>
    </View>
  );
};
 
export default ProfileScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});
