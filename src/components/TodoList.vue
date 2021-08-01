<template>
  <ul id="todolist">
    <TodoListItem
        v-for="item in list"
        :key="item.id"
        :item="item"
        @doneToggle="doneToggle"
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
  },
  methods: {
    doneToggle(id) {
      this.$emit('doneToggle', id)
    }
  }
}
</script>