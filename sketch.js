const 
    STATUS_DISPLAY = document.querySelector('.display'),
    GAME_STATE = ["", "", "", "", "", "", "", "", ""],
    // Combinaciones de jugadas ganadoras
    WINNINGS = 
    [
    [0, 1, 2],[3, 4, 5],
    [6, 7, 8],[0, 3, 6],
    [1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6]
    ],
  WIN_MESSAGE = () => `¡El jugador ${currentPlayer} ha ganado!`,
  DRAW_MESSAGE = () => `¡Empate!`,
  CURRENT_PLAYER_TURN = () => `Turno del jugador ${currentPlayer}`

  // Creamos las variables
  let gameActive = true,
  currentPlayer = "X"

  // Comienzo del juego
  function main(){
    handleStatusDisplay(CURRENT_PLAYER_TURN())
    listeners()
  }  

  // Para poder ejecutar nuestro código
  main()

  // Mostrará el estado en el que se encuentra el juego
  // a qué jugador le toca, resultado de la partida...
  function handleStatusDisplay(message){
    STATUS_DISPLAY.innerHTML = message
  }

  // Eventos
  function listeners(){
    document.querySelector('.container').addEventListener('click',handleCellClick)
    document.querySelector('.controls').addEventListener('click',handleRestartGame)
  }

  // Almacenar el objeto donde vamos a pulsar 
  function handleCellClick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target

    // Verificamos que donde hacemos click sea un div (la celda)
    if(clickedCell.classList.contains('game-cell')){
        const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell)
        if(GAME_STATE[clickedCellIndex] != '' || !gameActive){
          //return false
          return
        }

        handleCellPlayed(clickedCell, clickedCellIndex)
        // Para comprobar si ya hay un ganador o no
        handleResultValidation()
    }
  }
    
  function handleCellPlayed(clickedCell, clickedCellIndex){
    // Para imprimir el jugador
    GAME_STATE [clickedCellIndex] = currentPlayer
    clickedCell.innerText = currentPlayer
  }

  function handleResultValidation(){
    let roundWon = false
    for(let i = 0; i < WINNINGS.length; i++){
      const winCondition = WINNINGS[i]
      let position1 = GAME_STATE[winCondition[0]],
          position2 = GAME_STATE[winCondition[1]],
          position3 = GAME_STATE[winCondition[2]]

        if(position1 === '' || position2 === '' || position3 === ''){
          // No evalua con las celdas vacías
          continue;
        }

        if(position1 === position2 && position2 == position3){
          // Si todas las posiciones coinciden entonces, dicho jugador ha ganado la partida
          roundWon = true
          break;
        }
    }

    if(roundWon){
      handleStatusDisplay(WIN_MESSAGE())
      gameActive = false
      return
    }

    let roundDraw = !GAME_STATE.includes("")

    if(roundDraw){      
      handleStatusDisplay(DRAW_MESSAGE())
      gameActive = false
      return
    }

    // Cambiar el turno al jugador si no hay ganador ni empate
    handlePlayerChange()

  }
  
  // Cambia de jugador con cada jugada
  function handlePlayerChange(){
    currentPlayer = (currentPlayer === "X") ? "O" : "X"    
    handleStatusDisplay(CURRENT_PLAYER_TURN())
  }

  // Para resetear el juego
  function handleRestartGame(){
    gameActive = true
    // Lo haremos por ahora a "pelo" el primer jugador
    currentPlayer = "X",
    restartGameState()
    handleStatusDisplay(CURRENT_PLAYER_TURN())
    // Limpiamos las celdas del html
    document.querySelectorAll('.game-cell').forEach(cell => cell.innerText = "")
  }  

  function restartGameState(){
      // Reiniciamos los elementos de nuestro juego
      let i = GAME_STATE.length
      while(i--){
        GAME_STATE[i] = ''
      }
  }