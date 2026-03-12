<template>
  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="fixed inset-0 z-50 overflow-y-auto"
    >
      <div class="flex min-h-screen items-center justify-center p-4">
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-black/50 transition-opacity"
          @click="handleBackdropClick"
        ></div>

        <!-- Modal -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="show"
            class="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6"
          >
            <!-- Header -->
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
              <button
                @click="close"
                class="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
              </button>
            </div>

            <!-- Content -->
            <div class="mb-6">
              <p class="text-gray-600">{{ message }}</p>
            </div>

            <!-- Actions -->
            <div class="flex gap-3 justify-end">
              <UButton
                v-if="showCancel"
                @click="cancel"
                color="white"
                variant="outline"
                class="border-gray-200 text-gray-700"
              >
                {{ cancelText }}
              </UButton>
              <UButton
                @click="confirm"
                :color="confirmColor"
                :loading="loading"
              >
                {{ confirmText }}
              </UButton>
            </div>
          </div>
        </Transition>
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
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  confirmText: {
    type: String,
    default: 'Confirm'
  },
  cancelText: {
    type: String,
    default: 'Cancel'
  },
  showCancel: {
    type: Boolean,
    default: true
  },
  confirmColor: {
    type: String,
    default: 'primary'
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['confirm', 'cancel', 'close'])

const confirm = () => {
  emit('confirm')
}

const cancel = () => {
  emit('cancel')
  close()
}

const close = () => {
  emit('close')
}

const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    close()
  }
}
</script>
