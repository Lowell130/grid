// QSidebarProd.vue
<template>
  <span>
    <slot v-bind:sidebar="sidebar"></slot>
  </span>
</template>
<script>
export default {
  computed: {
    sidebar() {
      return this.$static.sidebar && this.$static.sidebar.edges.map(e => e.node);
    }
  }
};
</script>
<static-query>
query FeaturedSidebar {
  sidebar: allProduct (limit: 4, sortBy: "listPrice", order: DESC) {
   edges {
      node {
        id
        title
        price
        description
        listPrice
        path
        uRL
        images {
          uRL
        }
      }
    }
  }
}
</static-query>