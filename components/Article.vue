<template>
  <div>
    <h1>{{article.title}}</h1>
    <b-container>
      <b-row>
        <b-col>
          <TinyAuthor :author="article.author"/>
        </b-col>
      </b-row>
    </b-container>
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
        content: "placeholder" // verkligt content hade gått här men det skulle se förskräckligt ut utan en faktiskt databas och så
      }
    }
  }
}
</script>

<style scoped>

</style>
