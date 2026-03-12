<script setup>
useHead({
  title: 'Blog - Eddy Fany Ministry',
  meta: [
    { name: 'description', content: 'Read inspiring articles, biblical teachings, and spiritual insights from Apostle Eddy Fany and the ministry team.' }
  ]
})

const selectedCategory = ref('all')
const searchQuery = ref('')

const categories = [
  { value: 'all', label: 'All Posts' },
  { value: 'teaching', label: 'Teaching' },
  { value: 'testimony', label: 'Testimony' },
  { value: 'devotional', label: 'Devotional' },
  { value: 'news', label: 'News & Updates' },
  { value: 'outreach', label: 'Outreach' }
]

const blogPosts = [
  {
    id: 1,
    slug: 'finding-peace-in-troubled-times',
    title: 'Finding Peace in Troubled Times',
    excerpt: 'Discover how to maintain inner peace and trust in God even when life feels chaotic and uncertain.',
    content: 'In this comprehensive guide, we explore biblical principles for finding peace...',
    author: 'Apostle Eddy Fany',
    date: '2024-03-12',
    category: 'teaching',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop',
    featured: true,
    tags: ['peace', 'faith', 'trust']
  },
  {
    id: 2,
    slug: 'the-power-of-persistent-prayer',
    title: 'The Power of Persistent Prayer',
    excerpt: 'Learn why consistency in prayer matters and how to develop a prayer life that transforms circumstances.',
    content: 'Prayer is not just a religious duty but a powerful spiritual weapon...',
    author: 'Pastor Sarah Johnson',
    date: '2024-03-10',
    category: 'devotional',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1498758536668-5bba4e7ee69f?q=80&w=600&auto=format&fit=crop',
    featured: false,
    tags: ['prayer', 'persistence', 'faith']
  },
  {
    id: 3,
    slug: 'from-brokenness-to-purpose',
    title: 'From Brokenness to Purpose',
    excerpt: 'A powerful testimony of how God can take our deepest pain and transform it into our greatest purpose.',
    content: 'My journey began in a place of deep brokenness and despair...',
    author: 'Michael Chen',
    date: '2024-03-08',
    category: 'testimony',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    featured: false,
    tags: ['testimony', 'healing', 'purpose']
  },
  {
    id: 4,
    slug: 'community-outreach-report-february-2024',
    title: 'Community Outreach Report: February 2024',
    excerpt: 'Celebrating the impact of our community service initiatives and lives touched through your generosity.',
    content: 'This month has been remarkable for our outreach programs...',
    author: 'Outreach Team',
    date: '2024-03-05',
    category: 'news',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop',
    featured: false,
    tags: ['outreach', 'community', 'impact']
  },
  {
    id: 5,
    slug: 'understanding-divine-timing',
    title: 'Understanding Divine Timing',
    excerpt: 'Why God\'s timing is perfect and how to trust the process when answers seem delayed.',
    content: 'One of the greatest challenges in our faith journey is waiting...',
    author: 'Apostle Eddy Fany',
    date: '2024-03-03',
    category: 'teaching',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    featured: false,
    tags: ['timing', 'trust', 'faith']
  },
  {
    id: 6,
    slug: 'building-strong-families',
    title: 'Building Strong Families',
    excerpt: 'Biblical principles for creating lasting family bonds that honor God and withstand life\'s challenges.',
    content: 'Family is God\'s design for nurturing love and support...',
    author: 'Family Ministry Team',
    date: '2024-03-01',
    category: 'teaching',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop',
    featured: false,
    tags: ['family', 'relationships', 'biblical']
  }
]

const filteredPosts = computed(() => {
  let posts = blogPosts
  
  if (selectedCategory.value !== 'all') {
    posts = posts.filter(post => post.category === selectedCategory.value)
  }
  
  if (searchQuery.value) {
    posts = posts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))
    )
  }
  
  return posts
})

const featuredPost = computed(() => {
  return blogPosts.find(post => post.featured)
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const getCategoryColor = (category) => {
  const colors = {
    teaching: 'blue',
    testimony: 'green',
    devotional: 'purple',
    news: 'orange',
    outreach: 'red'
  }
  return colors[category] || 'gray'
}
</script>

<template>
  <div class="church-home-theme bg-gray-950 text-gray-100 antialiased min-h-screen">
    <ChurchHomeNavbar />

    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <UIcon name="i-heroicons-document-text" class="w-10 h-10 text-primary-400" />
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
          Blog & Insights
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Discover biblical wisdom, inspiring testimonies, and spiritual growth insights
        </p>
      </div>
    </section>

    <!-- Search and Filter -->
    <section class="py-8 bg-gray-900 border-b border-gray-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div class="flex flex-wrap gap-3">
            <UButton
              v-for="category in categories"
              :key="category.value"
              :label="category.label"
              :variant="selectedCategory === category.value ? 'solid' : 'outline'"
              :color="selectedCategory === category.value ? 'primary' : 'gray'"
              size="sm"
              @click="selectedCategory = category.value"
            />
          </div>
          <div class="relative w-full lg:w-80">
            <UInput 
              v-model="searchQuery"
              placeholder="Search posts..."
              icon="i-heroicons-magnifying-glass"
              color="gray"
              size="sm"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section v-if="featuredPost && selectedCategory === 'all' && !searchQuery" class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="bg-gradient-to-br from-primary-900/20 to-gray-800 rounded-2xl border border-primary-400/30 overflow-hidden">
          <div class="grid lg:grid-cols-2 gap-8">
            <div class="relative">
              <img 
                :src="featuredPost.image" 
                :alt="featuredPost.title"
                class="w-full h-full object-cover"
              >
              <div class="absolute top-4 left-4">
                <UBadge label="Featured" color="primary" />
              </div>
            </div>
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-4 mb-4">
                <UBadge 
                  :label="featuredPost.category" 
                  :color="getCategoryColor(featuredPost.category)"
                  variant="subtle"
                />
                <span class="text-gray-400 text-sm">{{ featuredPost.readTime }}</span>
              </div>
              <h2 class="text-3xl font-bold mb-4 text-white">{{ featuredPost.title }}</h2>
              <p class="text-gray-300 mb-6 text-lg">{{ featuredPost.excerpt }}</p>
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <UIcon name="i-heroicons-user" class="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div class="text-white font-medium">{{ featuredPost.author }}</div>
                    <div class="text-gray-400 text-sm">{{ formatDate(featuredPost.date) }}</div>
                  </div>
                </div>
              </div>
              <UButton 
                label="Read Full Article" 
                size="lg"
                color="primary"
                trailing-icon="i-heroicons-arrow-right"
                :to="`/ministry/blog/${featuredPost.slug}`"
                class="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard 
            v-for="post in filteredPosts" 
            :key="post.id"
            class="bg-gray-900 border-gray-800 hover:border-primary-400 transition-all group cursor-pointer"
          >
            <div class="relative">
              <img 
                :src="post.image" 
                :alt="post.title"
                class="w-full h-48 object-cover rounded-t-xl"
              >
              <div class="absolute top-4 left-4">
                <UBadge 
                  :label="post.category" 
                  :color="getCategoryColor(post.category)"
                  variant="subtle"
                  size="sm"
                />
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-gray-400 text-sm">{{ post.readTime }}</span>
                <span class="text-gray-600">•</span>
                <span class="text-gray-400 text-sm">{{ formatDate(post.date) }}</span>
              </div>
              <h3 class="text-xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">
                {{ post.title }}
              </h3>
              <p class="text-gray-300 mb-4 line-clamp-3">{{ post.excerpt }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <UBadge 
                  v-for="tag in post.tags" 
                  :key="tag"
                  :label="tag"
                  variant="outline"
                  color="gray"
                  size="sm"
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <UIcon name="i-heroicons-user" class="w-4 h-4 text-gray-400" />
                  </div>
                  <span class="text-sm text-gray-400">{{ post.author }}</span>
                </div>
                <UButton 
                  label="Read More" 
                  variant="ghost" 
                  color="primary"
                  size="sm"
                  :to="`/ministry/blog/${post.slug}`"
                  class="cursor-pointer"
                />
              </div>
            </div>
          </UCard>
        </div>

        <div v-if="filteredPosts.length === 0" class="text-center py-12">
          <UIcon name="i-heroicons-document-text" class="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p class="text-gray-400">No posts found matching your criteria.</p>
        </div>

        <div class="text-center mt-12">
          <UButton label="Load More Posts" variant="outline" color="white" size="lg" />
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4 text-white">Stay Connected</h2>
        <p class="text-gray-300 mb-8">Get weekly devotionals and ministry updates delivered to your inbox</p>
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
