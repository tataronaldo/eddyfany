<template>
  <header class="admin-toolbar fixed top-0 left-0 right-0 z-40 h-16 transition-all duration-200" :class="isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'">
    <div class="flex items-center justify-between px-6 py-3 h-full">
      <!-- Left Section - Menu Toggle Only -->
      <div class="flex items-center">
        <UButton 
          @click="$emit('toggle-sidebar')" 
          :color="isDarkMode ? 'gray' : 'white'"
          variant="ghost"
          size="sm"
          class="transition-transform duration-200 hover:scale-110"
        >
          <UIcon name="i-heroicons-bars-3" class="w-5 h-5" />
        </UButton>
      </div>
      
      <!-- Center Section - Search Bar -->
      <div class="flex-1 max-w-xl mx-8">
        <UInput
          v-model="searchQuery"
          placeholder="Search..."
          icon="i-heroicons-magnifying-glass"
          size="sm"
          class="transition-all duration-200"
          :class="searchFocused ? 'ring-2 ring-blue-500' : ''"
          @focus="searchFocused = true"
          @blur="searchFocused = false"
        />
      </div>
      
      <!-- Right Section - Actions -->
      <div class="flex items-center gap-3">
        <!-- Notifications -->
        <UButton 
          :color="isDarkMode ? 'gray' : 'white'"
          variant="ghost" 
          size="sm" 
          class="relative transition-transform duration-200 hover:scale-110"
        >
          <UIcon name="i-heroicons-bell" class="w-5 h-5" />
          <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </UButton>
        
        <!-- Dark Mode Toggle -->
        <UButton 
          @click="$emit('toggle-dark-mode')" 
          :color="isDarkMode ? 'gray' : 'white'"
          variant="ghost" 
          size="sm"
          class="transition-transform duration-200 hover:scale-110"
        >
          <UIcon :name="isDarkMode ? 'i-heroicons-sun' : 'i-heroicons-moon'" class="w-5 h-5" />
        </UButton>
        
        <!-- View Site Button -->
        <UButton 
          @click="router.push('/ministry')" 
          color="primary" 
          size="sm"
          class="transition-all duration-200 hover:shadow-lg"
        >
          <UIcon name="i-heroicons-eye" class="w-4 h-4 mr-2" />
          View Site
        </UButton>
        
        <!-- User Profile -->
        <div class="flex items-center gap-3 pl-3 transition-colors duration-200" :class="isDarkMode ? 'border-gray-700' : 'border-gray-300'">
          <div class="relative">
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <UIcon name="i-heroicons-user" class="w-4 h-4 text-white" />
            </div>
            <div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 transition-colors duration-200" :class="isDarkMode ? 'border-gray-900' : 'border-white'"></div>
          </div>
          <div class="hidden md:block">
            <p class="text-sm font-medium transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Admin User</p>
            <p class="text-xs transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">admin@eddyfany.org</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const router = useRouter()
const searchQuery = ref('')
const searchFocused = ref(false)

const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle-sidebar', 'toggle-dark-mode'])
</script>

<style scoped>
.admin-toolbar {
  backdrop-filter: blur(10px);
}
</style>
