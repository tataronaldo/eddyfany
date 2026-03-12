<template>
  <div class="church-home-theme bg-gray-950 text-gray-100 min-h-screen">
    <ChurchHomeNavbar />

    <!-- Hero -->
    <header class="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2070&auto=format&fit=crop"
          alt="Community"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-black/60" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">New to church?</h1>
        <p class="text-xl text-gray-300 mb-8">Welcome! These are the next steps for you.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton to="#steps" label="Next steps" color="primary" trailing-icon="i-heroicons-arrow-down" />
          <UButton to="#contact" variant="outline" label="Contact us" class="border-gray-500 text-gray-200" />
        </div>
      </div>
    </header>

    <!-- Steps -->
    <section id="steps" class="py-20 md:py-28 bg-gray-900">
      <div class="max-w-4xl mx-auto px-6 space-y-24">
        <!-- Step 1 -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20 text-primary-400 font-bold text-lg mb-6">1</span>
            <h2 class="text-3xl font-bold text-white mb-6">Attend your first Online service</h2>
            <p class="text-gray-400 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <p class="text-gray-400 leading-relaxed mb-8">
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <div class="flex flex-wrap gap-4">
              <UButton to="/ministry/services" label="Get Directions" color="primary" trailing-icon="i-heroicons-map-pin" />
              <UButton to="/ministry/services" variant="outline" label="View Past Services" class="border-gray-600 text-gray-300" />
            </div>
          </div>
          <div class="order-1 md:order-2 relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop" alt="Service" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-primary-500/10" />
          </div>
        </div>

        <!-- Step 2 -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop" alt="Home group" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-primary-500/10" />
          </div>
          <div>
            <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20 text-primary-400 font-bold text-lg mb-6">2</span>
            <h2 class="text-3xl font-bold text-white mb-6">Sign up for our daily sermons</h2>
            <p class="text-gray-400 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
            </p>
            <div class="flex flex-wrap gap-4">
              <UButton to="/ministry/home-groups" label="Sign Up" color="primary" trailing-icon="i-heroicons-arrow-right" />
              <UButton to="/ministry/home-groups" variant="outline" label="Learn More" class="border-gray-600 text-gray-300" />
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20 text-primary-400 font-bold text-lg mb-6">3</span>
            <h2 class="text-3xl font-bold text-white mb-6">Discover volunteer opportunities</h2>
            <p class="text-gray-400 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <UButton to="/ministry#get-involved" label="Become a Volunteer" color="primary" trailing-icon="i-heroicons-hand-raised" />
          </div>
          <div class="order-1 md:order-2 relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop" alt="Volunteer" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-primary-500/10" />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-20 md:py-28 bg-gray-950 border-t border-gray-800">
      <div class="max-w-3xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16 flex items-center justify-center gap-2">
          <UIcon name="i-heroicons-question-mark-circle" class="w-10 h-10 text-primary-400" />
          Frequently Asked Questions
        </h2>
        <div class="space-y-4">
          <div
            v-for="(item, index) in faqItems"
            :key="index"
            class="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden"
          >
            <button
              type="button"
              class="w-full px-6 py-4 text-left flex items-center justify-between text-white font-medium hover:bg-gray-800/50 transition-colors"
              @click="toggleFaq(index)"
            >
              {{ item.label }}
              <UIcon :name="openFaq === index ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'" class="w-5 h-5 text-gray-400" />
            </button>
            <div v-show="openFaq === index" class="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-gray-700 pt-2">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-20 md:py-28 bg-gray-900 border-t border-gray-800">
      <div class="max-w-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <UIcon name="i-heroicons-envelope" class="w-8 h-8 text-primary-400" />
          Contact us
        </h2>
        <form class="mt-8 space-y-6 bg-gray-800/50 rounded-2xl p-8 border border-gray-700" @submit.prevent="onContactSubmit">
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
const openFaq = ref<number | null>(0)

function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index
}

function onContactSubmit() {
  contactError.value = false
  if (!contactForm.firstName || !contactForm.lastName || !contactForm.email) {
    contactError.value = true
    return
  }
  contactSubmitted.value = true
}

const faqItems = [
  {
    label: 'How big is the church?',
    content: 'Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.'
  },
  {
    label: 'How can I become a member of Eddy Fany Ministry?',
    content: 'Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.'
  },
  {
    label: 'What do you believe in as a church?',
    content: 'Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.'
  },
  {
    label: 'What is your mission?',
    content: 'Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.'
  },
  {
    label: 'Do you have a service for children and teens?',
    content: 'Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.'
  }
]
</script>
