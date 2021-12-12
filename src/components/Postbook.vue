<template>
    <h1 
        class="headline"
    >
        {{ title }}
    </h1>
    <pre>
        {{ posts }}
    </pre>
</template>
    
<script>
    import { useApiGetQuery } from '@/lib/api/useApiGetQuery.js';
    export default {
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
    }
</script>
    
<style>
    .headline {
        color: #42b983;
    }
</style>