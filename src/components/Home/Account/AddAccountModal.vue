<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <div
        v-bind="props"
        class="flex flex-row items-center gap-x-1 bg-blue-100 rounded-full px-4"
      >
        <Icon icon="/icons/outline-plus.svg" color="#FF0000" size="20px" />
        <div class="font-medium text-base">Add New</div>
      </div>
    </template>
    <v-card>
      <v-card-title class="container">
        <span class="">Add Account</span>
      </v-card-title>
      <v-card-text>
        <Form>
          <div class="mb-4">
            <label
              for="accountName"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Account Name</label
            >
            <Field
              name="accountName"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              placeholder="Enter your account name"
              required
            />
            <ErrorMessage name="email" class="text-red-500 text-sm mt-1" />
          </div>

          <div class="mb-4">
            <label
              for="category"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Account Purpose</label
            >
            <select
              name="category"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              placeholder="Enter your account name"
              required
            >
              <option selected>Saving</option>
              <option>Bussiness</option>
              <option>Personal</option>
              <option>Education</option>
              <option>Gift</option>
              <option>Others</option>
            </select>
            <ErrorMessage name="email" class="text-red-500 text-sm mt-1" />
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            class="bg-tracka-main w-full text-white px-4 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:shadow-outline"
          >
            Add
          </button>
        </Form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import Icon from "./../../icons/Icon.vue";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: { Icon, Field, ErrorMessage },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
