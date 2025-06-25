<script setup>
import Textarea from '@/components/Textarea.vue'
import { provide, ref } from 'vue'

let comment = ref('test value')
provide('key', 'noodle')
</script>

<template>
  <form>
    <Textarea v-model:comment="comment" />
  </form>
</template>
