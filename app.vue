<script lang="ts" setup>
import VErrorBoundary from "vue-error-boundary";
import { useToast } from "./components/ui/toast/use-toast";
const { toast } = useToast();

const handleError = (error: Error) => {
  toast({
    variant: "destructive",
    title: (error as any)?.title ?? error?.name ?? 'Error',
    description: error.message ?? error.cause ?? "An unkown error occured",    
  });
};
</script>

<template>
  <div>
    <VErrorBoundary :on-error="handleError">
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
      <Toaster />
    </VErrorBoundary>
  </div>
</template>
