<template>
  <div class="p-8 min-h-screen transition-colors duration-200" :class="isDarkMode ? 'bg-gray-950' : 'bg-gray-50'">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2 transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Events</h1>
      <p class="transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Manage church events and activities</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-calendar-days" class="w-6 h-6 text-green-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ stats.totalEvents }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Total Events</div>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-clock" class="w-6 h-6 text-blue-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ stats.upcomingEvents }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Upcoming</div>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-6 shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-users" class="w-6 h-6 text-purple-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ stats.totalAttendees }}</div>
            <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Total Attendees</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <UInput
          v-model="searchQuery"
          placeholder="Search events..."
          icon="i-heroicons-magnifying-glass"
          class="w-64"
        />
        <USelect
          v-model="selectedCategory"
          :options="categories"
          placeholder="All Categories"
          class="w-48"
        />
      </div>
      <UButton
        to="/admin/events/new"
        color="primary"
        size="sm"
      >
        <UIcon name="i-heroicons-plus" class="w-4 h-4 mr-2" />
        New Event
      </UButton>
    </div>

    <!-- Events List -->
    <div class="rounded-xl shadow-sm transition-colors duration-200" :class="isDarkMode ? 'bg-gray-900' : 'bg-white'">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="border-b transition-colors duration-200" :class="isDarkMode ? 'border-gray-800 bg-gray-800' : 'border-gray-200 bg-gray-50'">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Event</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Category</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Attendees</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y transition-colors duration-200" :class="isDarkMode ? 'divide-gray-800' : 'divide-gray-200'">
            <tr v-for="event in filteredEvents" :key="event.id" class="transition-colors duration-200" :class="isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'">
              <td class="px-6 py-4 whitespace-nowrap">
                <div>
                  <div class="text-sm font-medium transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ event.title }}</div>
                  <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">{{ event.location }}</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ formatDate(event.date) }}</div>
                <div class="text-sm transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">{{ event.time }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <UBadge :label="event.category" color="gray" variant="subtle" />
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                {{ event.attendees }} / {{ event.capacity }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <UBadge 
                  :label="event.status" 
                  :color="event.status === 'Upcoming' ? 'green' : event.status === 'Ongoing' ? 'blue' : 'gray'"
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
                    <UIcon name="i-heroicons-trash" class="w-4 h-4" />
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
const selectedCategory = ref('')

const stats = ref({
  totalEvents: 24,
  upcomingEvents: 8,
  totalAttendees: 1250
})

const categories = ['All Categories', 'Service', 'Conference', 'Workshop', 'Social', 'Outreach']

const events = ref([
  {
    id: 1,
    title: 'Sunday Service',
    location: 'Main Sanctuary',
    date: '2024-03-17',
    time: '10:00 AM',
    category: 'Service',
    attendees: 150,
    capacity: 200,
    status: 'Upcoming'
  },
  {
    id: 2,
    title: 'Youth Conference',
    location: 'Conference Hall',
    date: '2024-03-22',
    time: '9:00 AM',
    category: 'Conference',
    attendees: 75,
    capacity: 100,
    status: 'Upcoming'
  },
  {
    id: 3,
    title: 'Prayer Meeting',
    location: 'Prayer Room',
    date: '2024-03-15',
    time: '6:00 PM',
    category: 'Service',
    attendees: 45,
    capacity: 60,
    status: 'Ongoing'
  }
])

const filteredEvents = computed(() => {
  return events.value.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'All Categories' || event.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

useHead({
  title: 'Events - Admin Portal',
  meta: [
    { name: 'description', content: 'Manage church events and activities' }
  ]
})
</script>
