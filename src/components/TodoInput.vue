<template>
  <div id="header" class="header">
    <h2>Todo List App</h2>
    <input
        v-model="todo"
        type="text"
        class="input"
        id="task"
        placeholder="입력 후 엔터"
        @keypress.enter="addTodo"
    />
    <span
        class="addButton"
        @click="addTodo"
    >
      추가
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: '',
    }
  },
  methods: {
    addTodo() {
      const todo = this.todo.trim()

      // 입력값 검증
      if(todo === '' || todo === null) {
        alert('할 일을 입력해주세요.')
        return false;
      }

      this.$store.dispatch('addTodo', todo)

      this.todo = ''
    }
  }
}
</script>