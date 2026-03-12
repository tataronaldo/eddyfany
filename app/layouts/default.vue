<template>
  <div class="min-h-screen bg-white dark:bg-slate-900">
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
