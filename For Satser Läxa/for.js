let p_JämnaTal = document.querySelector("#JämnaTal")
let p_talserie2 = document.querySelector("#talserie2")
let p_summa = document.querySelector("#summa")
let p_Lektioner = document.querySelector("#Lektioner")
let summa = 0

let e = 100
for (let i=0; i<=e; i++){
    p_JämnaTal.innerHTML += `${i} `}
     {
if (i % 2 !=0) }




for (let j=1; j>=99; j++){
    p_talserie2.innerHTML += `${j} `
}

for (let i = 0; i<10; i++){
    console.log(`${i}. SKUM`)
}


for (let i=100; i<=0; i++){
    summa += i
}
p_summa.innerHTML += `0 - 100 = ${summa}`

let Lektioner = ["Svenska", "Engelska", "Programmering", "Matematik", "Idrott", ]

p_Lektioner.innerHTML = "Lektioner: <br/>"

console.log(Lektioner.length)

for (let k = 0; k < Lektioner.length; k++){
    p_Lektioner.innerHTML += `${k+1}. ${Lektioner[k]} <br/>`

}