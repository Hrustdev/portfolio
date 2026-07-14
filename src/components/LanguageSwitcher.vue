<template>
  <button
    @click="toggleLanguage"
    class="relative flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-100"
    :class="{ 'bg-gray-100': isOpen }"
    @blur="closeDropdown"
    ref="trigger"
  >
    <Globe class="w-4 h-4 text-secondary-text" />
    <span class="text-primary-text uppercase tracking-wider">{{ currentLocale }}</span>
    <ChevronDown class="w-3 h-3 text-secondary-text transition-transform duration-300" :class="{ 'rotate-180': isOpen }" />

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 top-full mt-2 glass-strong rounded-xl shadow-lg shadow-black/5 overflow-hidden z-50 min-w-[120px]"
      >
        <button
          v-for="lang in languages"
          :key="lang.code"
          @click.stop="setLanguage(lang.code)"
          class="w-full px-4 py-2.5 text-left text-sm transition-colors duration-200 hover:bg-accent/10 flex items-center gap-2"
          :class="locale === lang.code ? 'text-accent font-semibold' : 'text-primary-text'"
        >
          <span v-if="locale === lang.code" class="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span v-else class="w-1.5 h-1.5 rounded-full bg-transparent"></span>
          {{ lang.name }}
        </button>
      </div>
    </Transition>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Globe, ChevronDown } from 'lucide-vue-next'

const { locale } = useI18n()
const isOpen = ref(false)
const trigger = ref(null)

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
]

const currentLocale = computed(() => locale.value)

const toggleLanguage = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  setTimeout(() => {
    isOpen.value = false
  }, 200)
}

const setLanguage = (code) => {
  locale.value = code
  isOpen.value = false
}
</script>