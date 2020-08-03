<template>
  <!-- Bind a class to the item conditionally -->
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" v-on:change="toggleComplete">
      {{ todo.title }}
      <button @click="$emit('delete-todo', todo.id)" class="delete-button">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    toggleComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
}
</script>

<style scoped>
  .todo-item {
    background-color: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #CCCCCC dotted;
  }

  .is-complete {
    text-decoration: line-through;
  }

  .delete-button {
    background-color: #FF0000;
    color: #FFFFFF;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
    font-weight: bold;
  }
</style>