<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Sermons</h1>
        <p class="text-gray-600">Manage sermon content, videos, and audio</p>
      </div>
      <UButton to="/admin/sermons/new" color="primary" size="lg">
        <UIcon name="i-heroicons-plus" class="w-5 h-5 mr-2" />
        Add New Sermon
      </UButton>
    </div>

    <!-- Filters and Search -->
    <UCard class="mb-6">
      <div class="flex flex-col lg:flex-row gap-4">
        <div class="flex-1">
          <UInput
            v-model="searchQuery"
            placeholder="Search sermons..."
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

    <!-- Sermons List -->
    <UCard>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="text-left py-3 px-4 font-semibold text-gray-900">Sermon</th>
              <th class="text-left py-3 px-4 font-semibold text-gray-900">Speaker</th>
              <th class="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
              <th class="text-left py-3 px-4 font-semibold text-gray-900">Category</th>
              <th class="text-left py-3 px-4 font-semibold text-gray-900">Duration</th>
              <th class="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
              <th class="text-center py-3 px-4 font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sermon in filteredSermons" :key="sermon.id" class="border-b border-gray-100 hover:bg-gray-50">
              <td class="py-4 px-4">
                <div class="flex items-center gap-3">
                  <img 
                    :src="sermon.thumbnailUrl || '/placeholder-sermon.jpg'" 
                    :alt="sermon.title"
                    class="w-12 h-12 rounded-lg object-cover"
                  >
                  <div>
                    <p class="font-medium text-gray-900">{{ sermon.title }}</p>
                    <p class="text-sm text-gray-500 line-clamp-1">{{ sermon.description }}</p>
                  </div>
                </div>
              </td>
              <td class="py-4 px-4">
                <p class="text-gray-900">{{ sermon.speaker }}</p>
              </td>
              <td class="py-4 px-4">
                <p class="text-gray-900">{{ formatDate(sermon.date) }}</p>
              </td>
              <td class="py-4 px-4">
                <UBadge :label="sermon.category" color="blue" variant="subtle" size="sm" />
              </td>
              <td class="py-4 px-4">
                <p class="text-gray-900">{{ sermon.duration }}</p>
              </td>
              <td class="py-4 px-4">
                <div class="flex items-center gap-2">
                  <UBadge 
                    :label="sermon.published ? 'Published' : 'Draft'" 
                    :color="sermon.published ? 'green' : 'gray'"
                    variant="subtle"
                    size="sm"
                  />
                  <UIcon v-if="sermon.featured" name="i-heroicons-star" class="w-4 h-4 text-yellow-500" />
                </div>
              </td>
              <td class="py-4 px-4">
                <div class="flex items-center justify-center gap-2">
                  <UButton 
                    :to="`/admin/sermons/${sermon.id}/edit`"
                    color="gray" 
                    variant="ghost" 
                    size="sm"
                  >
                    <UIcon name="i-heroicons-pencil" class="w-4 h-4" />
                  </UButton>
                  <UButton 
                    @click="deleteSermon(sermon.id)"
                    color="red" 
                    variant="ghost" 
                    size="sm"
                  >
                    <UIcon name="i-heroicons-trash" class="w-4 h-4" />
                  </UButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="filteredSermons.length === 0" class="text-center py-12">
        <UIcon name="i-heroicons-microphone" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p class="text-gray-500">No sermons found</p>
      </div>
    </UCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

import { sermons } from '~/data/adminSermons'

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedStatus = ref('')

const categories = [
  { label: 'All Categories', value: '' },
  { label: 'Teaching', value: 'Teaching' },
  { label: 'Prayer', value: 'Prayer' },
  { label: 'Worship', value: 'Worship' },
  { label: 'Healing', value: 'Healing' },
  { label: 'Outreach', value: 'Outreach' }
]

const statusOptions = [
  { label: 'All Status', value: '' },
  { label: 'Published', value: 'published' },
  { label: 'Draft', value: 'draft' }
]

const filteredSermons = computed(() => {
  return sermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         sermon.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         sermon.speaker.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesCategory = !selectedCategory.value || sermon.category === selectedCategory.value
    const matchesStatus = !selectedStatus.value || 
                          (selectedStatus.value === 'published' && sermon.published) ||
                          (selectedStatus.value === 'draft' && !sermon.published)
    
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

const deleteSermon = async (id) => {
  if (confirm('Are you sure you want to delete this sermon?')) {
    // In real app, this would call API
    const index = sermons.findIndex(s => s.id === id)
    if (index > -1) {
      sermons.splice(index, 1)
    }
  }
}

useHead({
  title: 'Sermons Management - Admin',
  meta: [
    { name: 'description', content: 'Manage sermon content and media' }
  ]
})
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
