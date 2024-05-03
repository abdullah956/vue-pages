<template>
  <nav
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <navbar-link
          v-for="(page, index) in publishedPages"
          class="nav-item"
          :key="index"
          :page="page"
          :index="index"
        >
        </navbar-link>
        <li>
          <router-link
            active-class="active emphasize"
            class="nav-link"
            aria-current="page"
            to="/pages"
            >Pages
          </router-link>
        </li>
        <!-- props are read only you cant change the values like activePage=index
             :class= class of bootstrap : condition -->
        <!-- <a
              class="nav-link"
              :class="{active: activePage==index}"
              aria-current="page"
              :href="page.link.url"
              :title="`This link goes to ${page.link.text} page`"
              @click.prevent="navLinkClick(index)"
            >
              {{page.link.text}}</a
            > -->
      </ul>
      <form action="" class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme()">
          Toggle
        </button>
      </form>
    </div>
  </nav>
</template>
<script>
import NavbarLink from "./NavbarLink.vue";
export default {
  components: {
    NavbarLink,
  },
  inject: ["$pages", "$bus"],
  //props: ["pages"],
  data() {
    return {
      pages: [],
      theme: "light",
    };
  },
  created() {
    this.getThemeSettings();
    //console.log("second");
    this.pages = this.$pages.getAllPages();
    this.$bus.$on("page-updated", () => {
      this.pages = [...this.$pages.getAllPages()];
      // When you directly assign this.pages = this.$pages.getAllPages(), Vue might not detect the change because it's still referencing the same array object in memory. By spreading the array into a new array with [...this.$pages.getAllPages()], you're effectively creating a new array object, which Vue recognizes as a change and re-renders the component accordingly.
    });
    this.$bus.$on("page-created", () => {
      this.pages = [...this.$pages.getAllPages()];
    });
    this.$bus.$on("page-deleted", () => {
      this.pages = [...this.$pages.getAllPages()];
    });
  },
  computed: {
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  methods: {
    changeTheme() {
      let theme = "light";
      if (this.theme == "light") {
        theme = "dark";
      }
      this.theme = theme;
      this.storeThemeSettings();
    },
    storeThemeSettings() {
      localStorage.setItem("theme", this.theme);
    },
    getThemeSettings() {
      let theme = localStorage.getItem("theme");
      if (theme) {
        this.theme = theme;
      }
    },
  },
};
</script>
<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>
