<template>
  <div class="wrapper">
    <div class="controls">
      <button class="button --action-edit">Create entry</button>
    </div>
    <div class="list">
      <div v-if="entries.length === 0">
        <h3>No entries available</h3>
        <p>Click on "Create entry" to add one.</p>
      </div>
      
      <div class="list__entry" v-for="entry in entries" :key="entry.id">
        <label class="entry__label">Check-in</label>
        <p>{{ new Date(Date.parse(entry.checkIn)).toLocaleString() }}</p>

        <label class="entry__label">Check-out</label>
        <p>{{ new Date(Date.parse(entry.checkOut)).toLocaleString() }}</p>

        <button class="button --action-edit">Edit</button>
        <button class="button --action-delete" @click="deleteEntry(entry.id)">Delete</button>
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