import { useAuthentication } from "./../backend/useAuthentication";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const PIN_LENGTH = 6;
export const setUserPinFormValidationSchema = toTypedSchema(
  z.object({
    pin: z
      .array(z.coerce.string())
      .length(PIN_LENGTH, { message: "Invalid pin" }),
  })
);

export const useSetUserPinForm = () => {
  const isLoading = ref(false);
  const { setUserPin } = useAuthentication();
  const handler = useAsyncErrorHandler();

  const form = useForm({
    validationSchema: setUserPinFormValidationSchema,
  });

  const onSubmit = form.handleSubmit(async (values) => {
    isLoading.value = true;
    await setUserPin(values.pin.join(""));
    isLoading.value = false;

    // return navigateTo(routes.home, { replace: true });
  });

  return { onSubmit, ...form, isLoading, PIN_LENGTH };
};
