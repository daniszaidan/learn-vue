<script setup>
import { inject } from 'vue'

defineProps({
  modelValue: String,
})

let emit = defineEmits(['update:modelValue'])

const onTabPress = (event) => {
  let textarea = event.target
  let val = textarea.value
  let start = textarea.selectionStart
  let end = textarea.selectionEnd

  textarea.value = val.substring(0, start) + '\t' + val.substring(end)

  textarea.selectionStart = textarea.selectionEnd = start + 1
}

const update = (event) => {
  emit('update:modelValue', event.target.value)
}

let { name, changeName } = inject('user')
</script>

<template>
  <p>{{ name }}</p>
  <button @click="changeName">change</button>
  <textarea @keydown.tab.prevent="onTabPress" @keyup="update" v-text="modelValue" />
</template>

<style>
textarea {
  width: 100%;
  height: 200px;
  margin-top: 50px;
}
</style>
