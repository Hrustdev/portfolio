<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center overflow-hidden pt-20"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Animated gradient blobs -->
      <div
        class="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl animate-gradient-shift"
        style="
          background: linear-gradient(135deg, #0ea5e9, #8b5cf6, #06b6d4);
          background-size: 200% 200%;
        "
      ></div>
      <div
        class="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl animate-gradient-shift"
        style="
          background: linear-gradient(135deg, #8b5cf6, #0ea5e9, #06b6d4);
          background-size: 200% 200%;
          animation-delay: -4s;
        "
      ></div>

      <!-- Floating shapes -->
      <div
        class="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-accent/40 animate-float"
      ></div>
      <div
        class="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-purple-400/40 animate-float-delayed"
      ></div>
      <div
        class="absolute bottom-1/3 right-1/5 w-4 h-4 rounded-lg bg-cyan-400/30 rotate-45 animate-float"
      ></div>
      <div
        class="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent/30 animate-float-delayed"
      ></div>

      <!-- Grid pattern -->
      <div
        class="absolute inset-0 opacity-[0.03]"
        style="
          background-image: radial-gradient(circle, #111 1px, transparent 1px);
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <p
              ref="greetingRef"
              class="text-lg text-secondary-text font-medium tracking-wide opacity-0 translate-y-6"
            >
              {{ $t('hero.greeting') }}
            </p>
            <h1
              ref="nameRef"
              class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-text leading-[1.1] tracking-tight opacity-0 translate-y-6"
            >
              {{ $t('hero.name') }}
            </h1>
          </div>

          <div
            ref="subtitlesRef"
            class="flex flex-wrap gap-3 opacity-0 translate-y-6"
          >
            <span
              class="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20"
            >
              {{ $t('hero.subtitle1') }}
            </span>
            <span
              class="px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-medium border border-purple-100"
            >
              {{ $t('hero.subtitle2') }}
            </span>
            <span
              class="px-4 py-2 rounded-full bg-cyan-50 text-cyan-600 text-sm font-medium border border-cyan-100"
            >
              {{ $t('hero.subtitle3') }}
            </span>
          </div>

          <p
            ref="descRef"
            class="text-lg lg:text-xl text-secondary-text leading-relaxed max-w-xl opacity-0 translate-y-6"
          >
            {{ $t('hero.description') }}
          </p>

          <div
            ref="buttonsRef"
            class="flex flex-wrap gap-4 opacity-0 translate-y-6"
          >
            <a
              :href="cvUrl"
              download
              class="group relative inline-flex items-center gap-2 px-6 py-3.5 bg-primary-text text-white rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"
            >
              <Download
                class="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              {{ $t('hero.downloadCV') }}
            </a>
            <a
              href="#projects"
              @click.prevent="scrollToProjects"
              class="group inline-flex items-center gap-2 px-6 py-3.5 border border-gray-200 text-primary-text rounded-xl font-medium text-sm transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:-translate-y-0.5"
            >
              <ArrowDown
                class="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
              />
              {{ $t('hero.viewProjects') }}
            </a>
          </div>
        </div>

        <!-- Right Content - Abstract Illustration -->
        <div
          ref="illustrationRef"
          class="relative hidden lg:flex items-center justify-center opacity-0 scale-95"
        >
          <div class="relative w-[400px] h-[400px]">
            <!-- Main blob -->
            <div
              class="absolute inset-0 rounded-full animate-gradient-shift"
              style="
                background: linear-gradient(135deg, #0ea5e9, #8b5cf6, #06b6d4);
                background-size: 200% 200%;
                opacity: 0.15;
                filter: blur(60px);
              "
            ></div>

            <!-- Code-like visual -->
            <div
              class="absolute inset-8 glass rounded-3xl shadow-xl shadow-black/5 overflow-hidden"
            >
              <div class="p-6 space-y-3">
                <div class="flex items-center gap-2 mb-4">
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div class="space-y-2">
                  <div class="h-3 bg-accent/20 rounded-full w-3/4"></div>
                  <div class="h-3 bg-gray-200 rounded-full w-full"></div>
                  <div class="h-3 bg-accent/15 rounded-full w-5/6"></div>
                  <div class="h-3 bg-gray-200 rounded-full w-2/3"></div>
                  <div class="pl-4 space-y-2">
                    <div class="h-3 bg-purple-100 rounded-full w-4/5"></div>
                    <div class="h-3 bg-cyan-100 rounded-full w-3/4"></div>
                  </div>
                  <div class="h-3 bg-gray-200 rounded-full w-full"></div>
                  <div class="h-3 bg-accent/20 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>

            <!-- Floating elements -->
            <div
              class="absolute -top-4 -right-4 w-16 h-16 glass rounded-2xl shadow-lg flex items-center justify-center animate-float"
            >
              <Code2 class="w-8 h-8 text-accent" />
            </div>
            <div
              class="absolute -bottom-6 -left-6 w-14 h-14 glass rounded-2xl shadow-lg flex items-center justify-center animate-float-delayed"
            >
              <Palette class="w-7 h-7 text-purple-500" />
            </div>
            <div
              class="absolute top-1/2 -right-8 w-12 h-12 glass rounded-xl shadow-lg flex items-center justify-center animate-float"
            >
              <Zap class="w-6 h-6 text-cyan-500" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
    >
      <span class="text-xs text-secondary-text">Scroll</span>
      <div
        class="w-5 h-8 rounded-full border-2 border-secondary-text/30 flex justify-center pt-1.5"
      >
        <div
          class="w-1 h-2 rounded-full bg-secondary-text/50 animate-bounce"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Download, ArrowDown, Code2, Palette, Zap } from 'lucide-vue-next'

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const cvUrl = computed(() => {
  const fileName =
    locale.value === 'ru'
      ? 'Dmitry-Hrustalev-CV-RU.pdf'
      : 'Dmitry-Hrustalev-CV-EN.pdf'

  return `${import.meta.env.BASE_URL}cv/${fileName}`
})

const greetingRef = ref(null)
const nameRef = ref(null)
const subtitlesRef = ref(null)
const descRef = ref(null)
const buttonsRef = ref(null)
const illustrationRef = ref(null)

const scrollToProjects = () => {
  const el = document.getElementById('projects')
  if (el) {
    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }
}

onMounted(() => {
  const elements = [
    greetingRef.value,
    nameRef.value,
    subtitlesRef.value,
    descRef.value,
    buttonsRef.value,
    illustrationRef.value,
  ]

  elements.forEach((el, i) => {
    if (el) {
      setTimeout(
        () => {
          el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0) scale(1)'
        },
        200 + i * 150,
      )
    }
  })
})
</script>
