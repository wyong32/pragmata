<template>
  <AppHeader />
  <main id="main-content" tabindex="-1">
    <RouterView />
  </main>
  <AppFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style scoped>
#main-content {
  min-height: 60vh;
  position: relative;
  z-index: 1;
}
</style>
