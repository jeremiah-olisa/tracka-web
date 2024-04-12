<script setup lang="ts">
import { useToast } from "~/components/ui/toast";
import routes from "~/lib/constants/routes";

definePageMeta({ name: "Get Started", backgroundClass: "bg-primary" });

const isDrawerOpen = ref(false);

const { toast } = useToast();

const onSuccess = ({ code }: { code: string }) => {
  toast({
    title: "Account connected successfully",
    description: `Account code is \'${code}\''`,
    variant: "success",
  });
  setStep(2);
};

const { openConnect } = useMonoConnect(onSuccess);

const { setStep, hasCompletedStep, hasCompletedSteps } = useSteps(3);
const {
  onSubmit,
  setFieldValue,
  isLoading: isSetUserFormLoading,
  PIN_LENGTH,
} = useSetUserPinForm();
const { userPinIsSet, pinIsSet, user } = useAuthentication();

onMounted(async () => {
  if (user.value?.email_confirmed_at) setStep(1);
  if (user.value?.id && (await userPinIsSet())) setStep(3);
});

watch(pinIsSet, async () => {
  if (user.value?.id && (await userPinIsSet())) {
    setStep(3);
    isDrawerOpen.value = false;
  }
});

const verifyEmail = () => {
  navigateTo(`mailto:`, {
    replace: true,
    external: true,
    open: { target: "_blank" },
  });
};

const steps = [
  {
    id: 1,
    header: `Verify your email address`,
    icon: "at-symbol",
    description: `This is the email address (${user.value?.email}) account we would send information on your spendings, please confirm`,
    action: () => {
      if (!hasCompletedStep(1)) verifyEmail();
    },
  },
  {
    id: 2,
    header: "Connect your bank account",
    icon: "bank",
    action: () => {
      if (!hasCompletedStep(2)) openConnect();
    },
    description:
      "This is the bank account we would track and manage your spendings",
  },
  {
    id: 3,
    header: "Setup a security pin",
    icon: "lock",
    action: () => {
      if (!hasCompletedStep(3)) isDrawerOpen.value = true;
    },
    description:
      "This is the bank account we would track and manage your spendings",
  },
];
</script>

<template>
  <!-- 40px is the padding horizontal -->
  <div class="flex flex-col gap-5 items-center h-[calc(100vh-40px)]">
    <div class="w-full flex justify-between mt-3">
      <div class="flex flex-col gap-1">
        <div class="header-text">Get started</div>
        <div class="header-desc">Get most out of your Monietracka account</div>
      </div>
      <div>
        <NuxtLink :href="routes.home">
          <Button
            class="bg-white bg-opacity-15 text-white rounded-full"
            size="sm"
            >Skip</Button
          >
        </NuxtLink>
      </div>
    </div>
    <!-- <NuxtLink
      :href="routes.emailSent"
    > -->
    <!-- </NuxtLink> -->
    <OnboardingGetStartedCard
      v-for="step in steps"
      @clicked="step.action"
      :header="step.header"
      :description="step.description"
      :icon="step.icon"
      :done="hasCompletedStep(step.id)"
    />
    <div v-if="hasCompletedSteps" class="absolute bottom-5">
      <NuxtLink :href="routes.home">
        <Button variant="secondary" class="px-20 rounded-full">Continue</Button>
      </NuxtLink>
    </div>
  </div>
  <Sheet v-model:open="isDrawerOpen">
    <SheetContent
      class="p-5 border rounded-t-[30px] flex justify-center pt-10"
      side="bottom"
    >
      <SheetHeader>
        <SheetTitle class="lg:text-lg sm:text-sm text-base"
          >Set a pin to keep your transactions secure</SheetTitle
        >
        <form class="flex flex-col gap-y-4 flex-wrap" @submit="onSubmit">
          <FormField v-slot="{ componentField, value }" name="pin">
            <FormItem>
              <FormLabel>PIN</FormLabel>
              <FormControl>
                <PinInput
                  id="pin-input"
                  v-model="value!"
                  placeholder="○"
                  class="flex gap-2 justify-center items-center mt-1"
                  otp
                  type="number"
                  :name="componentField.name"
                  @update:model-value="
                    (arrStr: string[]) => {
                      setFieldValue('pin', arrStr.filter(Boolean));
                    }
                  "
                >
                  <PinInputGroup>
                    <template v-for="(id, index) in PIN_LENGTH" :key="id">
                      <PinInputInput class="rounded-md border" :index="index" />
                      <template v-if="index !== PIN_LENGTH - 1">
                        <PinInputSeparator />
                      </template>
                    </template>
                  </PinInputGroup>
                </PinInput>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <Button :loading="isSetUserFormLoading" type="submit">Set Pin</Button>
        </form>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>

<style scoped>
.header-text {
  @apply font-[Inter] font-bold text-2xl leading-5 text-[#eae8fd];
  font-style: normal;
}

.header-desc {
  @apply font-[Inter] font-normal text-[#EAE7FD] text-xs leading-5;
  font-style: normal;
}
</style>
