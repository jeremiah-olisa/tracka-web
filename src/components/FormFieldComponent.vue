<script setup lang="ts">
    const props = defineProps(['label', 'placeholder', 'type'])
</script>

<template>
    <div class="flex flex-col gap-1.5">
        <p class="text-sm tracking-[-0.12px] text-[#8F94A3] leading-[150%] ">
            {{ props.label }}
        </p>
        <input 
            :type="props.type" 
            :placeholder="props.placeholder" 
            class="text-sm border italic border-tracka-main px-4 py-4 rounded-2xl h-14 bg-light text-[#C8C8C8] tracking-[-0.4px]" 
        />
    </div>
</template>

