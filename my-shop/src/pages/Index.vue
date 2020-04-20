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

                <div class="rating-wrap"></div>

                <!-- price-wrap.// -->
              </figcaption>
              <figcaption class="info-wrap">
                <a href="#" class="btn btn-block btn-success">
                  <i class="fas fa-shopping-cart"></i>
                  {{ pro.node.listPrice }}
                </a>
              </figcaption>
            </div>
          </div>
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </div>

      <div class="container">
        <header class="section-heading">
          <h3 class="section-title">Ultimi arrivi</h3>
        </header>
      </div>

      <div class="container">
        <div class="row">
          <main class="col-md-12">
            <!-- ============================ COMPONENT 3 ================================= -->

            <article class="card card-product-list">
              <div class="row no-gutters">
                <aside class="col-md-3">
                  <a href="#" class="img-wrap">
                    <span class="badge badge-danger">NEW</span>
                    <img src="../assets/images/8.jpg" />
                  </a>
                </aside>
                <div class="col-md-6">
                  <div class="info-main">
                    <a href="#" class="h5 title">Apple air pods 2</a>
                    <div class="rating-wrap mb-3">
                      <ul class="rating-stars">
                        <li style="width:80%" class="stars-active">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>
                      <div class="label-rating">7/10</div>
                    </div>
                    <!-- rating-wrap.// -->

                    <p>Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam</p>
                  </div>
                  <!-- info-main.// -->
                </div>
                <aside class="col-sm-3">
                  <div class="info-aside">
                    <div class="price-wrap">
                      <span class="price h5">$140</span>
                      <del class="price-old">$198</del>
                    </div>
                    <!-- info-price-detail // -->
                    <p class="text-success">Free shipping</p>
                    <br />
                    <p>
                      <a href="#" class="btn btn-primary btn-block">Details</a>
                      <a href="#" class="btn btn-light btn-block">
                        <i class="fa fa-heart"></i>
                        <span class="text">Add to wishlist</span>
                      </a>
                    </p>
                  </div>
                  <!-- info-aside.// -->
                </aside>
              </div>
            </article>
          </main>
        </div>
      </div>
      <div class="container">
        <header class="section-heading">
          <h3 class="section-title">Ultimi arrivi 2</h3>
        </header>
      </div>

      <template>
        
          <div class="container">
            <div class="row">
              <main class="col-md-12">
                <article class="card card-product-list">
                  <div class="row no-gutters">
                    <aside class="col-md-3">
                      <a href="#" class="img-wrap">
                        <span class="badge badge-danger">NEW</span>
                        <img src="../assets/images/8.jpg" />
                      </a>
                    </aside>
                    <div class="col-md-6">
                      <div class="info-main">
                        <a href="#" class="h5 title">titolo</a>
                        <div class="rating-wrap mb-3">
                          <ul class="rating-stars">
                            <li style="width:80%" class="stars-active">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </li>
                          </ul>
                          <div class="label-rating">7/10</div>
                        </div>
                        <!-- rating-wrap.// -->

                        <p>Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam</p>
                      </div>
                      <!-- info-main.// -->
                    </div>
                    <aside class="col-sm-3">
                      <div class="info-aside">
                        <div class="price-wrap">
                          <span class="price h5">prezzo</span>
                          <del class="price-old">altro prezzo</del>
                        </div>
                        <!-- info-price-detail // -->
                        <p class="text-success">Spedizione gratuita</p>
                        <br />
                        <p>
                          <a href="#" class="btn btn-success btn-block">Acquista</a>
                          <a href="#" class="btn btn-light btn-block">
                            <i class="fa fa-heart"></i>
                            <span class="text">Recensioni</span>
                          </a>
                        </p>
                      </div>
                      <!-- info-aside.// -->
                    </aside>
                  </div>
                </article>

               
              </main>
            </div>
          </div>
    
      </template>
    </section>
  </Layout>
</template>




<style lang="scss">
@import "../assets/scss/fonts";
</style>



<page-query>
query {
  allProduct (limit: 4) {
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

