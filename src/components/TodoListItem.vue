<template>
  <li :class="item.done ? 'checked' : ''">
    <span>{{ item.todo }}</span>
    <span v-if="item.done"> (완료)</span>
    <span class="close">&#x00D7;</span>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          id: '',
          todo: '',
          done: false,
        }
      }
    }
  }
}
</script>