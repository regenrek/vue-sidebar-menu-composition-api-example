<template>
  <div class="bg-mjgray">
    <Nav />
    <Sidebar />
    <nuxt />
  </div>
</template>
<script>
import Nav from '~/components/nav/Nav'
import Sidebar from '~/components/nav/Sidebar'

export default {
  components: {
    Nav,
    Sidebar
  }
}
</script>
