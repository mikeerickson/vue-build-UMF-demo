<template>
  <div class="red">
    <p>A {{dynamic}} Hello from Vue!</p>
  </div>
</template>

<script>
  export default {
    props: {

    },
    data() {
      return {
        dynamic: 'happy!'
      }
    },
    methods: {

    },
  }
</script>

<style lang="scss">
  .red {
    color: red;
  }
</style>
