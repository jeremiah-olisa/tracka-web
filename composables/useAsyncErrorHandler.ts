import { useToast } from "~/components/ui/toast";
import ToastAction from "~/components/ui/toast/ToastAction.vue";
import { type Ref } from "vue";

export const useAsyncErrorHandler = () => {
  const { toast } = useToast();

  // Overload 1: Accepts async method without loading state and retry
  const tryCatch: {
    <C, R>(
      callback: () => C,
      errorTitle?: string,
      loadingState?: Ref<boolean>,
      retry?: () => R
    ): C;

    <C, R>(
      callback: () => Promise<C>,
      errorTitle?: string,
      loadingState?: Ref<boolean>,
      retry?: () => Promise<R>
    ): Promise<C>;
  } = async <C, R>(
    callback: () => Promise<C>,
    errorTitle?: string,
    loadingState?: Ref<boolean>,
    retry?: () => Promise<R>
  ) => {
    try {
      if (loadingState) loadingState.value = true;
      return await callback();
    } catch (error: any) {
      toast({
        title: errorTitle ?? "Error",
        description: error?.message,
        variant: "destructive",
        action: retry
          ? h(
              ToastAction,
              {
                altText: "Try again",
              },
              {
                default: retry,
              }
            )
          : undefined,
      });
      throw error;
    } finally {
      if (loadingState) loadingState.value = false;
    }
  };

  return tryCatch;
};
