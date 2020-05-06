<template>
  <Layout>
    <section class="masthead" role="img" aria-label="Image Description">
      <h1 class="hero">Benvenuto in Onespresso</h1>
      <button>
        <a href="/product-list/">Scopri tutti i nostri prodotti</a>
      </button>
    </section>
    <div class="div-content">
      <div class="container">
        <header class="div-heading my-4">
          <!-- <a href="/product-list/" class="btn btn-outline-primary float-right">Vedi tutti</a> -->
          <h3 class="div-title">Nuovi</h3>
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
                  {{ pro.node.price }}€
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
            <a href="/product-list/" class="btn btn-info float-right">Vedi tutti</a>
          <h3 class="div-title">Lista prodotti</h3>
         
        </header>
      </div>

      <div class="container">
        <div class="row">
          <!-- START NEW PRODUCTS LIST -->
          <QFeaturedPosts v-slot="{ posts: featured_posts }">
            <div class="col-md-12" v-for="fpost in featured_posts" :key="fpost.id">
              <div class="card card-product-list">
                <div class="card-body">
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

                        <p>
                          {{fpost.description.substring(0,300)+" " | strippedContent}}
                          <g-link :to="fpost.path">+ info</g-link>
                        </p>
                      </div>
                    </div>
                    <div class="info-aside col-md-3">
                      <div class="price-wrap text-center">
                        <span class="price h5">{{ fpost.price }}€</span>
                        <del class="price-old" v-if="fpost.discount !== '0%'">{{ fpost.listPrice }}€</del>
                      </div>

                      <p>
                        <a :href="fpost.uRL+affiliate" class="btn btn-success btn-lg btn-block mt-1">Acquista</a></p>
                        <p>
                        <a :href="fpost.uRL+affiliate+reviews" class="btn btn-warning btn-lg btn-block mt-1">
                          <i class="fa fa-heart"></i>
                          <span class="text">Recensioni</span>
                        </a>
                     
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </QFeaturedPosts>
          <!-- END NEW PRODUCTS LIST -->
        </div>
        <div>
          <a href="/product-list/" class="btn btn-info float-right">Tutti i prodotti</a>
               </div>
               <div class="clearfix">&nbsp;</div>

      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
@import "../assets/scss/fonts";

.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 40vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 37%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(../assets/images/banners/bground.jpg) no-repeat center center scroll;
}

h1.hero {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
}

button {
  background: #574b42;
  transition: background ease 0.25s;
  border-radius: 5px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  a {
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}
button:hover {
  background: #695656;
}
button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}
.card-product-list {
  .info-aside {
    border-left: 1px solid #e4e4e4;
    padding: 1.5rem 1rem !important;
    @media (max-width: 768px) {
      border-left: none;
      .price-wrap {text-align: center}
      .text-success {text-align: center}
    }
  }
}


</style>

<page-query>
query {
  allProduct (limit: 4, skip: 60) {
    edges {
      node {
        id
        title
        price
        discount
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
    title: "Capsule e cialde compatibili e originali ai migliori prezzi!"
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
      return "&tag=newdev-21";
    },
    reviews: function() {
      return "#customerReviews";
    }
  }
};
</script>

