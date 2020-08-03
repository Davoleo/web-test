<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo" />
  </div>
</template>

<script>

import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
export default {
  name: 'App',
  components: {
    AddTodo,
    Header,
    Todos
  },
  data() {
    return {
        todos: [
          {
            id: 1,
            title: "First TODO",
            completed: false
          },
          {
            id: 2,
            title: "Second TODO",
            completed: true
          },
          {
            id: 3,
            title: "Third TODO",
            completed: true
          }
        ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(value => value.id !== id)
    },
    addTodo(todoObj) {
      this.todos.push(todoObj);
    }
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
}

.button {
  display: inline-block;
  border: none;
  background-color: #555555;
  color: #FFFFFF;
  padding: 7px 20px;
  cursor: pointer;
}

.button:hover {
  background-color: #666666;
}
</style>
