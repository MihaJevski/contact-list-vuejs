<template>
  <div>
    <base-section>
      <b-row>
        <b-col>
          <base-subheading>{{ title }}</base-subheading>
          <base-subheading>{{ description }}</base-subheading>
        </b-col>
      </b-row>
    </base-section>
    <base-section>
      <b-row>
        <b-col>
          <base-btn @click="goHome">Go home</base-btn>
        </b-col>
        <b-col>
          <base-btn @click="goToContacts">Go to contacts</base-btn>
        </b-col>
      </b-row>
    </base-section>
  </div>
</template>

<script>
import BaseBtn from "@/components/base/Btn";
import BaseSubheading from "@/components/base/Subheading";
import BaseSection from "@/components/base/Section";

export default {
  name: 'NotFound',
  components: {BaseBtn, BaseSection, BaseSubheading},
  data() {
    return {
      title: "404",
      description: 'Sorry but we could not find resource you are looking for'
    };
  },
  methods: {
    goToContacts() {
      this.$router.push({name: "contacts"});
    },
    goHome() {
      this.$router.push({name: "home"});
    },
  },
}
</script>

<style scoped>

</style>
