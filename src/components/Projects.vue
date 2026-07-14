<template>
  <section id="projects" class="py-24 lg:py-32 relative">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-primary-text tracking-tight">
          {{ $t('projects.title') }}
        </h2>
        <div class="mt-4 w-12 h-1 bg-accent rounded-full mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

<script setup>
import { onMounted } from 'vue'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    observer.observe(el)
  })
})
</script>