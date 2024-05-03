<template>
  <div v-if="page" class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>
<script>
export default {
  // props: ["pageToDisplay"],
  // props: {
  //   pageToDisplay: {
  //     type: Object, // Specifies the expected type
  //     default(rawProps) {
  //       //giving default values it the object is null
  //       return {
  //         pageTitle: "",
  //         content: "",
  //       };
  //     },
  //   },
  // },
  props: ["index"],
  inject: ["$pages"],
  // inject becomes the this property inside the component
  created() {
    //console.log("on create");
    this.page = this.$pages.getSinglePage(this.index);
    //when use navigate in using the same conponent if causes some problems this the one way to do this other on is the traditional props way
    // this.$watch(
    //   () => this.$route.params,
    //   (newParams, prevParams) => {
    //     this.page = this.$pages.getSinglePage(newParams.index);
    //   }
    // );
  },
  data() {
    return {
      page: null,
    };
  },
  watch: {
    index(newIndex, oldIndex) {
      this.page = this.$pages.getSinglePage(newIndex);
    },
  },
};
</script>
<style scoped>
.emphasize {
  color: blue;
}
</style>
