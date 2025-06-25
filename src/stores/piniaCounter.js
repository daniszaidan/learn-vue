import { defineStore } from 'pinia'

export let useCounter = defineStore('counter', {
  // data
  // state() {
  //   return {
  //     count: 0,
  //     name: 'Counter',
  //   }
  // },
  state: () => ({
    count: 0,
    name: 'Counter',
  }),

  // methods
  actions: {
    increment() {
      this.count++
    },

    changeToFive() {
      this.count = 5
    },

    reset() {
      this.$patch({
        count: 0,
        name: '',
      })

      // this.$state = {}
    },

    async fill() {
      let data = await fetch()
      this.$state = data
    },
  },

  // computed
  getters: {
    remaining() {
      return 10 - this.count
    },
  },
})
