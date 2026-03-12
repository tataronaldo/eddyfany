<template>
  <div class="p-8 min-h-screen transition-colors duration-200" :class="isDarkMode ? 'bg-gray-950' : 'bg-gray-50'">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold mb-2 transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{ isEdit ? 'Edit Blog Post' : 'Create New Blog Post' }}</h1>
        <p class="transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">{{ isEdit ? 'Update blog post content' : 'Write and publish a new blog post' }}</p>
      </div>
      <div class="flex gap-2">
        <UButton to="/admin/blog" color="gray" variant="outline">
          <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
          Back to Blog
        </UButton>
      </div>
    </div>

    <form @submit.prevent="savePost" class="space-y-6">
      <!-- Basic Information -->
      <UCard :class="isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'">
        <template #header>
          <h3 class="text-lg font-semibold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Basic Information</h3>
        </template>
        
        <div class="space-y-6">
          <UFormGroup label="Post Title" required>
            <UInput
              v-model="form.title"
              placeholder="Enter blog post title"
              size="lg"
              required
              class="w-full"
            />
          </UFormGroup>

          <UFormGroup label="Slug" required>
            <UInput
              v-model="form.slug"
              placeholder="url-friendly-title"
              size="lg"
              @blur="generateSlug"
              required
              class="w-full"
            />
            <p class="text-xs mt-1 transition-colors duration-200" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">URL-friendly version of the title</p>
          </UFormGroup>

          <UFormGroup label="Author" required>
            <UInput
              v-model="form.author"
              placeholder="Enter author name"
              size="lg"
              required
              class="w-full"
            />
          </UFormGroup>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UFormGroup label="Publication Date" required>
              <UInput
                v-model="form.date"
                type="date"
                size="lg"
                required
                class="w-full"
              />
            </UFormGroup>

            <UFormGroup label="Category">
              <USelect
                v-model="form.category"
                :options="categoryOptions"
                placeholder="Select category"
                size="lg"
                class="w-full"
              />
            </UFormGroup>
          </div>

          <UFormGroup label="Read Time">
            <UInput
              v-model="form.readTime"
              placeholder="e.g., 5 min read"
              size="lg"
              class="w-full"
            />
          </UFormGroup>

          <UFormGroup label="Excerpt">
            <UTextarea
              v-model="form.excerpt"
              placeholder="Brief summary of the blog post (appears in blog listings)"
              :rows="3"
              class="w-full"
            />
          </UFormGroup>
        </div>
      </UCard>

      <!-- Featured Image -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">Featured Image</h3>
        </template>
        
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
          <div v-if="form.imageUrl" class="mb-4">
            <img 
              :src="form.imageUrl" 
              alt="Featured image preview"
              class="w-full h-48 object-cover rounded-lg mx-auto"
            >
            <UButton 
              type="button"
              @click="removeImage"
              color="red"
              variant="outline"
              size="sm"
              class="mt-2"
            >
              <UIcon name="i-heroicons-trash" class="w-4 h-4 mr-2" />
              Remove Image
            </UButton>
          </div>
          <div v-else>
            <UIcon name="i-heroicons-photo" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p class="text-gray-600 mb-4">Upload featured image for the blog post</p>
            <UButton type="button" color="primary" variant="outline" size="lg">
              <UIcon name="i-heroicons-cloud-arrow-up" class="w-5 h-5 mr-2" />
              Choose Image
            </UButton>
            <input
              type="file"
              accept="image/*"
              class="hidden"
              @change="handleImageUpload"
            >
            <p class="text-xs text-gray-500 mt-2">Recommended: 1200x630px, max 5MB</p>
          </div>
        </div>
      </UCard>

      <!-- Content Editor -->
      <UCard :class="isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold transition-colors duration-200" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Blog Content</h3>
            <div class="flex gap-2">
              <UButton type="button" color="gray" variant="outline" size="sm">
                <UIcon name="i-heroicons-eye" class="w-4 h-4 mr-2" />
                Preview
              </UButton>
            </div>
          </div>
        </template>
        
        <UFormGroup label="Content">
          <UEditor
            v-model="form.content"
            placeholder="Write your blog post content here..."
            class="w-full"
          />
        </UFormGroup>
      </UCard>

      <!-- Tags -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">Tags</h3>
        </template>
        
        <UFormGroup label="Tags">
          <UInput
            v-model="tagsInput"
            placeholder="Enter tags separated by commas"
            size="lg"
            @blur="updateTags"
          />
          <div class="flex flex-wrap gap-2 mt-3">
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
      </UCard>

      <!-- Publishing Options -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">Publishing Options</h3>
        </template>
        
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <UCheckbox v-model="form.published" label="Publish immediately" />
            <UCheckbox v-model="form.featured" label="Feature this post" />
          </div>
          
          <div v-if="!form.published" class="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p class="text-sm text-gray-600">
              <UIcon name="i-heroicons-information-circle" class="w-4 h-4 inline mr-1" />
              This post will be saved as a draft and won't be visible to the public.
            </p>
          </div>

          <div v-if="form.featured" class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p class="text-sm text-yellow-800">
              <UIcon name="i-heroicons-star" class="w-4 h-4 inline mr-1" />
              This post will be featured on the blog homepage.
            </p>
          </div>
        </div>
      </UCard>

      <!-- Actions -->
      <div class="flex items-center justify-end gap-4">
        <UButton to="/admin/blog" color="gray" variant="outline">
          Cancel
        </UButton>
        <UButton 
          type="button"
          @click="saveAsDraft"
          color="gray"
          variant="outline"
          :loading="isSaving"
        >
          <UIcon name="i-heroicons-document-duplicate" class="w-4 h-4 mr-2" />
          Save as Draft
        </UButton>
        <UButton 
          type="submit" 
          color="primary" 
          size="lg" 
          :loading="isSaving"
        >
          <UIcon name="i-heroicons-check" class="w-4 h-4 mr-2" />
          {{ isSaving ? 'Saving...' : (isEdit ? 'Update Post' : 'Publish Post') }}
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
  slug: '',
  excerpt: '',
  content: '',
  author: '',
  date: new Date().toISOString().split('T')[0],
  category: '',
  readTime: '',
  imageUrl: '',
  tags: [],
  featured: false,
  published: true
})

const tagsInput = ref('')
const isSaving = ref(false)

const categoryOptions = [
  { label: 'Teaching', value: 'teaching' },
  { label: 'Devotional', value: 'devotional' },
  { label: 'News', value: 'news' },
  { label: 'Testimony', value: 'testimony' },
  { label: 'Outreach', value: 'outreach' }
]

// Load post data if editing
if (isEdit.value) {
  // In real app, this would fetch from API
  const postId = route.params.id
  // Load post data here
}

// Auto-generate slug from title
watch(() => form.value.title, (newTitle) => {
  if (!form.value.slug || form.value.slug === generateSlugFromTitle(form.value.slug)) {
    form.value.slug = generateSlugFromTitle(newTitle)
  }
})

const generateSlugFromTitle = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const generateSlug = () => {
  if (!form.value.slug) {
    form.value.slug = generateSlugFromTitle(form.value.title)
  }
}

const updateTags = () => {
  form.value.tags = tagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag)
}

const removeTag = (tagToRemove) => {
  form.value.tags = form.value.tags.filter(tag => tag !== tagToRemove)
  tagsInput.value = form.value.tags.join(', ')
}

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // In real app, this would upload to server
    const reader = new FileReader()
    reader.onload = (e) => {
      form.value.imageUrl = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = () => {
  form.value.imageUrl = ''
}

const saveAsDraft = async () => {
  form.value.published = false
  await savePost()
}

const savePost = async () => {
  isSaving.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In real app, this would save to backend
    console.log('Saving blog post:', form.value)
    
    // Redirect to blog list
    router.push('/admin/blog')
  } catch (error) {
    console.error('Error saving blog post:', error)
  } finally {
    isSaving.value = false
  }
}

useHead({
  title: `${isEdit.value ? 'Edit' : 'Create'} Blog Post - Admin`,
  meta: [
    { name: 'description', content: `${isEdit.value ? 'Edit' : 'Create'} blog post content` }
  ]
})
</script>
