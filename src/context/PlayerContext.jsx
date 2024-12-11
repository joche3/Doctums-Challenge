import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState('');
  const [money, setMoney] = useState(0);

  // Función para actualizar los datos del jugador
  const updatePlayerData = (name, money) => {
    setPlayerName(name);
    setMoney(money);
  };

  return (
    <PlayerContext.Provider value={{ playerName, money, setMoney, updatePlayerData }}>
      {children}
    </PlayerContext.Provider>
  );
};