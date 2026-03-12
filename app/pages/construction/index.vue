<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <ConstructionNavbar />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-yellow-600 to-amber-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Building Dreams Into <span class="text-amber-200">Reality</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto">
            Professional construction services with over 20 years of experience
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/projects" class="bg-white text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
              View Our Projects
            </NuxtLink>
            <NuxtLink to="/quote" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-800 transition-colors">
              Get a Free Quote
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Hero Background Pattern -->
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1541888946425-d81bb92e3475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" alt="Construction" class="w-full h-full object-cover opacity-30" />
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose BuildPro?</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine expertise, quality, and commitment to deliver exceptional results
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
              <UIcon name="i-heroicons-shield-check" class="h-12 w-12 text-amber-800 dark:text-amber-600 mx-auto mb-4" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Quality Craftsmanship</h3>
              <p class="text-gray-600 dark:text-gray-300">20+ years of excellence in every project</p>
            </div>
          </div>
          
          <div class="text-center">
            <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
              <UIcon name="i-heroicons-clock" class="h-12 w-12 text-amber-800 dark:text-amber-600 mx-auto mb-4" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">On-Time Delivery</h3>
              <p class="text-gray-600 dark:text-gray-300">Projects completed on schedule, every time</p>
            </div>
          </div>
          
          <div class="text-center">
            <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
              <UIcon name="i-heroicons-wrench-screwdriver" class="h-12 w-12 text-amber-800 dark:text-amber-600 mx-auto mb-4" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Expert Team</h3>
              <p class="text-gray-600 dark:text-gray-300">Skilled professionals dedicated to your vision</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">Comprehensive construction solutions for all your needs</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <UIcon name="i-heroicons-home" class="h-12 w-12 text-yellow-600 mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Residential</h3>
            <p class="text-gray-600 dark:text-gray-300">Custom homes and renovations</p>
          </div>
          
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <UIcon name="i-heroicons-building-office" class="h-12 w-12 text-yellow-600 mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Commercial</h3>
            <p class="text-gray-600 dark:text-gray-300">Office buildings and retail spaces</p>
          </div>
          
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <UIcon name="i-heroicons-wrench-screwdriver" class="h-12 w-12 text-yellow-600 mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Renovations</h3>
            <p class="text-gray-600 dark:text-gray-300">Complete remodeling services</p>
          </div>
          
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <UIcon name="i-heroicons-paint-brush" class="h-12 w-12 text-yellow-600 mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Design-Build</h3>
            <p class="text-gray-600 dark:text-gray-300">From concept to completion</p>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <NuxtLink to="/services" class="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
            View All Services
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Recent Projects -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
          <p class="text-lg text-gray-600">Explore our latest construction projects</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="group relative overflow-hidden rounded-lg shadow-lg">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb92e3475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modern Home" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-xl font-semibold">Modern Family Home</h3>
                <p class="text-sm">Residential • Completed 2024</p>
              </div>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg shadow-lg">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office Building" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-xl font-semibold">Corporate Office</h3>
                <p class="text-sm">Commercial • Completed 2024</p>
              </div>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg shadow-lg">
            <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Restaurant" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-xl font-semibold">Restaurant Renovation</h3>
                <p class="text-sm">Commercial • Completed 2023</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <NuxtLink to="/projects" class="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
            View All Projects
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-yellow-600 dark:bg-amber-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p class="text-xl text-amber-100 dark:text-amber-200 mb-8">
          Get a free, no-obligation quote for your construction project
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/projects" class="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
            View All Projects
          </NuxtLink>
          <NuxtLink to="/quote" class="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
            Get Your Free Quote
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 dark:bg-black text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-building-office-2" class="h-8 w-8 text-yellow-500 mr-2" />
              <span class="text-xl font-bold">Eddy FanyConstruction</span>
            </div>
            <p class="text-gray-400 dark:text-gray-500">
              Professional construction services with 20+ years of experience
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/construction/about" class="text-gray-400 dark:text-gray-500 hover:text-yellow-500 transition-colors">About Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/construction/services" class="text-gray-400 dark:text-gray-500 hover:text-yellow-500 transition-colors">Services</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/construction/projects" class="text-gray-400 dark:text-gray-500 hover:text-yellow-500 transition-colors">Projects</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/construction/gallery" class="text-gray-400 dark:text-gray-500 hover:text-yellow-500 transition-colors">Gallery</NuxtLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <UIcon name="i-heroicons-phone" class="h-5 w-5 text-yellow-500 mr-2" />
                <span class="text-gray-400 dark:text-gray-500">(555) 123-4567</span>
              </li>
              <li class="flex items-center">
                <UIcon name="i-heroicons-envelope" class="h-5 w-5 text-yellow-500 mr-2" />
                <span class="text-gray-400 dark:text-gray-500">info@buildpro.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 dark:text-gray-500 hover:text-yellow-500 transition-colors">
                <UIcon name="i-heroicons-facebook" class="h-6 w-6" />
              </a>
              <a href="#" class="text-gray-400 dark:text-gray-500 hover:text-yellow-500 transition-colors">
                <UIcon name="i-heroicons-instagram" class="h-6 w-6" />
              </a>
              <a href="#" class="text-gray-400 dark:text-gray-500 hover:text-yellow-500 transition-colors">
                <UIcon name="i-heroicons-twitter" class="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; 2024 Eddy FanyConstruction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'Eddy FanyConstruction - Professional Construction Services',
  meta: [
    { name: 'description', content: 'Professional construction services including residential, commercial, renovations, and design-build projects.' }
  ]
})
</script>
