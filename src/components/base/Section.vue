<template>
  <section
      v-bind="$attrs"
  >
    <slot />
  </section>
</template>

<script>
export default {
  name: 'BaseSection',
}
</script>

<style>
section {
  padding-top: 20px;
}
</style>
