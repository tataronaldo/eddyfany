<template>
  <div class="min-h-screen bg-gray-50">
    <ConstructionNavbar />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-yellow-600 to-amber-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p class="text-xl text-orange-100 max-w-3xl mx-auto">
            Get in touch with our team to discuss your construction project or ask any questions
          </p>
        </div>
      </div>
      
      <!-- Hero Background Pattern -->
      <div class="absolute inset-0 bg-black opacity-10"></div>
    </section>

    <!-- Contact Info & Map Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send Us a Message</h2>
            
            <form @submit.prevent="submitContact" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name <span class="text-red-500">*</span>
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
                    Last Name <span class="text-red-500">*</span>
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
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address <span class="text-red-500">*</span>
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
                  Phone Number
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject <span class="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="quote">Request Quote</option>
                  <option value="project">Project Discussion</option>
                  <option value="support">Customer Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                </select>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Tell us about your project or question..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <UIcon v-if="isSubmitting" name="i-heroicons-arrow-path" class="h-5 w-5 mr-2 animate-spin" />
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
          
          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
            
            <div class="space-y-8">
              <!-- Office Location -->
              <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div class="flex items-start">
                  <div class="bg-orange-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <UIcon name="i-heroicons-building-office-2" class="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Office Location</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      123 Construction Avenue<br />
                      Build City, BC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Phone -->
              <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div class="flex items-start">
                  <div class="bg-orange-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <UIcon name="i-heroicons-phone" class="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      Main: (555) 123-4567<br />
                      Fax: (555) 123-4568
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Email -->
              <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div class="flex items-start">
                  <div class="bg-orange-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <UIcon name="i-heroicons-envelope" class="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      General: info@buildpro.com<br />
                      Projects: projects@buildpro.com<br />
                      Support: support@buildpro.com
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Business Hours -->
              <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div class="flex items-start">
                  <div class="bg-orange-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <UIcon name="i-heroicons-clock" class="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Business Hours</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Map -->
    <section class="relative h-96 bg-gray-200">
      <div class="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb0b6b9%3A0x4b5c5c5c5c5c5c5c!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full h-full"
        ></iframe>
      </div>
      
      <!-- Map Overlay -->
      <div class="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
        <h3 class="font-semibold text-gray-900 mb-1">Eddy FanyConstruction</h3>
        <p class="text-sm text-gray-600">123 Construction Avenue<br />Build City, BC 12345</p>
        <button 
          @click="openDirections"
          class="mt-2 text-yellow-600 text-sm font-medium hover:text-orange-700"
        >
          Get Directions →
        </button>
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
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p class="text-gray-600 mb-6">
          Thank you for contacting Eddy FanyConstruction. We'll get back to you within 24 hours.
        </p>
        <button
          @click="showSuccessModal = false"
          class="bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>

    <!-- FAQ Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">Common questions about our construction services</p>
        </div>
        
        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <span class="font-medium text-gray-900 dark:text-white">{{ faq.question }}</span>
              <UIcon 
                :name="faq.isOpen ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'" 
                class="h-5 w-5 text-gray-500"
              />
            </button>
            <div v-if="faq.isOpen" class="px-6 pb-4">
              <p class="text-gray-600 dark:text-gray-300">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-yellow-600 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p class="text-xl text-orange-100 mb-8">
          Contact us today to schedule a consultation and get your project started
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/construction/quote" class="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
            Get Free Quote
          </NuxtLink>
          <a href="tel:5551234567" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors">
            Call Us Now
          </a>
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
  subject: '',
  message: ''
})

const faqs = ref([
  {
    question: 'How long does a typical construction project take?',
    answer: 'Project timelines vary depending on scope and complexity. A small renovation might take 2-4 weeks, while a new home construction could take 6-12 months. We provide detailed timelines during the planning phase.',
    isOpen: false
  },
  {
    question: 'Do you provide free estimates?',
    answer: 'Yes, we provide free, no-obligation estimates for all potential projects. Our team will assess your needs and provide a detailed quote with transparent pricing.',
    isOpen: false
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. Eddy FanyConstruction is fully licensed, bonded, and insured. We carry comprehensive liability insurance and worker\'s compensation to protect our clients and team.',
    isOpen: false
  },
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve the greater metropolitan area and surrounding regions. Contact us to discuss your specific location and project needs.',
    isOpen: false
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment schedules tied to project milestones. We work with clients to create payment plans that work within their budget while ensuring project progress.',
    isOpen: false
  }
])

const submitContact = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real app, this would send the data to your backend
    console.log('Contact form submitted:', form.value)
    
    // Show success modal
    showSuccessModal.value = true
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    console.error('Error submitting contact form:', error)
  } finally {
    isSubmitting.value = false
  }
}

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

const openDirections = () => {
  // Open Google Maps directions
  window.open('https://www.google.com/maps/dir/?api=1&destination=123+Construction+Avenue+Build+City+BC+12345', '_blank')
}

useHead({
  title: 'Contact Us - Eddy FanyConstruction',
  meta: [
    { name: 'description', content: 'Contact Eddy FanyConstruction for your construction project needs. Visit our office, call us, or send a message through our contact form.' }
  ]
})
</script>
