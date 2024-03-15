import { onMounted, reactive } from "vue";
import axios from "axios";

export default function usePosts() {
  const posts = reactive([]);

  const getPosts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    posts.push(...data);
  };

  onMounted(() => {
    getPosts();
  });

  return {
    posts,
  };
}
