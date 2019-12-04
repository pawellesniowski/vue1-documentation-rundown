<template>
  <section>
    <h2>Todos List</h2>
    <ul class="doto-list">
      <TodosListItem
        v-for="todo in todos"
        :key="todo.text"
        :todo="todo"
        v-on:pawelsEvent="eventFromChild"
      />
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
  methods: {
    eventFromChild: function() {
      console.log("hello I am an event from child!!");
    }
  },
  // hooks:
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
