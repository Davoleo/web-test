<template>
    <div>
        <h3>Posts Component</h3>
        <label>Posts/Authors <input type="checkbox" v-model="isChecked"></label>
        <!--  Stores the component state even when it's not shown to be restored  -->
        <keep-alive>
            <component v-bind:is="selectedComponent"></component>
        </keep-alive>
    </div>
</template>

<script>
    import CountAuthors from "./CountAuthors";
    import CountPosts from "./CountPosts";

    export default {
        name: "PostsTab",
        components: {
            CountAuthors, CountPosts
        },

        data() {
            return {
                isChecked: false
            }
        },

        computed: {
            selectedComponent() {
                if (this.isChecked) {
                    return CountAuthors;
                } else {
                    return CountPosts;
                }
            }
        }
    }
</script>