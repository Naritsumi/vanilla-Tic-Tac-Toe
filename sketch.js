const 
    STATUS_DISPLAY = document.querySelector('.game-notification'),
    GAME_STATE = ["", "", "", "", "", "", "", "", ""],
    // Combinaciones de jugadas ganadoras
    WINNINGS = 
    [[0, 1, 2],[3, 4, 5],
    [6, 7, 8],[0, 3, 6],
    [1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6]],
  WIN_MESSAGE = () => `El jugador ${currentPlayer} ha ganado!`,
  DRAW_MESSAGE = () => `El juego ha terminado en empate!`,
  CURRENT_PLAYER_TURN = () => `Turno del jugador ${currentPlayer}`

  // Creamos las variables
  let gameActive = true,
  currentPlayer = "O"

  // Comienzo del juego
  function main(){
    handleStatusDisplay(CURRENT_PLAYER_TURN())
    listeners()
  }

  // Mostrará el estado en el que se encuentra el juego
  // a qué jugador le toca, resultado de la partida...
  function handleStatusDisplay(message){
    STATUS_DISPLAY.innerHTML = message
  }

  // Eventos
  function listeners(){
    document.querySelector('.game-container').addEventListener('click',handleCellClick)
    document.querySelector('.game-restart').addEventListener('click',handleRestartGame)
  }

  // Almacenar el objeto donde vamos a pulsar 
  function handleCellClick(clickedEvent){
    const clickedCell = clickedEvent.target

    // Verificamos que donde hacemos click sea un div (la celda)
    if(clickedCell.classList.contains('game-cell')){
        //...
    }
    console.log(clickedCell)
  }

  
  function handleRestartGame(){
    
  }