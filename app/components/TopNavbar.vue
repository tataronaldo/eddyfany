<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isDarkMode = ref(false)

// Check for saved dark mode preference or system preference
onMounted(() => {
  const savedDarkMode = localStorage.getItem('dark-mode')
  if (savedDarkMode !== null) {
    isDarkMode.value = savedDarkMode === 'true'
  } else {
    // Check system preference
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  // Apply dark mode class to document
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  }
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('dark-mode', isDarkMode.value.toString())
  
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur font-sans">
    <UContainer class="flex items-center justify-between h-16">
      <div class="flex items-center gap-1.5">
        <NuxtLink to="/" class="font-bold text-xl text-gray-900 dark:text-white flex items-center gap-2">
          <img
              src="../assets/images/hero.png"
              class="rounded-2xl shadow-2xl w-8 h-8 text-primary-500"
              alt="Artistic Vision"
            >
          <span>Eddy Fany</span>
        </NuxtLink>
      </div>

      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          to="/"
          class="text-sm font-medium text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
          active-class="text-primary-500 dark:text-primary-400"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/ministry"
          class="text-sm font-medium text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
          active-class="text-primary-500 dark:text-primary-400"
        >
          Ministry
        </NuxtLink>
        <NuxtLink
          to="/construction"
          class="text-sm font-medium text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
          active-class="text-primary-500 dark:text-primary-400"
        >
          Construction
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <UButton
         class="cursor-pointer hover:bg-green-500"
          :icon="isDarkMode ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
          color="gray"
          variant="ghost"
          @click="toggleDarkMode"
          :aria-label="`Switch to ${isDarkMode ? 'light' : 'dark'} mode`"
        />
        <UButton
          to="/contact"
          color="gray"
          variant="ghost"
          label="Contact Us"
          class="hidden md:flex"
        />
        <UButton
          icon="i-heroicons-bars-3"
          color="gray"
          variant="ghost"
          class="md:hidden"
          @click="isMenuOpen = !isMenuOpen"
        />
      </div>
    </UContainer>
    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <nav class="flex flex-col p-4 gap-2">
        <NuxtLink
          to="/"
          class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors rounded"
          @click="closeMenu"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/ministry"
          class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors rounded"
          @click="closeMenu"
        >
          Ministry
        </NuxtLink>
        <NuxtLink
          to="/construction"
          class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors rounded"
          @click="closeMenu"
        >
          Construction
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors rounded"
          @click="closeMenu"
        >
          Contact Us
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>