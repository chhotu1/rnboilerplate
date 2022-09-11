import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { Formik } from "formik";
import { COLORS, FONTS, FormValidation, RoutesName } from '../../Constant'
import Input from '../../Components/Input';
import Button from '../../Components/Button';

const RegisterScreen = ({ navigation }) => {
  
  const onPressSignin = (values) => {
    console.log(values, '============')
  }

  return (
    <View style={styles.mainBody}>
      <ScrollView>
        <View style={{ paddingVertical: 50 }}>

          <KeyboardAvoidingView enabled>
            <Formik
              initialValues={{ email: "", password: "", name: "" }}
              validationSchema={FormValidation.SignupSchema}
              onSubmit={onPressSignin}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
              }) => (
                <>
                  <Input
                    placeholder="Enter username"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    name="name"
                    label="Name"
                    error={errors.name}
                  
                  />  
                  <Input
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    autoCapitalize="none"
                    label="Email address"
                    error={errors.email}
                  />
                  <Input
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    label="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    error={errors.password}
                  />
                  <Button onPress={handleSubmit} title="Sign Up" />
                </>
              )}

            </Formik>

            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate(RoutesName.LOGIN)}>
              Have a account ? Login
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.white
  },

  registerTextStyle: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },

});
