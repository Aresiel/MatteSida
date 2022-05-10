<template>
  <div>
    <header>
      <Navbar/>
    </header>
    <b-button id="sidebarBtn" v-b-toggle.sidebar-1><b-icon-list/></b-button>
    <main>
      <nav>
        <b-sidebar
          id="sidebar-1"
          title="Formler"
          shadow
          backdrop
        >
        </b-sidebar>
      </nav>
      <b-container fluid>
        <b-row>
          <b-col id="navColumn">
            <FormlerNav/>
          </b-col>
          <b-col>
            <Article/>
          </b-col>
        </b-row>
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

#navColumn {
  display: none;
}

@media (min-width: 576px) {
  main {
    margin-top: 6rem;
  }
  #navColumn {
    display: initial;
  }
  #sidebarBtn {
    display: none;
  }
}
</style>
