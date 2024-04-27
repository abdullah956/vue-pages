<template>
    <div class="container">
      <h1 class="emphasize">{{pageToDisplay.pageTitle}}</h1>
      <p>{{pageToDisplay.content}}</p>
    </div>
</template>
<script>
export default {
    // props: ["pageToDisplay"],
    props: { pageToDisplay: {
    type: Object, // Specifies the expected type
    default(rawProps) { //giving default values it the object is null
      return {
        pageTitle : '',
        content : ''
      }
    } 
  }
},
}
</script>
<style scoped>
.emphasize {
  color: blue;
}
</style>