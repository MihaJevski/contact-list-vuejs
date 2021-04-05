<template>
  <div>
    <base-section>
      <b-row>
        <b-col>
          <base-subheading>Contacts</base-subheading>
        </b-col>
        <b-col class="text-right">
          <base-btn v-if="auth.authorizedToCreateContact" @click="create">Create</base-btn>
        </b-col>
      </b-row>
    </base-section>
    <base-section v-if="contacts.length">
      <div>
        <b-table
            striped
            hover
            show-empty
            stacked="md"
            sort-icon-left
            :items="contacts"
            :fields="fields"
            :busy="isBusy"
            class="contacts"
        >
          <template #table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle"></b-spinner>
              <strong>Loading...</strong>
            </div>
          </template>
          <template v-slot:cell(action)="row">
            <div class="actions">
              <b-icon icon="eye-fill" class="h4 mr-2 action-icon" variant="info" @click="view(row.item.id)"></b-icon>
              <b-icon v-if="row.item.canBeUpdated" icon="pencil-fill" class="h4 mr-2 action-icon" variant="primary" @click="edit(row.item.id)"></b-icon>
              <b-icon v-if="row.item.canBeDeleted" icon="trash-fill" class="h4 mr-2 action-icon" variant="danger" @click="remove(row.item.id)"></b-icon>
            </div>

          </template>
        </b-table>
      </div>
    </base-section>
    <base-section v-else>
      <h4>There are no contacts</h4>
    </base-section>
  </div>
</template>

<script>
import BaseBtn from "@/components/base/Btn";
import BaseSubheading from "@/components/base/Subheading";
import BaseSection from "@/components/base/Section";
import {deleteContactRequest, getAllContactsRequest} from "@/api/contacts";
import {mapGetters} from "vuex";
import contactEditMixin from "@/mixins/contactEditMixin";

export default {
  name: 'ContactsList',
  components: {BaseBtn, BaseSection, BaseSubheading},
  mixins: [contactEditMixin],
  data() {
    return {
      isBusy: false,
      contacts: [],
      fields: [
        {
          key: 'name',
          label: 'Name',
          sortable: true
        },
        {
          key: 'email',
          label: 'Email',
          sortable: true
        },
        {
          key: 'action',
          label: 'Actions',
          sortable: false
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['auth']),
  },
  async created() {
    await getAllContactsRequest()
        .then(res => {
          this.contacts = res.data;
        });
  },
  methods: {
    create() {
      this.$router.push({name: "contacts_create"})
    },
    view(id) {
      this.$router.push({
        name: 'contacts_view',
        params: {id: id}
      })
    },
    async remove(id) {
      this.isBusy = !this.isBusy
      await deleteContactRequest(id)
          .then(res => {
            this.contacts = res.data.data;
          })
          .finally(() => {
            this.isBusy = !this.isBusy
          });
    },
  },
}
</script>

<style scoped>

.action-icon:hover {
  cursor: pointer;
}
</style>

