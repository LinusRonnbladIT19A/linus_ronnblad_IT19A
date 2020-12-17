let p_klass = document.querySelector("#klasslistan")
for(let i = 0; i<=100; i++){ 
if (i%2==0 ){  

console.log (`${i}.Tjolahopp tjolahej jag är ingen `)
}}

let p_talserie1 = document.querySelector("#talserie1")
p_talserie1.innerHTML = ``
for(let i = 0; i<=100; i++){
if ( i%2==0   ){

    p_talserie1.innerHTML += `${i} `
}}
let p_talserie2 = document.querySelector("#talserie2")
p_talserie2.innerHTML = ``
for(let j = 1; j<=100; j++){
  if (j%2==1){
    p_talserie2.innerHTML += `${j} `
}}
let p_summa = document.querySelector("#summa")
let summa = 0
 for (let i=0; i<=10; i++){
   summa +=i;  
 } 
    
console.log (summa)

let elever = ["Linus", "Linus", "Max", "Elis", "Sebastian"]
p_klass.innerHTML = "Klasslista IT19A <br/>"

console.log(elever.length)

for (let k = 0; k < elever.length; k++){
p_klass.innerHTML += `${k+1} . ${elever[k]} <br/>` 
}