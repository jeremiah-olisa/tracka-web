import { useForm } from "vee-validate";
import routes from "~/lib/constants/routes";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { STRONG_PASSWORD_REGEXP } from "~/lib/constants";
import type { IFormFieldInput } from "~/lib/types";

export const resetPasswordFormValidationSchema = toTypedSchema(
  z
    .object({
      password: z
        .string()
        .min(8)
        .max(30)
        .regex(
          STRONG_PASSWORD_REGEXP,
          "Your password must contain at least one Upper case, one lower case and a number e.g Passw0rd",
        ),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }),
);

export const useResetPasswordForm = () => {
  const showPassword = ref(false);

  const formFields = computed<IFormFieldInput[]>(() => {
    return [
      {
        key: "password",
        input: {
          name: "password",
          label: "Password",
          placeholder: "Password",
          type: showPassword.value ? "text" : "password",
        }
      },
      {
        key: "confirmPassword",
        input: {
          name: "confirmPassword",
          label: "Confirm Password",
          placeholder: "Confirm Password",
          type: showPassword.value ? "text" : "password",
        }
      },
    ];
  });

  const toggleShowPassword = () => {
    showPassword.value = !showPassword.value;
  };

  const form = useForm({
    validationSchema: resetPasswordFormValidationSchema,
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log("Form submitted!", values);

    return navigateTo(routes.home, { replace: true });
  });

  return { onSubmit, formFields, toggleShowPassword, showPassword };
};
