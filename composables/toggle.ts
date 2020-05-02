import { reactive, toRefs } from '@vue/composition-api'

export function useToggle () {
  const state = reactive({
    active: false
  })

  const toggle = () => {
    state.active = !state.active
  }

  // const toggle = () => {
  //   active.value = !active.value
  // }

  return { ...toRefs(state), toggle }
}
