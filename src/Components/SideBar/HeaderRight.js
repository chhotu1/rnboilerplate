import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { Icons } from '../../Constant';
 
const HeaderRight = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity>
        <Image
          source={Icons.bellIcon}
          style={{width: 25, height: 25, marginRight: 15,tintColor:'#fff'}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default HeaderRight;
