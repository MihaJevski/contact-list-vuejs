<template>
  <div>
    <base-section>
      <back-to-list route="contacts"></back-to-list>
      <contact-form-component
          mode="create"
          @submit-form="onSubmit"
      ></contact-form-component>
    </base-section>
  </div>
</template>

<script>
import BackToList from "@/components/base/BackToList";
import BaseSection from "@/components/base/Section";
import ContactFormComponent from "@/components/contacts/ContactFormComponent";
import {createContactRequest} from "@/api/contacts";

export default {
  name: 'ContactCreate',
  components: {
    BaseSection,
    BackToList,
    ContactFormComponent
  },
  methods: {
    async onSubmit(contact) {
      await createContactRequest(contact)
          .then(() => {
            this.$router.push({name: "contacts"})
          });
    },
  }
}
</script>
