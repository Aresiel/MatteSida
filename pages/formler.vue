<template>
  <div>
    <header>
      <Navbar/>
    </header>
    <main>
      <nav>
        <b-sidebar
          id="sidebar-1"
          title="Formler"
          shadow
          backdrop
        >
        <FormlerTable/>
        </b-sidebar>
      </nav>
      <b-container>
        <b-button v-b-toggle.sidebar-1>Formler</b-button>
        <p>Inbilla dig formler här tack!</p>
        <vue-mathjax formula="$$42-16i$$"></vue-mathjax>
      </b-container>

    </main>
  </div>
</template>

<script>
</script>

<style scoped>

main {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
}

@media (min-width: 576px) {
  main {
    margin-top: 6rem;
  }
}

</style>
