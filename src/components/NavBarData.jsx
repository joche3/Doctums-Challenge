import axios from 'axios'; // Asegúrate de tener axios instalado
import React, { useEffect, useState } from "react";


const NavbarData = () => {


  const [playerName, setPlayerName] = useState(''); // Estado para el nombre del jugador
  const [money, setMoney] = useState(0); // Estado para el dinero del jugador

  // Obtener datos del jugador al cargar el componente
  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/player'); // Llamada a la API
        const { name, money } = response.data; // Extraemos name y money del response
        setPlayerName(name); // Actualizamos el estado con el nombre del jugador
        setMoney(money); // Actualizamos el estado con el dinero del jugador
      } catch (error) {
        console.error('Error al obtener los datos del jugador:', error);
      }
    };

    fetchPlayerData(); // Llamar a la función para obtener los datos
  }, []); // El arreglo vacío asegura que solo se ejecute una vez al cargar el componente

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