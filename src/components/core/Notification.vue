<template>
  <div class="alert-wrapper">
    <b-alert
        :show="dismissCountDown"
        dismissible
        @dismissed="closeSuccess"
        @dismiss-count-down="countDownChanged"
        variant="success"
        class="selenium-success"
    >
      <h4 class="alert-heading">Well done!</h4>
      <p v-for="(message, index) in successMessages" :key="index">{{ message }}</p>
      <b-progress
          variant="success"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="3px"
      ></b-progress>
    </b-alert>
    <b-alert
        :show="showErrors"
        dismissible
        @dismissed="closeErrors"
        variant="danger"
        class="selenium-error"
    >
      <h4 class="alert-heading">Error!</h4>
      <p v-for="(message, index) in errorMessages" :key="index">{{ message }}</p>
    </b-alert>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Notification",
  data() {
    return {
      dismissSecs: 2,
      dismissCountDown: 0,
    }
  },
  computed: {
    ...mapGetters({
      errorMessages: 'getErrorMessages',
      successMessages: 'getSuccessMessages',
    }),
    showErrors() {
      return this.errorMessages.length > 0;
    },
  },
  watch: {
    successMessages(val) {
      if (val.length) {
        this.showAlert();
      }
    }
  },
  methods: {
    ...mapActions({
      setErrorMessages: 'setErrorMessages',
      setSuccessMessages: 'setSuccessMessages'
    }),
    closeErrors() {
      this.setErrorMessages([]);
    },
    closeSuccess() {
      this.setSuccessMessages([]);
      this.dismissCountDown = 0;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>

<style scoped>
.alert-wrapper {
  position: fixed;
  transition: .3s cubic-bezier(.25, .8, .5, 1);
  top: 30px;
  right: 30px;
  z-index: 10;
  width: 100%;
  max-width: 400px;
}
</style>
