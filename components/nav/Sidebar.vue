<template>
  <div class="sidebar">
    <div @click="closeSidebarPanel">
      <slot name="backdrop">
        <div
          v-if="isPanelOpen"
          class="w-screen h-screen fixed left-0 top-0 cursor-pointer bg-backdrop"
        />
      </slot>
      <transition name="slide">
        <div
          v-if="isPanelOpen"
          class="sidebar-panel"
        >
          <slot />
        </div>
      </transition>

      <div>isVisible: {{ active }}</div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'
import { useToggle } from '~/composables'

export default defineComponent({
  setup () {
    const { active, toggle } = useToggle()
    const isPanelOpen = ref(false)
    return {
      active,
      toggle,
      isPanelOpen
    }
  }
})

// export default {
//   computed: {
//     isPanelOpen () {
//       return true
//     }
//   },
//   methods: {
//     closeSidebarPanel: () => {}
//   }
// }
</script>
<style>
.slide-enter-active,
.slide-leave-active
{
    transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
}

.sidebar-panel {
    overflow-y: auto;
    background-color: #130f40;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    padding: 3rem 20px 2rem 20px;
    width: 300px;
}
</style>
