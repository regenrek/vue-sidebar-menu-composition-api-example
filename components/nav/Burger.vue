<template>
  <button type="button" :class="{'active': active}" class="relative block z-999 border-0 cursor-pointer focus:outline-none" @click.prevent="toggle">
    {{ !active ? 'Click me 👍' : 'Close me ❌' }}
  </button>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import useToggle from '~/composables/toggle'

export default defineComponent({
  setup () {
    const { active, toggle } = useToggle()

    return {
      active,
      toggle
    }
  }
})
</script>
