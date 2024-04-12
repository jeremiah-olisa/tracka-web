import { ref, onMounted, type Ref } from "vue";
import type {
  IConnect,
  OnMonoConnectClose,
  OnMonoConnectSuccess,
} from "./mono";

declare var Connect: IConnect;

export const useMonoConnect = (
  onSuccess: OnMonoConnectSuccess,
  onClose?: OnMonoConnectClose
) => {
  const connect = ref<IConnect>();
  const key = process.env.NUXT_ENV_MONO_PK ?? "test_pk_k9cb222008d5x7itkzz2";

  if (!key) throw new Error("MONO_PK is required");

  onClose ??= () => {};
  const config = {
    key,
    onSuccess,
    onClose,
  };

  onMounted(async () => {
    const script = document.createElement("script");
    script.src = "https://connect.withmono.com/connect.js";
    script.async = true;
    script.onload = () => {
      connect.value = new Connect(config);
      if (connect.value) connect.value.setup();
    };
    document.head.appendChild(script);
  });

  const openConnect = () => {
    if (connect.value) connect.value.open();
  };

  return {
    openConnect,
  };
};
