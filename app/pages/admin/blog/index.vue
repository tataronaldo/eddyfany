<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Blog Posts</h1>
        <p class="text-gray-600">Manage blog content and publications</p>
      </div>
      <UButton to="/admin/blog/new" color="primary" size="lg">
        <UIcon name="i-heroicons-plus" class="w-5 h-5 mr-2" />
        Add New Post
      </UButton>
    </div>

    <!-- Filters and Search -->
    <UCard class="mb-6">
      <div class="flex flex-col lg:flex-row gap-4">
        <div class="flex-1">
          <UInput
            v-model="searchQuery"
            placeholder="Search blog posts..."
            icon="i-heroicons-magnifying-glass"
            size="lg"
          />
        </div>
        <div class="flex gap-2">
          <USelect
            v-model="selectedCategory"
            :options="categories"
            placeholder="All Categories"
            size="lg"
            class="w-48"
          />
          <USelect
            v-model="selectedStatus"
            :options="statusOptions"
            placeholder="All Status"
            size="lg"
            class="w-48"
          />
        </div>
      </div>
    </UCard>

    <!-- Blog Posts Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <UCard v-for="post in filteredPosts" :key="post.id" class="blog-post-card">
        <div class="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img 
            v-if="post.imageUrl"
            :src="post.imageUrl" 
            :alt="post.title"
            class="w-full h-full object-cover"
          >
          <div v-else class="w-full h-full flex items-center justify-center bg-gray-200">
            <UIcon name="i-heroicons-document-text" class="w-12 h-12 text-gray-400" />
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <UBadge :label="post.category" color="blue" variant="subtle" size="sm" />
            <div class="flex items-center gap-1">
              <UIcon v-if="post.featured" name="i-heroicons-star" class="w-4 h-4 text-yellow-500" />
              <UBadge 
                :label="post.published ? 'Published' : 'Draft'" 
                :color="post.published ? 'green' : 'gray'"
                variant="subtle"
                size="sm"
              />
            </div>
          </div>

          <h3 class="text-lg font-semibold text-gray-900 line-clamp-2">{{ post.title }}</h3>
          <p class="text-gray-600 text-sm line-clamp-3">{{ post.excerpt }}</p>

          <div class="flex items-center justify-between text-sm text-gray-500">
            <span>{{ post.author }}</span>
            <span>{{ formatDate(post.date) }}</span>
          </div>

          <div class="flex flex-wrap gap-1">
            <UBadge 
              v-for="tag in post.tags.slice(0, 3)" 
              :key="tag"
              :label="tag"
              color="gray"
              variant="outline"
              size="xs"
            />
            <UBadge 
              v-if="post.tags.length > 3"
              :label="`+${post.tags.length - 3}`"
              color="gray"
              variant="outline"
              size="xs"
            />
          </div>

          <div class="flex items-center justify-between pt-3 border-t border-gray-100">
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <UIcon name="i-heroicons-clock" class="w-4 h-4" />
              <span>{{ post.readTime }}</span>
            </div>
            <div class="flex gap-2">
              <UButton 
                :to="`/admin/blog/${post.id}/edit`"
                color="gray" 
                variant="ghost" 
                size="sm"
              >
                <UIcon name="i-heroicons-pencil" class="w-4 h-4" />
              </UButton>
              <UButton 
                @click="deletePost(post.id)"
                color="red" 
                variant="ghost" 
                size="sm"
              >
                <UIcon name="i-heroicons-trash" class="w-4 h-4" />
              </UButton>
            </div>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Empty State -->
    <div v-if="filteredPosts.length === 0" class="text-center py-12">
      <UIcon name="i-heroicons-document-text" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 class="text-lg font-medium text-gray-900 mb-2">No blog posts found</h3>
      <p class="text-gray-500 mb-6">Get started by creating your first blog post.</p>
      <UButton to="/admin/blog/new" color="primary" size="lg">
        <UIcon name="i-heroicons-plus" class="w-5 h-5 mr-2" />
        Create Blog Post
      </UButton>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

import { blogPosts } from '~/data/adminBlog'

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedStatus = ref('')

const categories = [
  { label: 'All Categories', value: '' },
  { label: 'Teaching', value: 'teaching' },
  { label: 'Devotional', value: 'devotional' },
  { label: 'News', value: 'news' },
  { label: 'Testimony', value: 'testimony' },
  { label: 'Outreach', value: 'outreach' }
]

const statusOptions = [
  { label: 'All Status', value: '' },
  { label: 'Published', value: 'published' },
  { label: 'Draft', value: 'draft' }
]

const filteredPosts = computed(() => {
  return blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesCategory = !selectedCategory.value || post.category === selectedCategory.value
    const matchesStatus = !selectedStatus.value || 
                          (selectedStatus.value === 'published' && post.published) ||
                          (selectedStatus.value === 'draft' && !post.published)
    
    return matchesSearch && matchesCategory && matchesStatus
  })
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

const deletePost = async (id) => {
  if (confirm('Are you sure you want to delete this blog post?')) {
    // In real app, this would call API
    const index = blogPosts.findIndex(p => p.id === id)
    if (index > -1) {
      blogPosts.splice(index, 1)
    }
  }
}

useHead({
  title: 'Blog Management - Admin',
  meta: [
    { name: 'description', content: 'Manage blog posts and content' }
  ]
})
</script>

<style scoped>
.blog-post-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.blog-post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
