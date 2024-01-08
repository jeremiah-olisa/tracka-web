<script setup lang="ts">
    import FormFieldComponent from '@/components/FormFieldComponent.vue'
    import HeaderComponent from '@/components/HeaderComponent.vue'
    import router from '@/utils/router'

    const onSubmit = () => {
        router.push('/auth/signup/email-verification')
    }
</script>

<script>
</script>

<template>
    <div class="bg-light min-h-screen flex flex-col gap-10">
        <header-component title="Sign Up"></header-component>
        <div class="px-5 flex flex-col gap-8">
            <div class="flex flex-col gap-3">
                <h3 class="text-[2rem] text-tracka-main font-bold leading-normal">
                    Register
                </h3>
                <p class="text-dark text-base leading-normal">
                    Create an <b class="font-bold text-tracka-main">account</b> to access all the features of <b class="font-bold">Tracka!</b>
                </p>
            </div>
            
            <div class="flex flex-col gap-4">
                <FormFieldComponent 
                    label="Name" 
                    placeholder="Enter your name" 
                    type="text"
                />
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
                Register
            </button>

            <div class="flex gap-1.5 self-center mt-2">
                <p class="text-sm tracking-[-0.176px]">
                    Already have an account?
                </p>
                <router-link 
                    to="/auth/login" 
                    class="text-sm text-tracka-main font-bold underline"
                >
                    Login
                </router-link>
            </div>
        </div>
    </div>
</template>