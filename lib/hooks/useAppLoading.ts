import { ref } from "vue";

const useAppLoading = () => {
    const loading = ref(false);
    const nuxtApp = useNuxtApp();

    nuxtApp.hook("page:start", () => {
        loading.value = true;
    });

    nuxtApp.hook("page:finish", () => {
        loading.value = false;
    });

    return { loading: loading.value }
}

export default useAppLoading;

