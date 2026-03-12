<script setup>
useHead({
  title: 'Testimonials - Eddy Fany Ministry',
  meta: [
    { name: 'description', content: 'Read powerful testimonies of how God is working through Eddy Fany Ministry to transform lives and bring hope to people.' }
  ]
})

const selectedCategory = ref('all')
const showForm = ref(false)

const categories = [
  { value: 'all', label: 'All Testimonials' },
  { value: 'healing', label: 'Healing' },
  { value: 'family', label: 'Family Restoration' },
  { value: 'financial', label: 'Financial Breakthrough' },
  { value: 'spiritual', label: 'Spiritual Growth' },
  { value: 'salvation', label: 'Salvation' }
]

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    category: 'healing',
    title: 'Healed from Chronic Illness',
    content: 'After years of suffering from a chronic illness that doctors couldn\'t treat, I came to Eddy Fany Ministry feeling hopeless. Apostle Eddy prayed for me with such faith and authority. Three months later, all my symptoms disappeared and medical tests confirmed I was completely healed. God is still in the miracle business!',
    date: '2024-03-01',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=200&auto=format&fit=crop',
    location: 'Nairobi, Kenya'
  },
  {
    id: 2,
    name: 'Michael Chen',
    category: 'financial',
    title: 'Business Turnaround',
    content: 'My business was on the verge of collapse with massive debts. The ministry\'s business mentorship program and Apostle Eddy\'s prophetic guidance helped me restructure everything. Today, my business is thriving and we\'ve been able to bless others through our success. God\'s wisdom is better than any business strategy!',
    date: '2024-02-28',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    location: 'Singapore'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    category: 'family',
    title: 'Marriage Restored',
    content: 'My husband and I were separated and heading for divorce. We attended the marriage counseling program at the ministry. Through biblical teaching and prayer, God healed our marriage completely. Today we\'re stronger than ever and even serve together in the marriage ministry.',
    date: '2024-02-25',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    location: 'Mexico City, Mexico'
  },
  {
    id: 4,
    name: 'David Thompson',
    category: 'spiritual',
    title: 'Found My Purpose',
    content: 'I was lost and searching for meaning in life. The discipleship program at Eddy Fany Ministry helped me discover my spiritual gifts and calling to ministry. Today I\'m serving as a youth pastor and seeing young lives transformed. This ministry truly raises leaders!',
    date: '2024-02-20',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    location: 'London, UK'
  },
  {
    id: 5,
    name: 'Grace Mbeki',
    category: 'healing',
    title: 'Delivered from Depression',
    content: 'For years I battled severe depression and anxiety. The prayer warriors at this ministry stood with me in faith. Through consistent prayer and counseling, God completely delivered me. I now have joy and peace that I never thought possible.',
    date: '2024-02-15',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    location: 'Johannesburg, South Africa'
  },
  {
    id: 6,
    name: 'James Wilson',
    category: 'salvation',
    title: 'New Life in Christ',
    content: 'I was living a life of addiction and hopelessness. A friend invited me to a service at Eddy Fany Ministry. That day, I encountered God\'s love and gave my life to Christ. I\'ve been free from addiction for two years now and my life is completely transformed.',
    date: '2024-02-10',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    location: 'New York, USA'
  }
]

const testimonialForm = ref({
  name: '',
  email: '',
  phone: '',
  category: 'all',
  title: '',
  testimony: '',
  allowSharing: false,
  allowContact: false
})

const filteredTestimonials = computed(() => {
  if (selectedCategory.value === 'all') {
    return testimonials
  }
  return testimonials.filter(testimonial => testimonial.category === selectedCategory.value)
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const submitTestimonial = async () => {
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  showForm.value = false
  // Reset form
  testimonialForm.value = {
    name: '',
    email: '',
    phone: '',
    category: 'all',
    title: '',
    testimony: '',
    allowSharing: false,
    allowContact: false
  }
}

const getCategoryIcon = (category) => {
  const icons = {
    healing: 'i-heroicons-heart',
    family: 'i-heroicons-home',
    financial: 'i-heroicons-banknotes',
    spiritual: 'i-heroicons-sparkles',
    salvation: 'i-heroicons-star'
  }
  return icons[category] || 'i-heroicons-chat-bubble-left-right'
}
</script>

<template>
  <div class="church-home-theme bg-gray-950 text-gray-100 antialiased min-h-screen">
    <ChurchHomeNavbar />

    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <UIcon name="i-heroicons-chat-bubble-left-right" class="w-10 h-10 text-primary-400" />
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
          Testimonials
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Real stories of transformed lives and God\'s faithfulness
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton 
            label="Share Your Story" 
            size="lg"
            color="primary"
            @click="showForm = true"
          />
          <UButton 
            label="Watch Video Testimonies" 
            size="lg"
            variant="outline"
            color="white"
          />
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="py-8 bg-gray-900 border-b border-gray-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-3">
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
      </div>
    </section>

    <!-- Featured Testimonial -->
    <section v-if="selectedCategory === 'all'" class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="bg-gradient-to-br from-primary-900/20 to-gray-800 rounded-2xl border border-green-400/30 p-8 lg:p-12">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="flex items-center gap-1 mb-6">
                <UIcon name="i-heroicons-star" class="w-6 h-6 text-yellow-400" v-for="i in 5" :key="i" />
              </div>
              <blockquote class="text-2xl text-gray-300 mb-6 italic leading-relaxed">
                "After years of suffering from a chronic illness that doctors couldn\'t treat, I came to Eddy Fany Ministry feeling hopeless. Apostle Eddy prayed for me with such faith and authority. Three months later, all my symptoms disappeared and medical tests confirmed I was completely healed. God is still in the miracle business!"
              </blockquote>
              <div class="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100&auto=format&fit=crop"
                  alt="Sarah Johnson"
                  class="w-16 h-16 rounded-full"
                >
                <div>
                  <div class="text-white font-bold text-lg">Sarah Johnson</div>
                  <div class="text-gray-400">Healed from Chronic Illness</div>
                  <div class="text-gray-500 text-sm">Nairobi, Kenya</div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <UIcon name="i-heroicons-heart" class="w-16 h-16 text-primary-400" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Featured Healing</h3>
              <p class="text-gray-400">March 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center text-white">Recent Testimonies</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard 
            v-for="testimonial in filteredTestimonials" 
            :key="testimonial.id"
            class="bg-gray-900 border-gray-800 hover:border-green-400 transition-all"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-1">
                  <UIcon name="i-heroicons-star" class="w-4 h-4 text-yellow-400" v-for="i in testimonial.rating" :key="i" />
                </div>
                <div class="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <UIcon :name="getCategoryIcon(testimonial.category)" class="w-5 h-5 text-primary-400" />
                </div>
              </div>
              
              <h3 class="text-xl font-bold mb-2 text-white">{{ testimonial.title }}</h3>
              <p class="text-gray-300 mb-6 line-clamp-4">{{ testimonial.content }}</p>
              
              <div class="flex items-center gap-3 mb-4">
                <img 
                  :src="testimonial.image" 
                  :alt="testimonial.name"
                  class="w-12 h-12 rounded-full"
                >
                <div>
                  <div class="text-white font-medium">{{ testimonial.name }}</div>
                  <div class="text-gray-400 text-sm">{{ testimonial.location }}</div>
                </div>
              </div>
              
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span>{{ formatDate(testimonial.date) }}</span>
                <UButton 
                  label="Read More" 
                  variant="ghost" 
                  color="primary"
                  size="sm"
                />
              </div>
            </div>
          </UCard>
        </div>

        <div v-if="filteredTestimonials.length === 0" class="text-center py-12">
          <UIcon name="i-heroicons-chat-bubble-left-right" class="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p class="text-gray-400">No testimonials found in this category.</p>
        </div>

        <div class="text-center mt-12">
          <UButton label="Load More Testimonials" variant="outline" color="white" size="lg" />
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-16 bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center text-white">Lives Transformed</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-400 mb-2">5000+</div>
            <div class="text-gray-300">Healing Testimonies</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-400 mb-2">2000+</div>
            <div class="text-gray-300">Salvations</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-400 mb-2">800+</div>
            <div class="text-gray-300">Families Restored</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-400 mb-2">1500+</div>
            <div class="text-gray-300">Breakthroughs</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Share Your Story Modal -->
    <UModal v-model="showForm" :ui="{ width: 'sm:max-w-2xl' }">
      <UCard class="bg-gray-900 border-gray-800">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-white">Share Your Testimony</h3>
            <UButton 
              icon="i-heroicons-x-mark" 
              variant="ghost" 
              color="gray"
              @click="showForm = false"
            />
          </div>
        </template>

        <div v-if="!isSubmitted" class="max-w-4xl mx-auto">
          <div class="bg-gray-900 rounded-2xl border border-gray-800 shadow-xl">
            <form @submit.prevent="submitTestimonial" class="p-8 space-y-8">
              <!-- Personal Information -->
              <div>
                <h3 class="text-2xl font-bold mb-6 text-white">Personal Information</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <UFormGroup label="Full Name" required class="w-full">
                    <UInput 
                      v-model="testimonialForm.name" 
                      placeholder="John Doe"
                      color="gray"
                      size="lg"
                      class="w-full transition-all duration-300 hover:border-green-400"
                    />
                  </UFormGroup>
                  <UFormGroup label="Email" required class="w-full">
                    <UInput 
                      v-model="testimonialForm.email" 
                      type="email"
                      placeholder="john@example.com"
                      color="gray"
                      size="lg"
                      class="w-full transition-all duration-300 hover:border-green-400"
                    />
                  </UFormGroup>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mt-6">
                  <UFormGroup label="Phone" class="w-full">
                    <UInput 
                      v-model="testimonialForm.phone" 
                      placeholder="+254 700 123 456"
                      color="gray"
                      size="lg"
                      class="w-full transition-all duration-300 hover:border-green-400"
                    />
                  </UFormGroup>
                  <UFormGroup label="Category" required class="w-full">
                    <USelect 
                      v-model="testimonialForm.category"
                      :options="categories.filter(c => c.value !== 'all')"
                      option-attribute="label"
                      value-attribute="value"
                      color="gray"
                      size="lg"
                      class="w-full transition-all duration-300 hover:border-green-400"
                    />
                  </UFormGroup>
                </div>
              </div>

              <!-- Testimony Details -->
              <div class="border-t border-gray-800 pt-8">
                <h3 class="text-2xl font-bold mb-6 text-white">Testimony Details</h3>
                
                <UFormGroup label="Testimony Title" required class="w-full">
                  <UInput 
                    v-model="testimonialForm.title" 
                    placeholder="Brief title of your testimony"
                    color="gray"
                    size="lg"
                    class="w-full transition-all duration-300 hover:border-green-400"
                  />
                </UFormGroup>

                <UFormGroup label="Your Testimony" required class="w-full mt-6">
                  <UTextarea 
                    v-model="testimonialForm.testimony"
                    placeholder="Share your story in detail..."
                    :rows="6"
                    color="gray"
                    class="w-full transition-all duration-300 hover:border-green-400"
                  />
                </UFormGroup>
              </div>

              <!-- Permissions -->
              <div class="border-t border-gray-800 pt-8">
                <h3 class="text-2xl font-bold mb-6 text-white">Permissions</h3>
                <div class="space-y-4">
                  <UCheckbox 
                    v-model="testimonialForm.allowSharing"
                    label="I allow my testimony to be shared publicly"
                    color="primary"
                    size="lg"
                    class="cursor-pointer"
                  />
                  <UCheckbox 
                    v-model="testimonialForm.allowContact"
                    label="I allow the ministry team to contact me for follow-up"
                    color="primary"
                    size="lg"
                    class="cursor-pointer"
                  />
                </div>
              </div>

              <!-- Submit Button -->
              <div class="pt-8 border-t border-gray-800">
                <UButton 
                  type="submit"
                  :loading="isSubmitting"
                  :disabled="!testimonialForm.name || !testimonialForm.email || !testimonialForm.title || !testimonialForm.testimony"
                  size="xl"
                  color="primary"
                  block
                  class="w-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  {{ isSubmitting ? 'Submitting...' : 'Submit Testimony' }}
                </UButton>
              </div>
            </form>
          </div>
        </div>
      </UCard>
    </UModal>

    <ChurchHomeFooter />
  </div>
</template>
