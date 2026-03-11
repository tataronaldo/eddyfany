<template>
  <div class="church-home-theme bg-gray-950 text-gray-100 min-h-screen">
    <ChurchHomeNavbar />

    <!-- Hero -->
    <header class="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
          alt="About Us"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-black/60" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
        <p class="text-xl text-gray-300">Learn more about who we are and what we do.</p>
        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <UButton to="#vision" variant="outline" label="Vision" class="border-gray-500 text-gray-200" />
          <UButton to="#mission" variant="outline" label="Mission" class="border-gray-500 text-gray-200" />
          <UButton to="#team" variant="outline" label="Team" class="border-gray-500 text-gray-200" />
        </div>
      </div>
    </header>

    <!-- Vision + Mission + Images -->
    <section class="py-20 md:py-28 bg-gray-900 border-t border-gray-800">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div class="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop" alt="Vision" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-primary-500/10" />
          </div>
          <div>
            <div class="inline-flex items-center gap-2 rounded-full bg-primary-500/20 px-4 py-2 text-primary-300 text-sm font-medium mb-4">
              <UIcon name="i-heroicons-eye" class="w-4 h-4" />
              Our Vision
            </div>
            <h2 id="vision" class="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p class="text-gray-400 text-lg leading-relaxed">
              Imagine millions of people living a happier, healthier and a more purpose-driven life with Jesus
            </p>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center gap-2 rounded-full bg-primary-500/20 px-4 py-2 text-primary-300 text-sm font-medium mb-4">
              <UIcon name="i-heroicons-flag" class="w-4 h-4" />
              Our Mission
            </div>
            <h2 id="mission" class="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p class="text-gray-400 text-lg leading-relaxed">
              We exist to empower disciples, lead by example and change communities for the better
            </p>
          </div>
          <div class="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" alt="Mission" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-primary-500/10" />
          </div>
        </div>
        <!-- Core Values -->
        <div class="mt-24 pt-16 border-t border-gray-800">
          <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <UIcon name="i-heroicons-heart" class="w-8 h-8 text-primary-400" />
            Our Core Values
          </h2>
          <ul class="space-y-4 text-gray-400">
            <li class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
              We put love first in everything we do
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
              We strive to be relevant and become a leader of culture
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
              We desire to feel like a home for everyone who enters our doors
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <section id="team" class="py-20 md:py-28 bg-gray-950 border-t border-gray-800">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16 flex items-center justify-center gap-2">
          <UIcon name="i-heroicons-user-group" class="w-10 h-10 text-primary-400" />
          Our Team
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.name" class="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-primary-500/30 transition-colors">
            <div class="aspect-square bg-gray-800">
              <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-white">{{ member.name }}</h3>
              <p class="text-primary-400 text-sm font-medium mb-3">{{ member.role }}</p>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ member.bio }}</p>
              <div class="flex gap-2">
                <a href="#" class="p-2 rounded-full bg-gray-700 text-gray-400 hover:text-primary-400 transition-colors" aria-label="Facebook"><UIcon name="i-heroicons-user-group" class="w-4 h-4" /></a>
                <a href="#" class="p-2 rounded-full bg-gray-700 text-gray-400 hover:text-primary-400 transition-colors" aria-label="Instagram"><UIcon name="i-heroicons-camera" class="w-4 h-4" /></a>
                <a href="#" class="p-2 rounded-full bg-gray-700 text-gray-400 hover:text-primary-400 transition-colors" aria-label="Twitter"><UIcon name="i-heroicons-chat-bubble-left-right" class="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ChurchHomeFooter />
  </div>
</template>

<script setup lang="ts">
const team = [
  { name: 'William Martinez', role: 'Lead Pastor', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
  { name: 'Michaella Smith', role: 'Marketing Leader', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
  { name: 'Michael Bobrowsky', role: 'Youth Pastor', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Paul Krasinsky', role: 'Logistics Leader', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Mohammed Dansky', role: 'Home Group Leader', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', image: 'https://images.unsplash.com/photo-1519085360753-af0759f7a77f?q=80&w=400&auto=format&fit=crop' },
  { name: 'Maria Bokova', role: 'Guest Services Leader', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' }
]
</script>
