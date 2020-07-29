<template>
    <div>
        <!--  Two ways to use components on the page  -->
        <TestAppParent>AAA</TestAppParent>
        <test-app-parent>bbb</test-app-parent>

        <br>
        <hr>
        <br>

        <TestAppButtons/>

        <br>
        <hr>
        <br>

        <SlotTest>
            <!-- It's possible to move the slot attribute directly inside the template inner element -->
            <h2 slot="slot1">Slot 1 Content</h2>

            <p>Classic Content</p>

            <template slot="slot2">
                <h4>Slot 2 Content</h4>
            </template>
        </SlotTest>

        <br>
        <hr>
        <br>

        <TodoList id="todoList" v-bind:todos="todos">
            <!-- this slot is provided a context to be used to access information of the child component -->
            <template slot-scope="slotContext">
                <span v-if="slotContext.todo.complete">✔️</span>
                <span>{{slotContext.todo.text}}</span>
            </template>
        </TodoList>

        <br>
        <hr>
        <br>

        <DynamicComponentsSection />

        <br>
        <hr>
        <br>

        <FilterTest />
    </div>
</template>

<script>
import TestAppParent from './components/TestAppParent'
import TestAppButtons from "./components/TestAppButtons";
import SlotTest from "./components/SlotTest";
import TodoList from "./components/TodoList";
import DynamicComponentsSection from "./components/dynamic/DynamicComponentsSection";
import FilterTest from "@/components/FilterTest";

export default {
    components: {
        FilterTest,
        DynamicComponentsSection,
        TodoList,
        SlotTest,
        TestAppParent,
        TestAppButtons
    },

    data() {
        return {
            todos: [
                {id: 1, text: "Buy a new monitor", complete: true},
                {id: 2, text: "Play Rebirth of the Night on the serer", complete: false},
                {id: 3, text: "Fix a bug in Roots", complete: true},
                {id: 4, text: "Learn more Vue.js stuff", complete: true},
                {id: 5, text: "Learn more Kotlin Concepts", complete: false},
                {id: 6, text: "Watch Run with the Wind", complete: false},
            ]
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

#todoList span:nth-child(2) {
    text-decoration: line-through;
}
</style>
