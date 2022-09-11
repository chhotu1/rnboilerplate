import * as Yup from "yup";

const SigninSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("The email field is required"),
    password: Yup.string()
        .min(8, "Password is too short - should be 8 chars minimum.")
        .required("The password field is required"),
});
const SignupSchema = Yup.object().shape({
    name: Yup.string().matches(/^[A-Za-z ]*$/, 'The name field is invalid')
    .max(40).required('Please enter valid name'),
    email: Yup.string()
        .email("Invalid email address")
        .required("The email field is required"),
    password: Yup.string()
        .min(8, "Password is too short - should be 8 chars minimum.")
        .required("The password field is required"),
});
export default {
    SigninSchema,
    SignupSchema
}