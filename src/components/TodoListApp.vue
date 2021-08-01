<template>
  <div>
    <todo-input @addTodo="addTodo"/>
    <todo-list :list="todoList" @doneToggle="doneToggle" @deleteTodo="deleteTodo"/>
  </div>
</template>

<script>
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default {
  components: {TodoInput, TodoList},
  data() {
    return {
      todoList: [
        { id: 1, todo: '영화보기', done: false},
        { id: 2, todo: '산책하기', done: true},
        { id: 3, todo: '밥먹기', done: false},
        { id: 4, todo: '야구경기보기', done: false}
      ]
    }
  },
  methods: {
    addTodo(todo) {
      this.todoList.push({
        id: new Date().getTime(),
        todo,
        done: false,
      })
    },
    doneToggle(id) {
      const index = this.todoList.findIndex(function(item) {
        return item.id === id;
      })
      this.todoList[index].done = !this.todoList[index].done;
    },
    deleteTodo(id) {
      const index = this.todoList.findIndex(function(item) {
        return item.id === id;
      })
      this.todoList.splice(index, 1);
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  cursor: pointer;
  position: relative;
  padding: 8px 8px 8px 40px;
  background: #eee;
  font-size: 14px;
  transition: 0.2s;
}
ul li:hover {
  background: #ddd;
}
ul li.checked {
  background: #BBB;
  color: #fff;
  text-decoration: line-through;
}
ul li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 1px 1px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 8px;
  width: 8px;
}
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px;
}
.close:hover {
  background-color: #f44336;
  color: white;
}
.header {
  background-color: purple;
  padding: 30px 30px;
  color: yellow;
  text-align: center;
}
.header:after {
  content: '';
  display: table;
  clear: both;
}
.input {
  border: none;
  width: 75%;
  height: 35px;
  padding: 10px;
  float: left;
  font-size: 16px;
}
.addButton {
  padding: 10px;
  width: 25%;
  height: 35px;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  transition: 0.3s;
}
.addButton:hover {
  background-color: #bbb;
}
.completed {
  text-decoration: none;
}
</style>