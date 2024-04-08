<script lang="ts" setup>
import { Form } from "vee-validate";
import { CalendarRange } from "lucide-vue-next";
import { format } from "date-fns";

definePageMeta({
  name: "Create Budget",
  pageTitle: `1 of 3`,
  layout: "default",
  showTopHeader: true,
});

const { step, receiveAlert, onSubmit, formFields, form, prevStep, setStep } =
  useCreateBudgetForm();

const router = useRouter();
const { getBankNameByCode, getBankLogoByCode } = useBankList();

const back: any = () => {
  step.value == 1 ? router.back() : prevStep();
};
router.currentRoute.value.meta.back = back;

watch(
  step,
  () => (router.currentRoute.value.meta.pageTitle = `${step.value} of 3`)
);
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex grow mb-5 flex-col gap-3 mt-5">
    <template v-if="step == 1">
      <div class="flex flex-col gap-3 mb-5">
        <h3 class="auth-header-text">Create your budget</h3>
        <p class="text-base leading-normal">
          Set the maximum you’d like to spend each week or month? Type in the
          amount below
        </p>
      </div>

      <FormField
        v-for="field in formFields"
        :key="field.key"
        v-slot="{ componentField, value }"
        :name="field.key"
      >
        <CustomFormWizard
          :field="field"
          :componentField="componentField"
          :value="value"
        />
      </FormField>
    </template>
    <template v-if="step == 2">
      <div class="flex flex-col gap-3 mb-5">
        <h3 class="auth-header-text">Set a budget amount</h3>
      </div>

      <FormField
        v-for="field in formFields"
        :key="field.key"
        v-slot="{ componentField, value }"
        :name="field.key"
      >
        <CustomFormWizard
          :field="field"
          :componentField="componentField"
          :value="value"
        />
        <p v-if="value" class="account-desc">
          Based on your input, you would have ₦<b>12,000</b> left out of ₦<b
            >22,000</b
          >
          in your {{ getBankNameByCode(value) }} account
        </p>
      </FormField>
      <FormField key="budget" v-slot="{ componentField, value }" name="budget">
        <div class="flex flex-col">
          <p class="text-sm text-center mt-5 font-semibold">SET AMOUNT</p>
        </div>
        <div class="flex flex-row justify-between mx-4">
          <Button
            type="button"
            @click="() => form.setFieldValue('budget', value - 1000)"
            class="mr-2 rounded-lg"
            size="icon"
            >-</Button
          >
          <Input type="number" v-bind="componentField" />
          <Button
            type="button"
            @click="() => form.setFieldValue('budget', value + 1000)"
            class="ml-2 rounded-lg"
            size="icon"
            >+</Button
          >
        </div>
        <div class="mx-4">
          <FormMessage />
        </div>
        <div class="grid grid-cols-3 gap-4 mt-9 mx-4">
          <Button
            v-for="amount in [5000, 15000, 25000]"
            type="button"
            @click="() => form.setFieldValue('budget', amount)"
            class="mr-2 rounded-lg"
            :class="{ 'bg-blue-700': value == amount }"
            size="sm"
            >₦{{ amount.toLocaleString() }}</Button
          >
        </div>
      </FormField>
    </template>
    <template v-if="step == 3">
      <div class="flex flex-col gap-3 mb-5">
        <h3 class="auth-header-text">Budget preview</h3>
      </div>

      <CustomBudgetInfoCard
        :budgetName="form.values.name"
        :amountBudgeted="form.values.budget"
        :amountSpent="0"
        :consumption="0"
      />

      <div class="flex gap-y-10 flex-col">
        <div
          class="h-16 flex-col mt-5 justify-start items-start gap-4 inline-flex"
        >
          <div class="text-indigo-950 text-xs font-semibold font-['Inter']">
            Budget source
          </div>
          <div class="justify-between items-center inline-flex w-full">
            <div class="justify-start items-start gap-3 flex">
              <img
                :src="getBankLogoByCode(form.values?.account)"
                :alt="getBankNameByCode(form.values?.account) + '\'s Logo'"
                class="w-8 h-8 rounded-lg"
              />
              <div class="flex-col justify-start items-start gap-1 inline-flex">
                <div
                  class="text-neutral-800 text-sm font-medium font-['Inter']"
                >
                  {{ getBankNameByCode(form.values?.account) }}
                </div>
                <div>
                  <span class="text-gray-700 text-xs font-medium font-['Inter']"
                    >Account balance: </span
                  ><span class="text-gray-700 text-xs font-bold font-['Inter']"
                    >₦ {{ form.values?.budget }}</span
                  >
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              @click="setStep(2)"
              class="text-right text-indigo-600 text-xs font-semibold font-['Inter']"
            >
              Change
            </Button>
          </div>
        </div>

        <div class="h-16 flex-col justify-start items-start gap-4 inline-flex">
          <div class="text-indigo-950 text-xs font-semibold font-['Inter']">
            Start date
          </div>
          <div class="justify-between items-center w-full inline-flex">
            <div class="justify-start items-start gap-3 flex">
              <div
                class="w-8 h-8 p-4 bg-violet-50 rounded-lg justify-center items-center gap-2.5 flex"
              >
                <div
                  class="w-4 h-4 px-0.5 py-px justify-center items-center flex"
                >
                  <CalendarRange
                    class="w-3.5 h-4"
                  />
                </div>
              </div>
              <div class="flex-col justify-start items-start gap-1 inline-flex">
                <div
                  class="text-neutral-800 text-sm font-medium font-['Inter']"
                >
                  {{
                    form.values.date.from
                      ? form.values.date.to
                        ? `${format(form.values.date.from, "LLL dd, y")} - ${format(form.values.date.to, "LLL dd, y")}`
                        : format(form.values.date.from, "LLL dd, y")
                      : "Pick a budget cycle date"
                  }}
                </div>
                <div class="text-gray-700 text-xs font-medium font-['Inter']">
                  Monthly budget
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              @click="setStep(1)"
              class="text-right text-indigo-600 text-xs font-semibold font-['Inter']"
            >
              Change
            </Button>
          </div>
        </div>

        <div class="h-16 flex-col justify-start items-start gap-4 inline-flex">
          <div class="text-indigo-950 text-sm font-semibold font-['Inter']">
            Receive Alert
          </div>
          <div class="justify-between w-full items-center gap-32 inline-flex">
            <div
              class="w-40 text-slate-500 text-xs font-normal font-['Inter'] leading-none"
            >
              Receive alert when it reaches a certain limit
            </div>
            <div
              class="w-10 h-6 pl-0.5 pr-4 py-0.5 bg-gray-200 rounded-3xl justify-start items-center flex"
            >
              <Switch :checked="receiveAlert" @update:checked="() => receiveAlert = !receiveAlert" />
            </div>
          </div>
          <div class="w-full" v-if="receiveAlert">
            <FormField
              key="alert"
              v-slot="{ componentField, value }"
              name="alert"
            >
              <Slider :value="value ?? 70" v-bind="componentField" :default-value="[70]" :max="100" :min="0" :step="5" />
              <FormMessage />
            </FormField>
          </div>
        </div>
      </div>
    </template>
    <!-- <Slider :default-value="[70]" :max="100" :min="3" :step="1" /> -->
    <Button type="submit" class="w-full mt-auto rounded-3xl">
      {{ step === 1 ? "Continue" : step === 2 ? "Next" : "Create budget" }}
    </Button>
  </form>
</template>

<style scoped>
.account-desc {
  @apply text-sm font-normal leading-[150%] text-center text-[#212325] pt-4 px-4;
}
</style>
