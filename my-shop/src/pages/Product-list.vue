<template>
  <Layout>
    <h1>Product list</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <ul>
      <li v-for="{ node: product } in $page.allProduct.edges" :key="product.id">
        <g-link :to="product.path">{{ product.title }}</g-link>
      </li>
    </ul>
    <Pager :info="$page.allProduct.pageInfo"/>
  </Layout>
</template>



<script>
import { Pager } from 'gridsome'
export default {
  metaInfo: {
    title: 'All Products'
  },
  components: {
    Pager
  }
}
</script>

<page-query>
query AllProducts ($page: Int) {
  allProduct (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>
