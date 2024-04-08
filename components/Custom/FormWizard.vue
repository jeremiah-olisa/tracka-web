<script setup lang="ts">
import type { IFormFieldInput } from "./../../lib/types";
import type { ComponentFieldBindingObject } from "vee-validate";

const { componentField, field, showPassword, toggleShowPassword, value } =
  defineProps<{
    field: IFormFieldInput;
    componentField: ComponentFieldBindingObject<any>;
    toggleShowPassword?: Function;
    showPassword?: boolean;
    value?: any;
  }>();

const showSearch = !!field.input?.data;
</script>

<template>
  <FormItem v-if="field.input">
    <FormLabel :for="field.input.name">{{ field.input.label }}</FormLabel>
    <FormControl>
      <Input
        :type="field.input.type"
        :placeholder="field.input.placeholder"
        v-bind="componentField"
        :list="showSearch ? field.key : undefined"
      />
      <datalist v-if="showSearch" :id="field.key">
        <option
          v-for="(item, index) in field.input.data"
          :key="index"
          :value="item"
        />
      </datalist>
    </FormControl>
    <div class="flex items-center justify-between">
      <FormMessage />
      <div
        v-if="field.input.name == 'password' && toggleShowPassword"
        class="ml-auto"
      >
        <Label
          @click="() => toggleShowPassword && toggleShowPassword()"
          class="text-xs"
          :class="{ 'text-red-400': !showPassword }"
        >
          {{ showPassword ? "Hide Password" : "Show Password" }}
        </Label>
      </div>
    </div>
  </FormItem>
  <component
    v-if="field.component"
    :is="field.component"
    :componentField="componentField"
    :value="value"
  />
</template>
