<template>
  <div id="burger" :class="{ 'active' : active }" @click.prevent="toggle">
    <slot>
      <button type="button" class="burger-button cursor-pointer focus:outline-none" title="Menu">
        <span class="hidden">Toggle menu</span>
        <span class="burger-bar burger-bar--1" />
        <span class="burger-bar burger-bar--2" />
        <span class="burger-bar burger-bar--3" />
      </button>
      <div>Burger State: {{ active ? 'active' : 'inactive' }}</div>
    </slot>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { useToggle } from '~/composables'

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
<style>
@import '~/assets/css/vars.css';

.burger-button {
  position: relative;
  height: var(--burger-size);
  width: var(--burger-size);
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #130f40;
  position: absolute;
  top: 50%;
  right: var(--burger-x);
  left: var(--burger-x);
  height: var(--burger-thickness);
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(calc(-1 * var(--burger-x)));
  transform: translateY(calc(-1 * var(--burger-x)));
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(var(--burger-x));
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: #000;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}
</style>
