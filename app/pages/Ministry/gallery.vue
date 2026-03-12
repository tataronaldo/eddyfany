<script setup>
useHead({
  title: 'Gallery - Eddy Fany Ministry',
  meta: [
    { name: 'description', content: 'Browse through photos and videos from Eddy Fany Ministry events, services, and community activities.' }
  ]
})

const selectedCategory = ref('all')
const selectedImage = ref(null)

const categories = [
  { value: 'all', label: 'All Photos' },
  { value: 'services', label: 'Services' },
  { value: 'events', label: 'Events' },
  { value: 'outreach', label: 'Outreach' },
  { value: 'community', label: 'Community' },
  { value: 'construction', label: 'Construction' }
]

const galleryImages = [
  {
    id: 1,
    title: 'Sunday Service',
    category: 'services',
    description: 'Powerful worship during our Sunday morning service',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop',
    date: '2024-03-10'
  },
  {
    id: 2,
    title: 'Community Outreach',
    category: 'outreach',
    description: 'Serving the local community through our outreach programs',
    thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=400&auto=format&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop',
    date: '2024-03-05'
  },
  {
    id: 3,
    title: 'Youth Conference',
    category: 'events',
    description: 'Annual youth conference with young people from across the region',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    date: '2024-02-28'
  },
  {
    id: 4,
    title: 'Bible Study Group',
    category: 'community',
    description: 'Weekly bible study and fellowship gathering',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
    date: '2024-02-20'
  },
  {
    id: 5,
    title: 'Construction Project',
    category: 'construction',
    description: 'Building community center with excellence and integrity',
    thumbnail: 'https://images.unsplash.com/photo-1582407947304-cd980d5df874?q=80&w=400&auto=format&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1582407947304-cd980d5df874?q=80&w=1200&auto=format&fit=crop',
    date: '2024-02-15'
  },
  {
    id: 6,
    title: 'Evening Worship',
    category: 'services',
    description: 'Contemplative evening worship service',
    thumbnail: 'https://images.unsplash.com/photo-1498758536668-5bba4e7ee69f?q=80&w=400&auto=format&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1498758536668-5bba4e7ee69f?q=80&w=1200&auto=format&fit=crop',
    date: '2024-02-10'
  },
  {
    id: 7,
    title: 'Food Drive',
    category: 'outreach',
    description: 'Community food drive helping families in need',
    thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format&fit=crop',
    date: '2024-02-05'
  },
  {
    id: 8,
    title: 'Men\'s Fellowship',
    category: 'community',
    description: 'Monthly men\'s fellowship and breakfast',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    date: '2024-01-28'
  },
  {
    id: 9,
    title: 'Church Renovation',
    category: 'construction',
    description: 'Renovating our worship space for better ministry',
    thumbnail: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=400&auto=format&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop',
    date: '2024-01-20'
  }
]

const filteredImages = computed(() => {
  if (selectedCategory.value === 'all') {
    return galleryImages
  }
  return galleryImages.filter(image => image.category === selectedCategory.value)
})

const openImage = (image) => {
  selectedImage.value = image
}

const closeImage = () => {
  selectedImage.value = null
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<template>
  <div class="church-home-theme bg-gray-950 text-gray-100 antialiased min-h-screen">
    <ChurchHomeNavbar />

    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <UIcon name="i-heroicons-photo" class="w-10 h-10 text-primary-400" />
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
          Gallery
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Journey with us through visual stories of faith, community, and transformation
        </p>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="py-8 bg-gray-900 border-b border-gray-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-4">
          <UButton
            v-for="category in categories"
            :key="category.value"
            :label="category.label"
            :variant="selectedCategory === category.value ? 'solid' : 'outline'"
            :color="selectedCategory === category.value ? 'primary' : 'gray'"
            @click="selectedCategory = category.value"
          />
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="image in filteredImages" 
            :key="image.id"
            class="group cursor-pointer"
            @click="openImage(image)"
          >
            <div class="relative overflow-hidden rounded-xl bg-gray-800">
              <img 
                :src="image.thumbnail" 
                :alt="image.title"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-0 left-0 right-0 p-4">
                  <h3 class="text-white font-bold text-lg">{{ image.title }}</h3>
                  <p class="text-gray-300 text-sm">{{ formatDate(image.date) }}</p>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <h3 class="text-white font-semibold">{{ image.title }}</h3>
              <p class="text-gray-400 text-sm">{{ image.description }}</p>
            </div>
          </div>
        </div>

        <div v-if="filteredImages.length === 0" class="text-center py-12">
          <UIcon name="i-heroicons-photo" class="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p class="text-gray-400">No images found in this category.</p>
        </div>

        <div class="text-center mt-12">
          <UButton label="Load More Images" variant="outline" color="white" size="lg" />
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <div 
      v-if="selectedImage" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all duration-300"
      @click="closeImage"
    >
      <div class="relative max-w-6xl w-full bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl" @click.stop>
        <button 
          @click="closeImage"
          class="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors cursor-pointer"
        >
          <UIcon name="i-heroicons-x-mark" class="w-8 h-8" />
        </button>
        
        <div class="grid lg:grid-cols-3 gap-8 items-center">
          <div class="lg:col-span-2">
            <img 
              :src="selectedImage.fullImage" 
              :alt="selectedImage.title"
              class="w-full rounded-xl shadow-lg"
            >
          </div>
          <div class="text-white p-6">
            <h2 class="text-2xl font-bold mb-4">{{ selectedImage.title }}</h2>
            <p class="text-gray-300 mb-6">{{ selectedImage.description }}</p>
            <div class="flex items-center gap-4 text-sm text-gray-400 mb-6">
              <span>{{ formatDate(selectedImage.date) }}</span>
              <span>•</span>
              <span class="capitalize">{{ selectedImage.category }}</span>
            </div>
            <div class="flex gap-3">
              <UButton 
                icon="i-heroicons-heart" 
                variant="outline" 
                color="white"
                size="sm"
                class="cursor-pointer"
              >
                Like
              </UButton>
              <UButton 
                icon="i-heroicons-share" 
                variant="outline" 
                color="white"
                size="sm"
                class="cursor-pointer"
              >
                Share
              </UButton>
              <UButton 
                icon="i-heroicons-arrow-down-tray" 
                variant="outline" 
                color="white"
                size="sm"
                class="cursor-pointer"
              >
                Download
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Gallery Section -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center text-white">Featured Videos</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard class="bg-gray-800 border-gray-700 group cursor-pointer">
            <div class="relative">
              <img 
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop"
                alt="Video thumbnail"
                class="w-full h-48 object-cover rounded-t-xl"
              >
              <div class="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-xl">
                <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center group-hover:bg-primary-400 transition-colors">
                  <UIcon name="i-heroicons-play" class="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-white font-semibold mb-2">Sunday Service Highlights</h3>
              <p class="text-gray-400 text-sm">March 10, 2024 • 45:32</p>
            </div>
          </UCard>

          <UCard class="bg-gray-800 border-gray-700 group cursor-pointer">
            <div class="relative">
              <img 
                src="https://images.unsplash.com/photo-1498758536668-5bba4e7ee69f?q=80&w=400&auto=format&fit=crop"
                alt="Video thumbnail"
                class="w-full h-48 object-cover rounded-t-xl"
              >
              <div class="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-xl">
                <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center group-hover:bg-primary-400 transition-colors">
                  <UIcon name="i-heroicons-play" class="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-white font-semibold mb-2">Testimony Service</h3>
              <p class="text-gray-400 text-sm">March 3, 2024 • 38:21</p>
            </div>
          </UCard>

          <UCard class="bg-gray-800 border-gray-700 group cursor-pointer">
            <div class="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop"
                alt="Video thumbnail"
                class="w-full h-48 object-cover rounded-t-xl"
              >
              <div class="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-xl">
                <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center group-hover:bg-primary-400 transition-colors">
                  <UIcon name="i-heroicons-play" class="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-white font-semibold mb-2">Youth Conference 2024</h3>
              <p class="text-gray-400 text-sm">February 28, 2024 • 52:15</p>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <ChurchHomeFooter />
  </div>
</template>
