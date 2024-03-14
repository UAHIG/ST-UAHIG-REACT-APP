function getCurrentTime() {
  // const now = new Date()
  // const hours = now.getHours().toString().padStart(2, '0')
  // const minutes = now.getMinutes().toString().padStart(2, '0')
  // const seconds = now.getSeconds().toString().padStart(2, '0')

  // const timeGpt = new Date().toLocaleTimeString()

  // const currentTime = `${hours}:${minutes}:${seconds}`
  // return `Время создано с пом 3х строк кода   ${currentTime}\nВремя создано с пом 1й строк кода - ${timeGpt}`


  //оставил одну строку кода в итоге
  const time = new Date().toLocaleTimeString()
  return time
}

export default getCurrentTime
