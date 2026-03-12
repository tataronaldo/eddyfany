<script setup>
useHead({
  title: 'Prayer Request - Eddy Fany Ministry',
  meta: [
    { name: 'description', content: 'Submit your prayer requests to Eddy Fany Ministry. Our prayer team is here to stand with you in faith and pray for your needs.' }
  ]
})

const prayerForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  requestType: 'general',
  subject: '',
  prayerRequest: '',
  isAnonymous: false,
  allowContact: false
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const requestTypes = [
  { value: 'general', label: 'General Prayer' },
  { value: 'healing', label: 'Healing' },
  { value: 'guidance', label: 'Guidance & Direction' },
  { value: 'family', label: 'Family & Relationships' },
  { value: 'financial', label: 'Financial' },
  { value: 'spiritual', label: 'Spiritual Growth' },
  { value: 'thanksgiving', label: 'Thanksgiving' }
]

const submitPrayerRequest = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  isSubmitting.value = false
  isSubmitted.value = true
  
  // Reset form after 3 seconds
  setTimeout(() => {
    isSubmitted.value = false
    prayerForm.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      requestType: 'general',
      subject: '',
      prayerRequest: '',
      isAnonymous: false,
      allowContact: false
    }
  }, 3000)
}

const getDisplayName = () => {
  if (prayerForm.value.isAnonymous) return 'Anonymous'
  return `${prayerForm.value.firstName} ${prayerForm.value.lastName}`.trim() || 'Anonymous'
}
</script>

<template>
  <div class="church-home-theme bg-gray-950 text-gray-100 antialiased min-h-screen">
    <ChurchHomeNavbar />

    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <UIcon name="i-heroicons-heart" class="w-10 h-10 text-primary-400" />
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
          Prayer Request
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          We believe in the power of prayer. Share your needs with us, and our prayer team will stand with you in faith.
        </p>
        <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400" />
            <span>Confidential</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400" />
            <span>Prayed by our team</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400" />
            <span>Biblical support</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Prayer Request Form -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <div v-if="!isSubmitted" class="max-w-4xl mx-auto">
          <div class="bg-gray-900 rounded-2xl border border-gray-800 shadow-xl">
            <form @submit.prevent="submitPrayerRequest" class="p-8 space-y-8">
              <!-- Personal Information -->
              <div>
                <h3 class="text-2xl font-bold mb-6 text-white">Personal Information</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <UFormGroup label="First Name" required class="w-full">
                    <UInput 
                      v-model="prayerForm.firstName" 
                      placeholder="John"
                      :disabled="prayerForm.isAnonymous"
                      color="gray"
                      size="lg"
                      class="w-full transition-all duration-300 hover:border-primary-400"
                    />
                  </UFormGroup>
                  <UFormGroup label="Last Name" required class="w-full">
                    <UInput 
                      v-model="prayerForm.lastName" 
                      placeholder="Doe"
                      :disabled="prayerForm.isAnonymous"
                      color="gray"
                      size="lg"
                      class="w-full transition-all duration-300 hover:border-primary-400"
                    />
                  </UFormGroup>
                </div>
                
                <div class="mt-6">
                  <UCheckbox 
                    v-model="prayerForm.isAnonymous"
                    label="Submit anonymously"
                    color="primary"
                    size="lg"
                    class="cursor-pointer"
                  />
                </div>

                <div class="grid md:grid-cols-2 gap-6 mt-6">
                  <UFormGroup label="Email Address" class="w-full">
                    <UInput 
                      v-model="prayerForm.email" 
                      type="email"
                      placeholder="john@example.com"
                      color="gray"
                      size="lg"
                      class="w-full transition-all duration-300 hover:border-primary-400"
                    />
                  </UFormGroup>
                  <UFormGroup label="Phone Number" class="w-full">
                    <UInput 
                      v-model="prayerForm.phone" 
                      placeholder="+1 (555) 123-4567"
                      color="gray"
                      size="lg"
                      class="w-full transition-all duration-300 hover:border-primary-400"
                    />
                  </UFormGroup>
                </div>
              </div>

              <!-- Prayer Details -->
              <div class="border-t border-gray-800 pt-8">
                <h3 class="text-2xl font-bold mb-6 text-white">Prayer Details</h3>
                
                <UFormGroup label="Request Type" required class="w-full">
                  <USelect 
                    v-model="prayerForm.requestType"
                    :options="requestTypes"
                    option-attribute="label"
                    value-attribute="value"
                    color="gray"
                    size="lg"
                    class="w-full transition-all duration-300 hover:border-primary-400"
                  />
                </UFormGroup>

                <UFormGroup label="Subject" required class="w-full mt-6">
                  <UInput 
                    v-model="prayerForm.subject" 
                    placeholder="Brief subject of your prayer request"
                    color="gray"
                    size="lg"
                    class="w-full transition-all duration-300 hover:border-primary-400"
                  />
                </UFormGroup>

                <UFormGroup label="Prayer Request" required class="w-full mt-6">
                  <UTextarea 
                    v-model="prayerForm.prayerRequest"
                    placeholder="Share your prayer request in detail. Our team will pray specifically for this need."
                    :rows="6"
                    color="gray"
                    class="w-full transition-all duration-300 hover:border-primary-400"
                  />
                </UFormGroup>
              </div>

              <!-- Contact Preferences -->
              <div class="border-t border-gray-800 pt-8">
                <h3 class="text-2xl font-bold mb-6 text-white">Contact Preferences</h3>
                <UCheckbox 
                  v-model="prayerForm.allowContact"
                  label="Allow our team to contact you for follow-up and encouragement"
                  color="primary"
                  size="lg"
                  class="cursor-pointer"
                />
              </div>

              <!-- Submit Button -->
              <div class="pt-8 border-t border-gray-800">
                <UButton 
                  type="submit"
                  :loading="isSubmitting"
                  :disabled="!prayerForm.subject || !prayerForm.prayerRequest"
                  size="xl"
                  color="primary"
                  block
                  class="w-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  {{ isSubmitting ? 'Submitting...' : 'Submit Prayer Request' }}
                </UButton>
              </div>
            </form>
          </div>
        </div>

        <!-- Success Message -->
        <div v-else class="bg-green-900/20 border border-green-500/30 rounded-2xl p-8 text-center">
          <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <UIcon name="i-heroicons-check-circle" class="w-8 h-8 text-green-400" />
          </div>
          <h3 class="text-2xl font-bold mb-2 text-white">Prayer Request Received</h3>
          <p class="text-gray-300 mb-4">
            Thank you, {{ getDisplayName() }}! Your prayer request has been received and our prayer team will begin praying for you immediately.
          </p>
          <p class="text-gray-400 text-sm">
            "Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God." - Philippians 4:6
          </p>
        </div>
      </div>
    </section>

    <!-- Prayer Promises -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center text-white">God's Promises About Prayer</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <UCard class="bg-gray-800 border-gray-700">
            <div class="p-6">
              <div class="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                <UIcon name="i-heroicons-book-open" class="w-6 h-6 text-primary-400" />
              </div>
              <h3 class="text-xl font-bold mb-2 text-white">Jeremiah 29:12</h3>
              <p class="text-gray-300 italic">
                "Then you will call on me and come and pray to me, and I will listen to you."
              </p>
            </div>
          </UCard>

          <UCard class="bg-gray-800 border-gray-700">
            <div class="p-6">
              <div class="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                <UIcon name="i-heroicons-book-open" class="w-6 h-6 text-primary-400" />
              </div>
              <h3 class="text-xl font-bold mb-2 text-white">1 John 5:14</h3>
              <p class="text-gray-300 italic">
                "This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us."
              </p>
            </div>
          </UCard>

          <UCard class="bg-gray-800 border-gray-700">
            <div class="p-6">
              <div class="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                <UIcon name="i-heroicons-book-open" class="w-6 h-6 text-primary-400" />
              </div>
              <h3 class="text-xl font-bold mb-2 text-white">Matthew 18:19</h3>
              <p class="text-gray-300 italic">
                "Again, truly I tell you that if two of you on earth agree about anything they ask for, it will be done for them by my Father in heaven."
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Emergency Prayer -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <UCard class="bg-red-900/20 border-red-500/30">
          <div class="p-8">
            <div class="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-exclamation-triangle" class="w-8 h-8 text-red-400" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-white">Emergency Prayer Need?</h3>
            <p class="text-gray-300 mb-6">
              For urgent prayer requests, please call our 24/7 prayer line
            </p>
            <UButton 
              label="Call Prayer Line: +1 (555) PRAY-NOW" 
              size="lg"
              color="red"
              icon="i-heroicons-phone"
            />
          </div>
        </UCard>
      </div>
    </section>

    <ChurchHomeFooter />
  </div>
</template>
