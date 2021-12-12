<template>
    <Postbook 
        :title="title"
    />
</template>

<script>
    import Postbook from './components/Postbook.vue'

    export default {
        name: 'App',
        components: {
            Postbook
        },
        data() {
            return {
                title: 'Postbook'
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
