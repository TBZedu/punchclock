import { createStore } from 'vuex'
import api from '@/services/api'
import { saveToken } from './services/token';
import router from '@/router';

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
      state.currentUser = user;
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
      api.post('/users', details).then( res => {
        router.push('/login')
      })
    },


    /**
     * Try loggin in the user
     * @param {Object} credentials this is an object containing a username and a password.
     */
    loginUser(context, credentials) {
      api.post('/login', credentials).then( res => {
        saveToken(res.headers.authorization)
      })
    },





    /**
     * Fetch all entries of the user
     */
    fetchEntries(context) {
      api.get('/entries').then( res => context.commit('SET_ENTRIES', res.data));
    },


    /**
     * Create a new entry for the user
     * @param {Object} entry this is an object containing a checkIn and checkOut date.
     */
    createEntry(context, entry) {
      console.log('Creating entry:', entry)
    },


    /**
     * Patch an existing entry for the user
     * @param {Object} newEntry the new data of an entry.
     */
    updateEntry(context, newEntry) {
      console.log('Updating entry:', newEntry)
    },

    
    /**
     * Delete an existing entry
     * @param {String} entryId the id of the entry.
     */
    deleteEntry(context, entryId) {
      api.delete(`/entries/${entryId}`).then( () => context.commit('DELETE_ENTRY', entryId));
    },





    /**
     * Fetch all users for the admin view
     */
     fetchUsers(context) {

    },


    /**
     * Patch an existing user in the admin view
     * @param {Object} newUser the new data of an entry.
     */
     updateUser(context, newUser) {

    },

    
    /**
     * Delete an existing user in the admin view
     * @param {String} userId the id of the entry.
     */
    deleteUser(context, userId) {

    },

    



    /**
     * Fetch all teams for the admin view
     */
     fetchTeams(context) {

    },


    /**
     * Patch an existing team in the admin view
     * @param {Object} newTeam the new data of an entry.
     */
     updateTeam(context, newTeam) {

    },

    
    /**
     * Delete an existing team in the admin view
     * @param {String} teamId the id of the entry.
     */
    deleteTeam(context, teamId) {

    },





    /**
     * Fetch all categories for the admin view
     */
     fetchCategories(context) {

    },


    /**
     * Patch an existing category in the admin view
     * @param {Object} newCategory the new data of an entry.
     */
     updateCategory(context, newCategory) {

    },

    
    /**
     * Delete an existing category in the admin view
     * @param {String} categoryId the id of the entry.
     */
    deleteCategory(context, categoryId) {

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
