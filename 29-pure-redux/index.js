import store from "./redux/store.js"
import getCurrentTime from "./utils/getCurrentTime.js"
import { clearTimes } from "./redux/actionCreators.js"
import { addCurrentTime } from "./redux/actionCreators.js"

const addTime = document.getElementById("addTime")
addTime.addEventListener("click", () => {
  store.dispatch(addCurrentTime())
})

const clearTime = document.getElementById("clearAllTimes")
clearTime.addEventListener("click", () => {
  store.dispatch(clearTimes())
})

const timesList = document.getElementById("timesList")

store.subscribe(() => {
  timesList.innerHTML = ""
  const times = store.getState()
  times.forEach((time) => {
    let li = document.createElement("li")
    li.innerText = time
    timesList.appendChild(li)
  })
})

// Пробы
// const unsubscribe = store.subscribe(() =>
//   console.log(`Redux store just changed! ${store.getState()}`)
// )

// store.dispatch({ type: "ADD_CURRENT_TIME", payload: "11:30:00" })

// // unsubscribe()

// store.dispatch({ type: "ADD_CURRENT_TIME", payload: "11:35:00" })

// store.dispatch({ type: "CLEAR_ALL_TIMES" })

const time = getCurrentTime()
console.log(time)
