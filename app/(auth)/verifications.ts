import * as yup from "yup";

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.,])[A-Za-z\d@$!%*?&.,]{8,}$/;

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(passwordRegex, "password not strong enough")
    .required("password required"),
});

export const signupSchema = yup.object({
  first_name: yup.string().required("name is required"),
  last_name: yup.string().required("last name is required"),
  password: yup
    .string()
    .matches(passwordRegex, "password not strong enough ")
    .required("password field is required"),
  email: yup
    .string()
    .email("invalid email type")
    .required("email field is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "password must match")
    .required(),
});
