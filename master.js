function getComputerChoice(){
   let a= "piedra"
   let b= "papel"
   let c= "tijera"
   let d= [a,b,c]
let i= Math.floor(Math.random() * 3)

if (i === 0){
  console.log(d[0]);
  return  d[0]
   
} 
if (i > 0 && i < 2){
  console.log(d[1]);
  return   d[1]
   
}  
if (i > 1){
  console.log(d[2]);
  return d[2]
  
}  
}

function getHumanChoice() {
   
  let eleccion= prompt("piedra, papel ó tijera?")
  console.log(eleccion);
  return eleccion       
}

let humanScore=0
let computerScore=0


function playRound(HumanChoice, computerChoice){
if (HumanChoice === "papel" && computerChoice === "piedra" ) {
  humanScore ++
  return console.log("ganaste:", humanScore )} 

if (HumanChoice === "piedra" && computerChoice === "tijera" ) {
  humanScore ++
  return console.log("ganaste:", humanScore )} 

if (HumanChoice === "tijera" && computerChoice === "papel" ) {
  humanScore ++
  return console.log("ganaste:", humanScore )} 


if (HumanChoice=== computerChoice) {
  humanScore ++,
  computerScore ++
  console.log("empate, puntos para ámbos",
    "human: ", humanScore,
    "machine:", humanScore)}  


else {
  computerScore ++
  console.log("ganó machine")
  console.log("puntos:", computerScore);
  
  
}




 }
const HumanChoice= getHumanChoice()
const computerChoice=getComputerChoice()

playRound(HumanChoice, computerChoice)
