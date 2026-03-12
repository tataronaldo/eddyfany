<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="translate-x-full opacity-0"
    enter-to-class="translate-x-0 opacity-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="translate-x-0 opacity-100"
    leave-to-class="translate-x-full opacity-0"
  >
    <div
      v-if="show"
      class="fixed top-4 right-4 z-50 max-w-sm w-full"
    >
      <div
        class="rounded-lg shadow-lg p-4 flex items-start gap-3"
        :class="toastClasses"
      >
        <div class="flex-shrink-0">
          <UIcon :name="iconName" class="w-5 h-5" />
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-medium">{{ title }}</h4>
          <p class="text-sm mt-1 opacity-90">{{ message }}</p>
        </div>
        <button
          @click="close"
          class="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
        >
          <UIcon name="i-heroicons-x-mark" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 5000
  }
})

const emit = defineEmits(['close'])

const toastClasses = computed(() => {
  const baseClasses = 'border'
  const typeClasses = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  }
  return baseClasses + ' ' + typeClasses[props.type]
})

const iconName = computed(() => {
  const icons = {
    success: 'i-heroicons-check-circle',
    error: 'i-heroicons-x-circle',
    warning: 'i-heroicons-exclamation-triangle',
    info: 'i-heroicons-information-circle'
  }
  return icons[props.type]
})

const close = () => {
  emit('close')
}

// Auto close after duration
let timeout = null
watch(() => props.show, (newValue) => {
  if (newValue) {
    timeout = setTimeout(() => {
      close()
    }, props.duration)
  } else {
    if (timeout) {
      clearTimeout(timeout)
    }
  }
})

onUnmounted(() => {
  if (timeout) {
    clearTimeout(timeout)
  }
})
</script>
