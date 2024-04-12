import { useForm } from "vee-validate";
import routes from "~/lib/constants/routes";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import type { IFormFieldInput } from "~/lib/types";

export const forgotPasswordFormValidationSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
  }),
);

export const useForgotPasswordForm = () => {
  const formFields: IFormFieldInput[] = [
    {
      key: "email",
      input: {
        name: "email",
        label: "Email",
        placeholder: "johndoe@mail.com",
        type: "email",
      },
    },
  ];

  const form = useForm({
    validationSchema: forgotPasswordFormValidationSchema,
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log("Form submitted!", values);

    return navigateTo(routes.forgotPasswordMailSent, { replace: true });
  });

  return { onSubmit, formFields };
};
