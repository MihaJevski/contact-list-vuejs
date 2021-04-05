<template>
  <div>
    <base-section>
      <b-row v-if="auth">
        <b-col class="mb-3">
          <h3>Welcome {{ auth.username }}</h3>
        </b-col>
      </b-row>
    </base-section>
    <base-section>
      <b-row>
        <b-col>
          <base-btn @click="goToContacts">Go to contacts</base-btn>
        </b-col>
      </b-row>
    </base-section>
  </div>
</template>

<script>
import BaseBtn from "@/components/base/Btn";
import BaseSection from "@/components/base/Section";
import {mapGetters} from "vuex";

export default {
  components: {BaseSection, BaseBtn},
  computed: {
    ...mapGetters(['auth']),
  },
  methods: {
    goToContacts() {
      this.$router.push({name: "contacts"});
    },
  },
}
</script>
