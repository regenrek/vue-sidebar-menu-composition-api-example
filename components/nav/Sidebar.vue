<template>
  <div>
    <!-- this is just a test - will remove it -->
    <div class="flex min-h-screen justify-center items-center">
      <button class="cursor-pointer" @click.prevent="toggle">
        Open Sidebar {{ active }}
      </button>
    </div>
    <!-- -- -->

    <slot name="backdrop">
      <div
        v-if="active"
        class="w-screen h-screen fixed left-0 top-0 cursor-pointer bg-backdrop"
        @click="toggle"
      />
    </slot>
    <transition name="slide">
      <div
        v-if="active"
        class="h-screen fixed overflow-y-auto bg-Cviolet left-0 top-0 z-999 w-300 px-12"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import useToggle from '~/composables/toggle'

export default defineComponent({
  setup () {
    const { toggle, active } = useToggle()

    function closeSidebar () {
      active.value = false
    }

    return {
      active,
      toggle,
      closeSidebar
    }
  }
})
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
</style>
