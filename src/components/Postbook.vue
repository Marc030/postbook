<template>
    <h1 
        class="headline"
    >
        {{ title }}
    </h1>
    <postbook-filter
        v-model:filter-title="filterTitle"
        v-model:filter-body="filterBody"
        v-model:sort-reverse="sortReverse"
    />
    <postbook-list
        :posts="filteredPosts"
        :users="users" 
    />
</template>
    
<script>
    import { ref, computed } from 'vue';
    import { useApiGetQuery } from '@/lib/api/useApiGetQuery.js';
    import PostbookList from '@/components/PostbookList.vue';
    import PostbookFilter from './PostbookFilter.vue';

    export default ({
        components: { 
            'postbook-list': PostbookList, 
            'postbook-filter': PostbookFilter,
        },
        props: {
            title: {
                type: String,
                required: false,
            },
        },
        setup() {
            const getPosts = () => useApiGetQuery('posts');
            const { result: posts } = getPosts();

            const getUsers = () => useApiGetQuery('users');
            const { result: users } = getUsers();

            const filterTitle = ref("");
            const filterBody = ref("");
            const sortReverse = ref(false);

            const filteredPosts = computed(() => {
                const titleFilter = filterTitle.value;
                const bodyFilter = filterBody.value;
                if (!titleFilter.length && !bodyFilter.length) { 
                    if (sortReverse.value === true) {
                        return posts.value.map(post => {return {...post}}).reverse();
                    }
                    return posts.value;
                }
                let filtered = posts.value.filter(post => {
                    if (!titleFilter.length) {
                        return post.body.includes(bodyFilter);
                    } else if (!bodyFilter.length) {
                        return post.title.includes(titleFilter);
                    } else {
                        return (post.body.includes(bodyFilter) && post.title.includes(titleFilter));
                    }
                });
                if (sortReverse.value === true) {
                    filtered = filtered.reverse();
                }
                return filtered;
            });

            return {
                posts,
                getPosts,
                users,
                getUsers,
                filterTitle,
                filterBody,
                sortReverse,
                filteredPosts,
            }
        },
    })
</script>
    
<style scoped>
    .headline {
        color: #42b983;
    }
</style>