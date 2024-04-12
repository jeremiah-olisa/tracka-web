import { useForm } from "vee-validate";
import routes from "~/lib/constants/routes";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { STRONG_PASSWORD_REGEXP } from "~/lib/constants";
import type { IFormFieldInput } from "~/lib/types";
import { useAuthentication } from "../backend/useAuthentication";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const registerFormValidationSchema = toTypedSchema(
  z.object({
    fullName: z.string().min(5).max(100),
    email: z.string().min(2).max(60).email(),
    phoneNumber: z.string().min(9).max(15).regex(phoneRegex, 'Invalid Number!'),
    password: z
      .string()
      .min(8)
      .max(30)
      .regex(
        STRONG_PASSWORD_REGEXP,
        "Your password must contain at least one Upper case, one lower case and a number e.g Passw0rd",
      ),
  }),
);

export const useRegisterForm = () => {
  const showPassword = ref(false);
  const { registerWithPassword, registerLoadingState: isLoading } = useAuthentication();


  const formFields = computed<IFormFieldInput[]>(() => {
    return [
      {
        key: "fullName",
        input: {
          name: "fullName",
          label: "Full Name",
          placeholder: "John Doe",
          type: "text",
        }
      },
      {
        key: "phoneNumber",
        input: {
          name: "phoneNumber",
          label: "Phone number",
          placeholder: "+234********",
          type: "tel",
        }
      },
      {
        key: "email",
        input: {
          name: "email",
          label: "Email",
          placeholder: "johndoe@mail.com",
          type: "email",
        },
      },
      {
        key: "password",
        input: {
          name: "password",
          label: "Password",
          placeholder: "Password",
          type: showPassword.value ? "text" : "password",
        },
      },
    ];
  });

  const toggleShowPassword = () => {
    showPassword.value = !showPassword.value;
  };

  const form = useForm({
    validationSchema: registerFormValidationSchema,
  });

  const onSubmit = form.handleSubmit(async (values) => {
    await registerWithPassword(values.email, values.password, values.phoneNumber, values.fullName);

    return navigateTo({ path: routes.emailSent, query: { email: values.email } }, { replace: true });
  });

  return { onSubmit, formFields, showPassword, toggleShowPassword, isLoading };
};
