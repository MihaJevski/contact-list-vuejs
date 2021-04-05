export default {
  methods: {
    edit(id) {
      this.$router.push({
        name: 'contacts_edit',
        params: {id: id}
      })
    },
  }
};
