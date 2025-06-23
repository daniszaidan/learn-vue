<script setup>
import { useCounter } from '@/stores/piniaCounter'

let counter = useCounter()
</script>

<template>
  <div>
    <p>{{ counter.count }}</p>
    <button @click="counter.increment()" :disabled="!counter.remaining">
      add ({{ counter.remaining }} Remaining)
    </button>
  </div>
</template>
