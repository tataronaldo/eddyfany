<template>
  <div class="min-h-screen bg-gray-50">
    <ConstructionNavbar />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-yellow-600 to-amber-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h1>
          <p class="text-xl text-orange-100 max-w-3xl mx-auto">
            Browse through our collection of completed projects showcasing our craftsmanship and attention to detail
          </p>
        </div>
      </div>
      
      <!-- Hero Background Pattern -->
      <div class="absolute inset-0 bg-black opacity-10"></div>
    </section>

    <!-- Gallery Categories -->
    <section class="py-8 bg-white dark:bg-gray-800 border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="category in galleryCategories" 
            :key="category"
            @click="selectedGalleryCategory = category"
            :class="selectedGalleryCategory === category ? 'bg-yellow-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-300'"
            class="px-6 py-2 rounded-full font-medium transition-colors"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div 
            v-for="(image, index) in filteredGalleryImages" 
            :key="index"
            class="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            @click="openLightbox(index)"
          >
            <img 
              :src="image.url" 
              :alt="image.title"
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-lg font-semibold">{{ image.title }}</h3>
                <p class="text-sm text-gray-200">{{ image.category }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div 
      v-if="lightboxOpen"
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <div class="relative max-w-6xl w-full">
        <button 
          @click="closeLightbox"
          class="absolute top-4 right-4 bg-white text-gray-900 rounded-full p-2 hover:bg-gray-100 z-10"
        >
          <UIcon name="i-heroicons-x-mark" class="h-6 w-6" />
        </button>
        
        <button 
          @click="previousImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-full p-3 hover:bg-gray-100"
        >
          <UIcon name="i-heroicons-chevron-left" class="h-6 w-6" />
        </button>
        
        <button 
          @click="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-full p-3 hover:bg-gray-100"
        >
          <UIcon name="i-heroicons-chevron-right" class="h-6 w-6" />
        </button>
        
        <div class="text-center">
          <img 
            :src="filteredGalleryImages[currentImageIndex]?.url" 
            :alt="filteredGalleryImages[currentImageIndex]?.title"
            class="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg"
          />
          <div class="mt-4 text-white">
            <h3 class="text-xl font-semibold">{{ filteredGalleryImages[currentImageIndex]?.title }}</h3>
            <p class="text-gray-300">{{ filteredGalleryImages[currentImageIndex]?.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Projects Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Highlight projects that showcase our expertise and commitment to quality
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="featured in featuredProjects" 
            :key="featured.id"
            class="group"
          >
            <div class="relative overflow-hidden rounded-lg shadow-lg mb-4">
              <img 
                :src="featured.image" 
                :alt="featured.title"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div class="p-4 text-white">
                  <h3 class="text-lg font-semibold">{{ featured.title }}</h3>
                  <p class="text-sm text-gray-200">{{ featured.location }}</p>
                </div>
              </div>
            </div>
            <p class="text-gray-600">{{ featured.description }}</p>
            <NuxtLink :to="featured.link" class="inline-flex items-center text-yellow-600 font-semibold hover:text-orange-700 mt-2">
              View Project
              <UIcon name="i-heroicons-arrow-right" class="h-4 w-4 ml-1" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Gallery Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Videos</h2>
          <p class="text-lg text-gray-600">Watch our projects come to life through before-and-after videos</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="video in projectVideos" 
            :key="video.id"
            class="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg overflow-hidden"
          >
            <div class="relative">
              <img 
                :src="video.thumbnail" 
                :alt="video.title"
                class="w-full h-48 object-cover"
              />
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button class="bg-yellow-600 text-white rounded-full p-4 hover:bg-orange-700 transition-colors">
                  <UIcon name="i-heroicons-play" class="h-8 w-8" />
                </button>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ video.title }}</h3>
              <p class="text-gray-600 text-sm mb-2">{{ video.duration }}</p>
              <p class="text-gray-600 dark:text-gray-300">{{ video.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-yellow-600 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Inspired by Our Work?
        </h2>
        <p class="text-xl text-orange-100 mb-8">
          Let's create something amazing together. Contact us to discuss your construction project.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/construction/gallery" class="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
            View More Projects
          </NuxtLink>
          <NuxtLink to="/construction/contact" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-building-office-2" class="h-8 w-8 text-orange-500 mr-2" />
              <span class="text-xl font-bold">Eddy FanyConstruction</span>
            </div>
            <p class="text-gray-400">Building dreams into reality with quality construction services.</p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/construction" class="text-gray-400 hover:text-orange-500">Home</NuxtLink></li>
              <li><NuxtLink to="/construction/about" class="text-gray-400 hover:text-orange-500">About Us</NuxtLink></li>
              <li><NuxtLink to="/construction/services" class="text-gray-400 hover:text-orange-500">Services</NuxtLink></li>
              <li><NuxtLink to="/construction/contact" class="text-gray-400 hover:text-orange-500">Contact</NuxtLink></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Services</h3>
            <ul class="space-y-2">
              <li><span class="text-gray-400">Residential Construction</span></li>
              <li><span class="text-gray-400">Commercial Construction</span></li>
              <li><span class="text-gray-400">Renovations</span></li>
              <li><span class="text-gray-400">Design-Build</span></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
            <ul class="space-y-2 text-gray-400">
              <li>123 Construction Ave</li>
              <li>Build City, BC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@buildpro.com</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Eddy FanyConstruction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const selectedGalleryCategory = ref('All')
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const galleryCategories = ['All', 'Exteriors', 'Interiors', 'Kitchens', 'Bathrooms', 'Commercial', 'Landscaping']

const galleryImages = ref([
  // Exteriors
  { url: 'https://images.unsplash.com/photo-1541888946425-d81bb92e3475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Modern Home Exterior', category: 'Exteriors', description: 'Contemporary home with clean lines and large windows' },
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Luxury Villa', category: 'Exteriors', description: 'Elegant villa with panoramic ocean views' },
  { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25418c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Commercial Building', category: 'Exteriors', description: 'Modern commercial office building' },
  { url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Restaurant Exterior', category: 'Exteriors', description: 'Stylish restaurant with outdoor seating' },
  
  // Interiors
  { url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Living Room', category: 'Interiors', description: 'Spacious living room with high ceilings' },
  { url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Master Bedroom', category: 'Interiors', description: 'Luxurious master bedroom suite' },
  { url: 'https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Home Office', category: 'Interiors', description: 'Modern home office with natural light' },
  { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Conference Room', category: 'Interiors', description: 'Professional conference room setup' },
  
  // Kitchens
  { url: 'https://images.unsplash.com/photo-1556910103-1ee0e20c92a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Modern Kitchen', category: 'Kitchens', description: 'Contemporary kitchen with island' },
  { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Gourmet Kitchen', category: 'Kitchens', description: 'High-end gourmet kitchen setup' },
  { url: 'https://images.unsplash.com/photo-1584824486509-8e1bca37a238?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Kitchen Renovation', category: 'Kitchens', description: 'Complete kitchen renovation project' },
  
  // Bathrooms
  { url: 'https://images.unsplash.com/photo-1584622650117-5a8c8a08c6d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Master Bathroom', category: 'Bathrooms', description: 'Spa-like master bathroom' },
  { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Modern Bathroom', category: 'Bathrooms', description: 'Contemporary bathroom design' },
  { url: 'https://images.unsplash.com/photo-1541976590-2f9d9bd2d0b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Guest Bathroom', category: 'Bathrooms', description: 'Elegant guest bathroom renovation' },
  
  // Commercial
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Office Interior', category: 'Commercial', description: 'Modern office space design' },
  { url: 'https://images.unsplash.com/photo-1604079621320-3058423984a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Retail Space', category: 'Commercial', description: 'Contemporary retail store layout' },
  { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Restaurant Interior', category: 'Commercial', description: 'Modern restaurant dining area' },
  
  // Landscaping
  { url: 'https://images.unsplash.com/photo-1503217651648-8fc9f65f7f9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Garden Design', category: 'Landscaping', description: 'Beautiful garden landscape design' },
  { url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Outdoor Living', category: 'Landscaping', description: 'Outdoor living space with patio' },
  { url: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Pool Area', category: 'Landscaping', description: 'Resort-style pool and landscaping' }
])

const featuredProjects = ref([
  {
    id: 1,
    title: 'Hillside Residence',
    location: 'Los Angeles, CA',
    description: 'Luxury hillside home with stunning city views and modern amenities.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/construction/projects'
  },
  {
    id: 2,
    title: 'Downtown Office Complex',
    location: 'Seattle, WA',
    description: 'Modern office building with sustainable design and advanced technology.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/construction/projects'
  },
  {
    id: 3,
    title: 'Beachfront Villa',
    location: 'Miami, FL',
    description: 'Stunning beachfront property with panoramic ocean views.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/construction/projects'
  }
])

const projectVideos = ref([
  {
    id: 1,
    title: 'Modern Home Transformation',
    duration: '3:45',
    description: 'Watch how we transformed this outdated home into a modern masterpiece.',
    thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb92e3475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Commercial Build Process',
    duration: '5:20',
    description: 'Behind the scenes of our latest commercial construction project.',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Kitchen Renovation Tour',
    duration: '2:30',
    description: 'Complete kitchen renovation from start to finish.',
    thumbnail: 'https://images.unsplash.com/photo-1556910103-1ee0e20c92a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
])

const filteredGalleryImages = computed(() => {
  if (selectedGalleryCategory.value === 'All') {
    return galleryImages.value
  }
  return galleryImages.value.filter(image => image.category === selectedGalleryCategory.value)
})

const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % filteredGalleryImages.value.length
}

const previousImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + filteredGalleryImages.value.length) % filteredGalleryImages.value.length
}

// Keyboard navigation
onMounted(() => {
  const handleKeydown = (e) => {
    if (!lightboxOpen.value) return
    
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') previousImage()
  }
  
  document.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
})

useHead({
  title: 'Project Gallery - Eddy FanyConstruction',
  meta: [
    { name: 'description', content: 'Browse our construction project gallery featuring exteriors, interiors, kitchens, bathrooms, commercial spaces, and landscaping projects.' }
  ]
})
</script>
