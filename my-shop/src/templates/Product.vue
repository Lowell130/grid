<template>
  <Layout>
    <div class="container">
      <img :src="getSrc($page.product.images)" width="200px">
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
    images {
      uRL
    }
  }
}
</page-query>

<script>
export default {
  methods: {
    getSrc(images) {
      const { uRL } = images;
      return uRL[1] || uRL[0];
    }
  }
}
</script>
