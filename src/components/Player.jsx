import { useState } from "react";

const Player = ({ initialName, playerSymbol, isActive, changePlayers }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditing = () => {
    setIsEdit((isEditing) => !isEditing);
    if (isEdit) {
      changePlayers(playerSymbol, playerName);
    }
  };

  const handleChangeNamePlayer = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEdit ? (
          <input
            type="text"
            value={playerName}
            onChange={handleChangeNamePlayer}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditing}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
