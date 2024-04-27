<template>
  <navbar
    :pages="pages"
    :active-page="activePage"
    :nav-link-click="navLinkClick"
  >
  </navbar>
  <!-- <page-viewer 
  v-if="pages.length > 0" 
  :page-to-display="pages[activePage]"
  ></page-viewer>  only if the condition is true the page viewer will be added other wise it is skipped-->
  <!-- <div v-show="false">hide this content</div> hide by v-show-->
  <!-- <page-viewer 
  :page-to-display="pages[activePage]"
  ></page-viewer> -->
  <!-- v-if="pages.length > 0"  another straight forward method-->
  <create-page :page-created="pageCreated"></create-page>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import PageViewer from "./components/PageViewer.vue";
import CreatePage from "./components/CreatePage.vue";
export default {
  components: {
    // 1 component initialized
    Navbar,
    PageViewer,
    CreatePage,
  },
  created() {
    // 3 life cycle hook
    this.getPages();
  },
  data() {
    //  2 data is processed
    return {
      activePage: 0,
      pages: [],
    };
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();
      this.pages = data;
    },
    pageCreated(pageObj) {
      console.log(pageObj);
    },
    navLinkClick(index) {
      this.activePage = index;
    },
  },
};
</script>
