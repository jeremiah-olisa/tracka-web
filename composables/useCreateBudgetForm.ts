import { useForm, type TypedSchema } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import type { IFormFieldInput } from "~/lib/types";
import CustomFormCreateBudgetDateField from "~/components/Custom/Form/CreateBudgetDateField.vue";
import CustomFormCreateBudgetAccountField from "~/components/Custom/Form/CreateBudgetAccountField.vue";
const now = new Date
export type IBudgetFormFields = 'name' | 'date' | 'account' | 'budget' | 'alert';

export const createBudgetFormValidationSchema: { schema: TypedSchema, fields: IFormFieldInput<IBudgetFormFields>[] }[] =
  [
    {
      schema: toTypedSchema(
        z.object({
          name: z.string().min(3).max(60),
          // category: z.string().min(3).max(60),
          date: z.object({
            from: z.date(),
            to: z.date(),
          }),
          account: z.string().min(3).max(90),
        }),
      ),
      fields: [
        {
          key: "name",
          input: {
            name: "name",
            label: "Name",
            placeholder: "April Groceries 🛒",
            type: "text",
          },
        },
        // {
        //   key: "category",
        //   input: {
        //     name: "category",
        //     label: "Category",
        //     placeholder: "Grocery 🛒",
        //     type: "search",
        //     data: BUDGET_CATEGORIES,
        //   },
        // },
        {
          key: "date",
          component: CustomFormCreateBudgetDateField
        },
        {
          key: "account",
          component: CustomFormCreateBudgetAccountField
        },
      ]
    },
    {
      schema: toTypedSchema(z.object({
        account: z.string().min(3).max(90),
        budget: z.number().min(50),
      })),
      fields: [
        {
          key: "account",
          component: CustomFormCreateBudgetAccountField
        },
      ],
    },
    {
      schema: toTypedSchema(z.object({
        alert: z.array(z.number().min(3).max(100)).max(1),
      })),
      fields: [],
    },
  ];

export const useCreateBudgetForm = () => {
  const step = ref(1);
  const receiveAlert = ref(false);
  const complete = ref(false);

  const currentSchema = computed(() => {
    return createBudgetFormValidationSchema[step.value - 1].schema;
  });

  const nextStep = () => {
    if (step.value < 3) ++step.value;
  };

  const setStep = (_step: 1 | 2 | 3) => {
    step.value = _step;
  };

  const prevStep = () => {
    if (step.value > 0) --step.value;
  };

  const formFields = computed(() => createBudgetFormValidationSchema[step.value - 1].fields);

  const form = useForm({
    validationSchema: currentSchema,
    keepValuesOnUnmount: true,
  });

  const onSubmit = form.handleSubmit((values) => {
    nextStep()

    console.log({ values, formValues: form.values })

    if (step.value >= 3) console.log({ values })
    // navigateTo(routes.home, { replace: true });
  })


  return { onSubmit, formFields, step, nextStep, prevStep, form, receiveAlert, setStep, complete };
};
