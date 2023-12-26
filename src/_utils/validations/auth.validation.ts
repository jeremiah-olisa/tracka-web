import { object, string } from "yup";
export const authValidationSchema = object().shape({
  email: string().email().required(),
  pin: string()
    .matches(/^\d{4}$/, "PIN must be 4 digits")
    .required(),
});