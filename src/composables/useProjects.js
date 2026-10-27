import { ref } from 'vue'

const API_URL = import.meta.env.VITE_API_URL

export function useProjects() {
  const projects = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchProjects = async () => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(`${API_URL}/projects?sortBy=id`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      projects.value = await res.json()
    } catch (e) {
      error.value = e
      console.error('Failed to load projects:', e)
    } finally {
      loading.value = false
    }
  }

  return { projects, loading, error, fetchProjects }
}
