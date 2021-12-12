<template>
    <div class="postbook-list-wrap">
        <ul class="postbook-list">
            <li 
                v-for="(post, index) in posts"
                :key="index"
                class="postbook-list-item"
            >
                <a class="postbook-list-item-link" href="#">
                    <div class="flex-container">
                        <div class="grid-left">
                            <div class="avatar">
                                {{ getAvatarContent(post.userId) }}
                            </div>
                        </div>
                        <div class="grid-right">
                            <h3 class="post-headline">{{ post.id }}. {{ post.title }}</h3>
                            <p class="post-body">{{ post.body }}</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'PostbookList',
        props: {
            posts: {
                type: Array,
                required: true,
            },
            users: {
                type: Array,
                required: true
            },
        },
        methods: {
            getAvatarContent(userId) {
                const user = this.users.filter(user => { return user.id === userId; });
                return user[0].username;
            },
        },
        setup() {
            return {};
        },
    }
</script>

<style scoped>

    .postbook-list {
        list-style-type: none;
        padding: 0;
        text-align: left;
        max-width: 600px;
        margin: 0 auto;
        border-top: 1px solid #cccccc;
    }

    .postbook-list-item {
        display: block;
        margin: 0;
        border-bottom: 1px solid #cccccc;
    }

    .postbook-list-item-link {
        color: #42b983;
        text-decoration: none;
    }

    .postbook-list-item-link:hover {
        text-decoration: underline;
    }

    .flex-container {
        display: flex;
    }

    .grid-left {
        flex: 1;
    }

    .grid-right {
        flex: 1;
        flex-grow: 4;
    }

    .avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #cccccc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        line-height: 100px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .post-headline {
        margin-block-end: 0;
    }

    .post-body {
        margin-block-start: 0;
        color: black;
    }

</style>