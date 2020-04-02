<template>
  <Layout>
    {{ $page.product.title }}
     {{ $page.product.ASIN }}
  </Layout>
</template>

<page-query>
query Product ($id: ID!) {
  product (id: $id) {
    id
    title
  }
}
</page-query>
