<template>
  <header class="fixed top-0 w-full z-50 px-6 py-8 transition-all duration-500">
    <UContainer class="flex items-center justify-between max-w-7xl">
      <NuxtLink to="/" class="text-white font-black text-2xl tracking-tighter uppercase">
        Pastor [Name]
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
        <NuxtLink to="/ministry" class="hover:text-white transition-colors">Home</NuxtLink>
        <NuxtLink to="/ministry/groups" class="hover:text-white transition-colors">Home Groups</NuxtLink>
        <NuxtLink to="/construction" class="hover:text-white transition-colors">Construction</NuxtLink>
        <NuxtLink to="/about" class="hover:text-white transition-colors">About</NuxtLink>
      </nav>

      <UButton 
        label="Watch Now" 
        variant="outline" 
        color="white" 
        class="rounded-none px-6 py-2 text-[10px] font-bold tracking-widest uppercase border-white/20 hover:bg-white hover:text-black transition-all"
      />
    </UContainer>
  </header>
</template>