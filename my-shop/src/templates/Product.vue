<template>
  <Layout>
    <div class="container">
    {{ $page.product.title }}
     {{ $page.product.ASIN }}
   <span class="float-right"><strong>  {{ $page.product.price }}</strong></span>
   </div>
   </Layout>
</template>

<style lang="scss">
 .container {
  margin-top: 80px;
	
}
</style>

<page-query>
query Product ($id: ID!) {
  product (id: $id) {
    id
    title
    price
  }
}
</page-query>
