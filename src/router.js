import Vue from 'vue'
import Router from 'vue-router'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: TodoList
    },
    {
      path: '/todos/add',
      component: TodoForm
    }
  ]
})
