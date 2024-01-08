<script setup lang="ts">
    import iconBell from '@/assets/bell.svg'
    import iconSearch from '@/assets/search.svg'
    import doodleBg from '@/assets/doodle-bg.svg'
    import avatar from '@/assets/avatar.png'
    import iconDiscount from '@/assets/tabler_discount.svg'

    const expenses = [
        {
            bank: 'Kuda bank',
            amount: 12000
        },
        {
            bank: 'GT bank',
            amount: 950
        },
        {
            bank: 'PiggyVest',
            amount: 1050
        },
    ]
</script>

<script>
</script>

<template>
    <div class="bg-tracka-main min-h-screen px-5">
        <div class="py-8 flex items-center justify-between">
            <div class="flex flex-col gap-1 text-light">
                <h3 class="text-base font-medium">
                    Hello <b>John</b>
                </h3>
                <p class="opacity-80 text-xs">
                    Your finances are looking good
                </p>
            </div>

            <div class="flex gap-2 items-center">
                <button class="w-10 h-10 bg-[#2812C9] rounded-full flex items-center justify-center">
                    <img :src="iconBell" alt="" />
                </button>

                <button class="w-10 h-10 bg-[#2812C9] rounded-full flex items-center justify-center">
                    <img :src="iconSearch" alt="" />
                </button>
            </div>
        </div>

        <div class="w-full doodle-img bg-[#210FA4] mb-4 rounded-3xl p-5 flex flex-col">
            <div class="flex flex-col items-center mb-9">
                <div class="flex items-center mb-3.5 justify-center w-14 h-14 rounded-full bg-[#BDD6FF]">
                    <img :src="avatar" alt="">
                </div>
                <p class="font-medium text-xs text-[#FAFCFF] mb-2">
                    Your available balance is
                </p>
                <h1 class="font-bold text-light text-3xl mb-4">
                    N20,983
                </h1>
                <p class="font-medium text-xs text-light text-center mb-2 max-w-48">
                    By this time last month, you spent slightly higher (N22,719)
                </p>
            </div>
            <div class="flex flex-col gap-4">
                <div v-for="expense in expenses" :key="expense.bank" class="flex items-center justify-between">
                    <p class="text-xs text-[#e5f0ff] font-medium tracking-[-0.126px] leading-normal">
                        {{ expense.bank }}
                    </p>

                    <p class="text-xs text-light font-medium leading-normal">
                        N{{ expense.amount.toLocaleString() }}
                    </p>
                </div>
            </div>
        </div>

        <div class="flex p-4 bg-[#2816A7] rounded-2xl">
            <div class="relative w-10 h-10 bg-[#5844EE] flex items-center justify-center rounded-[0.625rem]">
                <span class="inline-block bg-[#FFAE58] h-3.5 w-3.5 rounded-full absolute"></span>
                <img :src="iconDiscount" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .doodle-img {
        background-image: url('../../assets/doodle-bg.svg');
        box-shadow: 0px 16px 64px -32px rgba(0, 0, 0, 0.24);
        background-repeat: repeat;
    }
</style>