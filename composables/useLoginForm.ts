import { useForm } from "vee-validate"
import routes from "~/lib/constants/routes"
import { loginFormValidationSchema } from "~/lib/validations/auth.validation"

export const useLoginForm = () => {
  const form = useForm({
    validationSchema: loginFormValidationSchema,
  })

  const onSubmit = form.handleSubmit((values) => {
    console.log('Form submitted!', values)

    return navigateTo(routes.home, { replace: true })
  })

  return { onSubmit }
}
