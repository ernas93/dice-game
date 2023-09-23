import React, { useEffect, useState } from 'react';
import Player from './Player';

const Match = () => {
  const [scoreToWin, setScoreToWin] = useState();
  const [players, setPlayers] = useState([]);
  const [matchId, setMatchId] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/game')
      .then((response) => response.json())
      .then((data) => {
        setScoreToWin(data.scoreToWin);
        setMatchId(data.matchId);
        setPlayers(data.players);
      });
  }, []);

  return (
    <>
      <div>blabla {scoreToWin}</div>
      <div>
        {players.map((player) => {
          return <Player player={player}></Player>;
        })}
      </div>
      <div>blabla {matchId}</div>
    </>
  );
};

export default Match;
