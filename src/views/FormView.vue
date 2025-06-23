<script setup>
import Textarea from '@/components/Textarea.vue'
import { state } from '@/stores/quiz'
import { provide, ref } from 'vue'

let comment = ref('test value')

let name = ref('john')
// provide('user', name)
provide('user', {
  name: name,
  changeName: () => {
    name.value = 'Changed'
  },
})
</script>

<template>
  <div>
    <p>{{ state.name }}</p>
    <Textarea v-model:comment="comment" />
  </div>
</template>
