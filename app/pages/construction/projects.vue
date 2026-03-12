<template>
  <div class="min-h-screen bg-gray-50">
    <ConstructionNavbar />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-yellow-600 to-amber-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p class="text-xl text-orange-100 max-w-3xl mx-auto">
            Explore our portfolio of completed construction projects showcasing our expertise and craftsmanship
          </p>
        </div>
      </div>
      
      <!-- Hero Background Pattern -->
      <div class="absolute inset-0 bg-black opacity-10"></div>
    </section>

    <!-- Filter Section -->
    <section class="py-16 bg-white dark:bg-gray-800 border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            :class="selectedCategory === category ? 'bg-yellow-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-300'"
            class="px-6 py-2 rounded-full font-medium transition-colors"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="relative overflow-hidden h-64">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 text-white">
                  <span class="inline-block bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {{ project.category }}
                  </span>
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
              
              <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{{ project.location }}</span>
                <span>{{ project.completed }}</span>
              </div>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                >
                  {{ tag }}
                </span>
              </div>
              
              <button 
                @click="selectedProject = project"
                class="w-full bg-yellow-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Detail Modal -->
    <div 
      v-if="selectedProject"
      class="fixed inset-0 bg-black dark:bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center p-4"
      @click="selectedProject = null"
    >
      <div 
        class="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="relative">
          <img 
            :src="selectedProject.image" 
            :alt="selectedProject.title"
            class="w-full h-96 object-cover"
          />
          <button 
            @click="selectedProject = null"
            class="absolute top-4 right-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <UIcon name="i-heroicons-x-mark" class="h-6 w-6" />
          </button>
        </div>
        
        <div class="p-8">
          <div class="flex items-center gap-4 mb-6">
            <span class="bg-yellow-600 text-white px-4 py-2 rounded-full font-medium">
              {{ selectedProject.category }}
            </span>
            <span class="text-gray-500 dark:text-gray-400">{{ selectedProject.completed }}</span>
            <span class="text-gray-500 dark:text-gray-400">{{ selectedProject.location }}</span>
          </div>
          
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ selectedProject.title }}</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">{{ selectedProject.description }}</p>
              <p class="text-gray-600">{{ selectedProject.fullDescription }}</p>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Details</h3>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Client:</span>
                  <span class="font-medium">{{ selectedProject.client }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Duration:</span>
                  <span class="font-medium">{{ selectedProject.duration }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Budget:</span>
                  <span class="font-medium">{{ selectedProject.budget }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Size:</span>
                  <span class="font-medium">{{ selectedProject.size }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mb-8">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                v-for="feature in selectedProject.features" 
                :key="feature"
                class="flex items-center gap-2"
              >
                <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500" />
                <span class="text-gray-600 dark:text-gray-300">{{ feature }}</span>
              </div>
            </div>
          </div>
          
          <div class="flex gap-4">
            <NuxtLink to="/construction/quote" class="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Get Similar Project Quote
            </NuxtLink>
            <NuxtLink to="/construction/contact" class="border-2 border-yellow-600 text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors">
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <section class="py-16 bg-yellow-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold text-white mb-2">500+</div>
            <div class="text-orange-100">Projects Completed</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-white mb-2">20+</div>
            <div class="text-orange-100">Years Experience</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-white mb-2">50+</div>
            <div class="text-orange-100">Team Members</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-white mb-2">98%</div>
            <div class="text-orange-100">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Have a Project in Mind?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Let's discuss how we can bring your vision to life with our expert construction services
        </p>
        <NuxtLink to="/construction/quote" class="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
          Start Your Project
        </NuxtLink>
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
const selectedCategory = ref('All')
const selectedProject = ref(null)

const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Design-Build']

const projects = ref([
  {
    id: 1,
    title: 'Modern Family Home',
    category: 'Residential',
    description: 'A stunning modern family home with open-concept living spaces and sustainable features.',
    fullDescription: 'This beautiful modern family home features an open-concept design with high ceilings, large windows for natural light, and sustainable building materials. The home includes 4 bedrooms, 3 bathrooms, a gourmet kitchen, and a spacious backyard perfect for family gatherings.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb92e3475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Seattle, WA',
    completed: 'Completed March 2024',
    client: 'Johnson Family',
    duration: '8 months',
    budget: '$850,000',
    size: '3,500 sq ft',
    tags: ['Modern', 'Sustainable', 'Family Home'],
    features: [
      'Open-concept living spaces',
      'Energy-efficient appliances',
      'Smart home technology',
      'Solar panel installation',
      'Custom kitchen cabinetry',
      'Master suite with walk-in closet'
    ]
  },
  {
    id: 2,
    title: 'Corporate Office Building',
    category: 'Commercial',
    description: 'State-of-the-art office building with modern amenities and sustainable design.',
    fullDescription: 'A contemporary office building designed to foster collaboration and productivity. The space features flexible work areas, modern conference rooms, a fitness center, and sustainable building systems including green roofs and rainwater harvesting.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Portland, OR',
    completed: 'Completed January 2024',
    client: 'TechCorp Inc.',
    duration: '14 months',
    budget: '$2.5M',
    size: '25,000 sq ft',
    tags: ['Office', 'Modern', 'Sustainable'],
    features: [
      'Flexible workspace design',
      'Advanced security systems',
      'Energy-efficient HVAC',
      'Green roof installation',
      'Underground parking',
      'Fitness center and wellness rooms'
    ]
  },
  {
    id: 3,
    title: 'Restaurant Renovation',
    category: 'Renovation',
    description: 'Complete renovation of historic restaurant preserving original charm while modernizing functionality.',
    fullDescription: 'A comprehensive renovation of a historic restaurant that maintained the original architectural character while updating all systems and creating a modern, functional space for dining and entertainment.',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'San Francisco, CA',
    completed: 'Completed November 2023',
    client: 'Bella Vista Restaurant',
    duration: '6 months',
    budget: '$450,000',
    size: '4,200 sq ft',
    tags: ['Restaurant', 'Historic', 'Renovation'],
    features: [
      'Historic preservation',
      'Modern kitchen equipment',
      'Custom bar design',
      'Outdoor dining area',
      'ADA compliance updates',
      'Sound system integration'
    ]
  },
  {
    id: 4,
    title: 'Luxury Apartment Complex',
    category: 'Residential',
    description: 'High-end apartment complex with premium amenities and sustainable design features.',
    fullDescription: 'A luxury apartment complex featuring 48 units with premium finishes, resort-style amenities, and environmentally conscious design elements including energy-efficient systems and green spaces.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Austin, TX',
    completed: 'Completed February 2024',
    client: 'Urban Living Properties',
    duration: '18 months',
    budget: '$8.2M',
    size: '60,000 sq ft',
    tags: ['Apartments', 'Luxury', 'Amenities'],
    features: [
      'Rooftop terrace and pool',
      'Fitness center and yoga studio',
      'Underground parking',
      'Smart home technology',
      'Energy-efficient systems',
      'Pet-friendly amenities'
    ]
  },
  {
    id: 5,
    title: 'Retail Shopping Center',
    category: 'Commercial',
    description: 'Modern shopping center with diverse retail spaces and community gathering areas.',
    fullDescription: 'A vibrant shopping center featuring a mix of retail stores, restaurants, and community spaces designed to create a welcoming environment for shoppers and foster local business growth.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Denver, CO',
    completed: 'Completed December 2023',
    client: 'Prime Retail Development',
    duration: '16 months',
    budget: '$12M',
    size: '85,000 sq ft',
    tags: ['Retail', 'Shopping', 'Mixed-Use'],
    features: [
      'Anchor department store',
      'Food court with diverse options',
      'Children\'s play area',
      'Ample parking facilities',
      'Outdoor plaza for events',
      'Security and surveillance systems'
    ]
  },
  {
    id: 6,
    title: 'Custom Home Design-Build',
    category: 'Design-Build',
    description: 'Complete design-build project for a custom luxury home with panoramic ocean views.',
    fullDescription: 'A stunning custom home designed and built from the ground up, featuring panoramic ocean views, infinity pool, home theater, and smart home integration throughout.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Malibu, CA',
    completed: 'Completed October 2023',
    client: 'Williams Family',
    duration: '22 months',
    budget: '$3.2M',
    size: '8,500 sq ft',
    tags: ['Custom', 'Luxury', 'Ocean View'],
    features: [
      'Infinity edge pool',
      'Home theater system',
      'Smart home integration',
      'Wine cellar',
      'Guest house',
      'Ocean-view decks'
    ]
  }
])

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects.value
  }
  return projects.value.filter(project => project.category === selectedCategory.value)
})

useHead({
  title: 'Our Projects - Eddy FanyConstruction',
  meta: [
    { name: 'description', content: 'View our portfolio of completed construction projects including residential, commercial, renovations, and design-build projects.' }
  ]
})
</script>
