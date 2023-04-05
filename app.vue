<script>
// import { useLayout } from "vuetify";
// // import { props, ctx } from "vue";
// const Child = {
//   setup(props, ctx) {
//     const { getLayoutItem } = useLayout();

//     function print(key) {
//       alert(JSON.stringify(getLayoutItem(key), null, 2));
//     }

//     return () => ctx.slots.default({ print });
//   },
// };
// export default {
//   components: { Child },
// };
</script>
<template>
  <!-- <v-card>

  </v-card> -->
  <!-- <v-layout ref="app">
    <v-app-bar color="grey-lighten-2" name="app-bar" class="justify-center">
      <div class="d-flex justify-center align-center w-100">
        <child v-slot="{ print }">
          <v-btn @click="print('app-bar')">Get data</v-btn>
        </child>
      </div>
    </v-app-bar>
    <v-navigation-drawer color="grey-darken-2" permanent name="drawer">
      <div class="d-flex justify-center align-center h-100">
        <child v-slot="{ print }">
          <v-btn @click="print('drawer')">Get data</v-btn>
        </child>
      </div>
    </v-navigation-drawer>
    <v-main>
    </v-main>
  </v-layout> -->
  <v-app>
    <NuxtPage />
  </v-app>
</template>
