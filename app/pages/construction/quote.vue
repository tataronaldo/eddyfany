<template>
  <div class="min-h-screen bg-gray-50">
    <ConstructionNavbar />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-yellow-600 to-amber-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Get a Free Quote</h1>
          <p class="text-xl text-orange-100 max-w-3xl mx-auto">
            Tell us about your construction project and we'll provide you with a detailed, no-obligation quote
          </p>
        </div>
      </div>
      
      <!-- Hero Background Pattern -->
      <div class="absolute inset-0 bg-black opacity-10"></div>
    </section>

    <!-- Quote Form Section -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <form @submit.prevent="submitQuote" class="space-y-6">
            <!-- Personal Information -->
            <div class="border-b pb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Personal Information</h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name <span class="text-yellow-600">*</span>
                  </label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="John"
                  />
                </div>
                
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name <span class="text-yellow-600">*</span>
                  </label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Doe"
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address <span class="text-yellow-600">*</span>
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number <span class="text-yellow-600">*</span>
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>

            <!-- Project Details -->
            <div class="border-b pb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Details</h2>
              
              <div class="space-y-6">
                <div>
                  <label for="projectType" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Type <span class="text-yellow-600">*</span>
                  </label>
                  <select
                    id="projectType"
                    v-model="form.projectType"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation</option>
                    <option value="design-build">Design-Build</option>
                    <option value="site-development">Site Development</option>
                    <option value="consulting">Construction Consulting</option>
                  </select>
                </div>
                
                <div>
                  <label for="projectTitle" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Title <span class="text-yellow-600">*</span>
                  </label>
                  <input
                    id="projectTitle"
                    v-model="form.projectTitle"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="e.g., Kitchen Renovation, New Home Construction"
                  />
                </div>
                
                <div>
                  <label for="projectDescription" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Description <span class="text-yellow-600">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    v-model="form.projectDescription"
                    required
                    rows="4"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Please describe your project in detail..."
                  ></textarea>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="projectSize" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Size (sq ft)
                    </label>
                    <input
                      id="projectSize"
                      v-model="form.projectSize"
                      type="text"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="e.g., 2,500"
                    />
                  </div>
                  
                  <div>
                    <label for="budget" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      v-model="form.budget"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="over-1m">Over $1,000,000</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <!-- Location & Timeline -->
            <div class="border-b pb-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Location & Timeline</h2>
              
              <div class="space-y-6">
                <div>
                  <label for="projectAddress" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Address <span class="text-yellow-600">*</span>
                  </label>
                  <input
                    id="projectAddress"
                    v-model="form.projectAddress"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="123 Main St, City, State"
                  />
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="startDate" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Desired Start Date
                    </label>
                    <input
                      id="startDate"
                      v-model="form.startDate"
                      type="date"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label for="timeline" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      v-model="form.timeline"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="over-12-months">Over 12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Information -->
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Additional Information</h2>
              
              <div class="space-y-6">
                <div>
                  <label for="additionalInfo" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Comments or Requirements
                  </label>
                  <textarea
                    id="additionalInfo"
                    v-model="form.additionalInfo"
                    rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Any additional information you'd like to share..."
                  ></textarea>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    v-model="form.referral"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="website">Our Website</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div class="flex items-start">
                  <input
                    id="consent"
                    v-model="form.consent"
                    type="checkbox"
                    required
                    class="mt-1 mr-3"
                  />
                  <label for="consent" class="text-sm text-gray-600 dark:text-gray-400">
                    I consent to receive communications from Eddy FanyConstruction regarding my quote request and understand that my information will be used in accordance with the privacy policy.
                  </label>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-center">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
              >
                <UIcon v-if="isSubmitting" name="i-heroicons-arrow-path" class="h-5 w-5 mr-2 animate-spin" />
                {{ isSubmitting ? 'Submitting...' : 'Get Free Quote' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div 
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <div class="bg-white rounded-lg max-w-md w-full p-8 text-center">
        <div class="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <UIcon name="i-heroicons-check" class="h-8 w-8 text-green-600" />
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Quote Request Submitted!</h3>
        <p class="text-gray-600 mb-6">
          Thank you for your interest in Eddy FanyConstruction. We'll review your project details and get back to you within 24-48 hours with your personalized quote.
        </p>
        <button
          @click="showSuccessModal = false"
          class="bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>

    <!-- Info Cards -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <UIcon name="i-heroicons-clock" class="h-8 w-8 text-yellow-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quick Response</h3>
            <p class="text-gray-600 dark:text-gray-400">We respond to all quote requests within 24-48 hours</p>
          </div>
          
          <div class="text-center">
            <div class="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <UIcon name="i-heroicons-calculator" class="h-8 w-8 text-yellow-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Detailed Quotes</h3>
            <p class="text-gray-600 dark:text-gray-400">Comprehensive quotes with transparent pricing</p>
          </div>
          
          <div class="text-center">
            <div class="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <UIcon name="i-heroicons-hand-thumb-up" class="h-8 w-8 text-yellow-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Obligation</h3>
            <p class="text-gray-600 dark:text-gray-400">Free quotes with no commitment required</p>
          </div>
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
const isSubmitting = ref(false)
const showSuccessModal = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  projectType: '',
  projectTitle: '',
  projectDescription: '',
  projectSize: '',
  budget: '',
  projectAddress: '',
  startDate: '',
  timeline: '',
  additionalInfo: '',
  referral: '',
  consent: false
})

const submitQuote = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real app, this would send the data to your backend
    console.log('Quote request submitted:', form.value)
    
    // Show success modal
    showSuccessModal.value = true
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      projectType: '',
      projectTitle: '',
      projectDescription: '',
      projectSize: '',
      budget: '',
      projectAddress: '',
      startDate: '',
      timeline: '',
      additionalInfo: '',
      referral: '',
      consent: false
    }
  } catch (error) {
    console.error('Error submitting quote:', error)
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Get a Free Quote - Eddy FanyConstruction',
  meta: [
    { name: 'description', content: 'Request a free, no-obligation quote for your construction project from Eddy FanyConstruction.' }
  ]
})
</script>
