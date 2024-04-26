<template>
    <div class="container">
      <h1 class="emphasize">{{pageToDisplay.pageTitle}}</h1>
      <p>{{pageToDisplay.content}}</p>
    </div>
</template>
<script>
export default {
    props: ["pageToDisplay"],
}
</script>
<style scoped>
.emphasize {
  color: blue;
}
</style>