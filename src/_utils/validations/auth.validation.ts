import { object, string } from "yup";
export const authValidationSchema = object().shape({
  email: string().email().required(),
  pin: string()
    .matches(/^\d{6}$/, "PIN must be 6 digits")
    .required(),
});