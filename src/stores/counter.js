import { reactive } from 'vue'

export const counter = reactive({
  // state
  count: 0,

  // action
  increment() {
    this.count++
  },
})
