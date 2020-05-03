<template>
  <Layout>
    <div class="container top pb-4">
    <h1>Tutti i prodotti</h1>
    <p>In questa pagina troverai tutti i prodotti presenti sul sito</p>
    <!-- <ul>
      <li v-for="{ node: product } in $page.allProduct.edges" :key="product.id">
        <g-link :to="product.path">{{ product.title }}</g-link>
      </li>
    </ul>
    <Pager :info="$page.allProduct.pageInfo"/> -->
    </div>














<section class="section-content padding-y bg">
<div class="container">

<div class="row">
<div class="col-12">
	





<!-- ============================ COMPONENT 2  ================================= -->
<div class="card card-product-list" v-for="{ node: product } in $page.allProduct.edges" :key="product.id">
	<div class="card-body">
	<div class="row">
		<aside class="col-sm-3">

			   <g-link :to="product.path" class="img-wrap">
                  <g-image :src="getSrc(product.images)" :alt="product.title" />
                </g-link>
      
		</aside> <!-- col.// -->
		<article class="col-sm-6">
			<g-link class="title mt-2 h5" :to="product.path">{{ product.title }}</g-link>
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
                  <a :href="product.uRL+reviewsAmz">Leggi recensioni</a>
                </small>
                <small class="label-rating text-success" v-if="product.discount !== '0%'">
                  <i class="fa fa-clipboard-check"></i>&nbsp;
                  <span>RISPARMI {{product.discount}}</span>
                </small>
              </div>
				<p>{{product.description.substring(0,300)+"..." | strippedContent}}
                        <g-link :to="product.path">+ info</g-link></p>
				
		</article> <!-- col.// -->
		<aside class="col-sm-3">
				<div class="price-wrap mt-2">
					<span class="price h5"> {{ product.listPrice }} </span>	
					<del class="price-old" v-if="product.discount !== '0%'"> {{ product.price }}</del>
				</div> <!-- info-price-detail // -->
				
				<!-- <p class="small text-success"> Free shipping </p> -->
				
				<p>
					<a href="#" class="btn btn-success"> Acquista </a>
					
				</p>
				
				<!-- <a href="#" class="small"><i class="fa fa-heart"></i> Add to wishlist</a> -->
		</aside> <!-- col.// -->
	</div> <!-- row.// -->
	</div> <!-- card-body .// -->
</div>
<!-- ============================ COMPONENT 2  END .// ================================= -->



</div> <!-- col.// -->





</div> 


<div class="contaier">
  
  <Pager :info="$page.allProduct.pageInfo" 
       linkClass="pager__link" 
       class="pager" />
  </div>


</div> <!-- container .//  -->

</section>

















  </Layout> 
</template>






<script>
import { Pager } from 'gridsome'
export default {
  metaInfo: {
    title: 'Tutti i prodotti'
  },
  components: {
    Pager
  },
  methods: {
    getSrc(images) {
      const { uRL } = images;
      return images.uRL[1] || images.uRL[0];
    }
  },
  computed: {
    affiliate: function() {
      return "&tag=newdev-21";
    },
    reviewsAmz: function() {
      return "#customerReviews";
    }
  },
   filters: {
    strippedContent: function(string) {
      return string.replace(/<\/?[^>]+>/gi, " ");
    }
  },
}
</script>

<page-query>
query AllProducts ($page: Int) {
  allProduct (perPage: 8, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        price
        listPrice
        images {
          uRL
        }
        description
        discount
      }
    }
  }
}
</page-query>



<style lang="scss">
  .pager {
    display: inline-block;
    width: 100%;
    text-align: center;

    &__link {
      color: var(--link-color);
      text-align: center;
      text-decoration: none;
      padding: .5rem 1rem;

      &:hover:not(.active) {
        background-color: var(--bg-content-color);
        border-radius: 5px;
        color: var(--link-color);
      }
    }
  }

  .active {
    background-color: var(--bg-content-color);
    border-radius: 5px;
    text-decoration: underline;
  }

</style>