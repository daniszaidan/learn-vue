<script setup>
import Textarea from '@/components/Textarea.vue'
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
    <Textarea v-model:comment="comment" />
  </div>
</template>
