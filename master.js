function getComputerChoice(){   //function de computadora, comando aleatorio
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

/* ----------------------------------------------------- */
function getHumanChoice() {                // function de human-choice
   
  let eleccion= prompt("piedra, papel ó tijera?")
  console.log(eleccion);
  return eleccion       
}


/*--------------------------------------------------------------------*/

function playRound(HumanChoice, computerChoice){   //el juego en si mismo
if (HumanChoice === "papel" && computerChoice === "piedra" ) {
  humanScore ++
   console.log("ganaste:", humanScore )
return   humanScore 
 } 

if (HumanChoice === "piedra" && computerChoice === "tijera" ) {
 humanScore ++
  console.log("ganaste:", humanScore )
  return humanScore 

  } 

if (HumanChoice === "tijera" && computerChoice === "papel" ) {
  humanScore ++
  console.log("ganaste:", humanScore )
 return  humanScore 
} 


if (HumanChoice=== computerChoice) {

  console.log("empate, puntos para ámbos",
    "human: ", humanScore,
    "machine:", computerScore) 
   humanScore ++, computerScore ++
return humanScore, computerScore
  }
else {
  console.log("ganó machine")
  console.log("puntos:", computerScore); 
 computerScore ++
 return { human: humanScore, computer: computerScore };
} }

 /* ---------------------------------- */
let humanScore=0;
let computerScore=0;

const HumanChoice= getHumanChoice()//llamada a la funcion de la eleccion del jugador
const computerChoice=getComputerChoice()//llamada a la funcion de la eleccion de la pc

let resultado= playRound(HumanChoice, computerChoice) //resultado del ganador de una sola  partida


function playGame(){

for (let resultado = 0; resultado < 5; resultado++) {
  const human = getHumanChoice();
  const computer = getComputerChoice();
  playRound(human, computer) 
}


}
playGame()


