// Write code below 💖

/*let player= 0;
let computer = Math.floor(Math.random() * 3);
let winner;
let playerPick ;
let computerPick;

if(player===0){
  playerPick = 'Rock' ;
}else if (player===1){
  playerPick = 'Paper' ;
}else if (player===2){
  playerPick = 'Scissors' ;
}
if(computer===0){
  computerPick = 'Rock' ;
}else if (computer===1){
  computerPick = 'Paper' ;
}else if (computer===2){
  computerPick = 'Scissors' ;
}

if(player===0 && computer===0 || player===1 && computer===1 ||player===2 && computer===2){
  winner= 'No game'; 
}else if (player===0 && computer===1 || player===1 && computer===2 || player===2 && computer===0){
  winner= 'Computer'; 
}else if (player===0 && computer===2 || player===1 && computer===0 || player===2 && computer===1){
  winner= 'Player'; 
}

if (winner!=='No game'){
console.log('Player picked: '+playerPick);
console.log('Computer picked: '+computerPick);
console.log('The '+winner+' won!');
}
else{
  console.log("It's a TIE!!!");
} */
function play(player) {
  let computer = Math.floor(Math.random() * 3);
  let winner;
  let playerPick;
  let computerPick;

  if(player===0){
    playerPick = 'Rock';
  } else if (player===1){
    playerPick = 'Paper';
  } else {
    playerPick = 'Scissors';
  }

  if(computer===0){
    computerPick = 'Rock';
  } else if (computer===1){
    computerPick = 'Paper';
  } else {
    computerPick = 'Scissors';
  }

  if((player===0 && computer===0) || (player===1 && computer===1) || (player===2 && computer===2)){
    winner= 'No game';
  } else if ((player===0 && computer===1) || (player===1 && computer===2) || (player===2 && computer===0)){
    winner= 'Computer';
  } else {
    winner= 'Player';
  }

  const resultsDiv = document.getElementById('results');
  if (winner!=='No game'){
    resultsDiv.innerHTML = `
      <p>Player picked: <strong>${playerPick}</strong></p>
      <p>Computer picked: <strong>${computerPick}</strong></p>
      <p class="winner">The ${winner} won!</p>
    `;
  } else {
    resultsDiv.innerHTML = `
      <p>Player picked: <strong>${playerPick}</strong></p>
      <p>Computer picked: <strong>${computerPick}</strong></p>
      <p class="tie">It's a TIE!!!</p>
    `;
  }
}
