import store from '@/store'
import { destroyToken } from '@/services/token'
import { getToken } from './token';

export default async (to, from, next) => {

  if(to.path == '/logout') {
    destroyToken();
    store.commit('SET_CURRENT_USER', null);
    return next('/login')
  }

  if (to.matched.some(record => record.meta.authRequired.length !== 0)) {

    if(!store.getters.isLoggedIn()) {

      return await store.dispacth('fetchUser').then(
        () => next()
      ).catch(
        () => next({ path: '/login', query: { redirect: to.fullPath } })
      );
    }

    // User is logged in, check if role has access
    if(store.getters.userRole.includes(to.meta.authRequired))
      return next();

    // User's role has no access to this route. Send back to /
    return next('/');
  }
  next()
}