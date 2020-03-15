<template>
    <div>
        <p>{{user.name}}</p>
        <p>{{user.email}}</p>
        <p>{{id}} | {{title}}</p>
    </div>
</template>

<script>
    export default {
        name: "TestAppChild",

        props: {
            id: Number,
            title: String,
            user: Object,
        },
    }
</script>

<style scoped>

</style>