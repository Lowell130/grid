<!-- template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
         <g-link class="nav__link" to="/product-list/">Products</g-link>
        
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template -->

<!-- Layout -->
<template>
  <div>
    <Rheader />
    <slot /> <!-- Page content will be inserted here  -->
    <Rfooter />
  </div>
</template>


<script>
import Rheader from '~/components/Rheader.vue'
import Rfooter from '~/components/Rfooter.vue'

export default {
  components: {
    Rheader,
    Rfooter
  }
}
</script>





<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

</style>
