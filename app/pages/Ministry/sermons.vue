<script setup>
useHead({
  title: 'Sermons - Eddy Fany Ministry',
  meta: [
    { name: 'description', content: 'Listen to powerful sermons and teachings from Apostle Eddy Fany. Grow in your faith with biblical wisdom and inspiration.' }
  ]
})

const sermons = [
  {
    id: 1,
    title: 'Walking in Divine Purpose',
    date: '2024-03-10',
    speaker: 'Apostle Eddy Fany',
    duration: '45:32',
    description: 'Discover your God-given purpose and learn how to walk confidently in the path God has designed for you.',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    audioUrl: '#',
    videoUrl: '#'
  },
  {
    id: 2,
    title: 'The Power of Faith in Action',
    date: '2024-03-03',
    speaker: 'Apostle Eddy Fany',
    duration: '38:21',
    description: 'Learn how to activate your faith and see miraculous results in every area of your life.',
    thumbnail: 'https://images.unsplash.com/photo-1498758536668-5bba4e7ee69f?q=80&w=400&auto=format&fit=crop',
    audioUrl: '#',
    videoUrl: '#'
  },
  {
    id: 3,
    title: 'Building Strong Foundations',
    date: '2024-02-25',
    speaker: 'Apostle Eddy Fany',
    duration: '42:15',
    description: 'Establish unshakable foundations in your spiritual life based on biblical principles.',
    thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop',
    audioUrl: '#',
    videoUrl: '#'
  },
  {
    id: 4,
    title: 'Overcoming Life\'s Challenges',
    date: '2024-02-18',
    speaker: 'Apostle Eddy Fany',
    duration: '40:45',
    description: 'Find strength and hope through God\'s word as you navigate through difficult seasons.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop',
    audioUrl: '#',
    videoUrl: '#'
  }
]

const selectedSermon = ref(null)
const isPlaying = ref(false)

const playSermon = (sermon) => {
  selectedSermon.value = sermon
  isPlaying.value = true
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<template>
  <div class="church-home-theme bg-gray-950 text-gray-100 antialiased min-h-screen">
    <ChurchHomeNavbar />

    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
          Sermons & Teachings
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Be inspired and equipped through powerful biblical teachings from Apostle Eddy Fany
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton size="lg" label="Latest Sermon" color="primary" />
          <UButton size="lg" label="Watch Live" variant="outline" color="white" />
        </div>
      </div>
    </section>

    <!-- Featured Sermon -->
    <section v-if="selectedSermon" class="py-16 bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="aspect-video bg-gray-800 rounded-xl overflow-hidden mb-6">
              <img 
                :src="selectedSermon.thumbnail" 
                :alt="selectedSermon.title"
                class="w-full h-full object-cover"
              >
            </div>
            <div class="flex items-center gap-4">
              <UButton 
                @click="isPlaying = !isPlaying"
                :icon="isPlaying ? 'i-heroicons-pause' : 'i-heroicons-play'"
                size="lg"
                color="primary"
              />
              <div class="flex-1">
                <div class="bg-gray-700 rounded-full h-2">
                  <div class="bg-primary-500 h-2 rounded-full" style="width: 35%"></div>
                </div>
              </div>
              <span class="text-sm text-gray-400">{{ selectedSermon.duration }}</span>
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4 text-white">{{ selectedSermon.title }}</h2>
            <div class="flex items-center gap-4 mb-4 text-gray-400">
              <span>{{ formatDate(selectedSermon.date) }}</span>
              <span>•</span>
              <span>{{ selectedSermon.speaker }}</span>
              <span>•</span>
              <span>{{ selectedSermon.duration }}</span>
            </div>
            <p class="text-lg text-gray-300 mb-6">{{ selectedSermon.description }}</p>
            <div class="flex gap-4">
              <UButton label="Download Audio" variant="outline" color="white" />
              <UButton label="Watch Video" variant="outline" color="white" />
              <UButton label="Share" variant="outline" color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sermons List -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8 text-center text-white">Recent Sermons</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <UCard 
            v-for="sermon in sermons" 
            :key="sermon.id"
            class="bg-gray-900 border-gray-800 hover:border-primary-400 transition-all cursor-pointer group"
            @click="playSermon(sermon)"
          >
            <div class="p-6">
              <div class="flex gap-6">
                <div class="flex-shrink-0">
                  <div class="w-24 h-24 bg-gray-800 rounded-lg overflow-hidden">
                    <img 
                      :src="sermon.thumbnail" 
                      :alt="sermon.title"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    >
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
                    {{ sermon.title }}
                  </h3>
                  <div class="text-sm text-gray-400 mb-2">
                    {{ formatDate(sermon.date) }} • {{ sermon.duration }}
                  </div>
                  <p class="text-gray-300 text-sm line-clamp-2">{{ sermon.description }}</p>
                </div>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <div class="flex gap-2">
                  <UButton 
                    size="sm" 
                    icon="i-heroicons-play" 
                    variant="ghost" 
                    color="primary"
                    @click.stop="playSermon(sermon)"
                  />
                  <UButton 
                    size="sm" 
                    icon="i-heroicons-arrow-down-tray" 
                    variant="ghost" 
                    color="gray"
                    @click.stop
                  />
                </div>
                <span class="text-xs text-gray-500">{{ sermon.speaker }}</span>
              </div>
            </div>
          </UCard>
        </div>

        <div class="text-center mt-12">
          <UButton label="Load More Sermons" variant="outline" color="white" size="lg" />
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4 text-white">Never Miss a Sermon</h2>
        <p class="text-gray-300 mb-8">Get weekly sermons and updates delivered to your inbox</p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <UInput 
            placeholder="Enter your email" 
            size="lg" 
            class="flex-1"
            color="gray"
          />
          <UButton label="Subscribe" size="lg" color="primary" />
        </div>
      </div>
    </section>

    <ChurchHomeFooter />
  </div>
</template>
