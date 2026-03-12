<template>
  <div class="p-8 min-h-screen transition-colors duration-200" :class="isDarkMode ? 'bg-gray-950' : 'bg-gray-50'">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold mb-2 transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Create New Project</h1>
        <p class="transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Manage ministry projects and initiatives</p>
      </div>
      <UButton to="/admin/projects" color="gray" variant="outline">
        <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
        Back to Projects
      </UButton>
    </div>

    <form @submit.prevent="saveProject" class="space-y-6">
      <!-- Basic Information -->
      <UCard :class="isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'">
        <template #header>
          <h3 class="text-lg font-semibold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Basic Information</h3>
        </template>
        
        <div class="space-y-6">
          <UFormGroup label="Project Name" required>
            <UInput
              v-model="form.name"
              placeholder="Enter project name"
              size="lg"
              required
              class="w-full"
            />
          </UFormGroup>

          <UFormGroup label="Project Description">
            <UEditor
              v-model="form.description"
              placeholder="Describe the project goals, objectives, and impact..."
              class="w-full"
            />
          </UFormGroup>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UFormGroup label="Status">
              <USelect
                v-model="form.status"
                :options="statusOptions"
                placeholder="Select status"
                size="lg"
                class="w-full"
              />
            </UFormGroup>

            <UFormGroup label="Priority">
              <USelect
                v-model="form.priority"
                :options="priorityOptions"
                placeholder="Select priority"
                size="lg"
                class="w-full"
              />
            </UFormGroup>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UFormGroup label="Start Date">
              <UInput
                v-model="form.startDate"
                type="date"
                size="lg"
                class="w-full"
              />
            </UFormGroup>

            <UFormGroup label="Target Date">
              <UInput
                v-model="form.targetDate"
                type="date"
                size="lg"
                class="w-full"
              />
            </UFormGroup>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UFormGroup label="Budget">
              <UInput
                v-model="form.budget"
                placeholder="e.g., $5,000"
                size="lg"
                class="w-full"
              />
            </UFormGroup>

            <UFormGroup label="Progress">
              <UInput
                v-model="form.progress"
                type="number"
                placeholder="0-100"
                min="0"
                max="100"
                size="lg"
                class="w-full"
              />
            </UFormGroup>
          </div>
        </div>
      </UCard>

      <!-- Project Details -->
      <UCard :class="isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'">
        <template #header>
          <h3 class="text-lg font-semibold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Project Details</h3>
        </template>
        
        <div class="space-y-6">
          <UFormGroup label="Project Details">
            <UEditor
              v-model="form.details"
              placeholder="Provide detailed information about the project, methodology, and expected outcomes..."
              class="w-full"
            />
          </UFormGroup>

          <UFormGroup label="Team Members">
            <UInput
              v-model="form.teamMembers"
              placeholder="Enter team member names separated by commas"
              size="lg"
              class="w-full"
            />
          </UFormGroup>
        </div>
      </UCard>

      <!-- Project Images -->
      <UCard :class="isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'">
        <template #header>
          <h3 class="text-lg font-semibold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Project Images</h3>
        </template>
        
        <div class="space-y-6">
          <!-- Project Banner -->
          <UFormGroup label="Project Banner Image">
            <div class="border-2 border-dashed rounded-lg p-6 text-center transition-colors" :class="isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'">
              <div v-if="form.bannerImage" class="mb-4">
                <img 
                  :src="form.bannerImage" 
                  alt="Project banner preview"
                  class="w-full h-48 object-cover rounded-lg"
                >
              </div>
              <UIcon v-else name="i-heroicons-photo" class="w-12 h-12 mx-auto mb-2 transition-colors" :class="isDarkMode ? 'text-gray-400' : 'text-gray-400'" />
              <p class="text-sm mb-4 transition-colors" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Upload project banner image</p>
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
      <div class="flex items-center justify-end gap-4">
        <UButton to="/admin/projects" color="gray" variant="outline">
          Cancel
        </UButton>
        <UButton type="submit" color="primary" size="lg" :loading="isSaving">
          <UIcon name="i-heroicons-check" class="w-4 h-4 mr-2" />
          {{ isSaving ? 'Saving...' : 'Create Project' }}
        </UButton>
      </div>
    </form>
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

const router = useRouter()
const isSaving = ref(false)

// Form data
const form = ref({
  name: '',
  description: '',
  status: '',
  priority: '',
  startDate: '',
  targetDate: '',
  budget: '',
  progress: 0,
  details: '',
  teamMembers: '',
  bannerImage: '',
  galleryImages: []
})

const statusOptions = [
  { label: 'Planning', value: 'planning' },
  { label: 'In Progress', value: 'in-progress' },
  { label: 'On Hold', value: 'on-hold' },
  { label: 'Completed', value: 'completed' },
  { label: 'Cancelled', value: 'cancelled' }
]

const priorityOptions = [
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'High', value: 'high' },
  { label: 'Critical', value: 'critical' }
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

const saveProject = async () => {
  isSaving.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In real app, this would save to backend
    console.log('Saving project:', form.value)
    
    // Redirect to projects list
    router.push('/admin/projects')
  } catch (error) {
    console.error('Error saving project:', error)
  } finally {
    isSaving.value = false
  }
}

useHead({
  title: 'Create Project - Admin',
  meta: [
    { name: 'description', content: 'Create new ministry project' }
  ]
})
</script>
