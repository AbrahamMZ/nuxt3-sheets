// pages/[row].vue

<script setup>
import { singleRow } from "@/composables/useSheet";

const route = useRoute();

const { data } = await singleRow(+route.params.row + 1);
</script>

<template>
  <v-card class="mx-auto my-4" width="400" prepend-icon="mdi-home">
    <template v-slot:title>
      ID: {{ data.values[0][0] }} Product: {{ data.values[0][1] }}
    </template>
    <v-card-text><span v-html="data.values[0][2]" /> </v-card-text>
    <v-card-actions>
      <v-btn color="success" href="/">Back</v-btn>
      <!-- <VBtn href="/">Back</VBtn> -->
      <!-- <NuxtLink
        to="/"
        class="v-btn v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-text"
      >
        Back
      </NuxtLink> -->
    </v-card-actions>
  </v-card>
</template>
