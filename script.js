let cpuMove;
let score = {
    wins: 0,
    loses: 0,
    ties: 0
}
function cpuPlay() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    cpuMove = "pierre";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    cpuMove = "feuille";
  } else if (randomNumber > 2 / 3) {
    cpuMove = "ciseaux";
  }
}

function displayScore(){
  document.getElementById('score').innerHTML = `Parties gagnées : ${score.wins} <br> Parties perdues : ${score.loses} <br> égalitées ${score.ties}` ;
}

function play(playerMove) {
  cpuPlay();

  if (playerMove === "pierre") {
    if (cpuMove === "pierre") {
      score.ties ++;
    } else if (cpuMove === "feuille") {
      score.loses ++ ;
    } else if (cpuMove === "ciseaux") {
      score.wins ++;
    }
  }else if(playerMove === "feuille"){
    if (cpuMove === "pierre") {
        score.wins ++;
      } else if (cpuMove === "feuille") {
        score.ties ++;
      } else if (cpuMove === "ciseaux") {
        score.loses ++ ;
      }
  }else if(playerMove === "ciseaux"){
    if (cpuMove === "pierre") {
        score.loses ++ ;
      } else if (cpuMove === "feuille") {
        score.wins ++;
      } else if (cpuMove === "ciseaux") {
        score.ties ++;
      }
      
  }
  displayScore();
  console.log(score)
}

function reset(){
    score = {
        wins: 0,
        loses: 0,
        ties: 0
    }
 displayScore();
}

