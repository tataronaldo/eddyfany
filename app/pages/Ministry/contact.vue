<script setup>
useHead({
  title: 'Contact - Eddy Fany Ministry',
  meta: [
    { name: 'description', content: 'Get in touch with Eddy Fany Ministry. We\'re here to pray with you, answer your questions, and support your spiritual journey.' }
  ]
})

const contactForm = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  contactMethod: 'email'
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const contactMethods = [
  { value: 'email', label: 'Email Response' },
  { value: 'phone', label: 'Phone Call' },
  { value: 'both', label: 'Both Email and Phone' }
]

const subjects = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'prayer', label: 'Prayer Request' },
  { value: 'counseling', label: 'Counseling Appointment' },
  { value: 'membership', label: 'Membership Information' },
  { value: 'volunteer', label: 'Volunteer Opportunities' },
  { value: 'construction', label: 'Construction Services' },
  { value: 'other', label: 'Other' }
]

const ministryInfo = {
  address: '123 Faith Boulevard, Nairobi, Kenya',
  phone: '+254 700 123 456',
  email: 'info@eddyfanyministry.org',
  serviceTimes: {
    sunday: '9:00 AM & 11:00 AM',
    wednesday: '7:00 PM',
    friday: '6:00 PM'
  },
  officeHours: 'Monday - Friday: 9:00 AM - 5:00 PM',
  prayerLine: '+254 700 PRAY-NOW (24/7)'
}

const submitContactForm = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  isSubmitting.value = false
  isSubmitted.value = true
  
  // Reset form after 3 seconds
  setTimeout(() => {
    isSubmitted.value = false
    contactForm.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactMethod: 'email'
    }
  }, 3000)
}

const socialLinks = [
  { name: 'Facebook', icon: 'i-simple-icons-facebook', url: '#' },
  { name: 'Twitter', icon: 'i-simple-icons-twitter', url: '#' },
  { name: 'Instagram', icon: 'i-simple-icons-instagram', url: '#' },
  { name: 'YouTube', icon: 'i-simple-icons-youtube', url: '#' },
  { name: 'WhatsApp', icon: 'i-simple-icons-whatsapp', url: '#' }
]
</script>

<template>
  <div class="church-home-theme bg-gray-950 text-gray-100 antialiased min-h-screen">
    <ChurchHomeNavbar />

    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <UIcon name="i-heroicons-phone" class="w-10 h-10 text-primary-400" />
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
          Get in Touch
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          We're here to support your spiritual journey. Reach out for prayer, counseling, or any questions you may have.
        </p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UCard class="bg-gray-800 border-gray-700 text-center">
            <div class="p-6">
              <div class="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-heroicons-map-pin" class="w-8 h-8 text-primary-400" />
              </div>
              <h3 class="text-xl font-bold mb-2 text-white">Visit Us</h3>
              <p class="text-gray-300">{{ ministryInfo.address }}</p>
            </div>
          </UCard>

          <UCard class="bg-gray-800 border-gray-700 text-center">
            <div class="p-6">
              <div class="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-heroicons-phone" class="w-8 h-8 text-primary-400" />
              </div>
              <h3 class="text-xl font-bold mb-2 text-white">Call Us</h3>
              <p class="text-gray-300">{{ ministryInfo.phone }}</p>
              <p class="text-primary-400 text-sm mt-2">24/7 Prayer Line</p>
            </div>
          </UCard>

          <UCard class="bg-gray-800 border-gray-700 text-center">
            <div class="p-6">
              <div class="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-heroicons-envelope" class="w-8 h-8 text-primary-400" />
              </div>
              <h3 class="text-xl font-bold mb-2 text-white">Email Us</h3>
              <p class="text-gray-300">{{ ministryInfo.email }}</p>
              <p class="text-gray-400 text-sm mt-2">{{ ministryInfo.officeHours }}</p>
            </div>
          </UCard>

          <UCard class="bg-gray-800 border-gray-700 text-center">
            <div class="p-6">
              <div class="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <UIcon name="i-heroicons-clock" class="w-8 h-8 text-primary-400" />
              </div>
              <h3 class="text-xl font-bold mb-2 text-white">Service Times</h3>
              <div class="text-gray-300 text-sm">
                <p>Sunday: {{ ministryInfo.serviceTimes.sunday }}</p>
                <p>Wednesday: {{ ministryInfo.serviceTimes.wednesday }}</p>
                <p>Friday: {{ ministryInfo.serviceTimes.friday }}</p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-white">Send Us a Message</h2>
          <p class="text-gray-300">We'd love to hear from you. Fill out the form below and we'll get back to you soon.</p>
        </div>

        <div v-if="!isSubmitted" class="bg-gray-900 rounded-2xl border border-gray-800 shadow-xl">
          <form @submit.prevent="submitContactForm" class="p-8 space-y-8">
            <div class="grid md:grid-cols-2 gap-6">
              <UFormGroup label="Full Name" required class="w-full">
                <UInput 
                  v-model="contactForm.name" 
                  placeholder="John Doe"
                  color="gray"
                  size="lg"
                  class="w-full transition-all duration-300 hover:border-green-400"
                />
              </UFormGroup>
              <UFormGroup label="Email Address" required class="w-full">
                <UInput 
                  v-model="contactForm.email" 
                  type="email"
                  placeholder="john@example.com"
                  color="gray"
                  size="lg"
                  class="w-full transition-all duration-300 hover:border-green-400"
                />
              </UFormGroup>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <UFormGroup label="Phone Number" class="w-full">
                <UInput 
                  v-model="contactForm.phone" 
                  placeholder="+254 700 123 456"
                  color="gray"
                  size="lg"
                  class="w-full transition-all duration-300 hover:border-green-400"
                />
              </UFormGroup>
              <UFormGroup label="Preferred Contact Method" required class="w-full">
                <USelect 
                  v-model="contactForm.contactMethod"
                  :options="contactMethods"
                  option-attribute="label"
                  value-attribute="value"
                  color="gray"
                  size="lg"
                  class="w-full transition-all duration-300 hover:border-green-400"
                />
              </UFormGroup>
            </div>

            <UFormGroup label="Subject" required class="w-full">
              <USelect 
                v-model="contactForm.subject"
                :options="subjects"
                option-attribute="label"
                value-attribute="value"
                color="gray"
                size="lg"
                class="w-full transition-all duration-300 hover:border-green-400"
              />
            </UFormGroup>

            <UFormGroup label="Message" required class="w-full">
              <UTextarea 
                v-model="contactForm.message"
                placeholder="How can we help you today?"
                :rows="6"
                color="gray"
                class="w-full transition-all duration-300 hover:border-green-400"
              />
            </UFormGroup>

            <div class="pt-6">
              <UButton 
                type="submit"
                :loading="isSubmitting"
                :disabled="!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message"
                size="xl"
                color="primary"
                block
                class="w-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </UButton>
            </div>
          </form>
        </div>

        <!-- Success Message -->
        <div v-else class="bg-green-900/20 border border-green-500/30 rounded-2xl p-8 text-center">
          <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <UIcon name="i-heroicons-check-circle" class="w-8 h-8 text-green-400" />
          </div>
          <h3 class="text-2xl font-bold mb-2 text-white">Message Received!</h3>
          <p class="text-gray-300">
            Thank you for contacting us, {{ contactForm.name }}! We'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center text-white">Find Us</h2>
        <div class="bg-gray-800 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
          <div class="text-center">
            <UIcon name="i-heroicons-map" class="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p class="text-gray-400 mb-4">Interactive Map</p>
            <p class="text-gray-500 text-sm">123 Faith Boulevard, Nairobi, Kenya</p>
            <UButton 
              label="Get Directions" 
              variant="outline" 
              color="white"
              class="mt-4"
              icon="i-heroicons-map-pin"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-12 text-white">Connect With Us</h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          Follow us on social media for daily inspiration, service updates, and community highlights
        </p>
        <div class="flex justify-center gap-6">
          <UButton
            v-for="social in socialLinks"
            :key="social.name"
            :icon="social.icon"
            :label="social.name"
            variant="outline"
            color="gray"
            size="lg"
            class="hover:bg-primary-500 hover:text-white hover:border-green-400 transition-colors"
          />
        </div>
      </div>
    </section>

    <!-- Emergency Contact -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-4xl mx-auto px-6">
        <UCard class="bg-red-900/20 border-red-500/30">
          <div class="p-8 text-center">
            <div class="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-exclamation-triangle" class="w-8 h-8 text-red-400" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-white">Emergency Prayer & Support</h3>
            <p class="text-gray-300 mb-6">
              For urgent prayer needs or emergency support, our team is available 24/7
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <UButton 
                label="Call Prayer Line" 
                size="lg"
                color="red"
                icon="i-heroicons-phone"
              />
              <UButton 
                label="Emergency Email" 
                size="lg"
                variant="outline"
                color="red"
                icon="i-heroicons-envelope"
              />
            </div>
          </div>
        </UCard>
      </div>
    </section>

    <ChurchHomeFooter />
  </div>
</template>
