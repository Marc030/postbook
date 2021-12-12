<template>
    <h1 
        class="headline"
    >
        {{ title }}
    </h1>
    <postbook-list
        :posts="posts"
    />
</template>
    
<script>
    import { useApiGetQuery } from '@/lib/api/useApiGetQuery.js';
    import PostbookList from '@/components/PostbookList.vue';

    export default ({
        components: { 
            'postbook-list': PostbookList, 
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

            return {
                posts,
                getPosts,
            }
        },
    })
</script>
    
<style scoped>
    .headline {
        color: #42b983;
    }
</style>