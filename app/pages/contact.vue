<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <TopNavbar />
    
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary-400 to-primary-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions or ready to start your next project? We're here to help you bring your vision to life
          </p>
        </div>
      </div>
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
                    v-model="contactForm.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    v-model="contactForm.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address <span class="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  v-model="contactForm.email"
                  type="email"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  v-model="contactForm.phone"
                  type="tel"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject <span class="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  v-model="contactForm.subject"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="construction">Construction Services</option>
                  <option value="ministry">Ministry Services</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="contactForm.message"
                  rows="5"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              
              <div class="flex items-center">
                <input
                  id="consent"
                  v-model="contactForm.consent"
                  type="checkbox"
                  required
                  class="mt-1 mr-3"
                />
                <label for="consent" class="text-sm text-gray-600 dark:text-gray-400">
                  I consent to receive communications from Eddy Fany regarding my inquiry and understand that my information will be used in accordance with the privacy policy.
                </label>
              </div>
              
              <button
                type="submit"
                class="w-full bg-primary-400 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
            
            <div class="space-y-8">
              <!-- Office Location -->
              <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div class="flex items-start">
                  <div class="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <UIcon name="i-heroicons-building-office-2" class="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Office Location</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      123 Business Avenue<br />
                      Suite 100<br />
                      Business City, BC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Phone -->
              <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div class="flex items-start">
                  <div class="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <UIcon name="i-heroicons-phone" class="h-6 w-6 text-primary-400" />
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
              <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div class="flex items-start">
                  <div class="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <UIcon name="i-heroicons-envelope" class="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      General: info@eddyfany.com<br />
                      Support: support@eddyfany.com
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Business Hours -->
              <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div class="flex items-start">
                  <div class="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <UIcon name="i-heroicons-clock" class="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Business Hours</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Map Placeholder -->
            <div class="mt-8">
              <div class="bg-gray-200 dark:bg-gray-600 rounded-lg h-64 flex items-center justify-center">
                <div class="text-center">
                  <UIcon name="i-heroicons-map" class="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                  <p class="text-gray-500 dark:text-gray-400">Interactive Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">Common questions about our services</p>
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
    <section class="py-16 bg-primary-400">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p class="text-xl text-blue-100 mb-8">
          Let's discuss how we can help bring your vision to life
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/construction" class="bg-white text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Construction Services
          </NuxtLink>
          <NuxtLink to="/ministry" class="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Ministry Services
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div 
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      @click="showSuccessModal = false"
    >
      <div 
        class="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-8 text-center"
        @click.stop
      >
        <div class="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <UIcon name="i-heroicons-check" class="h-8 w-8 text-green-600" />
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p class="text-gray-600 mb-6">
          Thank you for contacting Eddy Fany. We'll get back to you within 24 hours.
        </p>
        <button
          @click="showSuccessModal = false"
          class="bg-primary-400 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact Us - Eddy Fany',
  meta: [
    { name: 'description', content: 'Contact Eddy Fany for construction and ministry services. Visit our office, call us, or send a message through our contact form.' }
  ]
})

// Contact form data
const contactForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  consent: false
})

const showSuccessModal = ref(false)

// FAQ data
const faqs = ref([
  {
    question: 'What services do you offer?',
    answer: 'We offer comprehensive construction services and ministry services. Our construction division handles residential, commercial, and renovation projects, while our ministry division provides spiritual guidance, events, and community services.',
    isOpen: false
  },
  {
    question: 'How can I request a quote?',
    answer: 'You can request a quote through our contact form or by calling us directly. For construction projects, visit our construction quote page for detailed project information.',
    isOpen: false
  },
  {
    question: 'What are your business hours?',
    answer: 'We\'re open Monday-Friday 9:00 AM - 6:00 PM, Saturday 10:00 AM - 4:00 PM, and closed on Sundays. Ministry services have different schedules - please check our ministry events page.',
    isOpen: false
  },
  {
    question: 'Do you serve clients outside your local area?',
    answer: 'Yes, we serve clients throughout the region. Contact us to discuss your specific location and project requirements.',
    isOpen: false
  },
  {
    question: 'How quickly can you respond to inquiries?',
    answer: 'We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.',
    isOpen: false
  }
])

// Methods
const submitContact = () => {
  // In a real application, you would send this data to your backend
  console.log('Contact form submitted:', contactForm.value)
  
  // Show success modal
  showSuccessModal.value = true
  
  // Reset form
  contactForm.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  }
}

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>