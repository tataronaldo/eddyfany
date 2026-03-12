<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Testimonials</h1>
        <p class="text-gray-600">Review and approve member testimonials</p>
      </div>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <UCard :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
        <div class="text-center">
          <div class="text-3xl font-bold text-orange-600 mb-2">5</div>
          <div class="text-sm text-gray-600">Pending Review</div>
          <div class="text-xs text-orange-600 mt-1">Need approval</div>
        </div>
      </UCard>
      
      <UCard :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
        <div class="text-center">
          <div class="text-3xl font-bold text-green-600">18</div>
          <div class="text-sm text-gray-600">Published</div>
          <div class="text-xs text-green-600 mt-1">Live on site</div>
        </div>
      </UCard>
      
      <UCard :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
        <div class="text-center">
          <div class="text-3xl font-bold text-blue-600">23</div>
          <div class="text-sm text-gray-600">Total Testimonials</div>
          <div class="text-xs text-blue-600 mt-1">All time</div>
        </div>
      </UCard>
    </div>

    <!-- Testimonials List -->
    <UCard :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Recent Testimonials</h3>
          <USelect :options="filterOptions" placeholder="All Status" size="sm" />
        </div>
      </template>
      
      <div class="space-y-4">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="border-l-4 pl-4 py-3 rounded-r-lg" :class="getStatusBorderClass(testimonial.status)">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <p class="font-medium" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ testimonial.name }}</p>
                <UBadge :label="testimonial.status" :color="getStatusColor(testimonial.status)" variant="subtle" size="sm" />
              </div>
              <p class="text-sm mb-2 line-clamp-3" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">{{ testimonial.message }}</p>
              <p class="text-xs" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">{{ testimonial.date }} • {{ testimonial.email }}</p>
            </div>
            <div class="flex gap-2 ml-4">
              <UButton v-if="testimonial.status === 'pending'" @click="approveTestimonial(testimonial.id)" color="green" variant="outline" size="sm">
                <UIcon name="i-heroicons-check" class="w-4 h-4 mr-1" />
                Approve
              </UButton>
              <UButton v-if="testimonial.status === 'pending'" @click="rejectTestimonial(testimonial.id)" color="red" variant="outline" size="sm">
                <UIcon name="i-heroicons-x-mark" class="w-4 h-4 mr-1" />
                Reject
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

const searchQuery = ref('')
const selectedStatus = ref('')

const filterOptions = [
  { label: 'All Status', value: '' },
  { label: 'Pending', value: 'pending' },
  { label: 'Published', value: 'published' },
  { label: 'Rejected', value: 'rejected' }
]

const stats = ref({
  totalTestimonials: 25,
  pendingTestimonials: 5,
  publishedTestimonials: 20
})

const statusOptions = ['All Status', 'Pending', 'Published', 'Rejected']

const testimonials = ref([
  {
    id: 1,
    name: 'David Thompson',
    message: 'The ministry has transformed my life completely. I found hope and purpose through the teachings.',
    date: '2024-03-15',
    status: 'Pending',
    rating: 5,
    email: 'david.t@email.com'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    message: 'Thank you for the powerful worship services. I feel God\'s presence every time I attend.',
    date: '2024-03-14',
    status: 'Pending',
    rating: 5,
    email: 'maria.g@email.com'
  },
  {
    id: 3,
    name: 'James Wilson',
    message: 'The prayer support has been incredible during my recovery.',
    date: '2024-03-13',
    status: 'Published',
    rating: 4,
    email: 'james.w@email.com'
  },
  {
    id: 4,
    name: 'Lisa Anderson',
    message: 'Great community and wonderful people. I feel blessed to be part of this family.',
    date: '2024-03-12',
    status: 'Published',
    rating: 5,
    email: 'lisa.a@email.com'
  }
])

const filteredTestimonials = computed(() => {
  return testimonials.value.filter(testimonial => {
    const matchesSearch = testimonial.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         testimonial.message.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesStatus = selectedStatus.value === 'All Status' || testimonial.status === selectedStatus.value
    return matchesSearch && matchesStatus
  })
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const getStatusColor = (status) => {
  const colors = {
    Pending: 'orange',
    Published: 'green',
    Rejected: 'red'
  }
  return colors[status] || 'gray'
}

const getStatusBorderClass = (status) => {
  const classes = {
    Pending: isDarkMode.value ? 'border-orange-600 bg-orange-900/10' : 'border-orange-400 bg-orange-50',
    Published: isDarkMode.value ? 'border-green-600 bg-green-900/10' : 'border-green-400 bg-green-50',
    Rejected: isDarkMode.value ? 'border-red-600 bg-red-900/10' : 'border-red-400 bg-red-50'
  }
  return classes[status] || classes.Pending
}

const approveTestimonial = (id) => {
  const testimonial = testimonials.value.find(t => t.id === id)
  if (testimonial) {
    testimonial.status = 'Published'
  }
}

const rejectTestimonial = (id) => {
  const testimonial = testimonials.value.find(t => t.id === id)
  if (testimonial) {
    testimonial.status = 'Rejected'
  }
}

useHead({
  title: 'Testimonials Management - Admin',
  meta: [
    { name: 'description', content: 'Review and approve member testimonials' }
  ]
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
