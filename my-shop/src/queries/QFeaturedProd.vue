// QFeaturedProd.vue
<template>
  <div class="row">
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
  posts: allProduct (limit: 15, sortBy: "discount", order: DESC) {
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