<template>
    <div>
        <!-- The emit function creates an event that can be   -->
        <button @click="propagatePropValues($emit('add-click', count))">Counter: {{count}}</button>
    </div>
</template>

<script>
    export default {
        name: "CounterButton",

        data() {
            return {
                count: 0
            }
        },

        methods: {
            propagatePropValues() {
                this.count++;
            }
        }
    }
</script>

<style scoped>

</style>