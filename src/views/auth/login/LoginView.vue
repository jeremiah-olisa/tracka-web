<script setup lang="ts">
    import FormFieldComponent from '@/components/FormFieldComponent.vue'
    import HeaderComponent from '@/components/HeaderComponent.vue'
    import router from '../../../utils/router'

    const onSubmit = () => {
        router.push('/dashboard')
    }
</script>

<script>
</script>

<template>
    <div class="bg-light min-h-screen flex flex-col gap-10">
        <header-component title="Login"></header-component>
        <div class="px-5 flex flex-col gap-8">
            <div class="flex flex-col gap-3">
                <h3 class="text-[2rem] text-tracka-main font-bold leading-normal">
                    Login
                </h3>
                <p class="text-dark text-base leading-normal">
                    Login now to your <b class="font-bold text-tracka-main">account</b> to track all your expenses on <b class="font-bold">Tracka!</b>
                </p>
            </div>
            
            <div class="flex flex-col gap-4">
                <FormFieldComponent 
                    label="Email" 
                    placeholder="Enter your email" 
                    type="email" 
                />
                <FormFieldComponent 
                    label="Password" 
                    placeholder="••••••••••••" 
                    type="password"
                />
            </div>

            <button 
                @click="onSubmit"
                class="bg-tracka-main mt-3 h-14 rounded-2xl text-light text-sm"
            >
                Login
            </button>

            <div class="flex gap-1.5 self-center mt-2">
                <p class="text-sm tracking-[-0.176px]">
                    Don't have an account?
                </p>
                <router-link 
                    to="/auth/signup" 
                    class="text-sm text-tracka-main font-bold underline"
                >
                    Register
                </router-link>
            </div>
        </div>
    </div>
</template>