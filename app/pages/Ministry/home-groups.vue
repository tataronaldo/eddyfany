<template>
  <div class="church-home-theme bg-gray-950 text-gray-100 min-h-screen">
    <ChurchHomeNavbar />

    <!-- Hero with images strip -->
    <header class="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
      <div class="absolute inset-0">
        <div class="absolute inset-0 grid grid-cols-5">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop" alt="" class="w-full h-full object-cover opacity-80">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop" alt="" class="w-full h-full object-cover opacity-80">
          <img src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=600&auto=format&fit=crop" alt="" class="w-full h-full object-cover opacity-80">
          <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=600&auto=format&fit=crop" alt="" class="w-full h-full object-cover opacity-80">
          <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop" alt="" class="w-full h-full object-cover opacity-80">
        </div>
        <div class="absolute inset-0 bg-black/70" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Home Groups</h1>
        <p class="text-xl text-gray-300">Find your community right inside our church.</p>
      </div>
    </header>

    <!-- Groups grid -->
    <section class="py-20 md:py-28 bg-gray-900">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-primary-500/30 transition-colors">
            <div class="aspect-video bg-gray-800">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Christina's Group" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <UIcon name="i-heroicons-user-group" class="w-5 h-5 text-primary-400" />
                Christina's Group
              </h3>
              <p class="text-gray-400 text-sm flex items-center gap-2 mb-2">
                <UIcon name="i-heroicons-wifi" class="w-4 h-4 shrink-0" />
                Online — Zoom Home Group
              </p>
              <p class="text-gray-400 text-sm flex items-center gap-2 mb-4">
                <UIcon name="i-heroicons-clock" class="w-4 h-4 shrink-0" />
                Tuesday, 7:00PM
              </p>
              <UButton label="Register" color="primary" size="sm" class="w-full" />
            </div>
          </div>
          <div class="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-primary-500/30 transition-colors">
            <div class="aspect-video bg-gray-800">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" alt="Maria's Group" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <UIcon name="i-heroicons-user-group" class="w-5 h-5 text-primary-400" />
                Maria's Group
              </h3>
              <p class="text-gray-400 text-sm flex items-center gap-2 mb-2">
                <UIcon name="i-heroicons-wifi" class="w-4 h-4 shrink-0" />
                Online — WhatsApp & Zoom
              </p>
              <p class="text-gray-400 text-sm flex items-center gap-2 mb-4">
                <UIcon name="i-heroicons-clock" class="w-4 h-4 shrink-0" />
                Wednesday, 6:30PM
              </p>
              <UButton label="Register" color="primary" size="sm" class="w-full" />
            </div>
          </div>
          <div class="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-primary-500/30 transition-colors">
            <div class="aspect-video bg-gray-800">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" alt="Mohammed's Group" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <UIcon name="i-heroicons-user-group" class="w-5 h-5 text-primary-400" />
                Mohammed's Group
              </h3>
              <p class="text-gray-400 text-sm flex items-center gap-2 mb-2">
                <UIcon name="i-heroicons-wifi" class="w-4 h-4 shrink-0" />
                Online — Telegram Bible Circle
              </p>
              <p class="text-gray-400 text-sm flex items-center gap-2 mb-4">
                <UIcon name="i-heroicons-clock" class="w-4 h-4 shrink-0" />
                Thursdays, 7:00PM
              </p>
              <UButton label="Register" color="primary" size="sm" class="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join form -->
    <section class="py-20 md:py-28 bg-gray-950 border-t border-gray-800">
      <div class="max-w-2xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <UIcon name="i-heroicons-user-plus" class="w-8 h-8 text-primary-400" />
          Join a Home Group
        </h2>
        <form class="mt-8 space-y-6 bg-gray-800/50 rounded-2xl p-8 border border-gray-700" @submit.prevent="onJoinSubmit">
          <div class="grid sm:grid-cols-2 gap-6">
            <UFormGroup label="First Name">
              <UInput v-model="joinForm.firstName" required />
            </UFormGroup>
            <UFormGroup label="Last Name">
              <UInput v-model="joinForm.lastName" required />
            </UFormGroup>
          </div>
          <div class="grid sm:grid-cols-2 gap-6">
            <UFormGroup label="Phone Number">
              <UInput v-model="joinForm.phone" type="tel" />
            </UFormGroup>
            <UFormGroup label="Email">
              <UInput v-model="joinForm.email" type="email" required />
            </UFormGroup>
          </div>
          <UFormGroup label="What connect group would you like to join?">
            <USelect v-model="joinForm.group" :items="groupOptions" placeholder="Select a group" />
          </UFormGroup>
          <UButton type="submit" label="Submit" size="lg" color="primary" class="w-full" />
          <p v-if="joinSubmitted" class="text-sm text-green-400 flex items-center gap-2">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5" /> Thank you! We will get back to you as soon as possible.
          </p>
          <p v-if="joinError" class="text-sm text-red-400 flex items-center gap-2">
            <UIcon name="i-heroicons-exclamation-circle" class="w-5 h-5" /> Oops! Something went wrong. Please fill in the required fields and try again.
          </p>
        </form>
      </div>
    </section>

    <!-- Volunteer CTA -->
    <section class="py-16 md:py-20 bg-gray-900 border-t border-gray-800">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <div class="bg-gray-800/50 rounded-2xl p-10 border border-gray-700">
          <UIcon name="i-heroicons-hand-raised" class="w-14 h-14 text-primary-400 mx-auto mb-4" />
          <h2 class="text-2xl font-bold text-white mb-2">Become a Volunteer</h2>
          <p class="text-gray-400 mb-6">Join our team of volunteers to serve our city and make global impact!</p>
          <UButton to="/ministry#get-involved" label="Learn more" color="primary" trailing-icon="i-heroicons-arrow-right" />
        </div>
      </div>
    </section>

    <ChurchHomeFooter />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const joinForm = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  group: undefined as string | undefined
})
const groupOptions = [
  { label: "Christina's - Thursdays at 7:00PM", value: 'christina' },
  { label: "Maria's - Wednesday at 6:30PM", value: 'maria' },
  { label: "Mohamed's - Wednesday at 7:00PM", value: 'mohammed' }
]
const joinSubmitted = ref(false)
const joinError = ref(false)

function onJoinSubmit() {
  joinError.value = false
  if (!joinForm.firstName || !joinForm.lastName || !joinForm.email) {
    joinError.value = true
    return
  }
  joinSubmitted.value = true
}
</script>
