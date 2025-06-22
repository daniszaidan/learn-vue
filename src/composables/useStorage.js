import { ref, watch } from 'vue'

export const useStorage = (key) => {
  let storedValue = localStorage.getItem(key)
  let val = ref(storedValue)

  watch(val, () => {
    write()
  })

  const write = () => {
    if (!val.value) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, val.value)
    }
  }

  return val
}
