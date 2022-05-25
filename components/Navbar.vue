<template>
  <div>
    <b-navbar toggleable="lg">

      <b-navbar-brand href="/">iρΣμm</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/formler">Roliga Formler</b-nav-item>
          <b-nav-item href="/formler">Intressant Teori</b-nav-item>
          <b-nav-item href="/formler">Apodiktiska Bevis</b-nav-item>
          <b-nav-item href="/kontakt">Kontakt</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="css" scoped>
  .navbar {
    background-color: #7D7C9D;
  }

  .navbar-brand {
    color: #2C2C3A;
    font-size: 2rem;
    font-family: 'Cutive', serif;
  }

  .navbar-light .navbar-nav .nav-link {
    font-family: 'Ropa Sans', sans-serif;
    font-size: 1.5rem;
    color: #fff;
  }

  .navbar-light .navbar-nav .nav-link:hover {
    color: #ddd;
  }

  a, a:hover {
    color: #EAEAEA;
  }
</style>
