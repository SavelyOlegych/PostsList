import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import axios from "axios";

export default function useUsers() {
  const store = useStore();
  const authorFilterValue = computed(() => store.state.authorFilterValue);
  const users = reactive([]);
  const filteredUsers = computed(() =>
    users.filter((user) =>
      user.name.toLowerCase().includes(authorFilterValue.value.toLowerCase())
    )
  );

  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    users.push(...data);
  };

  onMounted(() => {
    getUsers();
  });

  return {
    filteredUsers,
    users,
  };
}
