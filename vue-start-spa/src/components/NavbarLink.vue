<template>
  <li>
    <router-link
      :to="`/${index}`"
      class="nav-link"
      active-class="active emphasize"
      aria-current="page"
      :title="`This link goes to ${page.link.text} page`"
      >{{ page.link.text }}
    </router-link>
  </li>
</template>
<script>
export default {
  props: ["page", "index"],
  // computed: {
  //   activeClasses() {
  //     return {
  //       active: this.isActive,
  //       emphasize: this.isActive,
  //     };
  //   },
  // },

  // @click.prevent="$bus.$emit('navbarLinkActived', index)"
};
</script>
<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>
