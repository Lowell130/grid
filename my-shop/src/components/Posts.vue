<template>
  <div>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
    </div>    
  </div>
</template>

<page-query>
query Posts {
  posts: allPosts {
    edges {
      node { 
        id
        title
      }
    }
  }
}
</page-query>