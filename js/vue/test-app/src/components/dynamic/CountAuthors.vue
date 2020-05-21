<template>
    <div>
        <h4>Authors</h4>
        <button @click="count++">Count: {{ count }}</button>
    </div>
</template>

<script>
    export default {
        name: "AuthorsCount",

        data() {
            return {
                count: 0
            }
        }
    }
</script>