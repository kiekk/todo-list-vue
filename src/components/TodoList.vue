<template>
  <ul id="todolist">
    <TodoListItem
        v-for="item in list"
        :key="item.id"
        :item="item"
    />
  </ul>
</template>

<script>
import TodoListItem from './TodoListItem'

export default {
  components: {TodoListItem},
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>