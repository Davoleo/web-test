<template>
    <div>
        <h2>Total Clicks: {{totalClicks}}</h2>
        <h4>This button has been clicked {{currentButtonClicks}} times</h4>
        <!-- eslint-disable-next-line vue/v-on-style -->
        <CounterButton v-on:add-click="increaseClickValues($event)"></CounterButton>
        <CounterButton v-on:add-click="increaseClickValues($event)"></CounterButton>
        <CounterButton v-on:add-click="increaseClickValues($event)"></CounterButton>
    </div>
</template>

<script>
    import CounterButton from "./CounterButton";

    export default {
        name: "TestAppButtons",

        data() {
            return {
                totalClicks: 0,
                currentButtonClicks: 0
            }
        },

        methods: {
            increaseClickValues($event) {
                this.totalClicks++;
                this.currentButtonClicks=$event
            }
        },

        components: {
            CounterButton
        }
    }
</script>

<style scoped>

</style>