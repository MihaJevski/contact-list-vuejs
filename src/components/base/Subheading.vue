<template>
  <h2
      class="subheading"
      v-bind="$attrs"
  >
    <slot />
  </h2>
</template>

<script>
export default {
  name: 'BaseSubheading',
}
</script>
