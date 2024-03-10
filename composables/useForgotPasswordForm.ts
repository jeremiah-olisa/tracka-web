import { useForm } from "vee-validate";
import routes from "~/lib/constants/routes";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

export const forgotPasswordFormValidationSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
  }),
);

export const useForgotPasswordForm = () => {
  const formFields = [
    {
      name: "email",
      label: "Email",
      placeholder: "johndoe@mail.com",
      type: "email",
    },
  ];

  const form = useForm({
    validationSchema: loginFormValidationSchema,
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log("Form submitted!", values);

    return navigateTo(routes.forgotPasswordMailSent, { replace: true });
  });

  return { onSubmit, formFields };
};
