<template>
  <Layout>
    <div class="container top">
      <div class="row pb-4">
        <div class="col-lg-4 mb-4" v-for="pro in $page.allProduct.edges" :key="pro.id">          <!-- start componente per visualizzare 3 card prodotto -->

          <div class="card">
            <g-image alt="Card image cap" class="card-img-top" :src="getSrc(pro)" />
            <div class="card-body">
              <h5 class="card-title text-truncate">{{ pro.node.title }}</h5>
              <p
                class="card-text"
              >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <!-- end componente per visualizzare 3 card prodotto -->
        </div>
      </div>

      <hr class="featurette-divider" />
    </div>
  </Layout>
</template>



<page-query>

query {
  allProduct (limit: 9) {
    edges {
      node {
        id
        title
        images {
          uRL
          }
      }
    }
  }

}

</page-query>
<script>


export default {
  metaInfo: {
    title: "Hello, world!"
  },

 methods: {
  getSrc (pro) {
  const { uRL } = pro.node.images
  const src = Array.isArray(uRL) ? uRL[0] : uRL
  console.log(src, JSON.parse(JSON.stringify(pro)))
  return src 
}
  }

};
</script>

<style lang="scss">
.top {
  margin-top: 80px;
}
</style>
