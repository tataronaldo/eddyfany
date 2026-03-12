<template>
  <div class="church-home-theme bg-gray-950 text-gray-100 min-h-screen">
    <ChurchHomeNavbar />

    <!-- Hero -->
    <header class="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop"
          alt="Services"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-black/60" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Services</h1>
        <p class="text-xl text-gray-300">View our recent preachers and other relevant information.</p>
        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <UButton to="#location" variant="outline" label="Location" class="border-gray-500 text-gray-200" />
          <UButton to="#preachers" variant="outline" label="Preachers" class="border-gray-500 text-gray-200" />
          <UButton to="#events" variant="outline" label="Events" class="border-gray-500 text-gray-200" />
        </div>
      </div>
    </header>

    <!-- Location -->
    <section id="location" class="py-20 md:py-28 bg-gray-900 border-t border-gray-800">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop"
              alt="Location"
              class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 bg-primary-500/10" />
          </div>
          <div>
            <div class="flex items-center gap-2 text-primary-400 mb-4">
              <UIcon name="i-heroicons-map-pin" class="w-6 h-6" />
              <span class="font-semibold">Location</span>
            </div>
            <p class="text-gray-300 text-lg mb-6">
              Completely online! We are a global church with members from all around the world. Join us from the comfort of your home or anywhere you are.
            </p>
            <div class="flex items-center gap-2 text-primary-400">
              <UIcon name="i-heroicons-clock" class="w-6 h-6" />
              <span class="font-semibold">Service Time</span>
            </div>
            <p class="text-gray-300 text-lg">Every Sunday @ 10:30AM-12:30PM. <br>View our <a class="text-primary-400 underline" href="/Ministry/events">event page</a> for detail time for specific events</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Preachers -->
    <section id="preachers" class="py-20 md:py-28 bg-gray-950 border-t border-gray-800">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16 flex items-center justify-center gap-2">
          <UIcon name="i-heroicons-microphone" class="w-10 h-10 text-primary-400" />
          Latest Preachers
        </h2>
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
            <UButton label="Watch" color="primary" class="shrink-0" trailing-icon="i-heroicons-play" />
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center gap-6 py-8">
            <div class="w-32 h-20 sm:w-40 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-gray-800">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" alt="" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-500 mb-1">September 18, 2022</p>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-1">The Importance of Forgiveness</h3>
              <p class="text-gray-400 flex items-center gap-2"><UIcon name="i-heroicons-user-circle" class="w-4 h-4" /> Michael Lewis</p>
            </div>
            <UButton label="Watch" color="primary" class="shrink-0" trailing-icon="i-heroicons-play" />
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center gap-6 py-8 last:pb-0">
            <div class="w-32 h-20 sm:w-40 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-gray-800">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" alt="" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-500 mb-1">October 2, 2022</p>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-1">Learning the Ways of Jesus</h3>
              <p class="text-gray-400 flex items-center gap-2"><UIcon name="i-heroicons-user-circle" class="w-4 h-4" /> Tim Keller</p>
            </div>
            <UButton label="Watch" color="primary" class="shrink-0" trailing-icon="i-heroicons-play" />
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
            class="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-primary-400/30 transition-colors"
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

    <ChurchHomeFooter />
  </div>
</template>
<script setup lang="ts">
import { ministryEvents } from '../../data/ministryEvents'
const featuredEvents = computed(() => ministryEvents.slice(0, 2))
</script>
