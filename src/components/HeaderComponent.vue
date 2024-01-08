<script setup>
    import router from '../utils/router/index'
    
    const props = defineProps(['title'])

    const goBack = () => {
        router.go(-1)
    }
</script>

<template>
    <div class="h-20 px-4 py-1 flex items-center justify-between text-dark">
        <button @click="goBack" class="w-8 bg-light rounded-full h-8 flex items-center justify-center">
            <i class="bi bi-chevron-left text-xl"></i>
        </button>
        <p class="text-base">{{ props.title }}</p>
        <button class="w-8 h-8 flex invisible items-center justify-center">
            <i class="bi bi-chevron-left text-2xl"></i>
        </button>
    </div>
</template>