


let humanScore=0;
let computerScore=0;

//function de computadora, comando aleatorio
function getComputerChoice(){   
   let a= "piedra"
   let b= "papel"
   let c= "tijera"
   let d= [a,b,c]
let i= Math.floor(Math.random() * 3)

if (i === 0){
  return  d[0]
   
} 
if (i > 0 && i < 2){
  return   d[1]
   
}  
if (i > 1){
  return d[2]
  
}  
}

//listener de btn 
let btnPiedra= document.querySelector("#piedra")
btnPiedra.addEventListener("click",(e)=>{
playRound(e.target.id)
})
let btnPapel= document.querySelector("#papel")
btnPapel.addEventListener("click",(e)=>{
playRound(e.target.id)
})
let btnTijera= document.querySelector("#tijera")
btnTijera.addEventListener("click",(e)=>{
playRound(e.target.id)
})






//logica del juego
function playRound(HumanChoice){ 

  const resultadosDiv = document.querySelector("#resultados");

  const computerChoice=getComputerChoice()  

if (HumanChoice === "papel" && computerChoice === "piedra" ) {
   humanScore ++
  resultadosDiv.textContent=`ganó Human ${humanScore}`

 } 

if (HumanChoice === "piedra" && computerChoice === "tijera" ) {
    humanScore ++
  resultadosDiv.textContent=`ganó Human ${humanScore}`
} 

if (HumanChoice === "tijera" && computerChoice === "papel" ) {
   humanScore ++
 resultadosDiv.textContent=`ganó Human ${humanScore}`

} 
if (HumanChoice=== computerChoice) {
    humanScore ++, computerScore ++
  resultadosDiv.textContent=`Empate! ${humanScore} y ${computerScore} `

  }
 
 else if (HumanChoice === "piedra" && computerChoice === "papel" ) {
  computerChoice ++
  resultadosDiv.textContent=`ganó machine ${computerScore}`
  
 } 
else if (HumanChoice === "tijera" && computerChoice === "piedra" ) {
  computerScore ++
  resultadosDiv.textContent=`ganó machine ${computerScore}`
 
  } 
  
else if (HumanChoice === "papel" && computerChoice === "tijera" ) {
    computerScore ++
   resultadosDiv.textContent=`ganó machine ${computerScore}`


} 

if (computerScore === 5) {
  resultadosDiv.textContent=`el ganador es La máquina: ${computerScore} `
}
if (humanScore=== 5) {
  resultadosDiv.textContent=`el ganador es Human ${humanScore}`
}


}







