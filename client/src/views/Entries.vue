<template>
  <div class="wrapper">
    <div class="list">
      <div class="list__entry" v-for="entry in entries" :key="entry.id">
        <label class="entry__label">Check-in</label>
        <p>{{ new Date(Date.parse(entry.checkIn)).toLocaleString() }}</p>

        <label class="entry__label">Check-out</label>
        <p>{{ new Date(Date.parse(entry.checkOut)).toLocaleString() }}</p>

        <button class="entry__button --action-edit">Edit</button>
        <button class="entry__button --action-delete" @click="deleteEntry(entry.id)">Delete</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
  computed: {
    entries() {
      console.log(this.entries)
      return this.$store.state.entries;
    }
  },
  methods: {
    deleteEntry(entryId) {
      this.$store.dispatch('deleteEntry', entryId);
    }
  },
  mounted() {
    this.$store.dispatch('fetchEntries')
  }
}
</script>