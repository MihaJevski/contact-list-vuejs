<template>
  <div>
    <base-section>
      <back-to-list route="contacts"></back-to-list>
      <contact-form-component
          mode="edit"
          :contact="contact"
          @submit-form="onSubmit"
      ></contact-form-component>
    </base-section>
  </div>
</template>

<script>
import BackToList from "@/components/base/BackToList";
import BaseSection from "@/components/base/Section";
import ContactFormComponent from "@/components/contacts/ContactFormComponent";
import {getContactRequest, updateContactRequest} from "@/api/contacts";

export default {
  name: 'ContactEdit',
  components: {BaseSection, BackToList, ContactFormComponent},
  data() {
    return {
      contact: {
        id: '',
        name: '',
        email: '',
      },
    }
  },
  async created() {
    await getContactRequest(this.$route.params.id)
        .then(res => {
          this.contact = res.data
        })
  },
  methods: {
    async onSubmit(contact) {
      await updateContactRequest(contact.id, contact)
          .then(() => {
            this.$router.push({name: "contacts"})
          });
    },
  }
}
</script>
