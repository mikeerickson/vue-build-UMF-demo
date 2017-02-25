import Hello from './Hello.vue'

function install(Vue) {
  Vue.component('hello', Hello)
}

export default {
  install
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use( {
    install
  })
}
