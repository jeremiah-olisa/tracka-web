<script lang="ts" setup>
import type { ComponentFieldBindingObject } from "vee-validate";
import { CalendarIcon } from "lucide-vue-next";
import { format } from "date-fns";
import { ref, watch } from "vue";
const { componentField, value } = defineProps<{
  componentField: ComponentFieldBindingObject<{ from: Date; to: Date }>;
  value: any;
}>();

const date = ref<{ start: Date | null; end: Date | null }>({
  start: null,
  end: null,
});

watch(date, () => {
  if (componentField && componentField.modelValue) {
    if (date.value.start) componentField.modelValue.from = date.value.start;
    if (date.value.end) componentField.modelValue.to = date.value.end;
  }
});
</script>

<template>
  <FormItem class="flex flex-col">
    <FormLabel>Budget Cycle</FormLabel>
    <Sheet side="bottom">
      <SheetTrigger as-child>
        <FormControl>
          <Button
            type="button"
            variant="outline"
            class="w-full ps-3 bg-transparent text-start font-normal"
          >
            <span>
              {{
                value.from
                  ? value.to
                    ? `${format(value.from, "LLL dd, y")} - ${format(value.to, "LLL dd, y")}`
                    : format(value.from, "LLL dd, y")
                  : "Pick a date"
              }}
            </span>
            <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </SheetTrigger>
      <SheetContent class="px-5 border rounded-t-[30px]" side="bottom">
        <FormLabel>Budget Cycle</FormLabel>
        <Calendar v-model.range="date" />
        <FormMessage />
      </SheetContent>
    </Sheet>
    <FormMessage />
  </FormItem>
</template>

<style scoped></style>
