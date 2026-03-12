<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Projects</h1>
        <p class="text-gray-600">Manage construction and renovation projects</p>
      </div>
      <UButton to="/admin/projects/new" color="primary" size="lg">
        <UIcon name="i-heroicons-plus" class="w-5 h-5 mr-2" />
        New Project
      </UButton>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <UCard class="text-center">
        <div class="text-2xl font-bold text-blue-600">{{ projectStats.total }}</div>
        <div class="text-sm text-gray-600">Total Projects</div>
      </UCard>
      <UCard class="text-center">
        <div class="text-2xl font-bold text-green-600">{{ projectStats.inProgress }}</div>
        <div class="text-sm text-gray-600">In Progress</div>
      </UCard>
      <UCard class="text-center">
        <div class="text-2xl font-bold text-purple-600">{{ projectStats.completed }}</div>
        <div class="text-sm text-gray-600">Completed</div>
      </UCard>
      <UCard class="text-center">
        <div class="text-2xl font-bold text-orange-600">${{ formatBudget(projectStats.totalBudget) }}</div>
        <div class="text-sm text-gray-600">Total Budget</div>
      </UCard>
    </div>

    <!-- Filters and Search -->
    <UCard class="mb-6">
      <div class="flex flex-col lg:flex-row gap-4">
        <div class="flex-1">
          <UInput
            v-model="searchQuery"
            placeholder="Search projects..."
            icon="i-heroicons-magnifying-glass"
            size="lg"
          />
        </div>
        <div class="flex gap-2">
          <USelect
            v-model="selectedCategory"
            :options="categoryOptions"
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
          <USelect
            v-model="selectedPriority"
            :options="priorityOptions"
            placeholder="All Priority"
            size="lg"
            class="w-48"
          />
        </div>
      </div>
    </UCard>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <UCard v-for="project in filteredProjects" :key="project.id" class="project-card">
        <div class="space-y-4">
          <!-- Project Header -->
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 line-clamp-2">{{ project.title }}</h3>
              <p class="text-sm text-gray-600 mt-1">{{ project.location }}</p>
            </div>
            <UBadge 
              :label="project.status" 
              :color="getStatusColor(project.status)"
              variant="subtle"
              size="sm"
            />
          </div>

          <!-- Project Image -->
          <div class="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img 
              v-if="project.images.length > 0"
              :src="project.images[0]" 
              :alt="project.title"
              class="w-full h-full object-cover"
            >
            <div v-else class="w-full h-full flex items-center justify-center bg-gray-200">
              <UIcon name="i-heroicons-building-office" class="w-12 h-12 text-gray-400" />
            </div>
          </div>

          <!-- Project Description -->
          <p class="text-gray-600 text-sm line-clamp-3">{{ project.description }}</p>

          <!-- Progress -->
          <div>
            <div class="flex items-center justify-between text-sm mb-2">
              <span class="text-gray-600">Progress</span>
              <span class="font-medium">{{ project.progress }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                :style="`width: ${project.progress}%`"
              ></div>
            </div>
          </div>

          <!-- Project Details -->
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p class="text-gray-600">Budget</p>
              <p class="font-medium">${{ formatBudget(project.estimatedBudget) }}</p>
            </div>
            <div>
              <p class="text-gray-600">Timeline</p>
              <p class="font-medium">{{ formatDate(project.startDate) }}</p>
            </div>
          </div>

          <!-- Priority and Category -->
          <div class="flex items-center justify-between">
            <UBadge :label="project.category" color="gray" variant="outline" size="sm" />
            <UBadge 
              :label="project.priority" 
              :color="getPriorityColor(project.priority)"
              variant="subtle"
              size="sm"
            />
          </div>

          <!-- Actions -->
          <div class="flex gap-2 pt-3 border-t border-gray-100">
            <UButton 
              :to="`/admin/projects/${project.id}`"
              color="primary" 
              variant="outline" 
              size="sm"
              class="flex-1"
            >
              <UIcon name="i-heroicons-eye" class="w-4 h-4 mr-2" />
              View
            </UButton>
            <UButton 
              :to="`/admin/projects/${project.id}/edit`"
              color="gray" 
              variant="ghost" 
              size="sm"
            >
              <UIcon name="i-heroicons-pencil" class="w-4 h-4" />
            </UButton>
            <UButton 
              @click="deleteProject(project.id)"
              color="red" 
              variant="ghost" 
              size="sm"
            >
              <UIcon name="i-heroicons-trash" class="w-4 h-4" />
            </UButton>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Empty State -->
    <div v-if="filteredProjects.length === 0" class="text-center py-12">
      <UIcon name="i-heroicons-building-office" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 class="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
      <p class="text-gray-500 mb-6">Get started by creating your first project.</p>
      <UButton to="/admin/projects/new" color="primary" size="lg">
        <UIcon name="i-heroicons-plus" class="w-5 h-5 mr-2" />
        Create Project
      </UButton>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

import { projects } from '~/data/adminProjects'

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedStatus = ref('')
const selectedPriority = ref('')

const categoryOptions = [
  { label: 'All Categories', value: '' },
  { label: 'Building', value: 'Building' },
  { label: 'Renovation', value: 'Renovation' },
  { label: 'Infrastructure', value: 'Infrastructure' },
  { label: 'Landscaping', value: 'Landscaping' }
]

const statusOptions = [
  { label: 'All Status', value: '' },
  { label: 'Planning', value: 'planning' },
  { label: 'In Progress', value: 'in-progress' },
  { label: 'Completed', value: 'completed' },
  { label: 'On Hold', value: 'on-hold' }
]

const priorityOptions = [
  { label: 'All Priority', value: '' },
  { label: 'High', value: 'high' },
  { label: 'Medium', value: 'medium' },
  { label: 'Low', value: 'low' }
]

const projectStats = computed(() => {
  const total = projects.length
  const inProgress = projects.filter(p => p.status === 'in-progress').length
  const completed = projects.filter(p => p.status === 'completed').length
  const totalBudget = projects.reduce((sum, p) => sum + p.estimatedBudget, 0)
  
  return { total, inProgress, completed, totalBudget }
})

const filteredProjects = computed(() => {
  return projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesCategory = !selectedCategory.value || project.category === selectedCategory.value
    const matchesStatus = !selectedStatus.value || project.status === selectedStatus.value
    const matchesPriority = !selectedPriority.value || project.priority === selectedPriority.value
    
    return matchesSearch && matchesCategory && matchesStatus && matchesPriority
  })
})

const getStatusColor = (status) => {
  const colors = {
    'planning': 'blue',
    'in-progress': 'green',
    'completed': 'purple',
    'on-hold': 'orange'
  }
  return colors[status] || 'gray'
}

const getPriorityColor = (priority) => {
  const colors = {
    'high': 'red',
    'medium': 'yellow',
    'low': 'green'
  }
  return colors[priority] || 'gray'
}

const formatBudget = (amount) => {
  return (amount / 1000).toFixed(0) + 'k'
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  })
}

const deleteProject = async (id) => {
  if (confirm('Are you sure you want to delete this project?')) {
    const index = projects.findIndex(p => p.id === id)
    if (index > -1) {
      projects.splice(index, 1)
    }
  }
}

useHead({
  title: 'Projects Management - Admin',
  meta: [
    { name: 'description', content: 'Manage construction and renovation projects' }
  ]
})
</script>

<style scoped>
.project-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
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
