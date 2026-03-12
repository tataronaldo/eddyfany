<script setup lang="ts">
import { ref, computed } from 'vue'

const route = useRoute()
const isMenuOpen = ref(false)

const isActive = (path: string) => {
  return route.path === path
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="church-home-nav fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800">
    <div class="max-w-8xl mx-auto px-6 flex items-center justify-between h-20">
      <NuxtLink to="/ministry" class="text-xl font-bold text-white tracking-tight flex items-center gap-2">
        <img
              src="../assets/images/hero.png"
              class="rounded-2xl shadow-2xl w-8 h-8 text-primary-500"
              alt="Artistic Vision"
            >
        <span class="leading-tight">Eddy Fany Ministry</span>
      </NuxtLink>
      <nav class="hidden md:flex items-center gap-10">
        <NuxtLink 
          to="/ministry" 
          :class="[
            'nav-link text-sm font-medium transition-all duration-300 relative px-2 py-1',
            isActive('/ministry') 
              ? 'text-primary-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-400' 
              : 'text-gray-300 hover:text-white'
          ]"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/ministry/about-us" 
          :class="[
            'nav-link text-sm font-medium transition-all duration-300 relative px-2 py-1',
            isActive('/ministry/about-us') 
              ? 'text-primary-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-400' 
              : 'text-gray-300 hover:text-white'
          ]"
        >
          About
        </NuxtLink>
        <NuxtLink 
          to="/ministry/sermons" 
          :class="[
            'nav-link text-sm font-medium transition-all duration-300 relative px-2 py-1',
            isActive('/ministry/sermons') 
              ? 'text-primary-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-400' 
              : 'text-gray-300 hover:text-white'
          ]"
        >
          Sermons
        </NuxtLink>
        <NuxtLink 
          to="/ministry/events" 
          :class="[
            'nav-link text-sm font-medium transition-all duration-300 relative px-2 py-1',
            isActive('/ministry/events') 
              ? 'text-primary-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-400' 
              : 'text-gray-300 hover:text-white'
          ]"
        >
          Events
        </NuxtLink>
        <NuxtLink 
          to="/ministry/prayer-request" 
          :class="[
            'nav-link text-sm font-medium transition-all duration-300 relative px-2 py-1',
            isActive('/ministry/prayer-request') 
              ? 'text-primary-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-400' 
              : 'text-gray-300 hover:text-white'
          ]"
        >
          Prayer Request
        </NuxtLink>
        <NuxtLink 
          to="/ministry/gallery" 
          :class="[
            'nav-link text-sm font-medium transition-all duration-300 relative px-2 py-1',
            isActive('/ministry/gallery') 
              ? 'text-primary-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-400' 
              : 'text-gray-300 hover:text-white'
          ]"
        >
          Gallery
        </NuxtLink>
        <NuxtLink 
          to="/ministry/blog" 
          :class="[
            'nav-link text-sm font-medium transition-all duration-300 relative px-2 py-1',
            isActive('/ministry/blog') 
              ? 'text-primary-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-400' 
              : 'text-gray-300 hover:text-white'
          ]"
        >
          Blog
        </NuxtLink>
        <NuxtLink 
          to="/ministry/testimonials" 
          :class="[
            'nav-link text-sm font-medium transition-all duration-300 relative px-2 py-1',
            isActive('/ministry/testimonials') 
              ? 'text-primary-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-400' 
              : 'text-gray-300 hover:text-white'
          ]"
        >
          Testimonials
        </NuxtLink>
        <NuxtLink 
          to="/ministry/contact" 
          :class="[
            'nav-link text-sm font-medium transition-all duration-300 relative px-2 py-1',
            isActive('/ministry/contact') 
              ? 'text-primary-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-400' 
              : 'text-gray-300 hover:text-white'
          ]"
        >
          Contact
        </NuxtLink>
        
        <!-- Back to Home Button -->
        <NuxtLink 
          to="/" 
          class="flex w-full items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-600"
        >
          <UIcon name="i-heroicons-home" class="h-5 w-5" />
          <span class="font-medium">Back to Home</span>
        </NuxtLink>
        
        <UButton to="/ministry/give" label="Give" size="sm" color="primary" class="cursor-pointer" />
      </nav>
      <UButton icon="i-heroicons-bars-3" color="neutral" variant="ghost" class="md:hidden text-white" @click="isMenuOpen = !isMenuOpen" />
    </div>
    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-gray-800/95 border-t border-gray-700">
      <nav class="flex flex-col p-4 gap-2 max-w-7xl mx-auto">
        <NuxtLink 
          to="/ministry" 
          :class="[
            'px-4 py-2 text-sm font-medium transition-all duration-300 rounded',
            isActive('/ministry') 
              ? 'text-primary-400 bg-primary-900/20' 
              : 'text-gray-300 hover:text-white'
          ]"
          @click="closeMenu"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/ministry/about-us" 
          :class="[
            'px-4 py-2 text-sm font-medium transition-all duration-300 rounded',
            isActive('/ministry/about-us') 
              ? 'text-primary-400 bg-primary-900/20' 
              : 'text-gray-300 hover:text-white'
          ]"
          @click="closeMenu"
        >
          About Us
        </NuxtLink>
        <NuxtLink 
          to="/ministry/sermons" 
          :class="[
            'px-4 py-2 text-sm font-medium transition-all duration-300 rounded',
            isActive('/ministry/sermons') 
              ? 'text-primary-400 bg-primary-900/20' 
              : 'text-gray-300 hover:text-white'
          ]"
          @click="closeMenu"
        >
          Sermons
        </NuxtLink>
        <NuxtLink 
          to="/ministry/events" 
          :class="[
            'px-4 py-2 text-sm font-medium transition-all duration-300 rounded',
            isActive('/ministry/events') 
              ? 'text-primary-400 bg-primary-900/20' 
              : 'text-gray-300 hover:text-white'
          ]"
          @click="closeMenu"
        >
          Events
        </NuxtLink>
        <NuxtLink 
          to="/ministry/prayer-request" 
          :class="[
            'px-4 py-2 text-sm font-medium transition-all duration-300 rounded',
            isActive('/ministry/prayer-request') 
              ? 'text-primary-400 bg-primary-900/20' 
              : 'text-gray-300 hover:text-white'
          ]"
          @click="closeMenu"
        >
          Prayer Request
        </NuxtLink>
        <NuxtLink 
          to="/ministry/gallery" 
          :class="[
            'px-4 py-2 text-sm font-medium transition-all duration-300 rounded',
            isActive('/ministry/gallery') 
              ? 'text-primary-400 bg-primary-900/20' 
              : 'text-gray-300 hover:text-white'
          ]"
          @click="closeMenu"
        >
          Gallery
        </NuxtLink>
        <NuxtLink 
          to="/ministry/blog" 
          :class="[
            'px-4 py-2 text-sm font-medium transition-all duration-300 rounded',
            isActive('/ministry/blog') 
              ? 'text-primary-400 bg-primary-900/20' 
              : 'text-gray-300 hover:text-white'
          ]"
          @click="closeMenu"
        >
          Blog
        </NuxtLink>
        <NuxtLink 
          to="/ministry/testimonials" 
          :class="[
            'px-4 py-2 text-sm font-medium transition-all duration-300 rounded',
            isActive('/ministry/testimonials') 
              ? 'text-primary-400 bg-primary-900/20' 
              : 'text-gray-300 hover:text-white'
          ]"
          @click="closeMenu"
        >
          Testimonials
        </NuxtLink>
        <NuxtLink 
          to="/ministry/contact" 
          :class="[
            'px-4 py-2 text-sm font-medium transition-all duration-300 rounded',
            isActive('/ministry/contact') 
              ? 'text-primary-400 bg-primary-900/20' 
              : 'text-gray-300 hover:text-white'
          ]"
          @click="closeMenu"
        >
          Contact
        </NuxtLink>
        <div class="px-4 py-2">
          <UButton to="/ministry/give" label="Give" size="sm" color="primary" block @click="closeMenu" class="cursor-pointer" />
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
