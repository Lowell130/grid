<template>
  <Layout>
    <section class="section-intro padding-y-sm">
      <div class="container">
        <div class="intro-banner-wrap">
          <g-image src="~/assets/images/banners/1.jpg" class="img-fluid rounded"></g-image>
        </div>
      </div>
      <!-- container //  -->
    </section>
    <section class="section-content">
      <div class="container">
       <header class="section-heading">
	<a href="/product-list/" class="btn btn-outline-primary float-right">Vedi tutti</a>
	<h3 class="section-title">Prodotti del momento</h3>
</header>
        <!-- sect-heading -->

        <div class="row">
          <div class="col-md-3" v-for="pro in $page.allProduct.edges" :key="pro.id">
            <div href="#" class="card card-product-grid">
              <a href="#" class="img-wrap">
                <g-link :to="pro.node.path">
                  <g-image :src="getSrc(pro)" />
                </g-link>
              </a>
              <figcaption class="info-wrap">
                <span>
                  <g-link :to="pro.node.path" class="title text-truncate">{{ pro.node.title }}</g-link>
                </span>

                <div class="rating-wrap">
                 
                 
                </div>
             
                <!-- price-wrap.// -->
              </figcaption>
              <figcaption class="info-wrap">
                 
		
				<a href="#" class="btn btn-block btn-success"><i class="fas fa-shopping-cart"></i> {{ pro.node.listPrice }} </a>
			</figcaption>
            </div>
          </div>
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </div>
    </section>

    <!-- <div class="container top">
      <div class="row pb-4">
        <div class="col-lg-4 mb-4" v-for="pro in $page.allProduct.edges" :key="pro.id">
         

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
         
        </div>
      </div>

      <hr class="featurette-divider" />
    </div>-->
  </Layout>
</template>



<style lang="scss">
@import '../assets/scss/fonts';
// @import '../assets/scss/bootstrap.scss';
// @import '../assets/scss/main.scss';
// @import '../assets/fonts/fontawesome/css/all.css';

</style>



<page-query>
query {
  allProduct (limit: 16) {
    edges {
      node {
        id
        title
        price
        listPrice
        path
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
    getSrc(pro) {
      const { uRL } = pro.node.images;

      return uRL[1] || uRL[0];
    }
  }
};
</script>

