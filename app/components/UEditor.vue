<template>
  <div class="editor-wrapper" :class="{ 'dark': isDarkMode }">
    <div class="editor-content">
      <editor-content :editor="editor" />
    </div>
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Start typing...'
  },
  editable: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue'])

const isDarkMode = ref(false)

// Get dark mode from layout
onMounted(() => {
  const savedDarkMode = localStorage.getItem('admin-dark-mode')
  isDarkMode.value = savedDarkMode === 'true'
  
  // Listen for dark mode changes
  const checkDarkMode = () => {
    const currentDarkMode = localStorage.getItem('admin-dark-mode')
    isDarkMode.value = currentDarkMode === 'true'
  }
  
  // Check periodically for changes
  const interval = setInterval(checkDarkMode, 100)
  
  onUnmounted(() => {
    clearInterval(interval)
  })
})

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Placeholder.configure({
      placeholder: props.placeholder,
    }),
    Image.configure({
      inline: true,
      allowBase64: true,
    }),
  ],
  editable: props.editable,
  onUpdate: ({ editor }) => {
    const html = editor.getHTML()
    emit('update:modelValue', html)
  },
  editorProps: {
    attributes: {
      class: `prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px] p-4 rounded-lg border transition-colors duration-200 ${
        isDarkMode.value 
          ? 'bg-gray-800 border-gray-600 text-gray-100 prose-invert' 
          : 'bg-white border-gray-200 text-gray-900'
      }`,
    },
  },
})

// Watch for external model value changes
watch(() => props.modelValue, (newValue) => {
  if (editor.value && newValue !== editor.value.getHTML()) {
    editor.value.commands.setContent(newValue)
  }
})

// Update editor styles when dark mode changes
watch(isDarkMode, () => {
  if (editor.value) {
    const element = editor.value.view.dom
    if (isDarkMode.value) {
      element.className = element.className.replace(
        /bg-white border-gray-200 text-gray-900/,
        'bg-gray-800 border-gray-600 text-gray-100 prose-invert'
      )
    } else {
      element.className = element.className.replace(
        /bg-gray-800 border-gray-600 text-gray-100 prose-invert/,
        'bg-white border-gray-200 text-gray-900'
      )
    }
  }
})

onBeforeUnmount(() => {
  if (editor.value) {
    editor.value.destroy()
  }
})
</script>

<style scoped>
.editor-wrapper {
  width: 100%;
}

.editor-content {
  width: 100%;
}

/* Tiptap editor styles */
:deep(.ProseMirror) {
  min-height: 200px;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid;
  transition: all 0.2s;
}

:deep(.ProseMirror:focus) {
  outline: none;
  box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5);
}

/* Dark mode styles */
:deep(.dark .ProseMirror) {
  background-color: rgb(31 41 55);
  border-color: rgb(75 85 99);
  color: rgb(243 244 246);
}

:deep(.dark .ProseMirror p.is-editor-empty:first-child::before) {
  color: rgb(156 163 175);
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

/* Light mode styles */
:deep(.ProseMirror:not(.dark)) {
  background-color: rgb(255 255 255);
  border-color: rgb(229 231 235);
  color: rgb(17 24 39);
}

:deep(.ProseMirror:not(.dark) p.is-editor-empty:first-child::before) {
  color: rgb(107 114 128);
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

/* Placeholder styles */
:deep(.ProseMirror p.is-editor-empty:first-child::before) {
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

/* Heading styles */
:deep(.ProseMirror h1) {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

:deep(.ProseMirror h2) {
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 2.25rem;
  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
}

:deep(.ProseMirror h3) {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

/* List styles */
:deep(.ProseMirror ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 1rem 0;
}

:deep(.ProseMirror ol) {
  list-style-type: decimal;
  padding-left: 1.5rem;
  margin: 1rem 0;
}

:deep(.ProseMirror li) {
  margin: 0.25rem 0;
}

/* Blockquote styles */
:deep(.ProseMirror blockquote) {
  border-left: 4px solid rgb(156 163 175);
  padding-left: 1rem;
  margin: 1rem 0;
  font-style: italic;
  color: rgb(107 114 128);
}

:deep(.dark .ProseMirror blockquote) {
  border-left-color: rgb(75 85 99);
  color: rgb(156 163 175);
}

/* Code styles */
:deep(.ProseMirror code) {
  background-color: rgb(243 244 246);
  color: rgb(239 68 68);
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

:deep(.dark .ProseMirror code) {
  background-color: rgb(55 65 81);
  color: rgb(248 113 113);
}

:deep(.ProseMirror pre) {
  background-color: rgb(243 244 246);
  color: rgb(17 24 39);
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1rem 0;
}

:deep(.dark .ProseMirror pre) {
  background-color: rgb(31 41 55);
  color: rgb(243 244 246);
}

/* Link styles */
:deep(.ProseMirror a) {
  color: rgb(59 130 246);
  text-decoration: underline;
}

:deep(.ProseMirror a:hover) {
  color: rgb(37 99 235);
}

/* Image styles */
:deep(.ProseMirror img) {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin: 1rem 0;
}

/* Strong/Bold styles */
:deep(.ProseMirror strong) {
  font-weight: 600;
}

/* Em/Italic styles */
:deep(.ProseMirror em) {
  font-style: italic;
}
</style>
