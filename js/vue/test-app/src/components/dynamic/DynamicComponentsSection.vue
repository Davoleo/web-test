<template>
    <div>
        <h1>Dynamic Components</h1>
        <button v-for="tab in tabs" v-bind:key="tab" v-on:click="currentTab = tab">
            {{ tab.component.name }}
        </button>
        <!--  Dynamic Component that changes depending on the v-bind:is attribute -->
        <component v-bind:is="currentTab.component"></component>
    </div>
</template>

<script>
    import ArchiveTab from "./ArchiveTab";
    import HomeTab from "./HomeTab";
    import PostsTab from "./PostsTab";

    export default {
        name: "DynamicComponentsSection",
        data() {
            return {
                tabs: [
                    {name: "Home", component: HomeTab},
                    {name: "Posts", component: PostsTab},
                    {name: "Archive", component: ArchiveTab},
                ],
                currentTab: {}
            }
        },

        //Called when the component is created
        created() {
            this.currentTab = this.tabs[0];
        }
    }
</script>

<style scoped>

</style>