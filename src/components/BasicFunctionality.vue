<template>
  <div id="basic-functionality">
    <h1>{{ message }}</h1>
    <button v-on:click="reverseMessage">Reverse message</button>
    <span v-bind:title="hoverMessage">Hover your mouse over me for.</span>
    <h2>List:</h2>
    <ol>
      <li v-for="todo in todos" v-bind:key="todo.text">{{ todo.text }}</li>
    </ol>
    <section>
      <h2>Inputs</h2>
      <input v-model="inputValues" />
      <br />
      <span>{{ inputValues }}</span>
    </section>
    <TodosList :todos="todos" />
  </div>
</template>

<script>
import Vue from "vue";
import TodosList from "./TodosList/TodosList.vue";

const reverseStringRecurs = str => {
  let reversedString = "";

  (function reverse(str) {
    if (str.length > 0) {
      reversedString += str[str.length - 1];
      reverse(str.substring(0, str.length - 1));
    } else {
      return;
    }
  })(str);

  return reversedString;
};

export default Vue.extend({
  components: {
    TodosList
  },
  data: function() {
    return {
      message: "Pawel Lesniowski",
      hoverMessage: "to jest hover over",
      todos: [
        { text: "Learn JavaScript", isDone: false },
        { text: "Learn Vue", isDone: true },
        { text: "Build something awesome", isDone: false }
      ],
      inputValues: ""
    };
  },
  methods: {
    reverseMessage: function() {
      const stringToRev = this.message;
      const reversedString = reverseStringRecurs(stringToRev);
      this.message = reversedString;
    }
  }
});
</script>

<style scoped>
h2 {
  background-color: red;
}
</style>