<script setup>
import { ref } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'

let message = ref('Hello hello')
setTimeout(() => {
  message.value = 'change hello'
}, 5000)
</script>

<template>
  <main>
    <p>{{ message }}</p>
    <input type="text" v-model="message" />

    <TheWelcome />
  </main>
</template>
