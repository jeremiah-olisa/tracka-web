<script lang="ts" setup>
import type { ComponentFieldBindingObject } from "vee-validate";
const { componentField } = defineProps<{
  componentField: ComponentFieldBindingObject<string>;
  value: string;
}>();

const { banks } = useBankList();
</script>

<template>
  <FormItem class="flex flex-col">
    <FormLabel>Account</FormLabel>
    <Select v-bind="componentField">
      <SelectTrigger>
        <SelectValue placeholder="Select your bank account" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem v-for="bank in banks" :value="bank.code">
          <div class="flex flex-grow items-center justify-between">
            <div class="flex items-center">
              <img :src="bank.logo" class="h-8 w-8 object-fill mr-4" />
              <p>{{ bank.name }}</p>
            </div>
            <p class="ml-2">(₦{{ "100000".toLocaleString() }})</p>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
    <FormMessage />
  </FormItem>
</template>

<style scoped></style>