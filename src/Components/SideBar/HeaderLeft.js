import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { Icons } from '../../Constant';
 
const HeaderLeft = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={Icons.drawerWhiteIcon}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default HeaderLeft;
