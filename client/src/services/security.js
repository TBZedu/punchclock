import store from '@/store'
import { destroyToken } from '@/services/token'

export default (to, from, next) => {

  if(to.path == '/logout') {
    destroyToken();
    store.commit('SET_CURRENT_USER', null);
    return next('/login')
  }
  next()
}