<template>
  <div class="church-home-theme bg-gray-950 text-gray-100 min-h-screen">
    <ChurchHomeNavbar />

    <!-- Hero -->
    <header class="relative pt-32 pb-16 md:pt-40 md:pb-20 text-white">
      <div class="absolute inset-0">
        <img
          :src="events[0]?.imageUrl || ''"
          alt="Eddy Fany Ministry events"
          class="w-full h-full object-cover opacity-60"
        >
        <div class="absolute inset-0 bg-black/70" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p class="inline-flex items-center gap-2 rounded-full bg-primary-500/20 px-4 py-1.5 text-primary-300 text-xs font-semibold tracking-wide uppercase mb-4">
          <UIcon name="i-heroicons-calendar-days" class="w-4 h-4" />
          Upcoming Events
        </p>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Gather, grow and go together
        </h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          See everything happening at Eddy Fany Ministry—from worship nights and healing services to youth encounters and community outreach.
        </p>
      </div>
    </header>

    <!-- Events Grid -->
    <section class="py-16 md:py-24 bg-gray-900 border-t border-gray-800">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-white">All upcoming events</h2>
            <p class="text-gray-400 mt-1">
              Choose an event, register and invite someone to come with you.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 lg:gap-10">
          <article
            v-for="event in events"
            :id="event.id"
            :key="event.id"
            class="bg-gray-800/60 rounded-2xl border border-gray-700 overflow-hidden flex flex-col hover:border-primary-500/40 transition-colors"
          >
            <div class="aspect-video bg-gray-800">
              <img :src="event.imageUrl" :alt="event.title" class="w-full h-full object-cover">
            </div>
            <div class="p-7 md:p-8 flex-1 flex flex-col">
              <div class="flex flex-wrap items-center gap-3 text-sm font-medium text-primary-300 mb-3">
                <span class="inline-flex items-center gap-1">
                  <UIcon name="i-heroicons-calendar-days" class="w-4 h-4" />
                  {{ event.date }}
                </span>
                <span class="inline-flex items-center gap-1 text-primary-200/90">
                  <UIcon name="i-heroicons-wifi" class="w-4 h-4" />
                  {{ event.location }}
                </span>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-2">
                {{ event.title }}
              </h3>
              <p class="text-gray-300 mb-4">
                {{ event.tagline }}
              </p>
              <p class="text-gray-400 text-sm leading-relaxed mb-6">
                {{ event.description }}
              </p>
              <div class="mt-auto flex flex-wrap items-center justify-between gap-3">
                <span class="text-xs uppercase tracking-wide text-gray-400">
                  {{ event.type }}
                </span>
                <UButton :label="event.ctaLabel" color="primary" size="sm" trailing-icon="i-heroicons-arrow-right" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <ChurchHomeFooter />
  </div>
</template>

<script setup lang="ts">
import { ministryEvents } from '../../data/ministryEvents'

const events = ministryEvents
</script>
