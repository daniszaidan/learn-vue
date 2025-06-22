<script setup>
import { useFlash } from '@/composables/useFlash'
import { ref } from 'vue'

const message = ref('Hello hello')
const { flash } = useFlash()

setTimeout(() => {
  message.value = 'change hello'
}, 5000)
</script>

<template>
  <main>
    <p>{{ message }}</p>
    <input type="text" v-model="message" />
    <br />
    <button @click="flash('test')">click</button>
  </main>
</template>
