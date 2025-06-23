<script setup>
import Textarea from '@/components/Textarea.vue'
import { ref } from 'vue'

let comment = ref('test value')
</script>

<template>
  <form>
    <Textarea v-model:comment="comment" />
  </form>
</template>
