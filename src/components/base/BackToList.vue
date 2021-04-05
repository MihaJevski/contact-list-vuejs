<template>
  <b-row>
    <b-col>
      <b-link :to="{ name: route }" class="route-link">{{ title }}</b-link>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'BackToList',
  props: {
    route: String,
  },
  data() {
    return {
      title: '<< back to list'
    }
  },
}
</script>

<style scoped>
.route-link {
  color: rgba(0, 0, 0, 0.5);
}

.route-link:hover {
  color: rgba(0, 0, 0, 0.7);
}
</style>
