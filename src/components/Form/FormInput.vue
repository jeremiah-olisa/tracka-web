<!-- InputField.vue -->

<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <v-field
      v-if="type !== 'password'"
      v-model="modelValue"
      :type="type"
      :id="name"
      :name="name"
      :class="inputClasses"
      :placeholder="placeholder"
      :required="isRequired"
    />
    <v-field
      v-else
      v-model="modelValue"
      type="password"
      :id="name"
      :name="name"
      :inputmode="inputmode"
      :pattern="pattern"
      :min="min"
      :max="max"
      style="-webkit-text-security: disc"
      :class="inputClasses"
      :placeholder="placeholder"
      :required="isRequired"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    inputmode: String,
    pattern: String,
    min: String,
    max: String,
    placeholder: String,
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    inputClasses() {
      return "w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline";
    },
  },
});
</script>
