<script setup>
// import { ref, watch } from 'vue'
import { useStorage } from '@/composables/useStorage'

let food = useStorage('food')
let age = useStorage('age')

// let food = ref(localStorage.getItem('food'))
// let age = ref(localStorage.getItem('age'))

// watch(food, (value) => {
//   write('food', value)
// })

// watch(age, (value) => {
//   write('age', value)
// })

// const write = (key, value) => {
//   localStorage.setItem(key, value)
// }

// setTimeout(() => {
//   food.value = 'lorem'
// }, 3000)
</script>

<template>
  <main>
    <p>{{ food }}</p>
    <!-- <input type="text" v-model="food" @input="write('food', food)" /> -->
    <input type="text" v-model="food" />
    <br />
    <p>{{ age }}</p>
    <input type="text" v-model="age" />
  </main>
</template>
