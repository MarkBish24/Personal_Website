<template>
  <v-app>
    <NavBar />
    <v-main>
      <div class="page">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

.page {
  padding-inline: 2rem;
}
</style>
