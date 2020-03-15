<template>
  <div>
      <!--  Two ways to use components on the page  -->
      <TestAppParent>AAA</TestAppParent>
      <test-app-parent>bbb</test-app-parent>

      <br>
      <hr>
      <br>

      <TestAppButtons></TestAppButtons>

  </div>
</template>

<script>
import TestAppParent from './components/TestAppParent'
import TestAppButtons from "./components/TestAppButtons";

export default {
  components: {
      TestAppParent,
      TestAppButtons
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
</style>
