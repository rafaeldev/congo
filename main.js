let playerButton = document.getElementById('play-music');
let playerCreated = false;
let playerElem;

function activePlayer() {
  if (!playerCreated) {
    createPlayer();
    playerCreated = true;
  }

  if (playerElem.paused) {
    this.textContent = "PAUSE O SOM"
    playerElem.play();
  } else {
    this.textContent = "ATIVE O SOM"
    playerElem.pause();
  }
}

function createPlayer() {
  playerElem = document.createElement("audio");
  playerElem.setAttribute("src", "hino.ogg");
  playerElem.setAttribute("loop", "");

  playerButton.parentElement.appendChild(playerElem);
}

playerButton.addEventListener("click", activePlayer);
