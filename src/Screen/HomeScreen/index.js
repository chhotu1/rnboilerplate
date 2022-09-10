import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { COLORS } from '../../Constant';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Text style={{color:'#fff',fontFamily:'Nunito-Bold'}}>HomeScreen</Text>
    </View>
  );
};
 
export default HomeScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});
