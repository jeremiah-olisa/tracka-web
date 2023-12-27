import { object, string } from "yup";

export const loginValidationSchema = object().shape({
  email: string().email().required(),
  pin: string()
    .matches(/^\d{6}$/, "PIN must be 6 digits")
    .required(),
});

export const registerValidationSchema = object().shape({
  fullName: string().min(2).max(40).required()
    .label('Full name'),
  email: string().email().required(),
  pin: string()
    .matches(/^\d{6}$/, "PIN must be 6 digits")
    .required(),
});