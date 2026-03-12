<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <ConstructionNavbar />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-yellow-600 to-amber-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">About Eddy FanyConstruction</h1>
          <p class="text-xl text-orange-100 max-w-3xl mx-auto">
            With over 20 years of experience, we've built our reputation on quality craftsmanship, attention to detail, and exceptional customer service
          </p>
        </div>
      </div>
      
      <!-- Hero Background Pattern -->
      <div class="absolute inset-0 bg-black opacity-10"></div>
    </section>

    <!-- Company Story -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <div class="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Founded in 2004, Eddy FanyConstruction started as a small family-owned business with a simple mission: to deliver exceptional construction services that exceed client expectations.
              </p>
              <p>
                Over the past two decades, we've grown from a small team of dedicated craftsmen to a full-service construction company serving residential and commercial clients throughout the region.
              </p>
              <p>
                Our commitment to quality, innovation, and customer satisfaction has earned us numerous awards and, more importantly, the trust of hundreds of happy clients.
              </p>
            </div>
          </div>
          
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb92e3475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Construction Team" class="rounded-lg shadow-xl" />
            <div class="absolute -bottom-6 -right-6 bg-yellow-600 text-white p-6 rounded-lg shadow-xl">
              <div class="text-3xl font-bold">20+</div>
              <div class="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Mission & Values</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The principles that guide every project we undertake
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
            <div class="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <UIcon name="i-heroicons-rocket-launch" class="h-8 w-8 text-yellow-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Mission</h3>
            <p class="text-gray-600 dark:text-gray-300">
              To transform our clients' visions into reality through exceptional craftsmanship, innovative solutions, and unwavering commitment to quality.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
            <div class="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <UIcon name="i-heroicons-eye" class="h-8 w-8 text-yellow-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Vision</h3>
            <p class="text-gray-600 dark:text-gray-300">
              To be the region's most trusted construction partner, known for delivering innovative, sustainable, and beautiful spaces that stand the test of time.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
            <div class="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <UIcon name="i-heroicons-hand-thumb-up" class="h-8 w-8 text-yellow-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Values</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Integrity, Quality, Innovation, and Customer Satisfaction are the cornerstones of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">The talented professionals behind Eddy FanyConstruction</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="John Smith" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">John Smith</h3>
            <p class="text-yellow-600 font-medium mb-2">Founder & CEO</p>
            <p class="text-gray-600 dark:text-gray-300">With 25+ years in construction, John leads our team with vision and expertise.</p>
          </div>
          
          <div class="text-center">
            <img src="https://images.unsplash.com/photo-1494790108755-2616b332c1ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Sarah Johnson" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sarah Johnson</h3>
            <p class="text-yellow-600 font-medium mb-2">Project Manager</p>
            <p class="text-gray-600 dark:text-gray-300">Sarah ensures every project runs smoothly from start to finish.</p>
          </div>
          
          <div class="text-center">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mike Davis" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mike Davis</h3>
            <p class="text-yellow-600 font-medium mb-2">Lead Architect</p>
            <p class="text-gray-600 dark:text-gray-300">Mike brings creative design solutions and technical expertise to every project.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-yellow-600 dark:bg-yellow-700">
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
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Work With Us?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Join hundreds of satisfied clients who have trusted Eddy FanyConstruction with their projects
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/construction/projects" class="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
            View Our Work
          </NuxtLink>
          <NuxtLink to="/construction/contact" class="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white dark:bg-gray-800">
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
  title: 'About Us - Eddy FanyConstruction',
  meta: [
    { name: 'description', content: 'Learn about Eddy FanyConstruction - our story, mission, values, and the experienced team behind our quality construction services.' }
  ]
})
</script>
