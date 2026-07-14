<template>
  <nav
    ref="navRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled ? 'glass-strong shadow-sm shadow-black/5' : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <a
          href="#hero"
          @click.prevent="scrollToSection('hero')"
          class="text-lg lg:text-xl font-bold text-primary-text tracking-tight hover:text-accent transition-colors duration-300"
        >
          Dmitry Hrustalev
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click.prevent="scrollToSection(item.id)"
            class="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg"
            :class="activeSection === item.id ? 'text-accent' : 'text-secondary-text hover:text-primary-text hover:bg-gray-100/50'"
          >
            {{ $t(item.label) }}
            <span
              v-if="activeSection === item.id"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
            ></span>
          </a>
          <div class="ml-2">
            <LanguageSwitcher />
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <div class="w-5 h-4 flex flex-col justify-between">
            <span
              class="block h-0.5 bg-primary-text rounded-full transition-all duration-300 origin-center"
              :class="isMobileOpen ? 'rotate-45 translate-y-[7px]' : ''"
            ></span>
            <span
              class="block h-0.5 bg-primary-text rounded-full transition-all duration-300"
              :class="isMobileOpen ? 'opacity-0 scale-0' : ''"
            ></span>
            <span
              class="block h-0.5 bg-primary-text rounded-full transition-all duration-300 origin-center"
              :class="isMobileOpen ? '-rotate-45 -translate-y-[7px]' : ''"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileOpen"
        class="lg:hidden glass-strong border-t border-gray-100"
      >
        <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click.prevent="scrollToSection(item.id); isMobileOpen = false"
            class="px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200"
            :class="activeSection === item.id ? 'text-accent bg-accent/5' : 'text-secondary-text hover:text-primary-text hover:bg-gray-50'"
          >
            {{ $t(item.label) }}
          </a>
          <div class="mt-2 pt-2 border-t border-gray-100">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { useActiveSection } from '../composables/useActiveSection.js'

const isScrolled = ref(false)
const isMobileOpen = ref(false)
const navRef = ref(null)

const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'contact']
const { activeSection } = useActiveSection(sections)

const navItems = [
  { id: 'summary', label: 'nav.summary' },
  { id: 'experience', label: 'nav.experience' },
  { id: 'projects', label: 'nav.projects' },
  { id: 'skills', label: 'nav.skills' },
  { id: 'contact', label: 'nav.contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const offset = 80
    const top = el.offsetTop - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>