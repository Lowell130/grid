// QFeaturedProd.vue
<template>
  <div>
    <slot v-bind:posts="posts"></slot>
  </div>
</template>
<script>
export default {
  computed: {
    posts() {
      return this.$static.posts && this.$static.posts.edges.map(e => e.node);
    }
  }
};
</script>
<static-query>
query FeaturedPosts {
  posts: allProduct(limit: 10) {
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