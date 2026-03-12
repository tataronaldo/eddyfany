// Toast and Modal Management Composable

interface Toast {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
}

interface Modal {
  show: boolean
  title: string
  message: string
  confirmText?: string
  cancelText?: string
  showCancel?: boolean
  confirmColor?: string
  closeOnBackdrop?: boolean
  loading?: boolean
  onConfirm?: () => void | Promise<void>
  onCancel?: () => void
  onClose?: () => void
}

export const useNotifications = () => {
  // Toast state
  const toasts = ref<Toast[]>([])

  // Modal state
  const modal = ref<Modal>({
    show: false,
    title: '',
    message: '',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    showCancel: true,
    confirmColor: 'primary',
    closeOnBackdrop: true,
    loading: false
  })

  // Toast methods
  const showToast = (toast: Omit<Toast, 'id'>) => {
    const id = Date.now().toString()
    const newToast = { ...toast, id }
    toasts.value.push(newToast)

    // Auto remove after duration
    setTimeout(() => {
      removeToast(id)
    }, toast.duration || 5000)
  }

  const removeToast = (id: string) => {
    const index = toasts.value.findIndex(toast => toast.id === id)
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }

  const showSuccess = (title: string, message: string, duration?: number) => {
    showToast({ type: 'success', title, message, duration })
  }

  const showError = (title: string, message: string, duration?: number) => {
    showToast({ type: 'error', title, message, duration })
  }

  const showWarning = (title: string, message: string, duration?: number) => {
    showToast({ type: 'warning', title, message, duration })
  }

  const showInfo = (title: string, message: string, duration?: number) => {
    showToast({ type: 'info', title, message, duration })
  }

  // Modal methods
  const showModal = (options: Partial<Modal>) => {
    modal.value = {
      show: true,
      title: '',
      message: '',
      confirmText: 'Confirm',
      cancelText: 'Cancel',
      showCancel: true,
      confirmColor: 'primary',
      closeOnBackdrop: true,
      loading: false,
      ...options
    }
  }

  const hideModal = () => {
    modal.value.show = false
    modal.value.onClose?.()
  }

  const confirmModal = async () => {
    if (modal.value.onConfirm) {
      modal.value.loading = true
      try {
        await modal.value.onConfirm()
        hideModal()
      } catch (error) {
        console.error('Modal confirm error:', error)
      } finally {
        modal.value.loading = false
      }
    } else {
      hideModal()
    }
  }

  const cancelModal = () => {
    modal.value.onCancel?.()
    hideModal()
  }

  // Convenience methods for common modals
  const showConfirmModal = (title: string, message: string, onConfirm?: () => void | Promise<void>) => {
    showModal({
      title,
      message,
      confirmText: 'Confirm',
      cancelText: 'Cancel',
      confirmColor: 'primary',
      onConfirm
    })
  }

  const showDeleteModal = (itemName: string, onConfirm?: () => void | Promise<void>) => {
    showModal({
      title: 'Delete Item',
      message: `Are you sure you want to delete this ${itemName}? This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmColor: 'red',
      onConfirm
    })
  }

  const showSuccessModal = (title: string, message: string, onClose?: () => void) => {
    showModal({
      title,
      message,
      confirmText: 'OK',
      showCancel: false,
      confirmColor: 'green',
      onClose
    })
  }

  const showErrorModal = (title: string, message: string, onClose?: () => void) => {
    showModal({
      title,
      message,
      confirmText: 'OK',
      showCancel: false,
      confirmColor: 'red',
      onClose
    })
  }

  return {
    // Toast
    toasts: readonly(toasts),
    showToast,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,

    // Modal
    modal: readonly(modal),
    showModal,
    hideModal,
    confirmModal,
    cancelModal,
    showConfirmModal,
    showDeleteModal,
    showSuccessModal,
    showErrorModal
  }
}
