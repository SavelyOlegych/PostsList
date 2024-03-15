<template>
  <section class="posts">
    <article class="posts__item" v-for="post of filteredPosts" :key="post.id">
      <h2 class="posts__item-title">{{ post.title }}</h2>
      <div class="posts__item-text">
        {{ post.body }}
      </div>
      <div class="posts__item-author">
        {{ getAuthorName(post.userId) }}
      </div>
    </article>
  </section>
</template>

<script>
import { computed } from "vue";
import usePosts from "@/composables/usePosts";
import useUsers from "@/composables/useUsers";

export default {
  name: "PostsList",
  setup() {
    const { posts } = usePosts();
    const { filteredUsers } = useUsers();
    const filteredUsersIds = computed(() =>
      filteredUsers.value.map((user) => user.id)
    );
    const filteredPosts = computed(() =>
      posts.filter((post) => filteredUsersIds.value.includes(post.userId))
    );

    const getAuthorName = (postAuthorId) => {
      return filteredUsers.value.find((user) => user.id === postAuthorId)?.name;
    };

    return {
      filteredPosts,
      filteredUsers,
      getAuthorName,
    };
  },
};
</script>

<style lang="scss" scoped>
.posts {
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    padding: 30px 0;
  }

  &__item {
    display: flex;
    flex-direction: column;
    background-color: $postBgColor;
    border-radius: 20px;
    padding: 15px 20px;
    color: $whiteColor;

    @media (max-width: 767px) {
      font-size: 14px;
    }

    &-title {
      margin: 0 0 15px;

      @media (max-width: 767px) {
        font-size: 20px;
      }
    }

    &-text {
      margin-bottom: 15px;
    }

    &-author {
      font-style: italic;
      margin-top: auto;
    }
  }
}
</style>
