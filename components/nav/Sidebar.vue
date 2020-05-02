<template>
  <div>
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
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const active = ref(true)

    function toggle () {
      active.value = !active.value
    }

    function closeSidebar (e) {
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
