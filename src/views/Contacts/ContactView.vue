<template>
  <div>
    <base-section>
      <back-to-list route="contacts"></back-to-list>
      <b-row>
        <b-col>
          <base-subheading>Details</base-subheading>
        </b-col>
        <b-col class="action-block">
          <b-icon v-if="contact.canBeUpdated" icon="pencil-fill" class="h4 mr-2 action-icon" variant="primary" @click="edit(contact.id)"></b-icon>
          <b-icon v-if="contact.canBeDeleted" icon="trash-fill" class="h4 mr-2 action-icon" variant="danger" @click="remove(contact.id)"></b-icon>
        </b-col>
      </b-row>
    </base-section>
    <base-section>
      <b-row>
        <b-col>
          <p><b>Name:</b> {{ contact.name }}</p>
          <p><b>Email:</b> {{ contact.email }}</p>
        </b-col>
      </b-row>
    </base-section>
  </div>
</template>

<script>
import BackToList from "@/components/base/BackToList";
import BaseSubheading from "@/components/base/Subheading";
import BaseSection from "@/components/base/Section";
import {getContactRequest} from "@/api/contacts";
import {deleteContactRequest} from "@/api/contacts";
import contactEditMixin from "@/mixins/contactEditMixin";

export default {
  name: 'ContactView',
  components: {BaseSection, BaseSubheading, BackToList},
  mixins: [contactEditMixin],
  data() {
    return {
      contact: {}
    }
  },
  async created() {
    await getContactRequest(this.$route.params.id)
        .then(res => {
          this.contact = res.data
        })
  },
  methods: {
    async remove(id) {
      await deleteContactRequest(id)
          .then(() => {
            this.$router.push({name: "contacts"});
          });
    },
  },

}
</script>

<style scoped>
.action-block {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
