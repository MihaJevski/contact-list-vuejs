<template>
  <b-card
      bg-variant="light"
      class="mt-2"
      header-tag="header"
      :header="header"
  >
    <b-form @submit.prevent="onSubmit">
      <b-form-group
          label-cols-lg="3"
          label="Contact details"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
      >
        <b-form-group
            id="name-group"
            label="Name:"
            label-for="name"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input
              id="name"
              v-model="contact.name"
              placeholder="Enter name"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            id="email-group"
            label="Email address:"
            label-for="email"
            label-cols-sm="3"
            label-align-sm="right"
            description="We'll never share your email with anyone else."
        >
          <b-form-input
              id="email"
              v-model="contact.email"
              type="email"
              placeholder="Enter email"
              required
          ></b-form-input>
        </b-form-group>

      </b-form-group>
      <base-btn type="submit">{{ submitText }}</base-btn>
    </b-form>
  </b-card>
</template>

<script>
import BaseBtn from "@/components/base/Btn";

export default {
  name: 'ContactFormComponent',
  components: {BaseBtn},
  props: {
    mode: {
      type: String,
      default: 'create',
      validator: function (value) {
        return ['create', 'edit'].indexOf(value) !== -1
      }
    },
    contact: {
      type: Object,
      default: function () {
        return {
          id: '',
          name: '',
          email: '',
        }
      }
    }
  },
  computed: {
    header() {
      return this.mode === 'create' ? 'Create contact' : 'Update contact';
    },
    submitText() {
      return this.mode === 'create' ? 'Save' : 'Update';
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit-form', this.contact);
    }
  }
}
</script>

<style scoped>

</style>
