<template>
    <div>
        <h4>Posts</h4>
        <button @click="count++">Count: {{ count }}</button>
    </div>
</template>

<script>
    export default {
        name: "PostsCount",

        data() {
            return {
                count: 0
            }
        }
    }
</script>