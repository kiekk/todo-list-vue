<template>
  <ul id="todolist">
    <li
        v-for="item in list"
        :key="item.id"
        :class="item.done ? 'checked' : ''"
    >
      <span>{{ item.todo }}</span>
      <span v-if="item.done"> (완료)</span>
      <span class="close">&#x00D7;</span>
    </li>
  </ul>
</template>

<script>
export default {
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