import { ref, onMounted } from 'vue';

export function useWindow() {
  const windowRef = ref(window);

  onMounted(() => {
    windowRef.value = window;
  });

  return windowRef;
}
