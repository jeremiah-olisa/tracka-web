<script setup lang="ts">
    import FormFieldComponent from '@/components/FormFieldComponent.vue'
    import HeaderComponent from '@/components/HeaderComponent.vue'
    import router from '@/utils/router';

    const onVerify = () => {
        router.push('/auth/login')
    }
</script>

<script>
</script>

<template>
    <div class="bg-light min-h-screen flex flex-col gap-10">
        <header-component title="Email Verification"></header-component>
        <div class="px-5 flex flex-col gap-8">
            <div class="flex flex-col gap-3">
                <h3 class="text-[2rem] text-tracka-main font-bold leading-normal">
                    Register
                </h3>
                <p class="text-dark text-base leading-normal tracking-[-0.176px]">
                    We have sent an email to your email account with a verification code!
                </p>
            </div>
            
            <div class="flex flex-col gap-4">
                <FormFieldComponent 
                    label="Verification Code" 
                    placeholder="Ex: 123456" 
                    type="text"
                />
            </div>

            <button
                @click="onVerify" 
                class="bg-tracka-main mt-3 h-14 rounded-2xl text-light text-sm"
            >
                Verify
            </button>
        </div>
    </div>
</template>