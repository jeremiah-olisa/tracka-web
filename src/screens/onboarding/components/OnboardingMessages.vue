<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'OnboardingMessages',
  props: {
    screens: { type: String as PropType<'two' | 'three' | 'one'>, required: true },
    className: { type: String, default: '' },
    next: { type: Function, required: true }
  }
})
</script>

<template>
  <div :class="['onboarding-messages', screens, className]">
    <div class="wrapper">
      <div class="text">
        <div class="get-an-overview-of" v-if="screens === 'one'">
          <p class="text-wrapper">
            Get an overview of how you are performing and motivate yourself to achieve even moew.
          </p>
        </div>
        <div class="get-an-overview-of" v-if="screens === 'two'">
          <p class="text-wrapper">
            Track your transaction easily, with categories and financial report
          </p>
        </div>
        <div class="get-an-overview-of" v-if="screens === 'three'">
          <p class="text-wrapper">
            Setup your budget for each category <br />
            so you in control. Track categories you spend the most money on
          </p>
        </div>
        <div class="you-ought-to-know" v-if="screens === 'one'">
          <p class="text-wrapper">You ought to know where your money goes</p>
        </div>
        <div class="you-ought-to-know" v-if="screens === 'two'">
          <p class="text-wrapper">
            Gain total <br />
            control of your money
          </p>
        </div>
        <div class="you-ought-to-know" v-if="screens === 'three'">
          <p class="text-wrapper">Plan ahead and manage your money better</p>
        </div>
      </div>
      <div class="button-frame">
        <SplashSliders v-bind:screen="screens" />
        <div class="button-half-fill">
          <button @click="next()" class="button-wrapper">
            <div class="button" v-if="['one', 'two'].includes(screens)">Next</div>
            <div class="button" v-if="screens === 'three'">Get Started</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.onboarding-messages {
  align-items: center;
  background-color: #ffffff;
  border-radius: 48px;
  box-shadow: 0px 16px 24px -8px #0000003d;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 24px;
  position: relative;
}

.wrapper {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
}
.text {
  margin-right: -4px;
  position: relative;
  width: 291px;
}
.get-an-overview-of {
  color: #13095ecc;
  font-family: 'Inter-Medium', Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 0;
  letter-spacing: 0;
  line-height: 21px;
  position: absolute;
  text-align: center;
  top: 74px;
  width: 287px;
}
.you-ought-to-know {
  color: #12085d;
  font-family: 'Inter-Bold', Helvetica;
  font-size: 24px;
  font-weight: 700;
  height: 58px;
  left: 0;
  letter-spacing: -0.5px;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
  width: 287px;
}
.button-frame {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
}
.button-half-fill {
  align-items: flex-start;
  box-shadow: 0px 8px 24px #2c14dd26;
  display: flex;
  flex: 0 0 auto;
  position: relative;
}
.button-wrapper {
  /* @apply bg-tracka-main; */
  align-items: center;
  background-color: #2c14dd;
  border-radius: 94px;
  display: flex;
  gap: 8px;
  height: 62px;
  justify-content: center;
  padding: 20px 141px;
  position: relative;
  width: 207px;
}
.button {
  color: #ffffff;
  font-family: 'Inter-SemiBold', Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
.three {
  gap: 10px;
}
.two {
  gap: 10px;
}
.one {
  gap: 16px;
}
.three .wrapper {
  gap: 24px;
}
.two .wrapper {
  gap: 45px;
}
.one .wrapper {
  gap: 24px;
  justify-content: center;
}
.three .text {
  height: 137px;
}
.two .text {
  height: 116px;
}
.one .text {
  height: 137px;
}
.three .button {
  margin-left: -82.5px;
  margin-right: -82.5px;
}
.two .button {
  margin-left: -56px;
  margin-right: -56px;
}
.one .button {
  margin-left: -56px;
  margin-right: -56px;
}
</style>
