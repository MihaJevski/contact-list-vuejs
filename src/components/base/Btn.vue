<template>
  <b-button
      variant="primary"
      size="lg"
      v-bind="$attrs"
      v-on="$listeners"
  >
    <slot />
  </b-button>
</template>

<script>
export default {
  name: 'BaseBtn',
}
</script>

<style scoped>
.btn-primary {
  background-color: #96c11f;
  border-color: #96c11f;
}

.btn-primary:hover,
.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active {
  background-color: #7fa31a;
  border-color: #7fa31a;
}

.btn-primary:focus, .btn-primary.focus {
  color: #fff;
  background-color: #96c11f;
  border-color: #96c11f;
  box-shadow: 0 0 0 0.2rem rgb(159, 206, 30);
}

.btn-primary:not(:disabled):not(.disabled):active:focus,
.btn-primary:not(:disabled):not(.disabled).active:focus {
  box-shadow: 0 0 0 0.2rem rgba(150, 193, 31, 0.5);
}
</style>
