<template>
  <section id="contact" class="py-24 lg:py-32 relative">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="text-3xl lg:text-4xl font-bold text-primary-text tracking-tight"
        >
          {{ $t('contact.title') }}
        </h2>
        <div class="mt-4 w-12 h-1 bg-accent rounded-full mx-auto"></div>
      </div>

      <div
        ref="cardRef"
        class="glass rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/5 border border-white/50 relative overflow-hidden opacity-0 translate-y-8"
      >
        <div
          class="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10 blur-3xl"
          style="background: linear-gradient(135deg, #0ea5e9, #8b5cf6)"
        ></div>

        <div class="relative z-10 text-center mb-10">
          <p
            class="text-xl lg:text-2xl text-primary-text font-medium leading-relaxed"
          >
            {{ $t('contact.letsTalk') }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 gap-4">
          <a
            href="mailto:hrustal8991@gmail.com"
            class="group flex items-center gap-4 p-5 rounded-2xl bg-white/50 hover:bg-accent/5 border border-transparent hover:border-accent/20 transition-all duration-300"
          >
            <div
              class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300"
            >
              <Mail class="w-6 h-6 text-accent" />
            </div>
            <div class="text-left">
              <p
                class="text-xs font-semibold text-secondary-text uppercase tracking-wider mb-0.5"
              >
                {{ $t('contact.email') }}
              </p>
              <p
                class="text-sm font-medium text-primary-text group-hover:text-accent transition-colors"
              >
                {{ $t('contact.sendEmail') }}
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/dmitry-hrustalev-175358329/"
            target="_blank"
            rel="noopener"
            class="group flex items-center gap-4 p-5 rounded-2xl bg-white/50 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all duration-300"
          >
            <div
              class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300"
            >
              <Linkedin class="w-6 h-6 text-blue-600" />
            </div>
            <div class="text-left">
              <p
                class="text-xs font-semibold text-secondary-text uppercase tracking-wider mb-0.5"
              >
                {{ $t('contact.linkedin') }}
              </p>
              <p
                class="text-sm font-medium text-primary-text group-hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </p>
            </div>
          </a>

          <a
            href="https://github.com/Hrustdev"
            target="_blank"
            rel="noopener"
            class="group flex items-center gap-4 p-5 rounded-2xl bg-white/50 hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-300"
          >
            <div
              class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300"
            >
              <Github class="w-6 h-6 text-gray-700" />
            </div>
            <div class="text-left">
              <p
                class="text-xs font-semibold text-secondary-text uppercase tracking-wider mb-0.5"
              >
                {{ $t('contact.github') }}
              </p>
              <p
                class="text-sm font-medium text-primary-text group-hover:text-gray-900 transition-colors"
              >
                GitHub
              </p>
            </div>
          </a>

          <a
            href="https://t.me/the_hrust"
            target="_blank"
            rel="noopener"
            class="group flex items-center gap-4 p-5 rounded-2xl bg-white/50 hover:bg-sky-50 border border-transparent hover:border-sky-200 transition-all duration-300"
          >
            <div
              class="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-100 transition-colors duration-300"
            >
              <Send class="w-6 h-6 text-sky-500" />
            </div>
            <div class="text-left">
              <p
                class="text-xs font-semibold text-secondary-text uppercase tracking-wider mb-0.5"
              >
                {{ $t('contact.telegram') }}
              </p>
              <p
                class="text-sm font-medium text-primary-text group-hover:text-sky-500 transition-colors"
              >
                Telegram
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Mail, Linkedin, Github, Send } from 'lucide-vue-next';

const cardRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition =
            'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  if (cardRef.value) observer.observe(cardRef.value);
});
</script>
