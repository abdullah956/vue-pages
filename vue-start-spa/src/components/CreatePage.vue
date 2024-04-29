<template>
  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
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
      </div>
      <div class="col-md-4">
        <div class="mb-3">
          <label for="" class="form-label"> Link Text</label>
          <input type="text" class="form-control" v-model="linkText" />
        </div>
        <div class="mb-3">
          <label for="" class="form-label"> Link URL</label>
          <input type="text" class="form-control" v-model="linkUrl" />
        </div>
        <div class="row mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="published"
            />
            <label class="form-check-label" for="gridCheck1"> Published</label>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <button
        class="btn btn-primary"
        :disabled="isFormValid"
        @click.prevent="submitForm"
      >
        Create Page
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: ["pageCreated"],
  //computed properties simply return a value using the existing data
  computed: {
    isFormValid() {
      return (
        !this.pageTitle || !this.content || !this.linkText || !this.linkUrl
      );
    },
  },
  data() {
    return {
      pageTitle: "",
      content: "",
      linkText: "",
      linkUrl: "",
      published: true,
    };
  },
  methods: {
    submitForm() {
      if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
        alert("please fill out the form !");
        return;
      }
      this.pageCreated({
        pageTitle: this.pageTitle,
        content: this.content,
        link: {
          text: this.linkText,
          url: this.linkUrl,
        },
        published: this.published,
      });
      this.pageTitle = "";
      this.content = "";
      this.linkText = "";
      this.linkUrl = "";
      this.published = true;
    },
  },
  //watcher watches for a property to change
  watch: {
    pageTitle(newTitle, oldTitle) {
      if (this.linkText === oldTitle) {
        this.linkText = newTitle;
      }
    },
  },
};
// :value="pageTitle"
// @input="(e) => pageTitle =  e.target.value" v-model alternative too make 2 way binding
</script>
