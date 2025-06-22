export const useFlash = () => {
  const flash = (message) => {
    return alert(message)
  }
  return { flash }
}
