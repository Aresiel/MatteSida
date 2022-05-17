<template>
  <div>
    <b-img src="@/common/assets/avatar.webp" class="authorImage" rounded="circle"></b-img>
    <p class="authorName">{{author}}</p>
  </div>
</template>

<script>
export default {
  name: "TinyAuthor",
  props: [
    'author'
  ]
}
</script>

<style scoped>

.authorName {
  font-size: 1.3rem;
  margin: 0;
  margin-left: 1rem;
}

div {
  display: flex;
  align-items: center;
}

.authorImage {
  width: 3em;

}
</style>
