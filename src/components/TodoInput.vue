<template>
  <div id="header" class="header">
    <h2>Todo List App</h2>
    <input
        v-model="todo"
        type="text"
        class="input"
        id="task"
        placeholder="입력 후 엔터"
    />
    <span
        class="addButton"
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
  }
}
</script>