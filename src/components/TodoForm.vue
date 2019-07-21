<template>
  <div>
    <router-link to="/">BACK</router-link>
    <br>
    <input v-model="newTodo" placeholder="Input here ...">
    <button v-on:click="addTodo">ADD</button>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      newTodo: null
    }
  },
  methods: {
    addTodo: function(){
      if(this.newTodo === "") return
      const todos = JSON.parse(localStorage.getItem('todos')) || []
      todos.push(this.newTodo)
      localStorage.setItem('todos', JSON.stringify(todos))
      this.newTodo = "";
      this.$router.push('/')
    }
  }
}

</script>



<style>

</style>
