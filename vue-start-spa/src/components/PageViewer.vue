<template>
    <div class="container">
      <h1>{{pageToDisplay.pageTitle}}</h1>
      <p>{{pageToDisplay.content}}</p>
    </div>
</template>
<script>
export default {
    props: ["pageToDisplay"],
}
</script>