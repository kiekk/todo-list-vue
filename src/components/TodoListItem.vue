<template>
  <li :class="isDone()" @click="doneToggle">
    <span>{{ item.todo }}</span>
    <span v-if="item.done"> (완료)</span>
    <span class="close" @click.stop="deleteTodo">&#x00D7;</span>
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
    isDone() {
      if(this.item.done) {
        return {
          checked: true
        }
      }else {
        return {
          checked: false
        }
      }
    },
    doneToggle(){
      this.$store.dispatch('doneToggle', this.item.id)
    },
    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.item.id)
    }
  }
}
</script>