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

const title = 'Eddy Fany Ministry - A place to find hope, healing, and purpose through the transformative power of faith. '
const description = 'Join us on a journey of spiritual growth and community as we explore the teachings of Jesus Christ together.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  // ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
