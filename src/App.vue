<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <ListComponent class="mt-10"></ListComponent>
    </v-main>
  </v-app>
</template>

<script>

import ListComponent from './components/List/ListComponent.vue'

export default {
  name: 'App',

  components: {
    ListComponent,
  },

  data: () => ({
    //
  }),
};
</script>
