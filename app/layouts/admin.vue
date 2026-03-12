<template>
  <div class="admin-layout" :class="{ 'dark': isDarkMode }">
    <!-- Sidebar Component -->
    <AdminSidebar 
      :sidebar-open="sidebarOpen" 
      :is-dark-mode="isDarkMode"
      @toggle-sidebar="toggleSidebar"
      @toggle-dark-mode="toggleDarkMode"
      @logout="logout"
    />

    <!-- Main Content Area -->
    <div class="admin-main transition-all duration-300 ease-in-out" :class="{ 'ml-64': sidebarOpen, 'ml-20': !sidebarOpen }">
      <!-- Toolbar Component -->
      <AdminToolbar 
        :is-dark-mode="isDarkMode"
        @toggle-sidebar="toggleSidebar"
        @toggle-dark-mode="toggleDarkMode"
      />

      <!-- Page Header - Separate from toolbar -->
      <div class="page-header px-6 py-4 mt-16 transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'">
        <div class="flex items-center gap-3">
          <div class="w-px h-6 transition-colors duration-200" :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-300'"></div>
          <h1 class="text-xl font-semibold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ pageTitle }}</h1>
        </div>
      </div>

      <!-- Page Content - Distinct area -->
      <main class="admin-content min-h-screen transition-colors duration-200" :class="isDarkMode ? 'bg-gray-950' : 'bg-gray-50'">
        <div class="p-6">
          <slot />
        </div>
      </main>
    </div>

    <!-- Mobile Sidebar Overlay -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="sidebarOpen && isMobile" 
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        @click="closeSidebar"
      ></div>
    </Transition>
  </div>
</template>

<script setup>
const sidebarOpen = ref(true)
const isMobile = ref(false)
const isDarkMode = ref(false)
const route = useRoute()
const router = useRouter()

const pageTitle = computed(() => {
  const navigation = [
    { name: 'Dashboard', to: '/admin' },
    { name: 'Sermons', to: '/admin/sermons' },
    { name: 'Blog Posts', to: '/admin/blog' },
    { name: 'Projects', to: '/admin/projects' },
    { name: 'Events', to: '/admin/events' },
    { name: 'Donations', to: '/admin/donations' },
    { name: 'Members', to: '/admin/members' },
    { name: 'Prayer Requests', to: '/admin/prayers' },
    { name: 'Testimonials', to: '/admin/testimonials' },
    { name: 'Contact Messages', to: '/admin/contact' },
  ]
  
  const currentRoute = navigation.find(item => route.path.startsWith(item.to))
  return currentRoute ? currentRoute.name : 'Dashboard'
})

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  if (isMobile.value) {
    sidebarOpen.value = false
  }
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  // Save preference to localStorage
  localStorage.setItem('admin-dark-mode', isDarkMode.value)
  // Apply to document
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

const logout = () => {
  // Handle logout logic
  router.push('/admin/login')
}

// Check for mobile screen
const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
  if (isMobile.value) {
    sidebarOpen.value = false
  } else {
    sidebarOpen.value = true
  }
}

// Load dark mode preference
onMounted(() => {
  // Check saved preference
  const savedDarkMode = localStorage.getItem('admin-dark-mode')
  isDarkMode.value = savedDarkMode === 'true'
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  
  // Check mobile screen
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.admin-layout {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.admin-main {
  min-height: 100vh;
}

/* Smooth transitions for dark mode */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
</style>
