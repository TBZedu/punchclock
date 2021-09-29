import store from '@/store'
import { destroyToken } from '@/services/token'

export default async (to, from, next) => {

  if(to.path == '/logout') {
    destroyToken();
    store.commit('SET_CURRENT_USER', null);
    return next('/login')
  }

  if (to.matched.some(record => record.meta.authRequired.length !== 0)) {

    if(!store.getters.isLoggedIn && to.meta.authRequired != 'guest') {

      // Note to self, check spelling instead of trying to find out why something isn't working, if you are sure a function exists to 1000000%
      await store.dispatch('fetchUser').then(
        () => next()
      ).catch(
        () => next({ path: '/login', query: { redirect: to.fullPath } })
      );
      return;
    }

    // User is logged in, check if role has access
    if(store.getters.userRole.includes(to.meta.authRequired))
      return next();

    // User's role has no access to this route. Send back to /
    return next('/');
  }
  next()
}