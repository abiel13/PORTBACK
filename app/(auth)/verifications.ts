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
