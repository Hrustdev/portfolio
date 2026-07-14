<template>
  <div class="min-h-screen bg-bg">
    <Navbar />
    <main>
      <Hero />
      <Summary />
      <Timeline />
      <Projects />
      <TechMarquee />
      <SkillsTree />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Summary from './components/Summary.vue'
import Timeline from './components/Timeline.vue'
import Projects from './components/Projects.vue'
import TechMarquee from './components/TechMarquee.vue'
import SkillsTree from './components/SkillsTree.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>