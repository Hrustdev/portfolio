<template>
  <section id="experience" class="py-24 lg:py-32 relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="text-3xl lg:text-4xl font-bold text-primary-text tracking-tight"
        >
          {{ $t('experience.title') }}
        </h2>
        <div class="mt-4 w-12 h-1 bg-accent rounded-full mx-auto"></div>
      </div>

      <div class="relative">
        <div
          class="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gray-200 lg:-translate-x-px"
        >
          <div
            ref="lineProgress"
            class="absolute top-0 left-0 w-full bg-gradient-to-b from-accent to-purple-500 transition-all duration-1000"
            :style="{ height: lineHeight + '%' }"
          ></div>
        </div>

        <div class="space-y-12 lg:space-y-16">
          <div
            v-for="(item, index) in experienceData"
            :key="item.id"
            class="relative opacity-0 translate-y-8 transition-all duration-700 timeline-item"
            :class="[
              index % 2 === 0
                ? 'lg:pr-[calc(50%+2rem)]'
                : 'lg:pl-[calc(50%+2rem)]',
            ]"
            :data-index="index"
          >
            <div
              class="absolute left-6 lg:left-1/2 w-3 h-3 rounded-full border-2 border-white shadow-md z-10 transition-all duration-500 -translate-x-1/2 top-2"
              :class="
                activeIndex >= index ? 'bg-accent scale-125' : 'bg-gray-300'
              "
            ></div>

            <div
              class="ml-14 lg:ml-0 glass rounded-2xl p-6 lg:p-8 shadow-lg shadow-black/5 border border-white/50 transition-all duration-500"
              :class="[
                activeIndex === index ? 'scale-[1.02] shadow-xl' : '',
                activeIndex > index ? 'opacity-70' : '',
              ]"
            >
              <div class="flex flex-wrap items-center gap-3 mb-3">
                <span
                  class="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold uppercase tracking-wider"
                >
                  {{ $t(item.periodKey) }}
                </span>
              </div>
              <h3 class="text-xl lg:text-2xl font-bold text-primary-text mb-1">
                {{ item.company }}
              </h3>
              <p class="text-accent font-medium mb-4">
                {{ $t(item.positionKey) }}
              </p>
              <ul class="space-y-2">
                <li
                  v-for="(achievement, i) in $tm(item.achievementsKey)"
                  :key="i"
                  class="flex items-start gap-3 text-secondary-text text-sm leading-relaxed"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2 shrink-0"
                  ></span>
                  {{ $rt(achievement) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { experience as experienceData } from '../data/experience.js'

const lineHeight = ref(0)
const activeIndex = ref(-1)

let scrollHandler = null

onMounted(() => {
  scrollHandler = () => {
    const items = document.querySelectorAll('.timeline-item')
    const windowCenter = window.scrollY + window.innerHeight / 2

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect()
      const itemCenter = rect.top + rect.height / 2

      if (itemCenter < window.innerHeight * 0.7) {
        item.style.opacity = '1'
        item.style.transform = 'translateY(0)'
        if (activeIndex.value < index) activeIndex.value = index
      }
    })

    if (items.length > 0) {
      const firstItem = items[0].getBoundingClientRect()
      const lastItem = items[items.length - 1].getBoundingClientRect()
      const totalHeight = lastItem.bottom - firstItem.top
      const scrolled = window.innerHeight / 2 - firstItem.top
      lineHeight.value = Math.min(
        100,
        Math.max(0, (scrolled / totalHeight) * 100),
      )
    }
  }

  window.addEventListener('scroll', scrollHandler, { passive: true })
  scrollHandler()
})

onUnmounted(() => {
  if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
})
</script>
