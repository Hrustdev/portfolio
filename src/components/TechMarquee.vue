<template>
  <section
    class="py-16 lg:py-20 relative overflow-hidden border-y border-gray-100"
  >
    <div class="text-center mb-10">
      <h3
        class="text-sm font-semibold text-secondary-text uppercase tracking-widest"
      >
        {{ $t('techMarquee.title') }}
      </h3>
    </div>

    <div
      ref="containerRef"
      class="relative overflow-hidden select-none cursor-grab active:cursor-grabbing"
      style="touch-action: pan-y"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
    >
      <div
        ref="trackRef"
        class="flex gap-12 w-max"
        :style="{ transform: `translateX(${x}px)` }"
      >
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="flex items-center gap-3 shrink-0 px-6 py-3 glass rounded-2xl border border-white/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
        >
          <component :is="tech.icon" class="w-6 h-6" :class="tech.color" />
          <span
            class="text-sm font-semibold text-primary-text whitespace-nowrap"
            >{{ tech.name }}</span
          >
        </div>
        <div
          v-for="tech in technologies"
          :key="`${tech.name}-dup`"
          class="flex items-center gap-3 shrink-0 px-6 py-3 glass rounded-2xl border border-white/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
        >
          <component :is="tech.icon" class="w-6 h-6" :class="tech.color" />
          <span
            class="text-sm font-semibold text-primary-text whitespace-nowrap"
            >{{ tech.name }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
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
} from 'lucide-vue-next';

const technologies = [
  { name: 'HTML', icon: FileCode, color: 'text-orange-500' },
  { name: 'CSS', icon: Palette, color: 'text-blue-500' },
  { name: 'JavaScript', icon: Braces, color: 'text-yellow-500' },
  { name: 'Vue.js', icon: Layers, color: 'text-emerald-500' },
  { name: 'Tailwind', icon: Wind, color: 'text-sky-400' },
  { name: 'Git', icon: GitBranch, color: 'text-red-500' },
  { name: 'WordPress', icon: Globe, color: 'text-blue-600' },
  { name: 'Vite', icon: Zap, color: 'text-purple-500' },
  { name: 'SEO', icon: Search, color: 'text-green-500' },
];

const containerRef = ref(null);
const trackRef = ref(null);
const x = ref(0);
const isDragging = ref(false);

const AUTO_SPEED = 0.1; // скорость авто-скролла, px за кадр
let dragStartClientX = 0;
let dragStartX = 0;
let singleSetWidth = 0;
let rafId = null;

function measure() {
  if (trackRef.value) {
    // делим на 2, т.к. набор технологий продублирован для зацикливания
    singleSetWidth = trackRef.value.scrollWidth / 2;
  }
}

function wrap(value) {
  if (!singleSetWidth) return value;
  let v = value % singleSetWidth;
  if (v > 0) v -= singleSetWidth;
  return v;
}

function tick() {
  if (!isDragging.value) {
    x.value -= AUTO_SPEED;
  }
  x.value = wrap(x.value);
  rafId = requestAnimationFrame(tick);
}

function onPointerDown(e) {
  isDragging.value = true;
  dragStartClientX = e.clientX;
  dragStartX = x.value;
  containerRef.value?.setPointerCapture(e.pointerId);
}

function onPointerMove(e) {
  if (!isDragging.value) return;
  const delta = e.clientX - dragStartClientX;
  x.value = dragStartX + delta;
}

function onPointerUp() {
  isDragging.value = false;
}

onMounted(() => {
  measure();
  window.addEventListener('resize', measure);
  rafId = requestAnimationFrame(tick);
});

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId);
  window.removeEventListener('resize', measure);
});
</script>
