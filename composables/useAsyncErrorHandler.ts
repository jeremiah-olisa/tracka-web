import { useToast } from "~/components/ui/toast";
import ToastAction from "~/components/ui/toast/ToastAction.vue";

export const useAsyncErrorHandler = (
  errorTitle?: string,
  loadingState?: Ref<boolean>
) => {
  const { toast } = useToast();

  const tryCatch = async <C = any, R = any>(
    callback: () => Promise<C>,
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
