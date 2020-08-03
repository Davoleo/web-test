<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add Todo...">
      <input class="button" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import uuid from 'uuid';
export default {
  name: "AddTodo",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo(event) {
      event.preventDefault()
      const newTodo = {
        id: uuid.v4(),
        title: this.title,
        completed: false
      };

      this.$emit('add-todo', newTodo);
      this.title = ''
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }
</style>