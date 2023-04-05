<script setup>
import { allRows } from "@/composables/useSheet";

const headings = ref(null);
const result = ref([]);
const { data } = await allRows();

// const desserts = reactive([
//   {
//     name: "Frozen Yogurt",
//     calories: 159,
//   },
//   {
//     name: "Ice cream sandwich",
//     calories: 237,
//   },
//   {
//     name: "Eclair",
//     calories: 262,
//   },
//   {
//     name: "Cupcake",
//     calories: 305,
//   },
//   {
//     name: "Gingerbread",
//     calories: 356,
//   },
//   {
//     name: "Jelly bean",
//     calories: 375,
//   },
//   {
//     name: "Lollipop",
//     calories: 392,
//   },
//   {
//     name: "Honeycomb",
//     calories: 408,
//   },
//   {
//     name: "Donut",
//     calories: 452,
//   },
//   {
//     name: "KitKat",
//     calories: 518,
//   },
// ]);

headings.value = data.value.values[0];
result.value = [...data.value.values];
result.value.splice(0, 1);
</script>

<template>
  <v-card class="ma-4">
    <v-table>
      <thead>
        <tr>
          <th v-for="col in headings" :key="col" v-html="col"></th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in result" :key="row">
          <template v-for="col in row.length">
            <td>
              {{ row[col - 1] }}
            </td>
          </template>
          <td><NuxtLink :to="`/${row[0]}`">View</NuxtLink></td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<!-- <template> -->
<!-- <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
    <template v-slot:title>
      Page Index
    </template>
    <v-card-text>
      When you see this inside a card, it worked!
    </v-card-text>
  </v-card> -->

<!-- <div class="container">
    <table>
      <thead>
        <tr>
          <th v-for="col in headings" :key="col" v-html="col"></th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="col in result" :key="col">
          <template v-for="item in col.length">
            <td>
              {{ col[item - 1] }}
            </td>
          </template>
          <td><NuxtLink :to="`/${col[0]}`">View</NuxtLink></td>

          <td v-for="(item) in col.length" :key="index">{{ col[0] }}</td>
          <td>{{ item }}</td>
          <td>{{ col[2] }}</td>
          <td>{{ col[3] }}</td>
          <td>{{ col[4] }}</td> 
          <td><img :src="col[3]" alt="" /></td>
          
        </tr>
      </tbody>
    </table>
  </div>  -->
<!-- </template> -->

<!-- <style>
.container {
  display: flex;
  justify-content: center;
  font-family: sans-serif;
}

table {
  border-collapse: collapse;
}

thead {
  background: #f0f0f0;
  text-transform: uppercase;
}

tr {
  border-bottom: 1px solid #444;
}

th,
td {
  padding: 4px 8px;
  border-left: 1px solid #444;
  border-right: 1px solid #444;
}

img {
  max-width: 100px;
  border-radius: 8px;
}
</style> -->
