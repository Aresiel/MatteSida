<template>
  <div>
    <header>
      <Navbar/>
    </header>
    <main>
      <b-container>
        <b-row align-v="center">
          <h1>Lorem Ipsum Dolor</h1>
          <p>
            Scelerisque ultrices adipiscing feugiat consectetur lacus eget sed porta. Convallis ut cras turpis aliquam
            volutpat. Pellentesque nibh nulla pellentesque mollis dolor, massa, ornare. Tellus dui nec, eu pretium.
            Mauris praesent tellus sed tristique cras et cras. Pharetra ut libero amet facilisis placerat integer
            viverra porttitor sodales. Phasellus feugiat rutrum mauris ut interdum. Donec vestibulum sit amet purus vel
            dictum. Donec eget urna elementum, viverra nunc non, finibus justo. Pellentesque rhoncus leo lacus. Nam
            molestie ante turpis, ut tristique ipsum condimentum vel. In scelerisque felis vitae consectetur
            sollicitudin. Curabitur quis orci id ex rhoncus blandit ultricies nec ipsum.
          </p>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<style lang="css">

main {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
}

@media (min-width: 576px) {
  main {
    margin-top: 8rem;
  }
}

</style>

<script>
export default {
  name: 'IndexPage',
}
</script>
