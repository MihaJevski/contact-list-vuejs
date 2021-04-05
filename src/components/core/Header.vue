<template>
  <b-navbar toggleable="lg" type="light" class="header">
    <b-navbar-brand>
      <img :src="require('../../assets/logo.png')" alt="Logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">
          <b-icon icon="house"></b-icon>
        </b-nav-item>
        <b-nav-item to="/contacts">Contacts</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" v-if="auth">
        <p>{{ auth.role }}</p>
        <b-nav-item href="javascript:void(0)" @click="logout">
          <img :src="require('../../assets/logout.png')" alt="Logout" title="Logout">
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'CoreHeader',
  data() {
    return {
      limitVoucher: 0
    }
  },
  computed: {
    ...mapGetters(['auth']),
  },
  methods: {
    logout() {
      window.localStorage.removeItem('ACCESS_TOKEN');
      this.$store.dispatch('setAuth', null);
      this.$router.push({name: 'login'});
    },
  },
}
</script>

<style scoped>
.header {
  border-bottom: 2px solid #96c11f;
}

img {
  height: 30px;
  width: auto;
}

.navbar-light .navbar-nav .nav-link.router-link-exact-active {
  color: #96c11f;
}
</style>
