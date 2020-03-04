<template>
  <div id="app">
    <nav-bar title="Pemes app">
      <nav-bar-link text="Strona główna" to="/main"></nav-bar-link>
      <nav-bar-link text="Kalendarz" to="/calendar"></nav-bar-link>
      <nav-bar-link text="Spotkania" to="/meetings"></nav-bar-link>
      <nav-bar-link text="Sale" to="/rooms"></nav-bar-link>
    </nav-bar>

    <div class="container-fluid">
      <div class="row">
          <main role="main" class="col-md-12 ml-sm-auto col-lg-12 px-4">
              <router-view/>
          </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar.vue"
import NavBarLink from "@/components/navbar/NavBarLink.vue"
export default {
    name: 'App',
    components: {
        'nav-bar': NavBar,
        'nav-bar-link': NavBarLink
    },
}
</script>
