<template>
  <div class="p-8 min-h-screen transition-colors duration-200" :class="isDarkMode ? 'bg-gray-950' : 'bg-gray-50'">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2 transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Members</h1>
      <p class="transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Manage church members and their information</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-users" class="w-6 h-6 text-blue-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ stats.totalMembers }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Total Members</div>
          </div>
        </div>
        <div class="flex items-center text-sm text-green-600">
          <UIcon name="i-heroicons-arrow-trending-up" class="w-4 h-4 mr-1" />
          <span>+12 this month</span>
        </div>
      </div>

      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-user-plus" class="w-6 h-6 text-green-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ stats.newMembers }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">New This Month</div>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-heart" class="w-6 h-6 text-purple-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ stats.activeMembers }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Active Members</div>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-building-office" class="w-6 h-6 text-orange-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ stats.ministries }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Ministries</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <UInput
          v-model="searchQuery"
          placeholder="Search members..."
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
      <UButton
        color="primary"
        size="sm"
      >
        <UIcon name="i-heroicons-user-plus" class="w-4 h-4 mr-2" />
        Add Member
      </UButton>
    </div>

    <!-- Members List -->
    <div class="rounded-xl shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="border-b transition-colors duration-200" :class="isDarkMode ? 'border-gray-800 bg-gray-800' : 'border-gray-200 bg-gray-50'">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Member</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Contact</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Joined</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Ministry</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y transition-colors duration-200" :class="isDarkMode ? 'divide-gray-800' : 'divide-gray-200'">
            <tr v-for="member in filteredMembers" :key="member.id" class="transition-colors duration-200" :class="isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <UIcon name="i-heroicons-user" class="w-4 h-4 text-gray-500" />
                  </div>
                  <div>
                    <div class="text-sm font-medium transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ member.name }}</div>
                    <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">ID: {{ member.id }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ member.email }}</div>
                <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">{{ member.phone }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                {{ formatDate(member.joinDate) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <UBadge 
                  :label="member.status" 
                  :color="member.status === 'Active' ? 'green' : member.status === 'Inactive' ? 'gray' : 'yellow'"
                  variant="subtle"
                />
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                {{ member.ministry }}
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
  totalMembers: 156,
  newMembers: 12,
  activeMembers: 142,
  ministries: 8
})

const statusOptions = ['All Status', 'Active', 'Inactive', 'New']

const members = ref([
  {
    id: 'MEM001',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 234-567-8900',
    joinDate: '2024-01-15',
    status: 'Active',
    ministry: 'Worship Team'
  },
  {
    id: 'MEM002',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1 234-567-8901',
    joinDate: '2024-02-20',
    status: 'Active',
    ministry: 'Youth Ministry'
  },
  {
    id: 'MEM003',
    name: 'Michael Chen',
    email: 'm.chen@email.com',
    phone: '+1 234-567-8902',
    joinDate: '2024-03-01',
    status: 'New',
    ministry: 'Media Team'
  },
  {
    id: 'MEM004',
    name: 'Grace Williams',
    email: 'grace.w@email.com',
    phone: '+1 234-567-8903',
    joinDate: '2023-12-10',
    status: 'Inactive',
    ministry: 'Prayer Team'
  }
])

const filteredMembers = computed(() => {
  return members.value.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesStatus = selectedStatus.value === 'All Status' || member.status === selectedStatus.value
    return matchesSearch && matchesStatus
  })
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

useHead({
  title: 'Members - Admin Portal',
  meta: [
    { name: 'description', content: 'Manage church members and their information' }
  ]
})
</script>
