<template>
  <section id="skills" class="py-24 lg:py-32 relative">
    <div class="max-w-5xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="text-3xl lg:text-4xl font-bold text-primary-text tracking-tight"
        >
          {{ $t('skills.title') }}
        </h2>
        <div class="mt-4 w-12 h-1 bg-accent rounded-full mx-auto"></div>
      </div>

      <div class="space-y-4">
        <div
          v-for="(skill, index) in skills"
          :key="skill.id"
          class="reveal"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div
            class="glass rounded-2xl border border-white/50 overflow-hidden transition-all duration-500 hover:shadow-lg"
          >
            <button
              @click="toggleSkill(skill.id)"
              class="w-full flex items-center justify-between p-5 lg:p-6 text-left group"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  :class="
                    expandedSkills.includes(skill.id)
                      ? 'bg-accent/20'
                      : 'bg-gray-100 group-hover:bg-accent/10'
                  "
                >
                  <component
                    :is="getIcon(skill.icon)"
                    class="w-6 h-6 transition-colors duration-300"
                    :class="
                      expandedSkills.includes(skill.id)
                        ? 'text-accent'
                        : 'text-secondary-text group-hover:text-accent'
                    "
                  />
                </div>
                <div>
                  <h3
                    class="text-lg font-bold transition-colors duration-300"
                    :class="
                      expandedSkills.includes(skill.id)
                        ? 'text-accent'
                        : 'text-primary-text'
                    "
                  >
                    {{ $t(skill.categoryKey) }}
                  </h3>
                  <p class="text-sm text-secondary-text">
                    {{ $tm(skill.itemsKey).length }} technologies
                  </p>
                </div>
              </div>
              <ChevronRight
                class="w-5 h-5 text-secondary-text transition-transform duration-300"
                :class="
                  expandedSkills.includes(skill.id)
                    ? 'rotate-90 text-accent'
                    : ''
                "
              />
            </button>

            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-96 opacity-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="max-h-96 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div
                v-show="expandedSkills.includes(skill.id)"
                class="overflow-hidden"
              >
                <div class="px-6 pb-6 lg:px-8 lg:pb-8">
                  <div class="pl-16 flex flex-wrap gap-2">
                    <span
                      v-for="item in $tm(skill.itemsKey)"
                      :key="item"
                      class="px-4 py-2 bg-gray-100 hover:bg-accent/10 hover:text-accent rounded-xl text-sm font-medium text-primary-text transition-all duration-300 cursor-default"
                    >
                      {{ $rt(item) }}
                    </span>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { skills } from '../data/skills.js'
import {
  Code2,
  Globe,
  Search,
  Wrench,
  Mail,
  ChevronRight,
} from 'lucide-vue-next'

const expandedSkills = ref(['frontend'])

const iconMap = {
  Code2,
  Globe,
  Search,
  Wrench,
  Mail,
}

const getIcon = (iconName) => iconMap[iconName] || Code2

const toggleSkill = (id) => {
  if (expandedSkills.value.includes(id)) {
    expandedSkills.value = expandedSkills.value.filter((s) => s !== id)
  } else {
    expandedSkills.value.push(id)
  }
}
</script>
