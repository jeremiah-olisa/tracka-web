import { useForm } from "vee-validate";
import routes from "~/lib/constants/routes";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { STRONG_PASSWORD_REGEXP } from "~/lib/constants";
import type { IFormFieldInput } from "~/lib/types";

export const createBudgetFormValidationSchema = toTypedSchema(
  z.object({
    name: z.string().min(3).max(60),
    category: z.string().min(3).max(60),
    startDate: z.string().min(3).max(60),
    account: z.string().min(3).max(60),
    alert: z.number().min(3).max(100),
    budgeted: z.number().min(50),
  }),
);

export const useCreateBudgetForm = () => {

  const formFields = computed<IFormFieldInput[]>(() => {
    return [
      {
        name: "name",
        label: "Name",
        placeholder: "April Groceries 🛒",
        type: "text",
      },
      {
        name: "category",
        label: "Category",
        placeholder: "Grocery 🛒",
        type: "text",
      },
      {
        name: "budgetCycle",
        label: "Cycle of budget",
        placeholder: "Pick a start and end date",
        type: "date",
      },
      {
        name: "account",
        label: "Select an Account",
        placeholder: "",
        type: "select",
      },
    ];
  });

  const form = useForm({
    validationSchema: createBudgetFormValidationSchema,
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log("Form submitted!", values);

    return navigateTo(routes.home, { replace: true });
  });

  return { onSubmit, formFields };
};
