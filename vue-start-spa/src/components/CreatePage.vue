<template>
  <div class="container mb-3">
    <form action="">
      <div class="mb-3">
        <label for="" class="form-label"> Page Title</label>
        <input type="text" class="form-control" v-model="pageTitle" />
      </div>

      <div class="mb-3">
        <label for="" class="form-label"> Content</label>
        <textarea
          name=""
          id=""
          cols=""
          rows="5"
          class="form-control"
          v-model="content"
        ></textarea>
      </div>

      <div class="mb-3">
        <button
          class="btn btn-primary"
          @click.prevent="pageCreated({ pageTitle, content })"
        >
          Create Page
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["pageCreated"],
  data() {
    return {
      pageTitle: "",
      content: "",
    };
  },
};
// :value="pageTitle"
// @input="(e) => pageTitle =  e.target.value" v-model alternative too make 2 way binding
</script>
