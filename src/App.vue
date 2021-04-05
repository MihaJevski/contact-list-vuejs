<template>
  <div>
    <core-notification />
    <core-header v-if="!!auth" />
    <core-view />
    <core-footer v-if="!!auth" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {getAuthUser} from "@/api/auth";

export default {
  name: 'App',

  components: {
    CoreHeader: () => import('./components/core/Header'),
    CoreFooter: () => import('./components/core/Footer'),
    CoreView: () => import('./components/core/View'),
    CoreNotification: () => import('./components/core/Notification'),
  },
  computed: {
    ...mapGetters(['auth']),
  },
  created() {
    if (window.localStorage.getItem('ACCESS_TOKEN')) {
      getAuthUser()
          .then(res => {
            this.$store.dispatch('setAuth', res.data);
          });
    }
  },
}
</script>
