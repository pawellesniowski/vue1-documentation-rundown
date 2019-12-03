<template>
  <section>
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <input type="checkbox" id="checkbox1" value="Ania" v-model="checked" />
    <input type="checkbox" id="checkbox2" value="Pawel" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <hr />
    <div id="example-3">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      message: "",
      checked: [],
      checkedNames: []
    };
  }
};
</script>