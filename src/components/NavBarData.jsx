import axios from 'axios'; // Asegúrate de tener axios instalado
import React, { useEffect, useState } from "react";


const NavbarData = () => {


  const [playerName, setPlayerName] = useState(''); // Estado para el nombre del jugador
  const [money, setMoney] = useState(0); // Estado para el dinero del jugador

  // Obtener datos del jugador al cargar el componente
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/player');
        setMoney(response.data.money);
        setPlayerName(response.data.name);
      } catch (error) {
        console.error('Error al obtener los datos del jugador:', error);
      }
    }, 1500); // Cada 1.5 segundos
  
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  
  return (
    <nav className="bg-customSecondary-900 text-white p-4 rounded-lg flex items-center justify-between  max-w-screen-xl mx-auto ">
      {/* Opciones de navegación a la izquierda */}
      <div className="flex gap-4 mx-24">
        <h2 className='font-digitalThin text-lg' >Jugador: </h2>
        <h2 className='font-digitalThin text-lg'>{playerName}</h2> {/* Mostrar el nombre del jugador */}
      </div>

      {/* Logo en el centro */}
      <div className="flex justify-center flex-grow">
        <img src="./src/assets/other-assets/logoFix.svg" alt="Logo" className="h-7 m-3" />
      </div>

      {/* Opciones de navegación a la derecha  */}
      <div className="flex gap-4 mx-24">
        <h2 className='font-digitalThin text-lg' >Dinero: </h2>
        <h2 className='font-digitalThin text-lg'>S/. {money}</h2> {/* Mostrar el dinero del jugador */}
      </div>
    </nav>
  );
};

export default NavbarData;