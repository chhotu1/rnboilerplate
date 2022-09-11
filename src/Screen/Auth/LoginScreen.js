import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { Formik } from "formik";
import { COLORS, COMMONSTYLE, FONTS, FormValidation, RoutesName } from '../../Constant'
import Input from '../../Components/Input';
import Button from '../../Components/Button';

const LoginScreen = ({ navigation }) => {

  const onPressSignin = (values) => {
    console.log(values,'============');
    navigation.navigate(RoutesName.DRAWER_NAVIGATION_ROUTES)
  }

  return (
    <View style={{...COMMONSTYLE.mainBody}}>
      <ScrollView>
        <View>
          <View style={{ paddingVertical: 50 }}>
            <Text style={{
              ...FONTS.body1Bold, color: COLORS.black100, textAlign: 'center',
            }}>Login</Text>
          </View>

          <KeyboardAvoidingView enabled>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={FormValidation.SigninSchema}
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
                  <Button onPress={handleSubmit} title="Sign In"/>
                </>
              )}

            </Formik>

            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('Register')}>
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    padding: 10,
    backgroundColor:COLORS.white
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
