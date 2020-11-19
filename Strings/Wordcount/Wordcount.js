let textarea = document.querySelector("#textArea")
let countWordBtn = document.querySelector("#countWordBtn")

let p_Displaywords = document.querySelector("#Displaywords")

countWordBtn.addEventListener("click", countWords)

function countWords(){
    console.log("Kör funktionen countWords")
let text =textArea.value
console.log(text)
let words =text.split(" ")
console.log (words.length)
p_Displaywords.innerHTML = words.length
}