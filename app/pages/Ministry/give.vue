<template>
  <div class="church-home-theme bg-gray-950 text-gray-100 min-h-screen">
    <ChurchHomeNavbar />

    <!-- Hero -->
    <header class="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070&auto=format&fit=crop"
          alt="Giving"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-black/60" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Giving</h1>
        <p class="text-xl text-gray-300 mb-8">Giving to church has never been simpler.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton to="#one-time" label="Give now" color="primary" trailing-icon="i-heroicons-heart" />
          <UButton to="#contact" variant="outline" label="Contact Us" class="border-gray-500 text-gray-200" />
        </div>
      </div>
    </header>

    <!-- One-time Gift -->
    <section id="one-time" class="py-20 md:py-28 bg-gray-900 border-t border-gray-800">
      <div class="max-w-2xl mx-auto px-6">
        <div class="bg-gray-800/50 rounded-2xl p-8 md:p-10 border border-gray-700">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
              <UIcon name="i-heroicons-gift" class="w-6 h-6 text-primary-400" />
            </div>
            <h2 class="text-2xl font-bold text-white">One-time Gift</h2>
          </div>
          <p class="text-gray-400 mb-6">
            You can also choose to give a one-time gift. By giving a one-gift, you are making a difference and sowing into our vision.
          </p>
          <UButton label="Give now" color="primary" size="lg" trailing-icon="i-heroicons-arrow-right" />
        </div>
      </div>
    </section>

    <!-- Recurring Gift -->
    <section class="py-20 md:py-28 bg-gray-950 border-t border-gray-800">
      <div class="max-w-2xl mx-auto px-6">
        <div class="bg-gray-800/50 rounded-2xl p-8 md:p-10 border border-gray-700">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
              <UIcon name="i-heroicons-arrow-path" class="w-6 h-6 text-primary-400" />
            </div>
            <h2 class="text-2xl font-bold text-white">Recurring Gift</h2>
          </div>
          <p class="text-gray-400 mb-6">
            Automate your giving by automating what's important. Get to make a real difference and create more resources along the way!
          </p>
          <UButton label="Give now" color="primary" size="lg" trailing-icon="i-heroicons-arrow-right" />
        </div>
      </div>
    </section>

    <!-- Mobile Giving -->
    <section class="py-20 md:py-28 bg-gray-900 border-t border-gray-800">
      <div class="max-w-2xl mx-auto px-6">
        <div class="bg-gray-800/50 rounded-2xl p-8 md:p-10 border border-gray-700">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
              <UIcon name="i-heroicons-device-phone-mobile" class="w-6 h-6 text-primary-400" />
            </div>
            <h2 class="text-2xl font-bold text-white">Mobile Giving</h2>
          </div>
          <p class="text-gray-400 mb-6">
            Text the word "Give" to the Church <strong class="text-white">+237671404260</strong>. Then follow the link. It's that easy but still super secure.
          </p>
          <UButton label="Give Now - Text to the number" color="primary" size="lg" trailing-icon="i-heroicons-chat-bubble-left-right" />
        </div>
      </div>
    </section>

    <!-- Questions + Contact -->
    <section id="contact" class="py-20 md:py-28 bg-gray-950 border-t border-gray-800">
      <div class="max-w-2xl mx-auto px-6">
        <h2 class="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <UIcon name="i-heroicons-question-mark-circle" class="w-8 h-8 text-primary-400" />
          Have any questions about giving?
        </h2>
        <h3 class="text-xl font-semibold text-gray-300 mb-6">Contact us</h3>
        <form class="space-y-6 bg-gray-800/50 rounded-2xl p-8 border border-gray-700" @submit.prevent="onContactSubmit">
          <div class="grid sm:grid-cols-2 gap-6">
            <UFormGroup label="First Name">
              <UInput class="w-full" v-model="contactForm.firstName" required />
            </UFormGroup>
            <UFormGroup label="Last Name">
              <UInput class="w-full" v-model="contactForm.lastName" required />
            </UFormGroup>
          </div>
          <div class="grid sm:grid-cols-2 gap-6">
            <UFormGroup label="Phone Number">
              <UInput class="w-full" v-model="contactForm.phone" type="tel" />
            </UFormGroup>
            <UFormGroup label="Email">
              <UInput class="w-full" v-model="contactForm.email" type="email" required />
            </UFormGroup>
          </div>
          <UFormGroup label="Message/Questions">
            <UTextarea class="w-full" v-model="contactForm.message" :rows="4" />
          </UFormGroup>
          <UFormGroup label="Preferred method of communication">
            <USelect class="w-full" v-model="contactForm.preference" :items="['E-mail', 'Text']" />
          </UFormGroup>
          <UButton type="submit" label="Send" size="lg" color="primary" class="w-full" />
          <p v-if="contactSubmitted" class="text-sm text-green-400 flex items-center gap-2">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5" /> Thank you! Your message has been received!
          </p>
          <p v-if="contactError" class="text-sm text-red-400 flex items-center gap-2">
            <UIcon name="i-heroicons-exclamation-circle" class="w-5 h-5" /> Oops! Something went wrong. Please fill in the required fields and try again.
          </p>
        </form>
      </div>
    </section>

    <ChurchHomeFooter />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const contactForm = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  message: '',
  preference: undefined as string | undefined
})
const contactSubmitted = ref(false)
const contactError = ref(false)

function onContactSubmit() {
  contactError.value = false
  if (!contactForm.firstName || !contactForm.lastName || !contactForm.email) {
    contactError.value = true
    return
  }
  contactSubmitted.value = true
}
</script>
