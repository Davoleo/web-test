<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <!-- template to render the todos provided by the parent component -->
                <slot :todo="todo">
                    {{todo.text}}
                    <span v-if="todo.complete">✔️</span>
                </slot>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        props: ["todos"]
    }
</script>