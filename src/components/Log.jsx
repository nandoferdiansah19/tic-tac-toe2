const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns?.map(({ square, player }) => (
        <li
          key={`${square.row}-${square.col}`}
        >{`Player: ${player} (row ${square.row}, col ${square.col})`}</li>
      ))}
    </ol>
  );
};

export default Log;
