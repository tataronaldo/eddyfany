<template>
  <div class="min-h-screen bg-white dark:bg-slate-900">
    <TopNavbar />
    <UContainer class="py-16">
      <div class="max-w-4xl mx-auto">
        <UBadge
          label="Construction Services"
          variant="subtle"
          color="primary"
          size="lg"
          class="mb-4"
        />
        <h1 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Professional Construction Services
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 mb-8">
          Coming soon - Professional craftsmanship built on biblical integrity.
        </p>
        <UButton
          to="/"
          label="Back to Home"
          variant="outline"
        />
      </div>
    </UContainer>
  </div>
</template>