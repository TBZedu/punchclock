import { createStore } from 'vuex'

export default createStore({
  state: {

  },
  mutations: {

  },
  actions: {
    /**
     * Fetch the user's details.
     */
    fetchUser(context) {
      
    },


    /**
     * Create a new user
     * @param {Object} details this is an object containing a username, password and name for the new user.
     */
     registerUser(context, details) {

    },


    /**
     * Try loggin in the user
     * @param {Object} credentials this is an object containing a username and a password.
     */
    loginUser(context, credentials) {

    },


    /**
     * Fetch all entries of a user
     */
    fetchEntries(context) {

    },


    /**
     * Create a new entry 
     * @param {Object} entry this is an object containing a checkIn and checkOut date.
     */
    createEntry(context, entry) {

    },


    /**
     * Patch an existing entry
     * @param {Object} newEntry the new data of an entry.
     */
    updateEntry(context, newEntry) {

    },

    
    /**
     * Delete an existing entry.
     * @param {String} entryId the id of the entry.
     */
    deleteEntry(context, entryId) {

    }
  },
  getters: {

  }
})
