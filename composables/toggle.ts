import { ref } from '@vue/composition-api'

export function useToggle () {
  const active = ref(false)

  const toggle = () => {
    active.value = !active.value
  }

  return { active, toggle }
}
