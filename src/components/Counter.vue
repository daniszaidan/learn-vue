<script setup>
import { counter } from '@/stores/counter'
</script>

<template>
  <input type="number" v-model="counter.count" />
  <button @click="counter.increment()">+</button>
</template>

<style>
input[type='number'] {
  width: 50px;
}
</style>
