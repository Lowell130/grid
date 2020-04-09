<template>
  <Layout>
    {{ $page.product.title }}
     {{ $page.product.ASIN }}
   <span class="float-right"><strong>  {{ $page.product.price }}</strong></span>
   </Layout>
</template>

<page-query>
query Product ($id: ID!) {
  product (id: $id) {
    id
    title
    price
  }
}
</page-query>
