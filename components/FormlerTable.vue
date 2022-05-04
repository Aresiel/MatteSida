<template>
  <div>
    <b-table hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: "FormlerTable",
  data() {
    return {
      items: [
        { titel: "Binomialsatsen", datum: '19/4/2022'},
        { titel: "Binomialsatsen", datum: '19/4/2022'},
        { titel: "Binomialsatsen", datum: '19/4/2022'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
