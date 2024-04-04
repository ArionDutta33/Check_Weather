const userInput = document.querySelector(".input")
const searchBthn = document.querySelector(".searchIcon i")
const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const userInputValue = userInput.value.trim()

    getWeather(userInputValue)
})

const getWeather = async (userInputValue) => {
    const apiKey = "VCvo3HQ5rSPJfXNz6lMpMg==wUZUOJHaqH8lgGlc"
    const data = await fetch(`https://api.api-ninjas.com/v1/weather?city=${userInputValue}`)
    const response = await data.json()
    console.log(response)
}
searchBthn.addEventListener("click", () => {
    console.log("log")
})