<template>
  <div :class="['buttons', size, className]">
    <div class="create-new-password">
      <template v-if="size === 'button-extra-small'">Create new password</template>
      <template v-if="size === 'button-large'">Continue</template>
      <template v-if="size === 'button-small'">Login</template>
      <template v-if="size === 'button-medium'">Go to Bress app</template>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
export default defineComponent({
  name: 'AuthButton',
  props: {
    size: {
      type: String as PropType<
        'button-large' | 'button-medium' | 'button-extra-small' | 'button-small'
      >,
      required: true
    },
    className: { type: String, default: '' }
  }
})
</script>
<style scoped>
.buttons {
  align-items: center;
  background-color: #2c14dd;
  position: relative;
}
.buttons .create-new-password {
  letter-spacing: 0;
  position: relative;
  width: fit-content;
}
.buttons.button-small {
  border-radius: 100px;
  display: flex;
  gap: 10px;
  height: 62px;
  justify-content: center;
  padding: 8px;
  width: 186px;
}
.buttons.button-large {
  border-radius: 100px;
  display: flex;
  gap: 10px;
  height: 62px;
  justify-content: center;
  padding: 8px;
  width: 335px;
}
.buttons.button-medium {
  border-radius: 100px;
  display: flex;
  gap: 10px;
  height: 62px;
  justify-content: center;
  padding: 8px;
  width: 267px;
}
.buttons.button-extra-small {
  border-radius: 20px;
  display: inline-flex;
  gap: 8px;
  overflow: hidden;
  padding: 8px 16px;
}
.buttons.button-small .create-new-password {
  color: #fbfbfb;
  font-family: 'Inter-SemiBold', Helvetica;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  text-align: center;
}
.buttons.button-large .create-new-password {
  color: #fbfbfb;
  font-family: 'Inter-SemiBold', Helvetica;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  text-align: center;
}
.buttons.button-medium .create-new-password {
  color: #fbfbfb;
  font-family: 'Inter-SemiBold', Helvetica;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  text-align: center;
}
.buttons.button-extra-small .create-new-password {
  color: #ffffff;
  font-family: 'Inter-Medium', Helvetica;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}
</style>
