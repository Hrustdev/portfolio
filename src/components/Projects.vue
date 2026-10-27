<script setup>
import { onMounted, nextTick } from 'vue'
import { useProjects } from '../composables/useProjects.js'
import ProjectCard from './ProjectCard.vue'

const { projects, loading, fetchProjects } = useProjects()

let observer = null

const observeNewReveals = () => {
  document.querySelectorAll('.reveal').forEach((el) => {
    if (el.dataset.revealInit) return
    el.dataset.revealInit = '1'
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    observer.observe(el)
  })
}

onMounted(async () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition =
            'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  observeNewReveals()

  await fetchProjects()
  await nextTick()
  observeNewReveals()
})
</script>

<template>
  <section id="projects" class="py-24 lg:py-32 relative">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="text-3xl lg:text-4xl font-bold text-primary-text tracking-tight"
        >
          {{ $t('projects.title') }}
        </h2>
        <div class="mt-4 w-12 h-1 bg-accent rounded-full mx-auto"></div>
      </div>

      <div
        v-if="loading"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <div
          v-for="n in 3"
          :key="n"
          class="h-96 rounded-2xl bg-gray-100 animate-pulse"
        ></div>
      </div>

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="reveal"
        />
      </div>
    </div>
  </section>
</template>
