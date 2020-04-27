<template>
  <Layout>
    <!-- <div class="container">
      <img :src="getSrc($page.product.images)" width="200px">
      {{ $page.product.title }}
      {{ $page.product.ASIN }}
      <span class="float-right"><strong>  {{ $page.product.price }}</strong></span>
    </div>-->
    <section class="py-3 bg-light">
  <div class="container">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Category name</a></li>
        <li class="breadcrumb-item"><a href="#">Sub category</a></li>
        <li class="breadcrumb-item active" aria-current="page">Items</li>
    </ol>
  </div>
</section>
    <div class="container top pb-4 mb-4">
      <div class="card">
        <div class="row no-gutters">
          <aside class="col-sm-6 border-right d-flex align-items-center justify-content-center">
            <article class="gallery-wrap">
              <div class="img-big-wrap">
                <img :src="getSrc($page.product.images)" />
              </div>


<!-- <div class="thumbs-wrap">
	  <a href="#" class="item-thumb"> <img src="../assets/images/items/11.jpg"></a>
	  <a href="#" class="item-thumb"> <img src="../assets/images/items/12-1.jpg"></a>
	  <a href="#" class="item-thumb"> <img src="../assets/images/items/12-2.jpg"></a>
	  <a href="#" class="item-thumb"> <img src="../assets/images/items/12.jpg"></a>
	</div> -->

        <!-- make a data() property, numImagesToShow: 10. make a computed property, imagesToShow(), that returns the limited array. v-for this computed property -->
 <!-- or another option is <img v-for="index in numImagesToShow" :src="..URL[index-1]"> -->


<div class="thumbs-wrap">
    <a target="_blank" :href="img" v-for="img in $page.product.images.uRL" :key="img.id" class="item-thumb">
     <img :src="img" />
    </a>
</div>
            
               
                
              


            </article>
          </aside>

          <main class="col-sm-6">
            <article class="content-body">
              <h2 class="title">{{ $page.product.title }}</h2>

              <div class="form-row py-3">
                <div class="col">
                  <a href="#" class="btn btn-success w-100">
                    <span class="text">{{ $page.product.listPrice }}</span>
                    <i class="fas fa-shopping-cart"></i>
                  </a>
                </div>
                <div class="col">
                  <a href="#" class="btn btn-light">
                    <i class="fas fa-heart"></i> Recensioni
                  </a>
                </div>
              </div>

              <p>{{ $page.product.description.substring(0,600)+"..." | strippedContent }}</p>
            </article>
          </main>
        </div>
      </div>
    </div>
    <section class="section-name padding-y bg">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h5 class="title-description">Description</h5>
            <p>
              Lava stone grill, suitable for natural gas, with cast-iron cooking grid, piezo ignition, stainless steel burners, water tank, and thermocouple. Thermostatic adjustable per zone. Comes complete with lava rocks. Adjustable legs. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <ul class="list-check">
              <li>Material: Stainless steel</li>
              <li>Weight: 82kg</li>
              <li>built-in drip tray</li>
              <li>Open base for pots and pans</li>
              <li>On request available in propane execution</li>
            </ul>

            <h5 class="title-description">Specifications</h5>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th colspan="2">Basic specs</th>
                </tr>
                <tr>
                  <td>Type of energy</td>
                  <td>Lava stone</td>
                </tr>
                <tr>
                  <td>Number of zones</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Automatic connection</td>
                  <td>
                    <i class="fa fa-check text-success"></i> Yes
                  </td>
                </tr>

                <tr>
                  <th colspan="2">Dimensions</th>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>500mm</td>
                </tr>
                <tr>
                  <td>Depth</td>
                  <td>400mm</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>700mm</td>
                </tr>

                <tr>
                  <th colspan="2">Materials</th>
                </tr>
                <tr>
                  <td>Exterior</td>
                  <td>Stainless steel</td>
                </tr>
                <tr>
                  <td>Interior</td>
                  <td>Iron</td>
                </tr>

                <tr>
                  <th colspan="2">Connections</th>
                </tr>
                <tr>
                  <td>Heating Type</td>
                  <td>Gas</td>
                </tr>
                <tr>
                  <td>Connected load gas</td>
                  <td>15 Kw</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- col.// -->

          <aside class="col-md-4">
            <div class="box">
              <h5 class="title-description">Files</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <h5 class="title-description">Videos</h5>

              <article class="media mb-3">
                <a href="#">
                  <img class="img-sm mr-3" src="images/posts/3.jpg" />
                </a>
                <div class="media-body">
                  <h6 class="mt-0">
                    <a href="#">How to use this item</a>
                  </h6>
                  <p
                    class="mb-2"
                  >Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin</p>
                </div>
              </article>

              <article class="media mb-3">
                <a href="#">
                  <img class="img-sm mr-3" src="images/posts/2.jpg" />
                </a>
                <div class="media-body">
                  <h6 class="mt-0">
                    <a href="#">New tips and tricks</a>
                  </h6>
                  <p
                    class="mb-2"
                  >Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin</p>
                </div>
              </article>

              <article class="media mb-3">
                <a href="#">
                  <img class="img-sm mr-3" src="images/posts/1.jpg" />
                </a>
                <div class="media-body">
                  <h6 class="mt-0">
                    <a href="#">New tips and tricks</a>
                  </h6>
                  <p
                    class="mb-2"
                  >Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin</p>
                </div>
              </article>
            </div>
          </aside>
        </div>
      </div>>
    </section>
  </Layout>
</template>

<style lang="scss">
.top {
  margin-top: 80px;
}
</style>

<page-query>
query Product ($id: ID!) {
  product (id: $id) {
    id
    title
    price
	path
	listPrice
	description
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
      return images.uRL[1] || images.uRL[0];
    }
  },
  filters: {
    strippedContent: function(string) {
      return string.replace(/<\/?[^>]+>/gi, " ");
    }
  }
};
</script>
