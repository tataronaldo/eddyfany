<template>
  <div class="min-h-screen bg-gray-50">
    <ConstructionNavbar />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-yellow-600 to-amber-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p class="text-xl text-orange-100 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs
          </p>
        </div>
      </div>
      
      <!-- Hero Background Pattern -->
      <div class="absolute inset-0 bg-black opacity-10"></div>
    </section>

    <!-- Services Grid -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Residential Construction -->
          <div class="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-orange-400 to-yellow-600 flex items-center justify-center">
              <UIcon name="i-heroicons-home" class="h-16 w-16 text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Residential Construction</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Custom homes, additions, and remodeling projects that transform your living spaces into dream homes.
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Custom Home Building
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Home Additions
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Kitchen & Bath Remodeling
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Basement Finishing
                </li>
              </ul>
              <NuxtLink to="/construction/quote" class="inline-flex items-center text-yellow-600 font-semibold hover:text-orange-700">
                Get Quote
                <UIcon name="i-heroicons-arrow-right" class="h-5 w-5 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <!-- Commercial Construction -->
          <div class="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <UIcon name="i-heroicons-building-office" class="h-16 w-16 text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Commercial Construction</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Professional commercial construction services for businesses, retail spaces, and industrial facilities.
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Office Buildings
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Retail Spaces
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Warehouses
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Restaurant Construction
                </li>
              </ul>
              <NuxtLink to="/construction/quote" class="inline-flex items-center text-yellow-600 font-semibold hover:text-orange-700">
                Get Quote
                <UIcon name="i-heroicons-arrow-right" class="h-5 w-5 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <!-- Renovations -->
          <div class="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <UIcon name="i-heroicons-wrench-screwdriver" class="h-16 w-16 text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Renovations</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Complete renovation services to breathe new life into existing properties while preserving their character.
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Full Home Renovations
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Room Additions
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Exterior Updates
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Historical Restorations
                </li>
              </ul>
              <NuxtLink to="/construction/quote" class="inline-flex items-center text-yellow-600 font-semibold hover:text-orange-700">
                Get Quote
                <UIcon name="i-heroicons-arrow-right" class="h-5 w-5 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <!-- Design-Build -->
          <div class="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <UIcon name="i-heroicons-pencil-square" class="h-16 w-16 text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Design-Build</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Integrated design and construction services for seamless project delivery from concept to completion.
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Architectural Design
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  3D Modeling
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Permit Management
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Project Management
                </li>
              </ul>
              <NuxtLink to="/construction/quote" class="inline-flex items-center text-yellow-600 font-semibold hover:text-orange-700">
                Get Quote
                <UIcon name="i-heroicons-arrow-right" class="h-5 w-5 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <!-- Site Development -->
          <div class="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
              <UIcon name="i-heroicons-map" class="h-16 w-16 text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Site Development</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Comprehensive site preparation and development services to prepare your property for construction.
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Land Clearing
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Grading & Excavation
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Utility Installation
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Landscaping
                </li>
              </ul>
              <NuxtLink to="/construction/quote" class="inline-flex items-center text-yellow-600 font-semibold hover:text-orange-700">
                Get Quote
                <UIcon name="i-heroicons-arrow-right" class="h-5 w-5 ml-2" />
              </NuxtLink>
            </div>
          </div>

          <!-- Consulting -->
          <div class="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
              <UIcon name="i-heroicons-light-bulb" class="h-16 w-16 text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Construction Consulting</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Expert consulting services to help you make informed decisions about your construction projects.
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Project Feasibility
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Budget Planning
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Material Selection
                </li>
                <li class="flex items-center">
                  <UIcon name="i-heroicons-check" class="h-5 w-5 text-green-500 mr-2" />
                  Quality Assurance
                </li>
              </ul>
              <NuxtLink to="/construction/quote" class="inline-flex items-center text-yellow-600 font-semibold hover:text-orange-700">
                Get Quote
                <UIcon name="i-heroicons-arrow-right" class="h-5 w-5 ml-2" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Process</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We follow a proven process to ensure your project is completed on time, within budget, and to your exact specifications
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Consultation</h3>
            <p class="text-gray-600 dark:text-gray-300">We meet with you to understand your vision and requirements</p>
          </div>
          
          <div class="text-center">
            <div class="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Planning</h3>
            <p class="text-gray-600 dark:text-gray-300">Detailed planning, design, and budget development</p>
          </div>
          
          <div class="text-center">
            <div class="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Construction</h3>
            <p class="text-gray-600 dark:text-gray-300">Skilled craftsmen bring your project to life</p>
          </div>
          
          <div class="text-center">
            <div class="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Completion</h3>
            <p class="text-gray-600 dark:text-gray-300">Final inspection and handover of your completed project</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-yellow-600 dark:bg-gray-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p class="text-xl text-orange-100 mb-8">
          Contact us today for a free consultation and detailed quote for your construction project
        </p>
        <NuxtLink to="/construction/quote" class="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
          Get Free Quote
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
useHead({
  title: 'Our Services - Eddy FanyConstruction',
  meta: [
    { name: 'description', content: 'Eddy FanyConstruction offers comprehensive construction services including residential, commercial, renovations, design-build, site development, and consulting.' }
  ]
})
</script>
