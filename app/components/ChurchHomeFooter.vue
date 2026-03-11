<template>
  <footer class="bg-gray-950 text-white py-16 md:py-20 border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
        <div class="space-y-4 max-w-xs">
          <p class="font-bold text-lg">Eddy Fany Minisitry</p>
          <p class="text-gray-400 text-sm">Service Times: Sundays at 10:30AM</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-12">
          <div>
            <h3 class="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Service</h3>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/ministry/services" class="text-gray-400 hover:text-white transition-colors">Sunday Sermons</NuxtLink></li>
              <li><NuxtLink to="/ministry/services#events" class="text-gray-400 hover:text-white transition-colors">Events</NuxtLink></li>
              <li><NuxtLink to="/ministry/services" class="text-gray-400 hover:text-white transition-colors">Locations</NuxtLink></li>
              <li><NuxtLink to="/ministry/im-new#faq" class="text-gray-400 hover:text-white transition-colors">FAQ</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Get Involved</h3>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/ministry#get-involved" class="text-gray-400 hover:text-white transition-colors">Volunteer</NuxtLink></li>
              <li><NuxtLink to="/ministry/home-groups" class="text-gray-400 hover:text-white transition-colors">Home Groups</NuxtLink></li>
              <li><NuxtLink to="/ministry/im-new" class="text-gray-400 hover:text-white transition-colors">I'm new</NuxtLink></li>
              <li><NuxtLink to="/ministry/give" class="text-gray-400 hover:text-white transition-colors">Give</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">About Us</h3>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/ministry/about-us#team" class="text-gray-400 hover:text-white transition-colors">Our Team</NuxtLink></li>
              <li><NuxtLink to="/ministry/about-us#vision" class="text-gray-400 hover:text-white transition-colors">Vision</NuxtLink></li>
              <li><NuxtLink to="/ministry/about-us#mission" class="text-gray-400 hover:text-white transition-colors">Mission</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Social Media</h3>
            <div class="flex gap-3">
              <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><UIcon name="i-heroicons-camera" class="w-5 h-5" /></a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="YouTube"><UIcon name="i-heroicons-play-circle" class="w-5 h-5" /></a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="Facebook"><UIcon name="i-heroicons-user-group" class="w-5 h-5" /></a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="TikTok"><UIcon name="i-heroicons-musical-note" class="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>© 2026 Eddy Fany Ministry. Powered by GPRIMAX. All rights reserved</p>
      </div>
    </div>
  </footer>
</template>
