<template>
  <section>
    <h2>Todos List</h2>
    <ul>
      <TodosListItem v-for="todo in todos" :key="todo.text" :todo="todo" />
    </ul>
  </section>
</template>

<script>
import Vue from "vue";
import TodosListItem from "./TodosListItem";

export default Vue.extend({
  props: ["todos"],
  components: {
    TodosListItem
  },
  created: function() {
    console.log("created hook");
  },
  mounted: function() {
    console.log("mounted hook");
  },
  updated: function() {
    console.log("updated hook");
  },
  destroyed: function() {
    console.log("destroyed hook");
  }
});
</script>
