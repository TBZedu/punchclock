<template>
  <nav>
    <ul class="navbar__nav">
      <li><router-link :to="item.path" v-for="item in items" :class="{ '--active': item.active }" :key="item.title" class="nav__item">{{ item.title }}</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { routes } from '@/router'
export default {
  name: 'Nav',
  computed: {
    items() {
      const userRole = this.$store.getters.userRole;
      let routeItems = routes.filter( route => route.meta.inNav && route.meta.authRequired.length == 0 ? true : userRole.includes(route.meta.authRequired));

      const currentRoute = this.$route;

      routeItems = routeItems.map( route => ({
        path: route.path,
        title: route.name,
        active: currentRoute.path == route.path
      }))

      return routeItems;
    }
  }
}
</script>