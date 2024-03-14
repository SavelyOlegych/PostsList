<template>
  <div class="container">
    <SearchSection />
    <PostsList />
  </div>
</template>

<script>
import PostsList from "@/components/PostsList.vue";
import SearchSection from "@/components/SearchSection.vue";

export default {
  components: { SearchSection, PostsList },
};
</script>

<style lang="scss">
@import "@/assets/scss/base";
</style>
