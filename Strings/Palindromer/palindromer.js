let textArea = document.querySelector("#textArea")
let knapp = document.querySelector("#knapp")
let p_diplaywords = document.querySelector("#displaywords")
let kopieras = document.querySelector("#kopieras")
let test = textArea.value
 console.log(test)
knapp.addEventListener("click", countWords);

function countWords(){
  kopieras.innerHTML = `Du har angivit texten: ${test}  `
  if (palindrome(textArea.value)){
    p_diplaywords.innerHTML = "Det är palindrom"
  } else {

    p_diplaywords.innerHTML = "Det är inte palindrom"
  }

}


function palindrome(str){
    let reversed = str.split("").reverse().join("")
    console.log(reversed)
    if (reversed === str) 
      return true;

    return false;
}