<template>
  <button type="button" class="relative block z-999 border-0 cursor-pointer focus:outline-none" title="Menu" @click.prevent="toggle">
    {{ !active ? 'Click me 👍' : 'Close me ❌' }}
  </button>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const active = ref(false)

    function toggle () {
      active.value = !active.value
    }

    return {
      active,
      toggle
    }
  }
})
</script>
