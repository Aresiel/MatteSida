<template>
  <div>
    <header>
      <Navbar/>
    </header>
    <main>
      <div>
        <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
        <b-sidebar
          id="sidebar-1"
          title="Formler"
          shadow
          backdrop
        >
        <FormlerTable/>
        </b-sidebar>
      </div>
      <p>Inbilla dig formler här tack!</p>
    </main>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
