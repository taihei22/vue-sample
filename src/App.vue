<template>
  <div>
    <h3>TODO APP</h3>
    <router-view></router-view>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export default {
  components: {
    'todo-form': TodoForm,
    'todo-list': TodoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
