<template>
  <div>
    <header>
      <Navbar/>
    </header>
    <main>
      <b-container>
        <b-row>
          <b-col>
            <h1>Kontakta oss</h1>
            <b-form>
              <b-form-group
                id="input-group-1"
                label="E-post address:"
                label-for="input-1"
                description="Vi delar inte din e-post med någon annan."
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  placeholder="anders@example.com"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Namn:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  placeholder="Anders Svensson"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Innehåll:">
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Skriv något..."
                  rows="6"
                  max-rows="12"
                  required
                ></b-form-textarea>
              </b-form-group>

              <b-button type="submit" variant="primary">Skicka</b-button>
              <b-button type="reset" variant="danger">Töm</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<style lang="css">

main {
  margin-top: 2rem;
}

</style>

<script>
</script>
