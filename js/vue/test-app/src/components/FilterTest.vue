<template>
  <div id="filter_test">
      <!-- Instead of concatenating methods we can use concatenated filters to change something dynamically -->
      <!-- the pipe symbol takes the output of what's on the left and uses it as an input for what's on the right -->
      <h2>Message: {{ message | convertSpaces | upperCase }}</h2>
      <label>upper text only: <input type="text" v-bind:value="inputText | upper"></label>
      <p>{{inputText}}</p>
  </div>
</template>

<script>
export default {
  name: "FilterTest",

  data() {
      return {
          message: "Example Text",
          inputText: "Test"
      }
  },

  filters: {
    upperCase(value) {
      return value.toUpperCase();
    },

    convertSpaces(value, char = "_") {
      return value.replace(/ /g, char)
    }
  }
}
</script>