<template>
  <div class="min-h-screen bg-white dark:bg-slate-900">
    <TopNavbar />
    <div class="border-b border-gray-200 dark:border-gray-800">
      <UContainer class="py-16 md:py-24">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <UBadge
              label="Learn Hub"
              variant="subtle"
              color="primary"
              size="lg"
            />
            <h1 class="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Building Faith & <br> Foundations
            </h1>
            <p class="text-xl text-slate-600 dark:text-slate-400">
              Your educational guide to the spiritual ministry and professional construction services of Apostle Eddy Fany.
            </p>
            <UButton
              size="xl"
              label="Let's get started"
              trailing-icon="i-heroicons-arrow-right"
            />
          </div>
          <div class="block">
            <img
              src="../assets/images/hero.png"
              class="rounded-2xl shadow-2xl"
              alt="Artistic Vision"
            >
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-12">
      <div class="flex flex-col lg:flex-row gap-16">
        <aside class="lg:w-64 shrink-0">
          <div class="sticky top-24">
            <h3 class="font-bold text-sm uppercase tracking-widest text-slate-500 mb-6">
              On this page
            </h3>
            <nav class="space-y-4">
              <a
                v-for="link in ['What is the Ministry?', 'Construction Services', 'Community Outreach', 'Books and Resources']"
                :key="link"
                href="#"
                class="block text-slate-600 hover:text-primary transition-colors font-medium text-base"
              >
                {{ link }}
              </a>
            </nav>
          </div>
        </aside>

        <main class="flex-1 space-y-24 pb-24">
          <section>
            <h2 class="text-3xl font-extrabold mb-4">
              What is the Ministry?
            </h2>
            <p class="text-lg text-slate-600 mb-8 max-w-2xl">
              Start here to learn why spiritual guidance matters and how we foster a community of hope.
            </p>

            <div class="grid md:grid-cols-3 gap-6">
              <UCard
                v-for="i in 3"
                :key="i"
                class="hover:border-primary transition-colors cursor-pointer group"
              >
                <h4 class="font-bold text-lg mb-2 group-hover:text-primary">
                  Ministry Pillar {{ i }}
                </h4>
                <p class="text-sm text-slate-500 mb-4 italic">
                  Learn how we serve the spirit through outreach.
                </p>
                <img
                  :src="`https://picsum.photos/seed/min${i}/400/300`"
                  class="w-full h-32 object-cover mb-4 grayscale group-hover:grayscale-0 transition-all"
                >
                <UButton
                  label="Read more"
                  variant="ghost"
                  color="primary"
                  block
                  class="mt-2"
                />
              </UCard>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-extrabold mb-4">
              Construction & Services
            </h2>
            <p class="text-lg text-slate-600 mb-8 max-w-2xl">
              Professional craftsmanship built on biblical integrity. From residential builds to commercial renovations.
            </p>

            <div class="space-y-3">
              <div
                v-for="item in ['Residential Projects', 'Commercial Contracting', 'Safety & Integrity Standards']"
                :key="item"
                class="p-4 border border-gray-200 dark:border-gray-800 flex justify-between items-center hover:bg-slate-50 transition-colors group"
              >
                <div class="flex items-center gap-4">
                  <UIcon
                    name="i-heroicons-document-text"
                    class="w-6 h-6 text-slate-400"
                  />
                  <span class="font-bold group-hover:text-primary">{{ item }}</span>
                </div>
                <UIcon
                  name="i-heroicons-arrow-right"
                  class="w-5 h-5 text-slate-300 group-hover:text-primary"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </UContainer>
  </div>
</template>
