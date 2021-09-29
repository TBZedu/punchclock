<template>
  <div class="wrapper">
    <div class="controls">
      <button class="button --action-edit" @click="openEditMode()">Create entry</button>
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

        <button class="button --action-edit" @click="openEditMode(entry)">Edit</button>
        <button class="button --action-delete" @click="deleteEntry(entry.id)">Delete</button>
      </div>
    </div>

    <div class="modal" v-show="modalActive">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <hr>
        <form action="" @submit.prevent="createEntry">
          <div>
            <input type="date" v-model="modalData.checkInDate">
            <input type="time" v-model="modalData.checkInTime">
          </div>

          <div>
            <input type="date" v-model="modalData.checkOutDate">
            <input type="time" v-model="modalData.checkOutTime">
          </div>

          <button class="button --action-login">{{ modalData.id == null ? 'Create' : 'Update' }}</button>
        </form>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  data: () => ({

    modalActive: false,

    modalData: {
      id: null,
      checkInDate: null,
      checkInTime: null,

      checkOutDate: null,
      checkOutTime: null
    }

  }),
  computed: {
    entries() {
      return this.$store.state.entries;
    }
  },
  methods: {
    deleteEntry(entryId) {
      this.$store.dispatch('deleteEntry', entryId);
    },
    createEntry() {
      let modalData = this.modalData;

      if(modalData.checkInDate == null ||
      modalData.checkInTime == null ||
      modalData.checkOutDate == null ||
      modalData.checkOutTime == null) return;

      let entry = {
        checkIn: `${modalData.checkInDate}T${modalData.checkInTime}:00.000`,
        checkOut: `${modalData.checkOutDate}T${modalData.checkOutTime}:00.000`,
      }

      if(this.modalData.id != null) {
        entry.id = this.modalData.id;
        this.$store.dispatch('updateEntry', entry);
      } else {
        this.$store.dispatch('createEntry', entry);
      }
      this.modalActive = false;
    },
    openEditMode(entry = {
      id: null,
      checkInDate: null,
      checkInTime: null,

      checkOutDate: null,
      checkOutTime: null
    }) {
      this.modalActive = forceOpen || !this.modalActive;
      if(!this.modalActive) return;

      if(entry.id != null) {
        let checkIn = entry.checkIn.split('T');
        let checkOut = entry.checkOut.split('T');

        entry = {
          id: entry.id,
          checkInDate: checkIn[0],
          checkInTime: checkIn[1].slice(0, 5),
          
          checkOutDate: checkOut[0],
          checkOutTime: checkOut[1].slice(0, 5)
        }
      }

      this.modalData = entry;
    }
  },
  mounted() {
    this.$store.dispatch('fetchEntries')
  }
}
</script>