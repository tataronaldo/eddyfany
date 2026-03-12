<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <!-- Welcome Section -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome back, Admin</h1>
      <p class="text-gray-600">Here's what's happening with your ministry today</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white rounded-xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-microphone" class="w-6 h-6 text-blue-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold text-gray-900">{{ stats.totalSermons }}</div>
            <div class="text-sm text-gray-500">Total Sermons</div>
          </div>
        </div>
        <div class="flex items-center text-sm text-green-600">
          <UIcon name="i-heroicons-arrow-trending-up" class="w-4 h-4 mr-1" />
          <span>+2 this week</span>
        </div>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-document-text" class="w-6 h-6 text-green-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold text-gray-900">{{ stats.totalBlogPosts }}</div>
            <div class="text-sm text-gray-500">Blog Posts</div>
          </div>
        </div>
        <div class="flex items-center text-sm text-green-600">
          <UIcon name="i-heroicons-arrow-trending-up" class="w-4 h-4 mr-1" />
          <span>+1 this week</span>
        </div>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-calendar-days" class="w-6 h-6 text-green-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold text-gray-900">{{ stats.activeEvents }}</div>
            <div class="text-sm text-gray-500">Active Events</div>
          </div>
        </div>
        <div class="flex items-center text-sm text-orange-600">
          <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-1" />
          <span>3 this month</span>
        </div>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
            <UIcon name="i-heroicons-users" class="w-6 h-6 text-orange-600" />
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold text-gray-900">{{ stats.totalMembers }}</div>
            <div class="text-sm text-gray-500">Total Members</div>
          </div>
        </div>
        <div class="flex items-center text-sm text-green-600">
          <UIcon name="i-heroicons-arrow-trending-up" class="w-4 h-4 mr-1" />
          <span>+12 this month</span>
        </div>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Quick Actions -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <h3 class="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
          <div class="space-y-3">
            <UButton 
              to="/admin/sermons/new" 
              color="primary" 
              block 
              size="lg" 
              class="justify-start h-12"
            >
              <UIcon name="i-heroicons-plus" class="w-5 h-5 mr-3" />
              Add New Sermon
            </UButton>
            
            <UButton 
              to="/admin/blog/new" 
              color="white" 
              variant="outline" 
              block 
              size="lg" 
              class="justify-start h-12 border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              <UIcon name="i-heroicons-plus" class="w-5 h-5 mr-3" />
              Create Blog Post
            </UButton>
            
            <UButton 
              to="/admin/events/new" 
              color="white" 
              variant="outline" 
              block 
              size="lg" 
              class="justify-start h-12 border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              <UIcon name="i-heroicons-plus" class="w-5 h-5 mr-3" />
              Schedule Event
            </UButton>
            
            <UButton 
              to="/admin/donations" 
              color="white" 
              variant="outline" 
              block 
              size="lg" 
              class="justify-start h-12 border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              <UIcon name="i-heroicons-banknotes" class="w-5 h-5 mr-3" />
              View Donations
            </UButton>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <UButton color="white" variant="ghost" size="sm" class="text-gray-600 hover:text-gray-900">
              View All
            </UButton>
          </div>
          
          <div class="space-y-4">
            <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" :class="activity.iconBg">
                <UIcon :name="activity.icon" class="w-5 h-5" :class="activity.iconColor" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-medium text-gray-900">{{ activity.title }}</p>
                <p class="text-sm text-gray-600 mt-1">{{ activity.description }}</p>
                <p class="text-xs text-gray-400 mt-2">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pending Items -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      <!-- Prayer Requests -->
      <div class="bg-white rounded-xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Prayer Requests</h3>
          <UBadge label="3" color="yellow" variant="subtle" />
        </div>
        
        <div class="space-y-4">
          <div v-for="prayer in pendingPrayers" :key="prayer.id" class="border-l-4 border-yellow-400 pl-4 py-3 rounded-r-lg bg-yellow-50">
            <p class="font-medium text-gray-900">{{ prayer.name }}</p>
            <p class="text-sm text-gray-600 mt-1 line-clamp-2">{{ prayer.request }}</p>
            <p class="text-xs text-gray-400 mt-2">{{ prayer.time }}</p>
          </div>
        </div>
        
        <div class="mt-6">
          <UButton to="/admin/prayers" color="primary" variant="outline" block size="sm" class="border-gray-200">
            View All Prayer Requests
          </UButton>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="bg-white rounded-xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Testimonials</h3>
          <UBadge label="5" color="orange" variant="subtle" />
        </div>
        
        <div class="space-y-4">
          <div v-for="testimonial in pendingTestimonials" :key="testimonial.id" class="border-l-4 border-orange-400 pl-4 py-3 rounded-r-lg bg-orange-50">
            <p class="font-medium text-gray-900">{{ testimonial.name }}</p>
            <p class="text-sm text-gray-600 mt-1 line-clamp-2">{{ testimonial.message }}</p>
            <p class="text-xs text-gray-400 mt-2">{{ testimonial.time }}</p>
          </div>
        </div>
        
        <div class="mt-6">
          <UButton to="/admin/testimonials" color="primary" variant="outline" block size="sm" class="border-gray-200">
            Review All Testimonials
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

// Sample data - in real app this would come from API
const stats = ref({
  totalSermons: 24,
  totalBlogPosts: 18,
  activeEvents: 3,
  totalMembers: 156
})

const recentActivity = ref([
  {
    id: 1,
    title: 'New Sermon Uploaded',
    description: 'Finding Peace in Troubled Times was added to the sermon library',
    time: '2 hours ago',
    icon: 'i-heroicons-microphone',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 2,
    title: 'New Blog Post Published',
    description: 'The Power of Persistent Prayer was published',
    time: '5 hours ago',
    icon: 'i-heroicons-document-text',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    id: 3,
    title: 'Event Registration Open',
    description: 'Youth Encounter is now open for registration',
    time: '1 day ago',
    icon: 'i-heroicons-calendar-days',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    id: 4,
    title: 'New Member Registered',
    description: 'John Doe joined the ministry',
    time: '2 days ago',
    icon: 'i-heroicons-user-plus',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600'
  }
])

const pendingPrayers = ref([
  {
    id: 1,
    name: 'Sarah Johnson',
    request: 'Please pray for my family during this difficult time. We are facing health challenges.',
    time: '1 hour ago'
  },
  {
    id: 2,
    name: 'Michael Chen',
    request: 'Praying for job opportunities and financial provision.',
    time: '3 hours ago'
  },
  {
    id: 3,
    name: 'Grace Williams',
    request: 'Need prayer for my marriage and relationship healing.',
    time: '5 hours ago'
  }
])

const pendingTestimonials = ref([
  {
    id: 1,
    name: 'David Thompson',
    message: 'The ministry has transformed my life completely. I found hope and purpose through the teachings.',
    time: '2 hours ago'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    message: 'Thank you for the powerful worship services. I feel God\'s presence every time I attend.',
    time: '4 hours ago'
  },
  {
    id: 3,
    name: 'James Wilson',
    message: 'The prayer support has been incredible during my recovery.',
    time: '6 hours ago'
  }
])

useHead({
  title: 'Admin Dashboard - Eddy Fany Ministry',
  meta: [
    { name: 'description', content: 'Admin dashboard for managing Eddy Fany Ministry content and operations' }
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
