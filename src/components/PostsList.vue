<template>
  <section class="posts">
    <article class="posts__item" v-for="item of 16" :key="item">
      <h2 class="posts__item-title">Lorem ipsum dolor sit amet.</h2>
      <div class="posts__item-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum rem,
        repellendus! Animi aperiam architecto assumenda consectetur deserunt
        error, facere laboriosam magnam nam numquam quasi rem, repellendus
        soluta ullam velit vero.
      </div>
      <div class="posts__item-author">Lorem ipsum.</div>
    </article>
  </section>
</template>

<script>
export default {
  name: "PostsList",
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
      margin: 0 0 10px;

      @media (max-width: 767px) {
        font-size: 20px;
      }
    }

    &-text {
      margin-bottom: 10px;
    }

    &-author {
      font-style: italic;
      margin-top: auto;
    }
  }
}
</style>
