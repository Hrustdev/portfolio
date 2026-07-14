<template>
  <section id="summary" class="py-24 lg:py-32 relative">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <!-- Section Title -->
        <div class="text-center mb-16">
          <h2
            class="text-3xl lg:text-4xl font-bold text-primary-text tracking-tight"
          >
            {{ $t('summary.title') }}
          </h2>
          <div class="mt-4 w-12 h-1 bg-accent rounded-full mx-auto"></div>
        </div>

        <!-- Glass Card -->
        <div
          ref="cardRef"
          class="glass rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/5 border border-white/50 relative overflow-hidden opacity-0 translate-y-8"
        >
          <!-- Subtle gradient overlay -->
          <div
            class="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
            style="background: linear-gradient(135deg, #0ea5e9, #8b5cf6)"
          ></div>

          <div class="relative z-10 grid sm:grid-cols-2 gap-8">
            <!-- Location -->
            <div class="group">
              <div class="flex items-center gap-3 mb-2">
                <div
                  class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300"
                >
                  <MapPin class="w-5 h-5 text-accent" />
                </div>
                <span
                  class="text-sm font-semibold text-secondary-text uppercase tracking-wider"
                  >{{ $t('summary.location') }}</span
                >
              </div>
              <p class="text-lg font-medium text-primary-text pl-[52px]">
                {{ $t('summary.locationValue') }}
              </p>
            </div>

            <!-- Experience -->
            <div class="group">
              <div class="flex items-center gap-3 mb-2">
                <div
                  class="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300"
                >
                  <Briefcase class="w-5 h-5 text-purple-500" />
                </div>
                <span
                  class="text-sm font-semibold text-secondary-text uppercase tracking-wider"
                  >{{ $t('summary.experience') }}</span
                >
              </div>
              <p class="text-lg font-medium text-primary-text pl-[52px]">
                {{ $t('summary.experienceValue') }}
              </p>
            </div>

            <!-- Languages -->
            <div class="group">
              <div class="flex items-center gap-3 mb-2">
                <div
                  class="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-100 transition-colors duration-300"
                >
                  <Languages class="w-5 h-5 text-cyan-500" />
                </div>
                <span
                  class="text-sm font-semibold text-secondary-text uppercase tracking-wider"
                  >{{ $t('summary.languages') }}</span
                >
              </div>
              <div class="flex flex-wrap gap-2 pl-[52px]">
                <span
                  class="px-3 py-1 bg-gray-100 rounded-full text-sm text-primary-text"
                  >{{ $t('summary.language1') }}</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 rounded-full text-sm text-primary-text"
                  >{{ $t('summary.language2') }}</span
                >
                <span
                  class="px-3 py-1 bg-gray-100 rounded-full text-sm text-primary-text"
                  >{{ $t('summary.language3') }}</span
                >
              </div>
            </div>

            <!-- Current Focus -->
            <div class="group">
              <div class="flex items-center gap-3 mb-2">
                <div
                  class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300"
                >
                  <Target class="w-5 h-5 text-emerald-500" />
                </div>
                <span
                  class="text-sm font-semibold text-secondary-text uppercase tracking-wider"
                  >{{ $t('summary.focus') }}</span
                >
              </div>
              <div class="flex flex-wrap gap-2 pl-[52px]">
                <span
                  class="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >{{ $t('summary.focus1') }}</span
                >
                <span
                  class="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-medium"
                  >{{ $t('summary.focus2') }}</span
                >
                <span
                  class="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium"
                  >{{ $t('summary.focus3') }}</span
                >
                <span
                  class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                  >{{ $t('summary.focus4') }}</span
                >
              </div>
            </div>

            <!-- Availability -->
            <div class="group sm:col-span-2">
              <div class="flex items-center gap-3 mb-2">
                <div
                  class="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300"
                >
                  <CircleCheck class="w-5 h-5 text-green-500" />
                </div>
                <span
                  class="text-sm font-semibold text-secondary-text uppercase tracking-wider"
                  >{{ $t('summary.availability') }}</span
                >
              </div>
              <div class="flex items-center gap-2 pl-[52px]">
                <span class="relative flex h-3 w-3">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                  ></span>
                  <span
                    class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
                  ></span>
                </span>
                <span class="text-lg font-semibold text-green-600">{{
                  $t('summary.availabilityValue')
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  MapPin,
  Briefcase,
  Languages,
  Target,
  CircleCheck,
} from 'lucide-vue-next'

const cardRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition =
            'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 },
  )

  if (cardRef.value) observer.observe(cardRef.value)
})
</script>
