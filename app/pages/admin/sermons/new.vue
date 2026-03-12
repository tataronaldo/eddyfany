<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">{{ isEdit ? 'Edit Sermon' : 'Add New Sermon' }}</h1>
        <p class="text-gray-600">{{ isEdit ? 'Update sermon information' : 'Create a new sermon' }}</p>
      </div>
      <div class="flex gap-2">
        <UButton to="/admin/sermons" color="gray" variant="outline">
          <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
          Back to Sermons
        </UButton>
      </div>
    </div>

    <!-- Form -->
    <form @submit.prevent="saveSermon" class="space-y-6">
      <!-- Basic Information -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">Basic Information</h3>
        </template>
        
        <div class="space-y-6">
          <UFormGroup label="Sermon Title" required>
            <UInput
              v-model="form.title"
              placeholder="Enter sermon title"
              size="lg"
              required
              class="w-full"
            />
          </UFormGroup>

          <UFormGroup label="Speaker" required>
            <UInput
              v-model="form.speaker"
              placeholder="Enter speaker name"
              size="lg"
              required
              class="w-full"
            />
          </UFormGroup>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UFormGroup label="Date" required>
              <UInput
                v-model="form.date"
                type="date"
                size="lg"
                required
                class="w-full"
              />
            </UFormGroup>

            <UFormGroup label="Duration">
              <UInput
                v-model="form.duration"
                placeholder="e.g., 45:32"
                size="lg"
                class="w-full"
              />
            </UFormGroup>
          </div>

          <UFormGroup label="Category">
            <USelect
              v-model="form.category"
              :options="categoryOptions"
              placeholder="Select category"
              size="lg"
              class="w-full"
            />
          </UFormGroup>

          <UFormGroup label="Tags">
            <UInput
              v-model="tagsInput"
              placeholder="Enter tags separated by commas"
              size="lg"
              @blur="updateTags"
              class="w-full"
            />
            <div class="flex flex-wrap gap-2 mt-2">
              <UBadge 
                v-for="tag in form.tags" 
                :key="tag"
                :label="tag"
                color="blue"
                variant="subtle"
                removable
                @remove="removeTag(tag)"
              />
            </div>
          </UFormGroup>
        </div>

        <UFormGroup label="Description" class="mt-6">
          <UEditor
            v-model="form.description"
            placeholder="Enter sermon description..."
            class="w-full"
          />
        </UFormGroup>
      </UCard>

      <!-- Sermon Notes -->
      <UCard :class="isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'">
        <template #header>
          <h3 class="text-lg font-semibold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Sermon Notes</h3>
        </template>
        
        <UFormGroup label="Detailed Notes">
          <UEditor
            v-model="form.notes"
            placeholder="Enter detailed sermon notes, scripture references, and key points..."
            class="w-full"
          />
        </UFormGroup>
      </UCard>

      <!-- Media Upload -->
      <UCard :class="isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'">
        <template #header>
          <h3 class="text-lg font-semibold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Media Files</h3>
        </template>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Thumbnail -->
          <div>
            <UFormGroup label="Thumbnail Image">
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                <div v-if="form.thumbnailUrl" class="mb-4">
                  <img 
                    :src="form.thumbnailUrl" 
                    alt="Thumbnail preview"
                    class="w-full h-32 object-cover rounded-lg"
                  >
                </div>
                <UIcon v-else name="i-heroicons-photo" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p class="text-sm text-gray-600 mb-2">Upload thumbnail image</p>
                <UButton type="button" color="primary" variant="outline" size="sm">
                  <UIcon name="i-heroicons-cloud-arrow-up" class="w-4 h-4 mr-2" />
                  Choose File
                </UButton>
                <input
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change="handleThumbnailUpload"
                >
              </div>
            </UFormGroup>
          </div>

          <!-- Video -->
          <div>
            <UFormGroup label="Video File">
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                <div v-if="form.videoUrl" class="mb-4">
                  <div class="bg-green-50 border border-green-200 rounded-lg p-3">
                    <UIcon name="i-heroicons-video-camera" class="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p class="text-sm text-green-800">Video uploaded</p>
                  </div>
                </div>
                <UIcon v-else name="i-heroicons-video-camera" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p class="text-sm text-gray-600 mb-2">Upload video file</p>
                <UButton type="button" color="primary" variant="outline" size="sm">
                  <UIcon name="i-heroicons-cloud-arrow-up" class="w-4 h-4 mr-2" />
                  Choose File
                </UButton>
                <input
                  type="file"
                  accept="video/*"
                  class="hidden"
                  @change="handleVideoUpload"
                >
              </div>
            </UFormGroup>
          </div>

          <!-- Audio -->
          <div>
            <UFormGroup label="Audio File">
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                <div v-if="form.audioUrl" class="mb-4">
                  <div class="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <UIcon name="i-heroicons-musical-note" class="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p class="text-sm text-blue-800">Audio uploaded</p>
                  </div>
                </div>
                <UIcon v-else name="i-heroicons-musical-note" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p class="text-sm text-gray-600 mb-2">Upload audio file</p>
                <UButton type="button" color="primary" variant="outline" size="sm">
                  <UIcon name="i-heroicons-cloud-arrow-up" class="w-4 h-4 mr-2" />
                  Choose File
                </UButton>
                <input
                  type="file"
                  accept="audio/*"
                  class="hidden"
                  @change="handleAudioUpload"
                >
              </div>
            </UFormGroup>
          </div>
        </div>
      </UCard>

      <!-- Sermon Content -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">Sermon Content</h3>
        </template>
        
        <UFormGroup label="Sermon Notes">
          <UTextarea
            v-model="form.sermonNotes"
            placeholder="Enter detailed sermon notes or transcript"
            :rows="8"
          />
        </UFormGroup>

        <UFormGroup label="Bible Verses" class="mt-6">
          <div class="space-y-2">
            <div v-for="(verse, index) in form.bibleVerses" :key="index" class="flex gap-2">
              <UInput
                v-model="form.bibleVerses[index]"
                placeholder="e.g., John 3:16"
                class="flex-1"
              />
              <UButton 
                type="button"
                @click="removeVerse(index)"
                color="red"
                variant="ghost"
                size="sm"
              >
                <UIcon name="i-heroicons-x-mark" class="w-4 h-4" />
              </UButton>
            </div>
            <UButton 
              type="button"
              @click="addVerse"
              color="primary"
              variant="outline"
              size="sm"
            >
              <UIcon name="i-heroicons-plus" class="w-4 h-4 mr-2" />
              Add Verse
            </UButton>
          </div>
        </UFormGroup>
      </UCard>

      <!-- Publishing Options -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">Publishing Options</h3>
        </template>
        
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <UCheckbox v-model="form.published" label="Publish immediately" />
            <UCheckbox v-model="form.featured" label="Feature this sermon" />
          </div>
          
          <div v-if="!form.published" class="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p class="text-sm text-gray-600">
              <UIcon name="i-heroicons-information-circle" class="w-4 h-4 inline mr-1" />
              This sermon will be saved as a draft and won't be visible to the public.
            </p>
          </div>
        </div>
      </UCard>

      <!-- Actions -->
      <div class="flex items-center justify-end gap-4">
        <UButton to="/admin/sermons" color="gray" variant="outline">
          Cancel
        </UButton>
        <UButton type="submit" color="primary" size="lg" :loading="isSaving">
          <UIcon name="i-heroicons-check" class="w-4 h-4 mr-2" />
          {{ isSaving ? 'Saving...' : (isEdit ? 'Update Sermon' : 'Create Sermon') }}
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

const route = useRoute()
const router = useRouter()
const isEdit = computed(() => route.params.id !== undefined)

// Form data
const form = ref({
  title: '',
  description: '',
  speaker: '',
  date: '',
  category: '',
  duration: '',
  thumbnailUrl: '',
  videoUrl: '',
  audioUrl: '',
  sermonNotes: '',
  bibleVerses: [''],
  tags: [],
  featured: false,
  published: true
})

const tagsInput = ref('')
const isSaving = ref(false)

const categoryOptions = [
  { label: 'Teaching', value: 'Teaching' },
  { label: 'Prayer', value: 'Prayer' },
  { label: 'Worship', value: 'Worship' },
  { label: 'Healing', value: 'Healing' },
  { label: 'Outreach', value: 'Outreach' }
]

// Load sermon data if editing
if (isEdit.value) {
  // In real app, this would fetch from API
  const sermonId = route.params.id
  // Load sermon data here
}

const updateTags = () => {
  form.value.tags = tagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag)
}

const removeTag = (tagToRemove) => {
  form.value.tags = form.value.tags.filter(tag => tag !== tagToRemove)
  tagsInput.value = form.value.tags.join(', ')
}

const addVerse = () => {
  form.value.bibleVerses.push('')
}

const removeVerse = (index) => {
  form.value.bibleVerses.splice(index, 1)
}

const handleThumbnailUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // In real app, this would upload to server
    const reader = new FileReader()
    reader.onload = (e) => {
      form.value.thumbnailUrl = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const handleVideoUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // In real app, this would upload to server
    form.value.videoUrl = `https://example.com/videos/${file.name}`
  }
}

const handleAudioUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // In real app, this would upload to server
    form.value.audioUrl = `https://example.com/audio/${file.name}`
  }
}

const saveSermon = async () => {
  isSaving.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In real app, this would save to backend
    console.log('Saving sermon:', form.value)
    
    // Redirect to sermons list
    router.push('/admin/sermons')
  } catch (error) {
    console.error('Error saving sermon:', error)
  } finally {
    isSaving.value = false
  }
}

useHead({
  title: `${isEdit.value ? 'Edit' : 'Add'} Sermon - Admin`,
  meta: [
    { name: 'description', content: `${isEdit.value ? 'Edit' : 'Create'} sermon content and media` }
  ]
})
</script>
