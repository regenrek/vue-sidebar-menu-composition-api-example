import { provide, inject, ref } from '@vue/composition-api'

// export const store = Vue.observable({
//   isNavOpen: false
// })

// export const mutations = {
//   setIsNavOpen (yesno) {
//     store.isNavOpen = yesno
//   },
//   toggleNav () {
//     store.isNavOpen = !store.isNavOpen
//   }
// }

const Sidebar = Symbol('Sidebar')

export function provideSidebar () {
  const isNavOpen = ref(false)
  const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value
  }

  provide(Sidebar, {
    isNavOpen,
    toggleNav
  })
}

export function useSidebar () {
  const sidebar = inject(Sidebar)

  if (!sidebar) {
    throw new Error('No Sidebar provided!')
  }

  return sidebar
}
