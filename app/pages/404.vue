<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div class="text-center">
      <h1 class="text-6xl font-bold mb-4">404</h1>
      <h2 class="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p class="text-xl text-gray-400 mb-8">The page you're looking for doesn't exist or is under construction.</p>
      <div class="space-x-4">
        <NuxtLink to="/" class="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
          Back to Home
        </NuxtLink>
        <NuxtLink to="/ministry" class="inline-block bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
          Ministry
        </NuxtLink>
        <NuxtLink to="/construction" class="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
          Construction
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// 404 error page
</script>
