<template>
  <li :class="isDone(item.done)" @click="doneToggle(item.id)">
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
  },
  methods: {
    isDone(done) {
      if(done) {
        return {
          checked: true
        }
      }else {
        return {
          checked: false
        }
      }
    },
    doneToggle(id){
      this.$emit('doneToggle', id)
    }
  }
}
</script>