import { useForm } from "vee-validate";
import routes from "~/lib/constants/routes";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { STRONG_PASSWORD_REGEXP } from "~/lib/constants";

export const registerFormValidationSchema = toTypedSchema(
  z.object({
    fullName: z.string().min(5).max(100),
    email: z.string().min(2).max(60).email(),
    password: z
      .string()
      .min(8)
      .max(12)
      .regex(
        STRONG_PASSWORD_REGEXP,
        "Your password must contain at least one Upper case, one lower case and a number e.g Passw0rd",
      ),
  }),
);

export const useRegisterForm = () => {
  const showPassword = ref(false);

  const formFields = computed(() => {
    return [
      {
        name: "fullName",
        label: "Full Name",
        placeholder: "John Doe",
        type: "email",
      },
      {
        name: "email",
        label: "Email",
        placeholder: "johndoe@mail.com",
        type: "email",
      },
      {
        name: "password",
        label: "Password",
        placeholder: "Password",
        type: showPassword.value ? "text" : "password",
      },
    ];
  });

  const toggleShowPassword = () => {
    showPassword.value = !showPassword.value;
  };

  const form = useForm({
    validationSchema: registerFormValidationSchema,
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log("Form submitted!", values);

    return navigateTo(routes.welcome, { replace: true });
  });

  return { onSubmit, formFields, showPassword, toggleShowPassword };
};
