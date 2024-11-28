const GameBoard = ({ selectSquare, gameBoard }) => {
  return (
    <ol id="game-board">
      {gameBoard?.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => selectSquare(rowIndex, columnIndex)}
                  disabled={symbol !== null}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
