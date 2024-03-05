<script lang="ts" setup>
import useAppLoading from './lib/hooks/useAppLoading';

const { loading } = useAppLoading();

</script>

<template>
  <div>
    <NuxtLayout>
    <Loading v-if="loading" />
    <div v-else>Loaded</div>
    </NuxtLayout>
  </div>
</template>
