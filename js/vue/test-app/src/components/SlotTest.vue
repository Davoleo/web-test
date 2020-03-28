<template>
    <div>
        <header><slot name="slot1"></slot></header>
        <main><slot></slot></main>
        <!-- Default content if a value is not passed (defined inside of the slot tag content) -->
        <footer><slot name="slot2">Copyright (c) - 2020</slot></footer>
    </div>
</template>

<script>
    export default {
        name: "SlotTest"
    }
</script>