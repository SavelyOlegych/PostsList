<template>
  <section class="search">
    <div class="search__input-wrapper">
      <input
        class="search__input"
        type="text"
        placeholder="Filter by author..."
        v-model="authorFilterValue"
      />
      <SearchIcon class="search__icon" />
    </div>
  </section>
</template>

<script>
import SearchIcon from "@/components/icons/SearchIcon.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "SearchSection",
  components: { SearchIcon },
  setup() {
    const store = useStore();
    const authorFilterValue = computed({
      get: () => store.state.authorFilterValue,
      set: (value) => store.commit("setAuthorFilterValue", value),
    });

    return {
      authorFilterValue,
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  padding: 40px 0;
  border-bottom: 1px solid $searchBorderColor;

  @media (max-width: 767px) {
    padding: 30px 0;
  }

  &__input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 4px;
    padding: 0 10px 0 40px;
    @include montserratRegular;
    font-size: 20px;
    line-height: 24px;
    outline: none;

    &-wrapper {
      position: relative;
      width: 650px;
      height: 40px;

      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }

  &__icon {
    position: absolute;
    left: 9px;
    bottom: 50%;
    transform: translateY(50%);
    color: $searcIconColor;
  }
}
</style>
