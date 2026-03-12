<template>
  <div class="p-8 min-h-screen transition-colors duration-200" :class="isDarkMode ? 'bg-gray-950' : 'bg-gray-50'">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2 transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Contact Messages</h1>
      <p class="transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Manage incoming contact requests and inquiries</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-blue-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ stats.totalMessages }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Total Messages</div>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-clock" class="w-6 h-6 text-orange-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ stats.pendingMessages }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Pending</div>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-green-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ stats.respondedMessages }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Responded</div>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-arrow-trending-up" class="w-6 h-6 text-purple-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ stats.thisMonth }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">This Month</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <UInput
          v-model="searchQuery"
          placeholder="Search messages..."
          icon="i-heroicons-magnifying-glass"
          class="w-64"
        />
        <USelect
          v-model="selectedStatus"
          :options="statusOptions"
          placeholder="All Status"
          class="w-48"
        />
      </div>
      <div class="flex items-center gap-3">
        <UButton color="white" variant="outline" size="sm">
          <UIcon name="i-heroicons-arrow-down-tray" class="w-4 h-4 mr-2" />
          Export
        </UButton>
        <UButton color="primary" size="sm">
          <UIcon name="i-heroicons-bell" class="w-4 h-4 mr-2" />
          Mark All Read
        </UButton>
      </div>
    </div>

    <!-- Messages List -->
    <div class="rounded-xl shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="border-b transition-colors duration-200" :class="isDarkMode ? 'border-gray-800 bg-gray-800' : 'border-gray-200 bg-gray-50'">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">From</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Subject</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Message</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y transition-colors duration-200" :class="isDarkMode ? 'divide-gray-800' : 'divide-gray-200'">
            <tr v-for="message in filteredMessages" :key="message.id" class="transition-colors duration-200" :class="isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'">
              <td class="px-6 py-4 whitespace-nowrap">
                <div>
                  <div class="text-sm font-medium transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ message.name }}</div>
                  <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">{{ message.email }}</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ message.subject }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">{{ message.message }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                {{ formatDate(message.date) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <UBadge 
                  :label="message.status" 
                  :color="message.status === 'Responded' ? 'green' : message.status === 'Pending' ? 'yellow' : 'gray'"
                  variant="subtle"
                />
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex items-center gap-2">
                  <UButton color="white" variant="ghost" size="xs">
                    <UIcon name="i-heroicons-eye" class="w-4 h-4" />
                  </UButton>
                  <UButton color="white" variant="ghost" size="xs">
                    <UIcon name="i-heroicons-pencil" class="w-4 h-4" />
                  </UButton>
                  <UButton color="white" variant="ghost" size="xs">
                    <UIcon name="i-heroicons-envelope" class="w-4 h-4" />
                  </UButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const isDarkMode = ref(false)

// Get dark mode from layout
onMounted(() => {
  const savedDarkMode = localStorage.getItem('admin-dark-mode')
  isDarkMode.value = savedDarkMode === 'true'
  
  // Listen for dark mode changes
  const checkDarkMode = () => {
    const currentDarkMode = localStorage.getItem('admin-dark-mode')
    isDarkMode.value = currentDarkMode === 'true'
  }
  
  // Check periodically for changes
  const interval = setInterval(checkDarkMode, 100)
  
  onUnmounted(() => {
    clearInterval(interval)
  })
})

const searchQuery = ref('')
const selectedStatus = ref('')

const stats = ref({
  totalMessages: 48,
  pendingMessages: 12,
  respondedMessages: 36,
  thisMonth: 15
})

const statusOptions = ['All Status', 'Pending', 'Responded', 'Archived']

const messages = ref([
  {
    id: 1,
    name: 'David Thompson',
    email: 'david.t@email.com',
    subject: 'Information about Sunday Service',
    message: 'Hi, I would like to know more about your Sunday service times and what to expect as a first-time visitor.',
    date: '2024-03-15',
    status: 'Pending'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    email: 'maria.g@email.com',
    subject: 'Youth Ministry Registration',
    message: 'Hello, I would like to register my teenage daughter for the youth ministry program. Could you please provide me with the registration details?',
    date: '2024-03-14',
    status: 'Responded'
  },
  {
    id: 3,
    name: 'James Wilson',
    email: 'j.wilson@email.com',
    subject: 'Volunteer Opportunities',
    message: 'I am interested in volunteering at the church. I have experience in music and would love to help with the worship team.',
    date: '2024-03-13',
    status: 'Responded'
  },
  {
    id: 4,
    name: 'Lisa Anderson',
    email: 'lisa.a@email.com',
    subject: 'Prayer Request',
    message: 'Please pray for my family as we are going through a difficult time. We need strength and guidance.',
    date: '2024-03-12',
    status: 'Pending'
  }
])

const filteredMessages = computed(() => {
  return messages.value.filter(message => {
    const matchesSearch = message.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         message.message.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesStatus = selectedStatus.value === 'All Status' || message.status === selectedStatus.value
    return matchesSearch && matchesStatus
  })
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

useHead({
  title: 'Contact Messages - Admin Portal',
  meta: [
    { name: 'description', content: 'Manage incoming contact requests and inquiries' }
  ]
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
