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
             
                <g-link :to="pro.node.path" class="img-wrap">
                  <g-image :src="getSrc(pro.node.images)" />
                </g-link>
              
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
          <h3 class="section-title">Ultimi arrivi 2</h3>
        </header>
      </div>

      <div class="container">
        <div class="row">
          <!-- START NEW PRODUCTS LIST -->
          <QFeaturedPosts v-slot="{ posts: featured_posts }">
            <main class="col-md-12" v-for="fpost in featured_posts" :key="fpost.id">
              <article class="card card-product-list">
                <div class="row no-gutters">
                  <aside class="col-md-3">
                    <a href="#" class="img-wrap">
                      <span class="badge badge-danger">NEW</span>
                      <img :src="getSrc(fpost.images)" />
                    </a>
                  </aside>
                  <div class="col-md-6">
                    <div class="info-main">
                      <g-link :to="fpost.path" class="h5 title">{{fpost.title}}</g-link>
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

                      <p>
                        {{fpost.description.substring(0,200)+"..." | strippedContent}}
                        <g-link :to="fpost.path">+ info</g-link>
                      </p>
                    </div>
                    <!-- info-main.// -->
                  </div>
                  <aside class="col-sm-3">
                    <div class="info-aside">
                      <div class="price-wrap">
                        <span class="price h5">{{fpost.listPrice}}</span>
                        <del class="price-old">{{fpost.price}}</del>
                      </div>
                      <!-- info-price-detail // -->
                      <p class="text-success">Spedizione gratuita</p>
                      <br />
                      <p>
                        <a
                          
                          :href="fpost.uRL+affiliate"
                          class="btn btn-success btn-block"
                        >Acquista</a>
                        <a :href="fpost.uRL+affiliate+reviews" class="btn btn-light btn-block">
                          <i class="fa fa-heart"></i>
                          <span class="text">Recensioni</span>
                        </a>
                        <!-- <span>{{fpost.uRL}}</span> -->
                      </p>
                    </div>
                    <!-- info-aside.// -->
                  </aside>
                </div>
              </article>
            </main>
          </QFeaturedPosts>
          <!-- END NEW PRODUCTS LIST -->
        </div>
      </div>
    </section>
    
  </Layout>
</template>

<style lang="scss">
@import "../assets/scss/fonts";
</style>

<page-query>
query {
  allProduct (skip: 20 limit: 4) {
    edges {
      node {
        id
        title
        price
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
</page-query>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  },

  methods: {
    getSrc(images) {
      const { uRL } = images;
      return images.uRL[1] || images.uRL[0];
    }
  },

  components: {
    QFeaturedPosts: () => import("../queries/QFeaturedProd.vue")
  },
  filters: {
    strippedContent: function(string) {
      return string.replace(/<\/?[^>]+>/gi, " ");
    }
  },
  computed: {
    affiliate: function() {
      return '&tag=newdev-21';
    },
    reviews: function() {
      return '#customerReviews';
    }
  }
};
</script>

