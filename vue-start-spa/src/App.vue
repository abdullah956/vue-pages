<template>
  <navbar> </navbar>
  <router-view></router-view>
  <!-- <page-viewer 
  v-if="pages.length > 0" 
  :page-to-display="pages[activePage]"
  ></page-viewer>  only if the condition is true the page viewer will be added other wise it is skipped-->
  <!-- <div v-show="false">hide this content</div> hide by v-show-->
  <!-- <page-viewer :page-to-display="pages[activePage]"></page-viewer> -->
  <!-- v-if="pages.length > 0"  another straight forward method-->
  <!-- <create-page @page-created="pageCreated"> </create-page> -->
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    // 1 component initialized
    Navbar,
  },
  // created() {
  //   // 3 life cycle hook
  //   this.getPages();
  //   this.$bus.$on("navbarLinkActived", (index) => {
  //     //console.log("main on");
  //     this.activePage = index;
  //   });
  //   //two things are being passed to on event and function
  // },
  // data() {
  //   //  2 data is processed
  //   return {
  //     // activePage: 0,
  //     pages: [],
  //   };
  // },
  methods: {
    // async getPages() {
    //   let res = await fetch("pages.json");
    //   let data = await res.json();
    //   this.pages = data;
    // },
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
    // navLinkClick(index) {
    //   this.activePage = index;
    // },
  },
};
/// @ is for event listner will have - dash in words the event itself will have name camel case
</script>
