<template>
  <div>
    <b-img src="@/common/assets/avatar.webp" class="authorImage" rounded="circle"></b-img>
    <p>{{author}}</p>
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

div {
  display: flex;
  align-items: center;
}

.authorImage {
  width: 3em;

}
</style>
