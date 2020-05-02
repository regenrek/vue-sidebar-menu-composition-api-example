import { reactive, toRefs } from '@vue/composition-api'

const state = reactive({
  active: false
})

export default function useToggle () {
  const toggle = () => {
    state.active = !state.active
  }

  return { ...toRefs(state), toggle }
}
