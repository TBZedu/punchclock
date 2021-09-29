import { createStore } from 'vuex'
import api from '@/services/api'

export default createStore({
  state: {
    currentUser: {
      isAdmin: false
    },

    categories: [],
    entries: [],
    teams: [],
    users: []
  },
  mutations: {
    SET_CURRENT_USER(state, user) {
      this.currentUser = user;
    },

    SET_ENTRIES(state, entries) {
      state.entries = entries;
    },
    DELETE_ENTRY(state, entryId) {
      state.entries = state.entries.filter(entry => entry.id !== entryId);
    },
    CREATE_ENTRY(state, entry) {
      state.entries.push(entry);
    },
    UPDATE_ENTRY(state, newEntry) {
      let oldEntry = state.entries.find(entry => entry.id == newEntry.id);
      oldEntry.checkIn = newEntry.checkIn;
      oldEntry.checkOut = newEntry.checkOut;
    }

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
      api.get('/entries').then( res => context.commit('SET_ENTRIES', res.data));
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
      api.delete(`/entries/${entryId}`).then( () => context.commit('DELETE_ENTRY', entryId));
    },





    /**
     * Fetch all entries of a user
     */
     fetchUsers(context) {

    },


    /**
     * Patch an existing entry
     * @param {Object} newEntry the new data of an entry.
     */
     updateUser(context, newEntry) {

    },

    
    /**
     * Delete an existing entry.
     * @param {String} entryId the id of the entry.
     */
    deleteUser(context, entryId) {

    },

    



    /**
     * Fetch all entries of a user
     */
     fetchTeams(context) {

    },


    /**
     * Patch an existing entry
     * @param {Object} newEntry the new data of an entry.
     */
     updateTeam(context, newEntry) {

    },

    
    /**
     * Delete an existing entry.
     * @param {String} entryId the id of the entry.
     */
    deleteTeam(context, entryId) {

    },





    /**
     * Fetch all entries of a user
     */
     fetchCategories(context) {

    },


    /**
     * Patch an existing entry
     * @param {Object} newEntry the new data of an entry.
     */
     updateCategory(context, newEntry) {

    },

    
    /**
     * Delete an existing entry.
     * @param {String} entryId the id of the entry.
     */
    deleteCategory(context, entryId) {

    },
  },
  getters: {
    isLoggedIn: state => state.currentUser != null,
    userRole: state => {
      const user = state.currentUser;
      if(user == null) return ['guest'];

      let roles = ['user'];
      if(user.isAdmin) roles.push('admin');
      return roles;
    }
  }
})
