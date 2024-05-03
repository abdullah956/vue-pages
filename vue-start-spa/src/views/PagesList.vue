<template>
  <h4>Pages</h4>
  <div class="text-end">
    <router-link to="/pages/create" class="btn btn-primary btn-sm"
      >New Pages</router-link
    >
  </div>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Title</th>
        <th>Link Text</th>
        <th>Is Published</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(page, index) in $pages.getAllPages()"
        :key="index"
        @click="goToPage(index)"
      >
        <td>{{ page.pageTitle }}</td>
        <td>{{ page.link.text }}</td>
        <td>{{ page.published ? "yes" : "no" }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
//this is composition api

import { ref, reactive, inject } from "vue";
import { useRouter } from "vue-router";
//ref allows us to create a reactive value

let counter = ref(0);
//this will create a value property in behind like {value:0}
const data = reactive({ counter: 0 });
//it is used on any thing that is non premitive meaning objects array function
const $pages = inject("$pages");
// $pages will get pages and then we can use it here by using this
const router = useRouter();
function click() {
  //counter.value++; for ref
  data.counter++;
  //console.log(counter);
}
function goToPage(index) {
  router.push({ path: `pages/${index}/edit` });

  //console.log(router);
}
// export default { this was options api
//   data() {
//     return {
//       counter: 0,
//     };
//   },
//   methods: {
//     click() {
//       this.counter++;
//     },
//   },
// };
// options api takes an object oriented approach while ccomposition api takes a functional approach
</script>
<style scoped>
.table.table-hover tr:hover {
  cursor: pointer;
}
</style>
