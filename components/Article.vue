<template>
  <div>
    <h1>{{article.title}}</h1>
    <vue-mathjax :formula="article.content"></vue-mathjax>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      article: {
        title: "Lorem ipsum dolor sit amet",
        author: "Sven Svensson",
        date: "12/3/2022",
        content: "placeholder"
      }
    }
  }
}
</script>

<style scoped>

</style>
