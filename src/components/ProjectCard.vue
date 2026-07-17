<template>
  <div
    class="group relative bg-card rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-gray-100/50 transition-all duration-500 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-2"
  >
    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none gradient-border"
    ></div>

    <div class="relative overflow-hidden aspect-[16/10]">
      <img
        :src="project.image"
        :alt="projectTitle"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>
    </div>

    <div class="p-6 relative">
      <span
        class="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
      >
        {{ projectCategory }}
      </span>

      <h3
        class="text-xl font-bold text-primary-text mb-2 group-hover:text-accent transition-colors duration-300"
      >
        {{ projectTitle }}
      </h3>

      <p class="text-secondary-text text-sm leading-relaxed mb-4 line-clamp-2">
        {{ projectDescription }}
      </p>

      <div class="flex flex-wrap gap-2 mb-5">
        <span
          v-for="tech in projectTech"
          :key="tech"
          class="px-2.5 py-1 bg-gray-100 text-secondary-text rounded-lg text-xs font-medium"
        >
          {{ $rt(tech) }}
        </span>
      </div>

      <div class="flex gap-3">
        <a
          :href="project.demoUrl"
          class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-text text-white rounded-xl text-sm font-medium transition-all duration-300 hover:bg-accent"
        >
          <ExternalLink class="w-4 h-4" />
          {{ $t('projects.liveDemo') }}
        </a>
        <a
          :href="project.githubUrl"
          class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 text-primary-text rounded-xl text-sm font-medium transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
        >
          <Github class="w-4 h-4" />
          {{ $t('projects.github') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { ExternalLink, Github } from 'lucide-vue-next';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const { t, tm, rt } = useI18n();

const projectTitle = computed(() =>
  t(`projects.items.${props.project.key}.title`),
);
const projectCategory = computed(() =>
  t(`projects.items.${props.project.key}.category`),
);
const projectDescription = computed(() =>
  t(`projects.items.${props.project.key}.description`),
);
const projectTech = computed(() =>
  tm(`projects.items.${props.project.key}.tech`),
);
</script>
