<template>
  <li
    v-show="!todo.isDone"
    :class="[todo.isDone ? 'is-done' : 'is-not-done']"
    @click="handleButtonClick()"
  >{{ todo.text }}</li>
</template>

<script>

export default {
  props: ["todo"],
  methods: {
    toggleClass: function(todo) {
      todo.isDone = !todo.isDone;
    },
    handleButtonClick: function() {
      this.$emit('pawelsEvent')
    }
  }
};
</script>
