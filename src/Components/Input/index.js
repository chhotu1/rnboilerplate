import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
  } from "react-native";
  import React, { useState } from "react";
  import { SIZES, INPUT, Icons, COLORS, FONTS } from "../../Constant";
  
  export default function Input(props) {
    const [passwordVisible, setPasswordVisible] = useState(true);  
    const {error,placeholder,keyboardType,onBlur,value,onChangeText,...other} = props;
  
    const togglePassword = () => {
      setPasswordVisible(!passwordVisible)
      console.log(passwordVisible)
    };


    

    return (
      <View style={styles.inputWrap}>
        <Text style={styles.label}>{props.label}</Text>
        {props.secureTextEntry ? (
          <TextInput
            style={{ ...INPUT.primary, paddingRight: SIZES.basePadding*3 }}
            placeholder={placeholder}
            secureTextEntry={passwordVisible}
            keyboardType={keyboardType}
            onBlur={onBlur}
            value={value}
            onChangeText={onChangeText}  
            autoCapitalize='none'
            placeholderTextColor="#8b9cb5" 
          />
        ) : (
          <TextInput
            style={[{...INPUT.primary}, props.multiline ? {...INPUT.largeInput}: null]}
            placeholder={placeholder}
            keyboardType={keyboardType} 
            onBlur={onBlur}
            value={value}
            onChangeText={onChangeText}   
            multiline={props.multiline}  
            placeholderTextColor="#8b9cb5" 
            returnKeyType="next"
            {...other}                
          />
        )}
         {error && (
            <Text style={styles.error}>{error}</Text>
          )}
        
        {props.secureTextEntry ? (
          <TouchableOpacity activeOpacity={1} style={styles.eyeIcon} onPress={togglePassword}>
            <Image
              source={passwordVisible? Icons.eyeOff: Icons.eyeOn}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    inputWrap: {
      position: "relative",
      paddingBottom: SIZES.basePadding,
    },
    eyeIcon: {
      position: "absolute",
      right: 1,
      height: 52,
      width: 52,
      top: 20,    
      zIndex: 2,    
      alignItems: "center",
      justifyContent: "center"
    },
    label:{
      color:COLORS.black100,
      fontSize: SIZES.body1,
      fontFamily: "Nunito-Medium",
      paddingHorizontal:SIZES.base
    },
    error: {
      ...FONTS.small,
      color: COLORS.danger,
      marginTop:5,
      marginBottom: 16,
      marginLeft: 8,
    },
  });
  