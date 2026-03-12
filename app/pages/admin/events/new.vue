<template>
  <div class="p-8 min-h-screen transition-colors duration-200" :class="isDarkMode ? 'bg-gray-950' : 'bg-gray-50'">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold mb-2 transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Create New Event</h1>
        <p class="transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Schedule and manage ministry events</p>
      </div>
      <UButton to="/admin/events" color="gray" variant="outline">
        <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
        Back to Events
      </UButton>
    </div>

    <!-- Event Form -->
    <UCard :class="isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'">
      <template #header>
        <h3 class="text-lg font-semibold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Event Details</h3>
      </template>
      
      <div class="space-y-6">
        <UFormGroup label="Event Title">
          <UInput 
            v-model="form.title"
            placeholder="Enter event title" 
            size="lg" 
            class="w-full" 
          />
        </UFormGroup>
        
        <UFormGroup label="Event Type">
          <USelect 
            v-model="form.type"
            :options="eventTypes" 
            placeholder="Select event type" 
            size="lg" 
            class="w-full" 
          />
        </UFormGroup>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UFormGroup label="Date">
            <UInput 
              v-model="form.date"
              type="date" 
              size="lg" 
              class="w-full" 
            />
          </UFormGroup>
          <UFormGroup label="Time">
            <UInput 
              v-model="form.time"
              type="time" 
              size="lg" 
              class="w-full" 
            />
          </UFormGroup>
        </div>
        
        <UFormGroup label="Description">
          <UEditor
            v-model="form.description"
            placeholder="Enter detailed event description..."
            class="w-full"
          />
        </UFormGroup>
        
        <UFormGroup label="Location">
          <UInput 
            v-model="form.location"
            placeholder="Enter event location" 
            size="lg" 
            class="w-full" 
          />
        </UFormGroup>
      </div>
    </UCard>

    <!-- Event Images -->
    <UCard :class="isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'">
      <template #header>
        <h3 class="text-lg font-semibold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Event Images</h3>
      </template>
      
      <div class="space-y-6">
        <!-- Event Banner -->
        <UFormGroup label="Event Banner Image">
          <div class="border-2 border-dashed rounded-lg p-6 text-center transition-colors" :class="isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'">
            <div v-if="form.bannerImage" class="mb-4">
              <img 
                :src="form.bannerImage" 
                alt="Event banner preview"
                class="w-full h-48 object-cover rounded-lg"
              >
            </div>
            <UIcon v-else name="i-heroicons-photo" class="w-12 h-12 mx-auto mb-2 transition-colors" :class="isDarkMode ? 'text-gray-400' : 'text-gray-400'" />
            <p class="text-sm mb-4 transition-colors" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Upload event banner image</p>
            <UButton type="button" color="primary" variant="outline" size="sm">
              <UIcon name="i-heroicons-cloud-arrow-up" class="w-4 h-4 mr-2" />
              Choose File
            </UButton>
            <input
              type="file"
              accept="image/*"
              class="hidden"
              @change="handleBannerUpload"
            >
          </div>
        </UFormGroup>

        <!-- Gallery Images -->
        <UFormGroup label="Gallery Images">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div 
              v-for="(image, index) in form.galleryImages" 
              :key="index"
              class="relative group"
            >
              <img 
                :src="image" 
                :alt="`Gallery image ${index + 1}`"
                class="w-full h-24 object-cover rounded-lg"
              >
              <button
                type="button"
                @click="removeGalleryImage(index)"
                class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <UIcon name="i-heroicons-x-mark" class="w-3 h-3" />
              </button>
            </div>
            <div class="border-2 border-dashed rounded-lg p-4 text-center transition-colors" :class="isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'">
              <UIcon name="i-heroicons-plus" class="w-8 h-8 mx-auto mb-2 transition-colors" :class="isDarkMode ? 'text-gray-400' : 'text-gray-400'" />
              <p class="text-xs transition-colors" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Add Image</p>
              <input
                type="file"
                accept="image/*"
                class="hidden"
                @change="handleGalleryUpload"
              >
            </div>
          </div>
        </UFormGroup>
      </div>
    </UCard>

    <!-- Actions -->
    <div class="flex items-center justify-end gap-4 mt-6">
      <UButton to="/admin/events" color="gray" variant="outline">
        Cancel
      </UButton>
      <UButton 
        @click="saveEvent" 
        color="primary" 
        size="lg" 
        :loading="isSaving"
      >
        <UIcon name="i-heroicons-check" class="w-4 h-4 mr-2" />
        {{ isSaving ? 'Saving...' : 'Create Event' }}
      </UButton>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const isDarkMode = ref(false)
const isSaving = ref(false)

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

// Form data
const form = ref({
  title: '',
  type: '',
  date: '',
  time: '',
  description: '',
  location: '',
  bannerImage: '',
  galleryImages: []
})

const eventTypes = [
  { label: 'Worship Service', value: 'worship' },
  { label: 'Prayer Meeting', value: 'prayer' },
  { label: 'Bible Study', value: 'bible-study' },
  { label: 'Youth Event', value: 'youth' },
  { label: 'Conference', value: 'conference' }
]

const handleBannerUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      form.value.bannerImage = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const handleGalleryUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      form.value.galleryImages.push(e.target.result)
    }
    reader.readAsDataURL(file)
  }
}

const removeGalleryImage = (index) => {
  form.value.galleryImages.splice(index, 1)
}

const saveEvent = async () => {
  isSaving.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In real app, this would save to backend
    console.log('Saving event:', form.value)
    
    // Redirect to events list
    router.push('/admin/events')
  } catch (error) {
    console.error('Error saving event:', error)
  } finally {
    isSaving.value = false
  }
}

useHead({
  title: 'Create Event - Admin',
  meta: [
    { name: 'description', content: 'Create new ministry event' }
  ]
})
</script>
