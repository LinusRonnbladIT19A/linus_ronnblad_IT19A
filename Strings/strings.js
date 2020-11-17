console.log ("strings")

//konkatenering


let fornamn = "Linus"
let efternamn = "Ronnblad"
let namn = fornamn + " " + efternamn
let adress = "Kronhusgatan 9"
let telefon = "112 : 113 13 : 114 14 : 1177"
let alder   = "Ung och dum"
/*
Namn: Linus Ronnblad
Ålder: 18 år
adress: Kronhusgatan 9
Telefon: 112 : 113 13 : 114 14 : 1177
*/

console.log ("Namn: " + namn + "\n" +"Adress: " + adress + "\n" +"Telefon: " + telefon + "\n" +"Ålder: " + alder)

// Skriv ut motsvarande personuppgifter i webbläsaren
let p_uppgifter = document.querySelector("#personuppgifter")
p_uppgifter.innerHTML = "Namn: " + namn + "<br>" + "Adress: " + adress + "<br>" + "Telefon: " + telefon + "<br>" + "Ålder: " + alder

//indexering
let alfabet = "abcdefghijklmnopqrstuvwxyzåäö"
let bokstav1 = alfabet[0]
let bokstav5 = alfabet[4]

console.log(`Bokstav på index 0 är: ${bokstav1}`)
console.log(`Bokstav på index 4 är: ${bokstav5}`)

let antal_bokstaver = alfabet.length
console.log(`Antal bokstäver i alfabetet är ${antal_bokstaver}`)


console.log ("Jag läser IT-programmet på NTI Kronhus i Göteborg")

/*
    Räkna antalet ord i den här meningen:
    Jag läser IT-programmet på NTI Kronhus i Göteborg

*/
let uppgift ="Jag läser IT-programmet på NTI Kronhus i Göteborg"
let bokstavertotalt = uppgift.split(/ |-/gm)
console.log(`antal ord: ${bokstavertotalt.length}`)

// split

let vokaler = /a|e|i|o|u|y|å|ä|ö/gm
let vokalord = "LatjoLajban" ;
console.log(`Antal vokaler i ordet ${vokalord} är: ${vokalord.match(vokaler).length}`)
//olika varianter av split
let mening = "Jag läser IT-programmet på NTI Kronhus i Göteborg"
let ord = mening.split(" ")

console.log(ord)
console.log(ord[2])

let antal_ord = ord.length
console.log(`Antal ord i meningen är ${antal_ord}`)

// sökning

// slice


//loopa över en lista
