<template>
  <div class="church-home-theme bg-gray-950 text-gray-100 antialiased min-h-screen">
    <ChurchHomeNavbar />

    <!-- Hero Section -->
    <header id="hero" class="relative min-h-screen flex items-center justify-center text-white">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
          alt="Church community"
        >
        <div class="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>
      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
          Church is more than a place to attend, it is a place to call home
        </h1>
        <div class="flex flex-wrap items-center justify-center gap-10 sm:gap-12 mt-12">
          <NuxtLink to="/ministry/services" class="flex items-center gap-2 text-lg font-semibold tracking-wide hover:text-primary-400 transition-colors">
            <UIcon name="i-heroicons-calendar-days" class="w-5 h-5" />
            Services
          </NuxtLink>
          <NuxtLink to="/ministry/events" class="flex items-center gap-2 text-lg font-semibold tracking-wide hover:text-primary-400 transition-colors">
            <UIcon name="i-heroicons-calendar-days" class="w-5 h-5" />
            Events
          </NuxtLink>
          <NuxtLink to="/ministry/give" class="flex items-center gap-2 text-lg font-semibold tracking-wide hover:text-primary-400 transition-colors">
            <UIcon name="i-heroicons-heart" class="w-5 h-5" />
            Give
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- I'm New / Quick Links Section -->
    <section id="im-new" class="py-24 md:py-32 bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <NuxtLink
            to="/ministry/im-new"
            class="church-card group block p-8 md:p-10 rounded-xl border border-gray-700 bg-gray-800/50 hover:border-primary-500/50 hover:bg-gray-800 transition-all duration-200"
          >
            <div class="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mb-5">
              <UIcon name="i-heroicons-sparkles" class="w-7 h-7 text-primary-400" />
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-primary-300">I'm new</h3>
            <p class="text-gray-400 leading-relaxed">
              Come and do life with us. See what your next steps are at ChurchHome!
            </p>
          </NuxtLink>
          <NuxtLink
            to="/ministry/events"
            class="church-card group block p-8 md:p-10 rounded-xl border border-gray-700 bg-gray-800/50 hover:border-primary-500/50 hover:bg-gray-800 transition-all duration-200"
          >
            <div class="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mb-5">
              <UIcon name="i-heroicons-calendar-days" class="w-7 h-7 text-primary-400" />
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-primary-300">Events</h3>
            <p class="text-gray-400 leading-relaxed">
              See what is coming up in church life and register for upcoming events.
            </p>
          </NuxtLink>
          <div class="church-card p-8 md:p-10 rounded-xl border border-gray-700 bg-gray-800/50">
            <div class="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mb-5">
              <UIcon name="i-heroicons-heart" class="w-7 h-7 text-primary-400" />
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white">Prayer Requests</h3>
            <p class="text-gray-400 leading-relaxed">
              Have a Prayer Request? Learn on how to act on it through our website.
            </p>
          </div>
          <NuxtLink
            to="/ministry/services"
            class="church-card group block p-8 md:p-10 rounded-xl border border-gray-700 bg-gray-800/50 hover:border-primary-500/50 hover:bg-gray-800 transition-all duration-200"
          >
            <div class="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mb-5">
              <UIcon name="i-heroicons-calendar-days" class="w-7 h-7 text-primary-400" />
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-primary-300">Online Services</h3>
            <p class="text-gray-400 leading-relaxed">
              See our schedule and join our live online services from anywhere in the world.
            </p>
          </NuxtLink>
          <NuxtLink
            to="#get-involved"
            class="church-card group block p-8 md:p-10 rounded-xl border border-gray-700 bg-gray-800/50 hover:border-primary-500/50 hover:bg-gray-800 transition-all duration-200"
          >
            <div class="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mb-5">
              <UIcon name="i-heroicons-hand-raised" class="w-7 h-7 text-primary-400" />
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-primary-300">Volunteer</h3>
            <p class="text-gray-400 leading-relaxed">
              Would like to volunteer? Learn more about where you can help and grow with us.
            </p>
          </NuxtLink>
          <NuxtLink
            to="/ministry/give"
            id="give"
            class="church-card group block p-8 md:p-10 rounded-xl border border-gray-700 bg-gray-800/50 hover:border-primary-500/50 hover:bg-gray-800 transition-all duration-200"
          >
            <div class="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mb-5">
              <UIcon name="i-heroicons-gift" class="w-7 h-7 text-primary-400" />
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-primary-300">Give</h3>
            <p class="text-gray-400 leading-relaxed">
              This is where you can give to our ministry! Let's make a difference in this city together.
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Our Mission with image -->
    <section id="about" class="py-20 md:py-28 bg-gray-900 border-t border-gray-800">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
              alt="Community"
              class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 bg-primary-500/20" />
          </div>
          <div class="text-center md:text-left">
            <div class="inline-flex items-center gap-2 rounded-full bg-primary-500/20 px-4 py-2 text-primary-300 text-sm font-medium mb-6">
              <UIcon name="i-heroicons-flag" class="w-4 h-4" />
              Our Mission
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p class="text-xl text-gray-300 leading-relaxed mb-10">
              We exist to empower disciples, lead by example and change communities for the better
            </p>
            <UButton to="/ministry/about-us" label="Learn more" size="lg" color="primary" trailing-icon="i-heroicons-arrow-right" />
          </div>
        </div>
      </div>
    </section>

    <!-- Watch Our Latest Sermons -->
    <section id="services" class="py-20 md:py-28 bg-gray-950">
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex items-center justify-center gap-3 mb-16">
          <UIcon name="i-heroicons-play-circle" class="w-10 h-10 text-primary-400" />
          <h2 class="text-3xl md:text-4xl font-bold text-white text-center">
            Watch Our Latest Sermons
          </h2>
        </div>
        <div class="space-y-0 divide-y divide-gray-800">
          <div class="flex flex-col sm:flex-row sm:items-center gap-6 py-8 first:pt-0">
            <div class="w-32 h-20 sm:w-40 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-gray-800">
              <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=400&auto=format&fit=crop" alt="" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-500 mb-1">October 23, 2022</p>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-1">
                Daily Devotions: Why They Must Be Our Number 1 Priority
              </h3>
              <p class="text-gray-400 flex items-center gap-2"><UIcon name="i-heroicons-user-circle" class="w-4 h-4" /> Shawn Spenser</p>
            </div>
            <UButton to="/ministry/services" label="Watch" color="primary" class="shrink-0 w-full sm:w-auto" trailing-icon="i-heroicons-play" />
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center gap-6 py-8">
            <div class="w-32 h-20 sm:w-40 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-gray-800">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" alt="" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-500 mb-1">September 18, 2022</p>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-1">
                The Importance of Forgiveness
              </h3>
              <p class="text-gray-400 flex items-center gap-2"><UIcon name="i-heroicons-user-circle" class="w-4 h-4" /> Michael Lewis</p>
            </div>
            <UButton to="/ministry/services" label="Watch" color="primary" class="shrink-0 w-full sm:w-auto" trailing-icon="i-heroicons-play" />
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center gap-6 py-8 last:pb-0">
            <div class="w-32 h-20 sm:w-40 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-gray-800">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" alt="" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-500 mb-1">October 2, 2022</p>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-1">
                Learning the Ways of Jesus
              </h3>
              <p class="text-gray-400 flex items-center gap-2"><UIcon name="i-heroicons-user-circle" class="w-4 h-4" /> Tim Keller</p>
            </div>
            <UButton to="/ministry/services" label="Watch" color="primary" class="shrink-0 w-full sm:w-auto" trailing-icon="i-heroicons-play" />
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section id="events" class="py-20 md:py-28 bg-gray-900 border-t border-gray-800">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-center justify-center gap-3 mb-16">
          <UIcon name="i-heroicons-calendar-days" class="w-10 h-10 text-primary-400" />
          <h2 class="text-3xl md:text-4xl font-bold text-white text-center">
            Upcoming Events
          </h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="event in featuredEvents"
            :key="event.id"
            class="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-primary-500/30 transition-colors"
          >
            <div class="aspect-video bg-gray-800">
              <img :src="event.imageUrl" :alt="event.title" class="w-full h-full object-cover opacity-80">
            </div>
            <div class="p-8 md:p-10">
              <div class="flex flex-wrap items-center gap-3 text-primary-400 text-sm font-medium mb-2">
                <span class="inline-flex items-center gap-1">
                  <UIcon name="i-heroicons-calendar-days" class="w-4 h-4" />
                  {{ event.date }}
                </span>
                <span class="inline-flex items-center gap-1 text-primary-300/90">
                  <UIcon name="i-heroicons-wifi" class="w-4 h-4" />
                  {{ event.location }}
                </span>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">
                {{ event.title }}
              </h3>
              <p class="text-gray-400 leading-relaxed mb-6">
                {{ event.description }}
              </p>
              <UButton :to="`/ministry/events#${event.id}`" :label="event.ctaLabel" color="primary" trailing-icon="i-heroicons-arrow-right" />
            </div>
          </div>
        </div>
        <div class="mt-10 text-center">
          <NuxtLink
            to="/ministry/events"
            class="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 font-medium text-sm uppercase tracking-wide"
          >
            View all events
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Get Involved -->
    <section id="get-involved" class="py-20 md:py-28 bg-gray-950 border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 rounded-full bg-primary-500/20 px-4 py-2 text-primary-300 text-sm font-medium mb-4">
            <UIcon name="i-heroicons-user-plus" class="w-4 h-4" />
            Get Involved
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white">Get Involved</h2>
          <p class="text-xl text-gray-400 mt-2">Join a Volunteer Team</p>
        </div>
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <form class="bg-gray-800/50 rounded-2xl p-8 md:p-10 border border-gray-700" @submit.prevent="onVolunteerSubmit">
            <div class="grid sm:grid-cols-2 gap-6">
              <UFormGroup label="First Name">
                <UInput v-model="volunteerForm.firstName" required />
              </UFormGroup>
              <UFormGroup label="Last Name">
                <UInput v-model="volunteerForm.lastName" required />
              </UFormGroup>
            </div>
            <div class="grid sm:grid-cols-2 gap-6 mt-6">
              <UFormGroup label="Phone Number">
                <UInput v-model="volunteerForm.phone" type="tel" />
              </UFormGroup>
              <UFormGroup label="Email">
                <UInput v-model="volunteerForm.email" type="email" required />
              </UFormGroup>
            </div>
            <UFormGroup label="What team would you like to serve on?" class="mt-6">
              <USelect
                v-model="volunteerForm.team"
                :items="volunteerTeamOptions"
                placeholder="Select a team"
              />
            </UFormGroup>
            <UButton type="submit" label="Submit" class="mt-8 w-full" size="lg" color="primary" />
            <p v-if="volunteerSubmitted" class="mt-4 text-sm text-green-400 flex items-center gap-2">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5" />
              Thank you! We will get back to you as soon as possible.
            </p>
            <p v-if="volunteerError" class="mt-4 text-sm text-red-400 flex items-center gap-2">
              <UIcon name="i-heroicons-exclamation-circle" class="w-5 h-5" />
              Oops! Something went wrong. Please fill in the required fields and try again.
            </p>
          </form>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div class="p-5 rounded-xl bg-gray-800/50 border border-gray-700">
              <UIcon name="i-heroicons-speaker-wave" class="w-8 h-8 text-primary-400 mb-3" />
              <h4 class="text-lg font-bold text-white mb-2">Sound</h4>
              <p class="text-gray-400 text-sm leading-relaxed">
                Help elevate the sound and excellence of our online services and events around the world.
              </p>
            </div>
            <div class="p-5 rounded-xl bg-gray-800/50 border border-gray-700">
              <UIcon name="i-heroicons-hand-raised" class="w-8 h-8 text-primary-400 mb-3" />
              <h4 class="text-lg font-bold text-white mb-2">Guest Services</h4>
              <p class="text-gray-400 text-sm leading-relaxed">
                Have a passion for welcoming others? This is where you can shine!
              </p>
            </div>
            <div class="p-5 rounded-xl bg-gray-800/50 border border-gray-700">
              <UIcon name="i-heroicons-cube" class="w-8 h-8 text-primary-400 mb-3" />
              <h4 class="text-lg font-bold text-white mb-2">Logistics</h4>
              <p class="text-gray-400 text-sm leading-relaxed">
                Help the church become even more efficient using your logistic talents.
              </p>
            </div>
            <div class="p-5 rounded-xl bg-gray-800/50 border border-gray-700">
              <UIcon name="i-heroicons-film" class="w-8 h-8 text-primary-400 mb-3" />
              <h4 class="text-lg font-bold text-white mb-2">Media</h4>
              <p class="text-gray-400 text-sm leading-relaxed">
                If you have a passion for marketing, this is your chance to shine with us!
              </p>
            </div>
            <div class="p-5 rounded-xl bg-gray-800/50 border border-gray-700">
              <UIcon name="i-heroicons-academic-cap" class="w-8 h-8 text-primary-400 mb-3" />
              <h4 class="text-lg font-bold text-white mb-2">Kids</h4>
              <p class="text-gray-400 text-sm leading-relaxed">
                Don't forgo this incredible opportunity to serve younger generations
              </p>
            </div>
            <div class="p-5 rounded-xl bg-gray-800/50 border border-gray-700">
              <UIcon name="i-heroicons-musical-note" class="w-8 h-8 text-primary-400 mb-3" />
              <h4 class="text-lg font-bold text-white mb-2">Worship</h4>
              <p class="text-gray-400 text-sm leading-relaxed">
                Sing your heart out and make service so much more special for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Social Media -->
    <section class="py-12 bg-gray-950 border-t border-gray-800">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
          <UIcon name="i-heroicons-share-across" class="w-6 h-6 text-primary-400" />
          Our Social Media
        </h2>
        <div class="flex justify-center gap-6">
          <a href="#" class="p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-primary-500/20 hover:text-primary-400 transition-colors" aria-label="Instagram">
            <UIcon name="i-heroicons-camera" class="w-6 h-6" />
          </a>
          <a href="#" class="p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-primary-500/20 hover:text-primary-400 transition-colors" aria-label="Facebook">
            <UIcon name="i-heroicons-user-group" class="w-6 h-6" />
          </a>
          <a href="#" class="p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-primary-500/20 hover:text-primary-400 transition-colors" aria-label="YouTube">
            <UIcon name="i-heroicons-play-circle" class="w-6 h-6" />
          </a>
          <a href="#" class="p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-primary-500/20 hover:text-primary-400 transition-colors" aria-label="TikTok">
            <UIcon name="i-heroicons-musical-note" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>

    <ChurchHomeFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ministryEvents } from '../../data/ministryEvents'

const featuredEvents = computed(() => ministryEvents.slice(0, 2))

const volunteerForm = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  team: undefined as string | undefined
})

const volunteerTeamOptions = [
  { label: 'Media', value: 'media' },
  { label: 'Kids', value: 'kids' },
  { label: 'Sound', value: 'sound' },
  { label: 'Guest Services', value: 'guest-services' },
  { label: 'Logistics', value: 'logistics' },
  { label: 'Worship', value: 'worship' }
]

const volunteerSubmitted = ref(false)
const volunteerError = ref(false)

function onVolunteerSubmit() {
  volunteerError.value = false
  if (!volunteerForm.firstName || !volunteerForm.lastName || !volunteerForm.email) {
    volunteerError.value = true
    return
  }
  volunteerSubmitted.value = true
}
</script>

<style scoped>
.church-home-theme {
  --church-heading-font: 'Inter', system-ui, sans-serif;
  --church-body-font: 'Inter', system-ui, sans-serif;
}

.church-home-theme h1,
.church-home-theme h2,
.church-home-theme h3,
.church-home-theme h4 {
  font-family: var(--church-heading-font);
}
</style>
