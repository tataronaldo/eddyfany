<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="church-home-nav fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
      <NuxtLink to="/ministry" class="text-xl font-bold text-white tracking-tight flex items-center gap-2">
        <img
              src="../assets/images/hero.png"
              class="rounded-2xl shadow-2xl w-8 h-8 text-primary-500"
              alt="Artistic Vision"
            >        Eddy Fany Ministry
      </NuxtLink>
      <nav class="hidden md:flex items-center gap-10">
        <NuxtLink to="/ministry/im-new" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors">
          I'm New
        </NuxtLink>
        <NuxtLink to="/ministry/services" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors">
          Services
        </NuxtLink>
        <NuxtLink to="/ministry/events" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors">
          Events
        </NuxtLink>
        <NuxtLink to="/ministry/about-us" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors">
          About Us
        </NuxtLink>
        <UButton to="/ministry/give" label="Give" size="sm" color="primary" />
      </nav>
      <UButton icon="i-heroicons-bars-3" color="neutral" variant="ghost" class="md:hidden text-white" @click="isMenuOpen = !isMenuOpen" />
    </div>
    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-gray-800/95 border-t border-gray-700">
      <nav class="flex flex-col p-4 gap-2 max-w-7xl mx-auto">
        <NuxtLink to="/ministry/im-new" class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded" @click="closeMenu">
          I'm New
        </NuxtLink>
        <NuxtLink to="/ministry/services" class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded" @click="closeMenu">
          Services
        </NuxtLink>
        <NuxtLink to="/ministry/events" class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded" @click="closeMenu">
          Events
        </NuxtLink>
        <NuxtLink to="/ministry/about-us" class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded" @click="closeMenu">
          About Us
        </NuxtLink>
        <div class="px-4 py-2">
          <UButton to="/ministry/give" label="Give" size="sm" color="primary" block @click="closeMenu" />
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.church-home-nav {
  font-family: var(--church-heading-font, 'Inter', sans-serif);
}
</style>
