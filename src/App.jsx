import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Player from "./components/Player";
import Log from "./components/Log";
import { initialGameBoard } from "./game-board.js";
import { WINNING_COMBINATIONS } from "./winning_combinations.js";
import GameOver from "./components/GameOver.jsx";
function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handleChangePlayers = (symbol, newName) => {
    setPlayers((prevPlayersName) => {
      return { ...prevPlayersName, [symbol]: newName };
    });
  };

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((activePlayer) => {
      return activePlayer === "X" ? "O" : "X";
    });
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  };

  const handleRestartGame = () => {
    setGameTurns([]);
  };

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="Player 1"
              playerSymbol="X"
              isActive={activePlayer === "X"}
              changePlayers={handleChangePlayers}
            />
            <Player
              initialName="Player 2"
              playerSymbol="O"
              isActive={activePlayer === "O"}
              changePlayers={handleChangePlayers}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={handleRestartGame} />
          )}
          <GameBoard gameBoard={gameBoard} selectSquare={handleSelectSquare} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
