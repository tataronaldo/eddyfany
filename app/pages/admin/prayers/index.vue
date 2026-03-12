<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Prayer Requests</h1>
        <p class="text-gray-600">Review and manage prayer requests from the community</p>
      </div>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <UCard :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
        <div class="text-center">
          <div class="text-3xl font-bold text-yellow-600 mb-2">3</div>
          <div class="text-sm text-gray-600">Pending Requests</div>
          <div class="text-xs text-yellow-600 mt-1">Need review</div>
        </div>
      </UCard>
      
      <UCard :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
        <div class="text-center">
          <div class="text-3xl font-bold text-green-600">12</div>
          <div class="text-sm text-gray-600">Prayed For</div>
          <div class="text-xs text-green-600 mt-1">This week</div>
        </div>
      </UCard>
      
      <UCard :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600">28</div>
          <div class="text-sm text-gray-600">Total Requests</div>
          <div class="text-xs text-blue-600 mt-1">This month</div>
        </div>
      </UCard>
    </div>

    <!-- Prayer Requests List -->
    <UCard :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Recent Prayer Requests</h3>
          <USelect :options="filterOptions" placeholder="All Status" size="sm" />
        </div>
      </template>
      
      <div class="space-y-4">
        <div v-for="prayer in prayerRequests" :key="prayer.id" class="border-l-4 pl-4 py-3 rounded-r-lg" :class="getStatusBorderClass(prayer.status)">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <p class="font-medium" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ prayer.name }}</p>
                <UBadge :label="prayer.status" :color="getStatusColor(prayer.status)" variant="subtle" size="sm" />
              </div>
              <p class="text-sm mb-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">{{ prayer.request }}</p>
              <p class="text-xs" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">{{ prayer.date }} • {{ prayer.contact }}</p>
            </div>
            <div class="flex gap-2 ml-4">
              <UButton v-if="prayer.status === 'pending'" @click="markAsPrayed(prayer.id)" color="green" variant="outline" size="sm">
                <UIcon name="i-heroicons-check" class="w-4 h-4 mr-1" />
                Prayed
              </UButton>
              <UButton color="gray" variant="ghost" size="sm">
                <UIcon name="i-heroicons-eye" class="w-4 h-4" />
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </UCard>
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

const filterOptions = [
  { label: 'All Status', value: '' },
  { label: 'Pending', value: 'pending' },
  { label: 'Prayed For', value: 'prayed' },
  { label: 'Archived', value: 'archived' }
]

const prayerRequests = ref([
  { id: 1, name: 'Sarah Johnson', request: 'Please pray for my family during this difficult time. We are facing health challenges and need God\'s healing touch.', status: 'pending', date: '2024-03-12', contact: 'sarah.j@email.com' },
  { id: 2, name: 'Michael Chen', request: 'Praying for job opportunities and financial provision. I\'ve been unemployed for 3 months.', status: 'pending', date: '2024-03-11', contact: 'michael.chen@email.com' },
  { id: 3, name: 'Grace Williams', request: 'Need prayer for my marriage and relationship healing. We\'re going through a difficult season.', status: 'prayed', date: '2024-03-10', contact: 'grace.w@email.com' }
])

const getStatusColor = (status) => {
  const colors = {
    pending: 'yellow',
    prayed: 'green',
    archived: 'gray'
  }
  return colors[status] || 'gray'
}

const getStatusBorderClass = (status) => {
  const classes = {
    pending: isDarkMode.value ? 'border-yellow-600 bg-yellow-900/10' : 'border-yellow-400 bg-yellow-50',
    prayed: isDarkMode.value ? 'border-green-600 bg-green-900/10' : 'border-green-400 bg-green-50',
    archived: isDarkMode.value ? 'border-gray-600 bg-gray-900/10' : 'border-gray-400 bg-gray-50'
  }
  return classes[status] || classes.pending
}

const markAsPrayed = (id) => {
  const prayer = prayerRequests.value.find(p => p.id === id)
  if (prayer) {
    prayer.status = 'prayed'
  }
}

useHead({
  title: 'Prayer Requests Management - Admin',
  meta: [
    { name: 'description', content: 'Review and manage prayer requests from the community' }
  ]
})
</script>
