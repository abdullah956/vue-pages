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
<script setup>
import { inject, ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
const bus = inject("$bus");
const pages = inject("$pages");
const router = useRouter();
let pageTitle = ref("");
let content = ref("");
let linkText = ref("");
let published = ref(true);
function submitForm() {
  if (!pageTitle.value || !content.value || !linkText.value) {
    alert("please fill out the form !");
    return;
  }
  let newPage = {
    pageTitle: pageTitle.value,
    content: content.value,
    link: {
      text: linkText.value,
    },
    published: published.value,
  };
  pages.addPage(newPage);
  bus.$emit("page-created", newPage);
  router.push({ path: "/pages" });
}
const isFormValid = computed(
  () => !pageTitle.value || !content.value || !linkText.value
);
watch(pageTitle, (newTitle, oldTitle) => {
  if (linkText.value === oldTitle) {
    linkText.value = newTitle;
  }
});
// watcher must be reactive meaning it must be ref or reactive
</script>
