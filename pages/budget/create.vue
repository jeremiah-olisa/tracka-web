<script lang="ts" setup>
const step = ref(1);

definePageMeta({
  name: "Create Budget",
  pageTitle: "1 of 3",
  layout: "default",
  showTopHeader: true,
});

const { onSubmit, formFields } = useCreateBudgetForm();

const nextStep = () => {
  if (step.value < 3) ++step.value;
};

const prevStep = () => {
  if (step.value > 0) --step.value;
};

watch(step, () => {
  // definePageMeta({ pageTitle: `${step.value} of 3` });
});
</script>

<template>
  <div class="flex flex-col gap-3 mt-5">
    <h3 class="auth-header-text">Create your budget</h3>
    <p class="text-base leading-normal">
      Set the maximum you’d like to spend each week or month? Type in the amount
      below
    </p>
  </div>
  <form @submit="onSubmit" class="flex grow mb-5 flex-col gap-3 mt-5">
    <FormField
      v-for="field in formFields"
      :key="field.name"
      v-slot="{ componentField }"
      :name="field.name"
    >
      <FormItem>
        <FormLabel :for="field.name">{{ field.label }}</FormLabel>
        <FormControl>
          <Input
            :type="field.type"
            :placeholder="field.placeholder"
            v-bind="componentField"
          />
        </FormControl>
        <div class="flex items-center justify-between">
          <FormMessage />
        </div>
      </FormItem>
    </FormField>
    <Button
      type="button"
      @click="
        () => {
          nextStep();
          $route.meta.pageTitle = `${step} of 3`;
        }
      "
      class="w-full mt-auto rounded-3xl"
      >Continue</Button
    >
  </form>
</template>

<style scoped></style>
