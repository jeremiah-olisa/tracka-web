import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

export const STRONG_PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const loginFormValidationSchema = toTypedSchema(z.object({
  email: z.string().min(2).max(60).email(),
  password: z.string().min(8).max(12).regex(STRONG_PASSWORD_REGEXP, 'Your password must contain at least one Upper case, one lower case and a number e.g Passw0rd')
}));

