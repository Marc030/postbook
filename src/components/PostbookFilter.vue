<template>
    <div class="posts-filter-bar">
        <input 
            :value="filterTitle"
            @input="$emit('update:filterTitle', $event.target.value)"
            class="filter-input" 
            placeholder="Titel filtern"
        />
        <input 
            :value="filterBody"
            @input="$emit('update:filterBody', $event.target.value)"
            class="filter-input" 
            placeholder="Body filtern"
        />
        <input 
            :value="sortReverse"
            @input="$emit('update:sortReverse', $event.target.checked)"
            class="sort-by-input" 
            type="checkbox" 
            id="sort-by-input"
        >
        <label 
            class="sort-by-label" 
            for="sort-by-input"
        >älteste zuerst</label>
    </div>
</template>

<script>

    export default ({
        props: {
            filterTitle: String,
            filterBody: String,
            sortReverse: Boolean
        },
        emits: ['update:filterTitle', 'update:filterBody', 'update:sortReverse'],
        setup() {
            
        },
    })
    
</script>

<style scoped>

    .posts-filter-bar {
        background-color: #efefef;
        padding: 15px;
        max-width: 600px;
        margin: 0 auto;
        border-radius: .25rem;
        border: 1px solid #dedede;
    }

    .filter-input {
        margin-right: 15px;
        min-height: auto;
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        color: #4f4f4f;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #bdbdbd;
        border-radius: .25rem;
    }

    .sort-by-input {
        margin-right: 6px;
    }

    .sort-by-label {
        color: #4f4f4f;
    }

</style>