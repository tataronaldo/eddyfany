<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Eddy Fany Ministry - Building Faith & Foundations'
const description = 'Apostle Eddy Fany brings spiritual guidance and professional construction services with biblical integrity. Transform your life and property.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-900">
    <TopNavbar />
    
    <!-- Hero Section -->
    <section id="hero" class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-primary-50 dark:from-slate-900 dark:via-slate-900 dark:to-green-950"></div>
      <UContainer class="relative py-20 md:py-32">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div class="space-y-4">
              <UBadge
                label="Welcome to Eddy Fany Ministry"
                variant="subtle"
                color="primary"
                size="lg"
              />
              <h1 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
                Building Faith & <br><span class="text-primary-600 dark:text-primary-400">Foundations</span>
              </h1>
              <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Apostle Eddy Fany brings spiritual guidance and professional construction services with biblical integrity. Transform your life and property through faith and excellence.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <UButton
                size="xl"
                label="Explore Ministry"
                to="/ministry"
                trailing-icon="i-heroicons-arrow-right"
                class="flex-1"
              />
              <UButton
                size="xl"
                label="Construction Services"
                to="/construction"
                variant="outline"
                class="flex-1"
              />
            </div>
            <div class="flex items-center gap-6 pt-4">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">15+</div>
                <div class="text-sm text-slate-600 dark:text-slate-400">Years Ministry</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">100+</div>
                <div class="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">1000+</div>
                <div class="text-sm text-slate-600 dark:text-slate-400">Lives Impacted</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-gray-200/20 to-gray-200/20 rounded-3xl transform rotate-6"></div>
            <img
              src="../assets/images/hero.png"
              class="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              alt="Apostle Eddy Fany Ministry"
            >
          </div>
        </div>
      </UContainer>
    </section>
    <!-- Quick Navigation -->
    <section class="bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <UContainer class="py-8">
        <div class="flex flex-wrap justify-center gap-4 md:gap-8">
          <button
            v-for="section in ['ministry', 'construction', 'testimonials', 'contact']"
            :key="section"
            @click="scrollToSection(section)"
            class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary-400 transition-colors capitalize"
          >
            {{ section.replace('-', ' ') }}
          </button>
        </div>
      </UContainer>
    </section>

    <!-- Ministry Section -->
    <section id="ministry" class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <UBadge
            label="Spiritual Guidance"
            variant="subtle"
            color="primary"
            size="lg"
            class="mb-4"
          />
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            Ministry & <span class="text-primary-600 dark:text-primary-400">Spiritual Growth</span>
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Experience the transformative power of faith through our comprehensive ministry programs, community outreach, and spiritual guidance.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <UCard class="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <div class="p-8">
              <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                <UIcon name="i-heroicons-heart" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Spiritual Counseling</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-6">
                Personalized guidance and support through life's challenges with biblical wisdom and prayer.
              </p>
              <UButton
                label="Learn More"
                to="/ministry/services"
                variant="ghost"
                color="primary"
                block
              />
            </div>
          </UCard>

          <UCard class="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <div class="p-8">
              <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                <UIcon name="i-heroicons-users" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Community Groups</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-6">
                Join our vibrant community of believers for fellowship, support, and spiritual growth together.
              </p>
              <UButton
                label="Join a Group"
                to="/ministry/home-groups"
                variant="ghost"
                color="primary"
                block
              />
            </div>
          </UCard>

          <UCard class="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <div class="p-8">
              <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                <UIcon name="i-heroicons-calendar-days" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Weekly Services</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-6">
                Join us for powerful worship, inspiring messages, and life-changing prayer every week.
              </p>
              <UButton
                label="Service Times"
                to="/ministry/events"
                variant="ghost"
                color="primary"
                block
              />
            </div>
          </UCard>
        </div>

        <div class="text-center">
          <UButton
            size="xl"
            label="Explore Full Ministry"
            to="/ministry"
            trailing-icon="i-heroicons-arrow-right"
          />
        </div>
      </UContainer>
    </section>

    <!-- Construction Section -->
    <section id="construction" class="py-20 bg-slate-50 dark:bg-slate-900">
      <UContainer>
        <div class="text-center mb-16">
          <UBadge
            label="Professional Services"
            variant="subtle"
            color="primary"
            size="lg"
            class="mb-4"
          />
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            Construction & <span class="text-primary-600 dark:text-primary-400">Building Excellence</span>
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Professional craftsmanship built on biblical integrity. From residential homes to commercial projects, we build with excellence and trust.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div class="space-y-6">
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UIcon name="i-heroicons-home" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">Residential Construction</h3>
                  <p class="text-slate-600 dark:text-slate-400">Custom homes, renovations, and remodeling with attention to detail and quality craftsmanship.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UIcon name="i-heroicons-building-office" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">Commercial Projects</h3>
                  <p class="text-slate-600 dark:text-slate-400">Office buildings, retail spaces, and commercial renovations built to your specifications.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UIcon name="i-heroicons-shield-check" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">Safety & Integrity</h3>
                  <p class="text-slate-600 dark:text-slate-400">Fully licensed, insured, and committed to biblical principles in all our business practices.</p>
                </div>
              </div>
            </div>
            <UButton
              size="lg"
              label="View Our Work"
              to="/construction"
              trailing-icon="i-heroicons-arrow-right"
            />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1582407947304-cd980d5df874?q=80&w=400&auto=format&fit=crop"
              class="rounded-xl shadow-lg w-full h-48 object-cover"
              alt="Construction project 1"
            >
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=400&auto=format&fit=crop"
              class="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              alt="Construction project 2"
            >
            <img
              src="https://images.unsplash.com/photo-1464979043179-362b0c1a9e80?q=80&w=400&auto=format&fit=crop"
              class="rounded-xl shadow-lg w-full h-48 object-cover"
              alt="Construction project 3"
            >
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop"
              class="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              alt="Construction project 4"
            >
          </div>
        </div>
      </UContainer>
    </section>
    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <UBadge
            label="Testimonials"
            variant="subtle"
            color="primary"
            size="lg"
            class="mb-4"
          />
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            Lives <span class="text-primary-600 dark:text-primary-400">Transformed</span>
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Hear from people whose lives have been touched through our ministry and construction services.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <UCard class="border-0 shadow-lg">
            <div class="p-8">
              <div class="flex mb-4">
                <UIcon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" v-for="i in 5" :key="i" />
              </div>
              <p class="text-slate-600 dark:text-slate-400 mb-6 italic">
                "Apostle Eddy Fany's guidance helped me through the darkest time of my life. His wisdom and prayer changed everything."
              </p>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-user" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <div class="font-bold text-slate-900 dark:text-white">Sarah Johnson</div>
                  <div class="text-sm text-slate-600 dark:text-slate-400">Ministry Member</div>
                </div>
              </div>
            </div>
          </UCard>

          <UCard class="border-0 shadow-lg">
            <div class="p-8">
              <div class="flex mb-4">
                <UIcon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" v-for="i in 5" :key="i" />
              </div>
              <p class="text-slate-600 dark:text-slate-400 mb-6 italic">
                "The construction work exceeded our expectations. Professional, honest, and built with integrity. Highly recommend!"
              </p>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-user" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <div class="font-bold text-slate-900 dark:text-white">Michael Chen</div>
                  <div class="text-sm text-slate-600 dark:text-slate-400">Construction Client</div>
                </div>
              </div>
            </div>
          </UCard>

          <UCard class="border-0 shadow-lg">
            <div class="p-8">
              <div class="flex mb-4">
                <UIcon name="i-heroicons-star" class="w-5 h-5 text-yellow-400" v-for="i in 5" :key="i" />
              </div>
              <p class="text-slate-600 dark:text-slate-400 mb-6 italic">
                "The community here is amazing. I've grown so much spiritually and found true friendship and support."
              </p>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-user" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <div class="font-bold text-slate-900 dark:text-white">Emily Rodriguez</div>
                  <div class="text-sm text-slate-600 dark:text-slate-400">Church Member</div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-primary-600 to-green-600">
      <UContainer class="text-center">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
          Ready to Begin Your Journey?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Whether you're seeking spiritual guidance or need construction services, we're here to help with excellence and integrity.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            size="xl"
            label="Visit Ministry"
            to="/ministry"
            variant="white"
            class="flex-1 sm:flex-initial"
          />
          <UButton
            size="xl"
            label="Contact Us"
            to="/contact"
            variant="outline"
            color="white"
            class="flex-1 sm:flex-initial"
          />
        </div>
        <div class="flex justify-center gap-6">
          <a 
            href="https://www.facebook.com/eddyfanyministry" 
            class="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-primary-500/20 hover:text-primary-600 transition-all duration-300 transform hover:scale-110 cursor-pointer" 
            aria-label="Facebook"
          >
            <UIcon name="i-simple-icons-facebook" class="w-6 h-6" />
          </a>
          <a 
            href="https://twitter.com/eddyfanyministry" 
            class="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-primary-500/20 hover:text-primary-600 transition-all duration-300 transform hover:scale-110 cursor-pointer" 
            aria-label="Twitter"
          >
            <UIcon name="i-simple-icons-twitter" class="w-6 h-6" />
          </a>
          <a 
            href="https://www.instagram.com/eddyfanyministry" 
            class="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-primary-500/20 hover:text-primary-600 transition-all duration-300 transform hover:scale-110 cursor-pointer" 
            aria-label="Instagram"
          >
            <UIcon name="i-simple-icons-instagram" class="w-6 h-6" />
          </a>
          <a 
            href="https://www.youtube.com/@eddyfanyministry" 
            class="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-primary-500/20 hover:text-primary-600 transition-all duration-300 transform hover:scale-110 cursor-pointer" 
            aria-label="YouTube"
          >
            <UIcon name="i-simple-icons-youtube" class="w-6 h-6" />
          </a>
          <a 
            href="https://wa.me/254700123456" 
            class="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-primary-500/20 hover:text-primary-600 transition-all duration-300 transform hover:scale-110 cursor-pointer" 
            aria-label="WhatsApp"
          >
            <UIcon name="i-simple-icons-whatsapp" class="w-6 h-6" />
          </a>
        </div>
      </UContainer>
    </section>
  </div>
</template>
