<template>
  <div class="onboarding-sign-up">
    <div class="nav-field">
      <div class="title">Sign Up</div>
      <div class="left-side-icons">
        <div class="icon-back">
          <div class="overlap-group">
            <svg
              width="32"
              height="32"
              class="element-arrows-chevron"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.8451 16.0001L19.3332 21.4882C19.6587 21.8137 19.6587 22.3413 19.3332 22.6667C19.0078 22.9922 18.4801 22.9922 18.1547 22.6667L11.488 16.0001L18.1547 9.3334C18.4801 9.00796 19.0078 9.00796 19.3332 9.3334C19.6587 9.65883 19.6587 10.1865 19.3332 10.5119L13.8451 16.0001Z"
                fill="#131313"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="frame">
      <button class="button-small"><div class="text-wrapper-2">Register</div></button>
      <Buttons size="button-small" />
    </div>
    <div class="frame-2">
      <div class="frame-3">
        <div class="title-2">Welcome to Brees</div>
        <p class="p">Complete the sign up to get started</p>
      </div>
      <div class="frame-4">
        <div class="frame-3">
          <div class="input">
            <div class="input-value">Louis Real</div>
            <div class="label">Name</div>
          </div>
          <div class="input">
            <div class="input-value">Louis04real@gmail.com</div>
            <div class="label">Email</div>
          </div>
          <div class="overlap-group-wrapper">
            <div class="overlap-group-2">
              <div class="base">
                <svg
                  width="335"
                  height="61"
                  viewBox="0 0 335 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="335" height="61" rx="24" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M299.098 30C299.098 32.1333 300.844 33.8691 303 33.8691C305.146 33.8691 306.893 32.1333 306.893 30C306.893 27.857 305.146 26.1212 303 26.1212C300.844 26.1212 299.098 27.857 299.098 30ZM308.737 24.0461C310.444 25.3648 311.898 27.2945 312.941 29.7091C313.02 29.8933 313.02 30.1067 312.941 30.2812C310.854 35.1103 307.137 38 303 38H302.99C298.863 38 295.146 35.1103 293.059 30.2812C292.98 30.1067 292.98 29.8933 293.059 29.7091C295.146 24.88 298.863 22 302.99 22H303C305.068 22 307.029 22.7176 308.737 24.0461ZM303.001 32.4124C304.338 32.4124 305.43 31.3264 305.43 29.9979C305.43 28.6597 304.338 27.5736 303.001 27.5736C302.884 27.5736 302.767 27.5833 302.66 27.6027C302.621 28.6694 301.743 29.5227 300.66 29.5227H300.611C300.582 29.6779 300.562 29.833 300.562 29.9979C300.562 31.3264 301.655 32.4124 303.001 32.4124Z"
                    fill="#2C14DD"
                  />
                </svg>
              </div>
              <div class="label">Password</div>
              <div class="text-wrapper-3">••••••••••••</div>
            </div>
          </div>
        </div>
        <div class="group">
          <input class="checkbox" type="checkbox" />
          <p class="by-signing-up-you">
            <span class="span">By signing up, you agree to the </span>
            <span class="text-wrapper-4">Terms of Service and Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Buttons from './../../components/Buttons.vue'
export default defineComponent({ name: 'OnboardingSignUp', components: { Buttons } })
</script>
<style scoped>
.onboarding-sign-up {
  background-color: #f5f7ff;
  height: 812px;
  overflow: hidden;
  position: relative;
  width: 375px;
}

.onboarding-sign-up .nav-field {
  height: 44px;
  left: 0;
  position: absolute;
  top: 44px;
  width: 377px;
}
.onboarding-sign-up .title {
  color: #131313;
  font-family: 'Inter-Medium', Helvetica;
  font-size: 16px;
  font-weight: 500;
  left: 158px;
  letter-spacing: 0;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 12px;
  white-space: nowrap;
}
.onboarding-sign-up .left-side-icons {
  height: 44px;
  left: 0;
  position: absolute;
  top: 0;
  width: 64px;
}
.onboarding-sign-up .icon-back {
  height: 32px;
  left: 16px;
  position: relative;
  top: 4px;
  width: 32px;
}
.onboarding-sign-up .overlap-group {
  background-color: #ffffff;
  border-radius: 20px;
  height: 34px;
  left: -1px;
  position: relative;
  top: -1px;
  width: 34px;
}
.onboarding-sign-up .element-arrows-chevron {
  height: 20px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 20px;
}
.onboarding-sign-up .frame {
  align-items: center;
  display: inline-flex;
  gap: 55px;
  left: 20px;
  position: absolute;
  top: 700px;
}
.onboarding-sign-up .button-small {
  all: unset;
  -webkit-backdrop-filter: blur(8px) brightness(100%);
  align-items: center;
  backdrop-filter: blur(8px) brightness(100%);
  background-color: #2c14dd1a;
  border-radius: 100px;
  box-shadow: var(--blur);
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  padding: 9px 24px;
  position: relative;
}
.onboarding-sign-up .text-wrapper-2 {
  color: #2c14dd;
  font-family: 'Inter-Medium', Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  line-height: 16px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
.onboarding-sign-up .frame-2 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 32px;
  left: 20px;
  position: absolute;
  top: 128px;
}
.onboarding-sign-up .frame-3 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
}
.onboarding-sign-up .title-2 {
  color: #240e50;
  font-family: 'Inter-Bold', Helvetica;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}
.onboarding-sign-up .p {
  color: #292b2d;
  font-family: 'Inter-Medium', Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 22px;
  position: relative;
  width: 335px;
}
.onboarding-sign-up .frame-4 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 32px;
  position: relative;
}
.onboarding-sign-up .input {
  background-color: #ffffff;
  border-radius: 24px;
  height: 61px;
  position: relative;
  width: 335px;
}
.onboarding-sign-up .input-value {
  color: #040c22;
  font-family: 'Inter-Medium', Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 20px;
  letter-spacing: -0.4px;
  line-height: normal;
  position: absolute;
  top: 31px;
}
.onboarding-sign-up .label {
  color: #8f94a2;
  font-family: 'Inter-SemiBold', Helvetica;
  font-size: 10px;
  font-weight: 600;
  left: 20px;
  letter-spacing: -0.12px;
  line-height: normal;
  position: absolute;
  top: 11px;
  white-space: nowrap;
}
.onboarding-sign-up .overlap-group-wrapper {
  height: 61px;
  position: relative;
  width: 335px;
}
.onboarding-sign-up .overlap-group-2 {
  border-radius: 24px;
  height: 61px;
  position: relative;
}
.onboarding-sign-up .base {
  background-color: #ffffff;
  border-radius: 24px;
  height: 61px;
  left: 0;
  position: absolute;
  top: 0;
  width: 335px;
}
.onboarding-sign-up .iconly-bold-show {
  height: 24px;
  left: 291px;
  position: absolute;
  top: 18px;
  width: 24px;
}
.onboarding-sign-up .text-wrapper-3 {
  color: #040c22;
  font-family: 'Inter-Bold', Helvetica;
  font-size: 14px;
  font-weight: 700;
  left: 20px;
  letter-spacing: 1.4px;
  line-height: normal;
  position: absolute;
  top: 31px;
}
.onboarding-sign-up .group {
  height: 44px;
  position: relative;
  width: 323px;
}
.onboarding-sign-up .checkbox {
  height: 22px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 22px;
}
.onboarding-sign-up .by-signing-up-you {
  color: transparent;
  font-family: 'Inter-Medium', Helvetica;
  font-size: 14px;
  font-weight: 500;
  height: 44px;
  left: 30px;
  letter-spacing: 0;
  line-height: 22px;
  position: absolute;
  top: 0;
  width: 291px;
}
.onboarding-sign-up .span {
  color: #131313;
}
.onboarding-sign-up .text-wrapper-4 {
  color: #2c14dd;
}
</style>
