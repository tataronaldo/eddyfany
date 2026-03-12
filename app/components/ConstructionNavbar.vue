<template>
  <nav class="construction-navbar sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur font-sans shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <UIcon name="i-heroicons-building-office-2" class="h-8 w-8 text-amber-800 dark:text-amber-700 mr-2" />
            <span class="text-xl font-bold text-gray-900 dark:text-white">Eddy FanyConstruction</span>
          </div>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            :class="[
              'text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-amber-50 dark:hover:bg-amber-900/20',
              item.active 
                ? 'text-wood-brown dark:text-wood-brown-dark bg-amber-50 dark:bg-amber-900/20' 
                : 'text-gray-700 dark:text-gray-300 hover:text-wood-brown dark:hover:text-wood-brown-dark'
            ]"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        
        <!-- Right Side Actions -->
        <div class="flex items-center gap-2">
          <!-- Back to Home Button -->
          <NuxtLink 
            to="/" 
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-100 dark:bg-amber-900 hover:bg-amber-200 dark:hover:bg-amber-800 transition-colors"
          >
            <UIcon name="i-heroicons-home" class="h-5 w-5 text-amber-800 dark:text-amber-600" />
            <span class="text-amber-800 dark:text-amber-600 font-medium">Back to Home</span>
          </NuxtLink>
          
          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            :class="[
              'p-2 rounded-lg transition-all duration-200 hover:bg-amber-50 dark:hover:bg-amber-900/20',
              isDarkMode 
                ? 'text-wood-brown dark:text-wood-brown-dark' 
                : 'text-gray-600 dark:text-gray-400'
            ]"
            :aria-label="`Switch to ${isDarkMode ? 'light' : 'dark'} mode`"
          >
            <UIcon 
              :name="isDarkMode ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'" 
              class="h-5 w-5" 
            />
          </button>
          
          <!-- Mobile Menu Toggle -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <UIcon 
              :name="mobileMenuOpen ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-bars-3'" 
              class="h-5 w-5" 
            />
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            :class="[
              'block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200',
              item.active 
                ? 'text-wood-brown dark:text-wood-brown-dark bg-amber-50 dark:bg-amber-900/20' 
                : 'text-gray-700 dark:text-gray-300 hover:text-wood-brown dark:hover:text-wood-brown-dark hover:bg-amber-50 dark:hover:bg-amber-900/20'
            ]"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)
const isDarkMode = ref(false)

// Navigation items
const navigationItems = computed(() => [
  { name: 'Home', href: '/construction', active: route.path === '/construction' },
  { name: 'About', href: '/construction/about', active: route.path === '/construction/about' },
  { name: 'Services', href: '/construction/services', active: route.path === '/construction/services' },
  { name: 'Projects', href: '/construction/projects', active: route.path === '/construction/projects' },
  { name: 'Gallery', href: '/construction/gallery', active: route.path === '/construction/gallery' },
  { name: 'Get Quote', href: '/construction/quote', active: route.path === '/construction/quote' },
  { name: 'Contact', href: '/construction/contact', active: route.path === '/construction/contact' }
])

// Initialize dark mode
onMounted(() => {
  const savedDarkMode = localStorage.getItem('construction-dark-mode')
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
  localStorage.setItem('construction-dark-mode', isDarkMode.value.toString())
  
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Close mobile menu when route changes
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
.construction-navbar {
  /* Custom wood-themed colors */
  --wood-primary: #92400e; /* amber-700 */
  --wood-primary-dark: #78350f; /* amber-800 */
  --wood-light: #fef3c7; /* amber-50 */
  --wood-medium: #f59e0b; /* amber-500 */
  --wood-brown: #92400e; /* amber-700 for primary */
  --wood-brown-dark: #78350f; /* amber-800 for dark mode */
}

/* Smooth transitions */
.construction-navbar * {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Active state styling */
.construction-navbar .router-link-active {
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%);
  border-left: 3px solid var(--wood-brown);
}

/* Dark mode active state */
.dark .construction-navbar .router-link-active {
  background: linear-gradient(135deg, rgba(120, 53, 15, 0.2) 0%, rgba(146, 64, 14, 0.1) 100%);
  border-left: 3px solid var(--wood-brown-dark);
}

/* Hover effects */
.construction-navbar a:hover {
  transform: translateX(2px);
  color: var(--wood-brown);
}

.dark .construction-navbar a:hover {
  color: var(--wood-brown-dark);
}

/* Mobile menu animation */
.construction-navbar .mobile-menu-enter-active,
.construction-navbar .mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.construction-navbar .mobile-menu-enter-from,
.construction-navbar .mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Logo hover effect */
.construction-navbar .logo:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}

/* Dark mode toggle animation */
.construction-navbar .dark-mode-toggle {
  position: relative;
  overflow: hidden;
}

.construction-navbar .dark-mode-toggle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(146, 64, 14, 0.3) 0%, transparent 70%);
  transition: all 0.3s ease;
  transform: translate(-50%, -50%);
}

.construction-navbar .dark-mode-toggle:hover::before {
  width: 100%;
  height: 100%;
}
</style>
