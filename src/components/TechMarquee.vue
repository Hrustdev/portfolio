<template>
  <section class="py-16 lg:py-20 relative overflow-hidden border-y border-gray-100">
    <div class="text-center mb-10">
      <h3 class="text-sm font-semibold text-secondary-text uppercase tracking-widest">
        {{ $t('techMarquee.title') }}
      </h3>
    </div>

    <div
      class="relative group"
      @mouseenter="isPaused = true"
      @mouseleave="isPaused = false"
    >
      <div
        class="flex gap-12 animate-marquee"
        :class="{ '[animation-play-state:paused]': isPaused }"
      >
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="flex items-center gap-3 shrink-0 px-6 py-3 glass rounded-2xl border border-white/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
        >
          <component :is="tech.icon" class="w-6 h-6" :class="tech.color" />
          <span class="text-sm font-semibold text-primary-text whitespace-nowrap">{{ tech.name }}</span>
        </div>
        <div
          v-for="tech in technologies"
          :key="`${tech.name}-dup`"
          class="flex items-center gap-3 shrink-0 px-6 py-3 glass rounded-2xl border border-white/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
        >
          <component :is="tech.icon" class="w-6 h-6" :class="tech.color" />
          <span class="text-sm font-semibold text-primary-text whitespace-nowrap">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import {
  FileCode,
  Palette,
  Braces,
  Layers,
  Atom,
  Wind,
  GitBranch,
  Github,
  Globe,
  Zap,
  Search,
} from 'lucide-vue-next'

const isPaused = ref(false)

const technologies = [
  { name: 'HTML', icon: FileCode, color: 'text-orange-500' },
  { name: 'CSS', icon: Palette, color: 'text-blue-500' },
  { name: 'JavaScript', icon: Braces, color: 'text-yellow-500' },
  { name: 'Vue.js', icon: Layers, color: 'text-emerald-500' },
  { name: 'React', icon: Atom, color: 'text-cyan-500' },
  { name: 'Tailwind', icon: Wind, color: 'text-sky-400' },
  { name: 'Git', icon: GitBranch, color: 'text-red-500' },
  { name: 'GitHub', icon: Github, color: 'text-gray-700' },
  { name: 'WordPress', icon: Globe, color: 'text-blue-600' },
  { name: 'Vite', icon: Zap, color: 'text-purple-500' },
  { name: 'SEO', icon: Search, color: 'text-green-500' },
]
</script>