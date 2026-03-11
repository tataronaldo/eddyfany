<template>
  <header class="church-home-nav fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
      <NuxtLink to="/ministry" class="text-xl font-bold text-white tracking-tight flex items-center gap-2">
        <img
              src="../assets/images/hero.png"
              class="rounded-2xl shadow-2xl w-8 h-8 text-primary-500"
              alt="Artistic Vision"
            >        Eddy Fany Ministry
      </NuxtLink>
      <nav class="hidden md:flex items-center gap-10">
        <NuxtLink to="/ministry/im-new" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors">
          I'm New
        </NuxtLink>
        <NuxtLink to="/ministry/services" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors">
          Services
        </NuxtLink>
        <NuxtLink to="/ministry/events" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors">
          Events
        </NuxtLink>
        <NuxtLink to="/ministry/about-us" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors">
          About Us
        </NuxtLink>
        <UButton to="/ministry/give" label="Give" size="sm" color="primary" />
      </nav>
      <UButton icon="i-heroicons-bars-3" color="neutral" variant="ghost" class="md:hidden text-white" />
    </div>
  </header>
</template>

<style scoped>
.church-home-nav {
  font-family: var(--church-heading-font, 'Inter', sans-serif);
}
</style>
