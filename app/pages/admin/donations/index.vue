<template>
  <div class="p-8 min-h-screen transition-colors duration-200" :class="isDarkMode ? 'bg-gray-950' : 'bg-gray-50'">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2 transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Donations</h1>
      <p class="transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Track and manage church donations</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-banknotes" class="w-6 h-6 text-green-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">${{ stats.totalDonations.toLocaleString() }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Total Donations</div>
          </div>
        </div>
        <div class="flex items-center text-sm text-green-600">
          <UIcon name="i-heroicons-arrow-trending-up" class="w-4 h-4 mr-1" />
          <span>+15% this month</span>
        </div>
      </div>

      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-users" class="w-6 h-6 text-blue-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ stats.totalDonors }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Total Donors</div>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-chart-bar" class="w-6 h-6 text-purple-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">${{ stats.averageDonation.toLocaleString() }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Average Donation</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <UInput
          v-model="searchQuery"
          placeholder="Search donations..."
          icon="i-heroicons-magnifying-glass"
          class="w-64"
        />
        <USelect
          v-model="selectedPeriod"
          :options="periodOptions"
          placeholder="All Time"
          class="w-48"
        />
      </div>
      <div class="flex items-center gap-3">
        <UButton color="white" variant="outline" size="sm">
          <UIcon name="i-heroicons-arrow-down-tray" class="w-4 h-4 mr-2" />
          Export
        </UButton>
        <UButton color="primary" size="sm">
          <UIcon name="i-heroicons-plus" class="w-4 h-4 mr-2" />
          Add Donation
        </UButton>
      </div>
    </div>

    <!-- Donations List -->
    <div class="rounded-xl shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="border-b transition-colors duration-200" :class="isDarkMode ? 'border-gray-800 bg-gray-800' : 'border-gray-200 bg-gray-50'">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Donor</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Amount</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Type</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y transition-colors duration-200" :class="isDarkMode ? 'divide-gray-800' : 'divide-gray-200'">
            <tr v-for="donation in filteredDonations" :key="donation.id" class="transition-colors duration-200" :class="isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'">
              <td class="px-6 py-4 whitespace-nowrap">
                <div>
                  <div class="text-sm font-medium transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ donation.donorName }}</div>
                  <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">{{ donation.email }}</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">${{ donation.amount.toLocaleString() }}</div>
                <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">{{ donation.currency }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                {{ formatDate(donation.date) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <UBadge :label="donation.type" color="gray" variant="subtle" />
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <UBadge 
                  :label="donation.status" 
                  :color="donation.status === 'Completed' ? 'green' : donation.status === 'Pending' ? 'yellow' : 'gray'"
                  variant="subtle"
                />
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex items-center gap-2">
                  <UButton color="white" variant="ghost" size="xs">
                    <UIcon name="i-heroicons-eye" class="w-4 h-4" />
                  </UButton>
                  <UButton color="white" variant="ghost" size="xs">
                    <UIcon name="i-heroicons-envelope" class="w-4 h-4" />
                  </UButton>
                  <UButton color="white" variant="ghost" size="xs">
                    <UIcon name="i-heroicons-receipt" class="w-4 h-4" />
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
const selectedPeriod = ref('')

const stats = ref({
  totalDonations: 45780,
  totalDonors: 156,
  averageDonation: 293
})

const periodOptions = ['All Time', 'This Month', 'Last Month', 'This Year']

const donations = ref([
  {
    id: 1,
    donorName: 'John Smith',
    email: 'john.smith@email.com',
    amount: 500,
    currency: 'USD',
    date: '2024-03-15',
    type: 'One-time',
    status: 'Completed'
  },
  {
    id: 2,
    donorName: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    amount: 100,
    currency: 'USD',
    date: '2024-03-14',
    type: 'Monthly',
    status: 'Completed'
  },
  {
    id: 3,
    donorName: 'Michael Chen',
    email: 'm.chen@email.com',
    amount: 250,
    currency: 'USD',
    date: '2024-03-13',
    type: 'One-time',
    status: 'Pending'
  },
  {
    id: 4,
    donorName: 'Grace Williams',
    email: 'grace.w@email.com',
    amount: 75,
    currency: 'USD',
    date: '2024-03-12',
    type: 'Weekly',
    status: 'Completed'
  }
])

const filteredDonations = computed(() => {
  return donations.value.filter(donation => {
    const matchesSearch = donation.donorName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         donation.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesSearch
  })
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

useHead({
  title: 'Donations - Admin Portal',
  meta: [
    { name: 'description', content: 'Track and manage church donations' }
  ]
})
</script>
