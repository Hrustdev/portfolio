import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection(sections) {
  const activeSection = ref('')

  let scrollTimeout = null

  const handleScroll = () => {
    if (scrollTimeout) return
    scrollTimeout = requestAnimationFrame(() => {
      const scrollPos = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          if (scrollPos >= top && scrollPos < bottom) {
            activeSection.value = section
            break
          }
        }
      }
      scrollTimeout = null
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    if (scrollTimeout) cancelAnimationFrame(scrollTimeout)
  })

  return { activeSection }
}