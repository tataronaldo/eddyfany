<template>
  <aside 
    class="admin-sidebar fixed left-0 top-0 h-full z-50 transition-all duration-300 ease-in-out shadow-sm"
    :class="[
      sidebarOpen ? 'w-64' : 'w-20',
      isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    ]"
  >
    <!-- Logo Section -->
    <div class="p-4 transition-colors duration-200" :class="isDarkMode ? 'border-gray-800' : 'border-gray-200'">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
          <UIcon name="i-heroicons-shield-check" class="w-6 h-6 text-white" />
        </div>
        <div v-if="sidebarOpen" class="transition-all duration-200">
          <h2 class="text-lg font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Admin Portal</h2>
          <p class="text-xs transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Eddy Fany Ministry</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="p-3 space-y-1 overflow-y-auto h-full pb-20">
      <NuxtLink
        v-for="item in navigation"
        :key="item.name"
        :to="item.to"
        class="admin-nav-item group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 relative"
        :class="[
          route.path.startsWith(item.to) 
            ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg' 
            : isDarkMode
              ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
        ]"
      >
        <div class="relative">
          <UIcon :name="item.icon" class="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
          <div v-if="item.badge" class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        </div>
        
        <span v-if="sidebarOpen" class="font-medium transition-all duration-200">{{ item.name }}</span>
        
        <!-- Tooltip for collapsed sidebar -->
        <div 
          v-if="!sidebarOpen"
          class="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
        >
          {{ item.name }}
        </div>
        
        <UBadge 
          v-if="sidebarOpen && item.badge" 
          :label="item.badge" 
          size="xs" 
          color="red" 
          variant="solid" 
          class="ml-auto animate-pulse"
        />
      </NuxtLink>
    </nav>

    <!-- User Profile (Bottom) -->
    <div class="absolute bottom-0 left-0 right-0 p-3 transition-colors duration-200" :class="isDarkMode ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-white/50'">
      <div class="flex items-center gap-3 p-2 rounded-xl transition-colors duration-200" :class="isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'">
        <div class="relative">
          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
            <UIcon name="i-heroicons-user" class="w-4 h-4 text-white" />
          </div>
          <div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 transition-colors duration-200" :class="isDarkMode ? 'border-gray-900' : 'border-white'"></div>
        </div>
        
        <div v-if="sidebarOpen" class="flex-1 min-w-0">
          <p class="text-sm font-medium truncate transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Admin User</p>
          <p class="text-xs truncate transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">admin@eddyfany.org</p>
        </div>
        
        <div v-if="sidebarOpen" class="flex gap-1">
          <UButton @click="$emit('toggle-dark-mode')" color="gray" variant="ghost" size="xs" class="transition-transform duration-200 hover:scale-110">
            <UIcon :name="isDarkMode ? 'i-heroicons-sun' : 'i-heroicons-moon'" class="w-4 h-4" />
          </UButton>
          <UButton @click="$emit('logout')" color="gray" variant="ghost" size="xs" class="transition-transform duration-200 hover:scale-110">
            <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-4 h-4" />
          </UButton>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
const route = useRoute()

const props = defineProps({
  sidebarOpen: {
    type: Boolean,
    default: true
  },
  isDarkMode: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle-sidebar', 'toggle-dark-mode', 'logout'])

const navigation = [
  { name: 'Dashboard', to: '/admin', icon: 'i-heroicons-home' },
  { name: 'Sermons', to: '/admin/sermons', icon: 'i-heroicons-microphone' },
  { name: 'Blog Posts', to: '/admin/blog', icon: 'i-heroicons-document-text' },
  { name: 'Projects', to: '/admin/projects', icon: 'i-heroicons-building-office' },
  { name: 'Events', to: '/admin/events', icon: 'i-heroicons-calendar-days' },
  { name: 'Donations', to: '/admin/donations', icon: 'i-heroicons-banknotes' },
  { name: 'Members', to: '/admin/members', icon: 'i-heroicons-users' },
  { name: 'Prayer Requests', to: '/admin/prayers', icon: 'i-heroicons-hand-raised', badge: '3' },
  { name: 'Testimonials', to: '/admin/testimonials', icon: 'i-heroicons-star', badge: '5' },
  { name: 'Contact Messages', to: '/admin/contact', icon: 'i-heroicons-envelope', badge: '2' },
]
</script>

<style scoped>
.admin-sidebar {
  box-shadow: 4px 0 6px -1px rgba(0, 0, 0, 0.1);
}

.admin-nav-item {
  position: relative;
  overflow: hidden;
}

.admin-nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.admin-nav-item:hover::before {
  left: 100%;
}

/* Custom scrollbar for sidebar */
.admin-sidebar nav::-webkit-scrollbar {
  width: 4px;
}

.admin-sidebar nav::-webkit-scrollbar-track {
  background: transparent;
}

.admin-sidebar nav::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.3);
  border-radius: 2px;
}

.admin-sidebar nav::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.5);
}
</style>
