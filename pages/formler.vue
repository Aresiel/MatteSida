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
          <LazyFormlerNav/>
        </b-sidebar>
      </nav>
      <b-container fluid>
        <b-row>
          <b-col id="navColumn">
            <LazyFormlerNav/>
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
  margin-right: 0.5rem;
  margin-top: 1rem;
}

#navColumn {
  display: none;
  width: 20%;
  flex-basis: min-content;
  flex-grow: unset;
}

.btn {
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  color: black;
  background-color: white;
}

@media (min-width: 992px) {
  main {
    margin-top: 6rem;
  }
  .container-fluid {
    padding-left: 0;
  }
  #navColumn {
    display: initial;
  }
  #sidebarBtn {
    display: none;
  }
}
</style>
