import { ref } from "vue";

const apiUrl = "https://jsonplaceholder.typicode.com/";

export function useApiGetQuery(endpoint) {
    const result = ref([]);
    const reload = async (endpoint) => {
        const url = apiUrl + endpoint;
        const res = await fetch(url);
        const data = await res.json();
        result.value = data;
    };
    reload(endpoint);

    return {
        result,
        reload,
    };
}