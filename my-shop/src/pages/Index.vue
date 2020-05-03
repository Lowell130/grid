<template>
  <Layout>
    <div class="div-intro padding-y-sm">
      <div class="container fludid">
       HERO ZONE
      </div>
      <!-- container //  -->
    </div>
    <div class="div-content">
      <div class="container">
        <header class="div-heading">
          <a href="/product-list/" class="btn btn-outline-primary float-right">Vedi tutti</a>
          <h3 class="div-title">Prodotti del momento</h3>
        </header>
        <!-- sect-heading -->

        <div class="row">
          <div class="col-md-3" v-for="pro in $page.allProduct.edges" :key="pro.id">
            <div class="card card-product-grid">
             
                <g-link :to="pro.node.path" class="img-wrap">
                  <g-image :src="getSrc(pro.node.images)" :alt="pro.node.title" />
                </g-link>
              
              <div class="info-wrap">             
                  <g-link :to="pro.node.path" class="title text-truncate">{{ pro.node.title }}</g-link>             
              </div>

              <div class="info-wrap">
                <a href="#" class="btn btn-block btn-success">
                  <i class="fas fa-shopping-cart"></i>
                  {{ pro.node.listPrice }}
                </a>
              </div>

            </div>
          </div>
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </div>

      <div class="container mb-3">
        <header class="div-heading">
          <h3 class="div-title">Nuovi arrivi</h3>
        </header>
      </div>

      <div class="container">
        <div class="row">
          <!-- START NEW PRODUCTS LIST -->
          <QFeaturedPosts v-slot="{ posts: featured_posts }">
            <div class="col-md-12" v-for="fpost in featured_posts" :key="fpost.id">
              <div class="card card-product-list">
                <div class="row no-gutters">
                  <aside class="col-md-3">
                   
                    <g-link :to="fpost.path" class="img-wrap">
                      <span class="badge badge-danger">NEW</span>
                      <img :src="getSrc(fpost.images)" :alt="fpost.title" />
                    </g-link>
                  </aside>
                  <div class="col-md-6">
                    <div class="info-main">
                      <g-link :to="fpost.path" class="h5 title">{{fpost.title}}</g-link>
                      <!-- <div class="rating-wrap mb-3">
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
                      </div> -->
                      <!-- rating-wrap.// -->

                      <p>
                        {{fpost.description.substring(0,300)+"..." | strippedContent}}
                        <g-link :to="fpost.path">+ info</g-link>
                      </p>
                    </div>
                    <!-- info-main.// -->
                  </div>
                  <aside class="col-sm-3">
                    <div class="info-aside">
                      <div class="price-wrap">
                        <h5 class="price h5">{{fpost.listPrice}}</h5>
                        <!-- <del class="price-old">{{fpost.price}}</del> -->
                      </div>
                      <!-- info-price-detail // -->
                      <p class="text-success">Spedizione gratuita</p>
                     
                      <p>
                        <a :href="fpost.uRL+affiliate" class="btn btn-success btn-block">Acquista</a>
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
              </div>
            </div>
          </QFeaturedPosts>
          <!-- END NEW PRODUCTS LIST -->
        </div>
      </div>
    </div>
     
    
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

