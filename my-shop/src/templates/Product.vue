<template>
  <Layout>
    <!-- <div class="container">
      <img :src="getSrc($page.product.images)" width="200px">
      {{ $page.product.title }}
      {{ $page.product.ASIN }}
      <span class="float-right"><strong>  {{ $page.product.price }}</strong></span>
    </div>-->
    <div class="py-3 bg-light">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item">
            <g-link to="/product-list/">Prodotti</g-link>
          </li>

          <li
            class="breadcrumb-item active text-truncate"
            aria-current="page"
          >{{ $page.product.title }}</li>
        </ol>
      </div>
    </div>
    <div class="container top pb-4 mb-4">
      <div class="card">
        <div class="row no-gutters">
          <aside class="col-sm-6 border-right d-flex align-items-center justify-content-center">
            <article class="gallery-wrap">
              <div class="img-big-wrap text-center">
                <img :src="getSrc($page.product.images)" :alt="$page.product.title" />
              </div>

              <!-- <div class="thumbs-wrap">
	  <a href="#" class="item-thumb"> <img src="../assets/images/items/11.jpg"></a>
	  <a href="#" class="item-thumb"> <img src="../assets/images/items/12-1.jpg"></a>
	  <a href="#" class="item-thumb"> <img src="../assets/images/items/12-2.jpg"></a>
	  <a href="#" class="item-thumb"> <img src="../assets/images/items/12.jpg"></a>
              </div>-->

              <!-- make a data() property, numImagesToShow: 10. make a computed property, imagesToShow(), that returns the limited array. v-for this computed property -->
              <!-- or another option is <img v-for="index in numImagesToShow" :src="..URL[index-1]"> -->

              <div class="thumbs-wrap">
                <a
                  target="_blank"
                  :href="img"
                  v-for="img in $page.product.images.uRL"
                  :key="img.id"
                  class="item-thumb"
                >
                  <img :src="img" />
                </a>
              </div>
            </article>
          </aside>

          <div class="col-sm-6">
            <article class="content-body">
              <h2 class="title">{{ $page.product.title }}</h2>
              <div class="rating-wrap my-3">
                <ul class="rating-stars">
                  <li style="width:100%" class="stars-active">
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                </ul>
                <small class="label-rating text-muted">
                  <a :href="$page.product.uRL+reviewsAmz">Leggi recensioni</a>
                </small>
                <small class="label-rating text-success" v-if="$page.product.discount !== '0%'">
                  <i class="fa fa-clipboard-check"></i>&nbsp;
                  <span>RISPARMI {{$page.product.discount}}</span>
                </small>
              </div>
              <!-- <div class="mb-3">
                <var class="price h4">{{ $page.product.listPrice }}</var>
                <span class="text-muted">EUR</span>
                <div v-if="$page.product.discount !== '0%'">{{$page.product.discount}}</div>
              </div>-->

              <div class="form-row d-flex align-items-center">
                <div class="col">
                  <var class="price h4">{{ $page.product.listPrice }}</var>
                  <span class="text-muted">EUR</span>
                </div>
                <div class="col">
                  <a :href="$page.product.uRL+affiliate" class="btn btn-success btn-lg w-100">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="text">Acquista</span>
                  </a>
                </div>
                <!-- <div class="col">
                  <a href="#" class="btn btn-light btn-lg">
                    <i class="fas fa-heart"></i> Recensioni
                  </a>
                </div>-->
              </div>

              <!-- <p>{{ $page.product.description.substring(0,600)+"..." | strippedContent }}</p> -->
            </article>
          </div>
        </div>
      </div>
    </div>
    <div class="div-name padding-y bg">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h5 class="title-description">Descrizione prodotto</h5>
            <p>In questa pagina puoi acquistare cialde e capsule caffè compatibili e originali. Il prodotto <strong>{{$page.product.title}}</strong>, marca <strong>{{$page.product.brand}}</strong>, è compatibile con tutte la macchine per caffè espresso.
               A seguire troverai una descrizione dettagliata del prodotto e dell'offerta commerciale. </p>
                <hr>
            <p><strong>Descrizione dettagliata:</strong> {{ $page.product.description | strippedContent }}</p>

          <table class="table table-bordered">
			<tbody><tr> <th colspan="2">Offerta</th> </tr>
			<tr> <td>COD.</td><td>{{$page.product.aSIN}}</td> </tr>
      <tr> <td>Recensioni prodotto</td><td>    <a :href="$page.product.uRL+reviewsAmz">Recensioni</a></td> </tr>
			<tr> <td>Marca</td><td>{{$page.product.brand}}</td> </tr>
			<tr> <td>Sale Rank	</td> <td> {{$page.product.salesRank}} </td></tr>		
			<tr> <td>Prezzo</td><td>{{$page.product.listPrice}}€</td> </tr>
			<tr> <td>Prezzo scontato</td><td>{{$page.product.price}}€</td> </tr>
			<tr> <td>% di sconto</td><td>{{$page.product.discount}}</td> </tr>


		

		</tbody></table>
    <small><ul><li>
      *Sale Rank - Posizione classifica più venduti su Amazon.it</li></ul></small>
            <!-- <h5 class="title-description">Dettagli</h5>

            <ul>
              <li v-for="det in $page.product.productDetails.description.slice(0,5)" :key="det.id">{{det}}</li>
            </ul> -->
          </div>
          <!-- col.// -->

          <aside class="col-md-4">
            <div class="box">
              <h5 class="title-description">Popolari</h5>

              <QFeaturedSidebar v-slot="{ sidebar: sidebar_prod }">
                <article class="media mb-3" v-for="sidebar in sidebar_prod" :key="sidebar.id">
                  <g-link :to="sidebar.path" class="img-wrap">
                    <img class="img-sm mr-3" :src="getSrc(sidebar.images)" :alt="sidebar.title" />
                  </g-link>
                  <div class="media-body">
                    <h6 class="mt-0">
                      <g-link :to="sidebar.path">{{sidebar.title}}</g-link>
                    </h6>
                    <p class="mb-2">{{sidebar.listPrice}}</p>
                  </div>
                </article>
              </QFeaturedSidebar>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
.top {
  margin-top: 40px;
}
</style>

<page-query>
query Product ($id: ID!) {
  product (id: $id) {
    id
    title
    aSIN
    salesRank
    brand
    price
	path
	listPrice
	description 
  discount
   productDetails {
          description
        }
    images {
      uRL
    }
    uRL
  }
}
</page-query>

<script>

export default {
 
metaInfo() {
        return {
            title: this.$page.product.title,
        }
    },
  components: {
    QFeaturedSidebar: () => import("../queries/QSidebarProd.vue")
  },
 
  methods: {
    getSrc(images) {
      const { uRL } = images;
      return images.uRL[1] || images.uRL[0];
    }
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
    reviewsAmz: function() {
      return "#customerReviews";
    }
  }
};
</script>
