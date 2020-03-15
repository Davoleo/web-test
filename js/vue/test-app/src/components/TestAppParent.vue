<template>
    <div>
        <h2>Parent</h2>
        <!--  The v-bind attribute to props can be simplified to :propName -->
        <!--  Passing directly the obj object allows vue to automatically detect the used props inside it -->
        <TestAppChild v-bind:user="account" v-bind="obj"></TestAppChild>
        <!--  We can also pass objects and arrays in props in-line -->
        <!--  <TestAppChild :user="{name: 'tizio', email: 'tizio@gmail.com'}"></TestAppChild>-->
    </div>
</template>

<script>
    import TestAppChild from "./TestAppChild";

    export default {
        name: "TestAppParent",
        components: {
            TestAppChild
        },

        data() {
            return {
                account: {
                    name: "barbagianni",
                    email: "barbagianni3030@email.net"
                },
                obj: {
                    id: 777,
                    title: "BYE BYE YESTERDAY"
                }
            }
        }
    }
</script>