<template>
  <v-app-bar :elevation="2" height="80">
    <v-app-bar-title class="text-h5">Mark Bishoff</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn v-for="page of pages" :key="page.url" size="x-large" :to="page.url">
      {{ page.title }}
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { routes } from "../router";

const pages = routes.map((route) => ({ url: route.path, title: route.name }));
</script>
