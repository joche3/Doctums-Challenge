import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer';
import Navbar from '../../components/NavBar';
import CharacterSelection from '../../components/CharacterSelection';
import { useNavigate } from "react-router-dom"; // Importamos el hook useNavigate
import Button from '../../components/Button';

const iconos = [
  {
      label: "Mi Icono 1",
      svgIcon: (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" id="User-Single-Aim--Streamline-Pixel" height={24} width={24} ><desc>{"User Single Aim Streamline Icon: https://streamlinehq.com"}</desc><title>{"user-single-aim"}</title><g><path d="m21.9003125 8.7615625 -1.0925 0 0 2.1921874999999997 -1.0925 0 0 1.0925 1.0925 0 0 2.1921874999999997 1.0925 0 0 -2.1921874999999997 1.0996875 0 0 -1.0925 -1.0996875 0 0 -2.1921874999999997z" fill="#000000" strokeWidth={1} /><path d="M19.7153125 14.2384375h1.0925v2.1921874999999997h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M19.7153125 6.569375000000001h1.0925v2.1921874999999997h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M18.615624999999998 16.430625h1.0996875v2.185H18.615624999999998Z" fill="#000000" strokeWidth={1} /><path d="M18.615624999999998 4.3771875h1.0996875v2.1921874999999997H18.615624999999998Z" fill="#000000" strokeWidth={1} /><path d="m17.523125 17.523125 -1.0996875 0 0 2.1921874999999997 2.1921874999999997 0 0 -1.0996875 -1.0925 0 0 -1.0925z" fill="#000000" strokeWidth={1} /><path d="M16.423437500000002 3.2846875000000004h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M14.2384375 19.7153125h2.185v1.0925h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M14.2384375 16.430625h2.185v1.0925h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M14.2384375 14.2384375h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M14.2384375 2.1921874999999997h2.185v1.0925h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M13.138750000000002 9.854062500000001h1.0996875v2.1921874999999997h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="m12.04625 19.7153125 -1.0996875 0 0 1.0925 -2.185 0 0 1.0996875 2.185 0 0 1.0925 1.0996875 0 0 -1.0925 2.1921874999999997 0 0 -1.0996875 -2.1921874999999997 0 0 -1.0925z" fill="#000000" strokeWidth={1} /><path d="M8.7615625 15.3309375h5.476875v1.0996875h-5.476875Z" fill="#000000" strokeWidth={1} /><path d="M9.854062500000001 13.138750000000002h3.2846875000000004v1.0996875h-3.2846875000000004Z" fill="#000000" strokeWidth={1} /><path d="m10.9465625 3.2846875000000004 1.0996875 0 0 -1.0925 2.1921874999999997 0 0 -1.0996875 -2.1921874999999997 0 0 -1.0925 -1.0996875 0 0 1.0925 -2.185 0 0 1.0996875 2.185 0 0 1.0925z" fill="#000000" strokeWidth={1} /><path d="M8.7615625 9.854062500000001h1.0925v2.1921874999999997h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M6.569375000000001 19.7153125h2.1921874999999997v1.0925H6.569375000000001Z" fill="#000000" strokeWidth={1} /><path d="M6.569375000000001 16.430625h2.1921874999999997v1.0925H6.569375000000001Z" fill="#000000" strokeWidth={1} /><path d="M7.661875 14.2384375h1.0996875v1.0925h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M6.569375000000001 2.1921874999999997h2.1921874999999997v1.0925H6.569375000000001Z" fill="#000000" strokeWidth={1} /><path d="m7.661875 8.7615625 1.0996875 0 0 -1.0925 5.476875 0 0 1.0925 1.0925 0 0 5.476875 1.0925 0 0 -7.6690625 -1.0925 0 0 -1.0925 -1.0925 0 0 -1.0996875 -5.476875 0 0 1.0996875 -1.0996875 0 0 1.0925 -1.0925 0 0 7.6690625 1.0925 0 0 -5.476875z" fill="#000000" strokeWidth={1} /><path d="m5.476875 17.523125 0 1.0925 -1.0996875 0 0 1.0996875 2.1921874999999997 0 0 -2.1921874999999997 -1.0925 0z" fill="#000000" strokeWidth={1} /><path d="M4.3771875 3.2846875000000004h2.1921874999999997v1.0925H4.3771875Z" fill="#000000" strokeWidth={1} /><path d="M3.2846875000000004 16.430625h1.0925v2.185H3.2846875000000004Z" fill="#000000" strokeWidth={1} /><path d="M3.2846875000000004 4.3771875h1.0925v2.1921874999999997H3.2846875000000004Z" fill="#000000" strokeWidth={1} /><path d="M2.185 14.2384375h1.0996875v2.1921874999999997H2.185Z" fill="#000000" strokeWidth={1} /><path d="M2.185 6.569375000000001h1.0996875v2.1921874999999997H2.185Z" fill="#000000" strokeWidth={1} /><path d="m3.2846875000000004 12.04625 0 -1.0925 -1.0996875 0 0 -2.1921874999999997 -1.0925 0 0 2.1921874999999997 -1.0925 0 0 1.0925 1.0925 0 0 2.1921874999999997 1.0925 0 0 -2.1921874999999997 1.0996875 0z" fill="#000000" strokeWidth={1} /></g></svg>       ),
  }
]

const index = () => {
  const navigate = useNavigate(); // Inicializamos el hook para la navegación
  const [isCharacterSelected, setIsCharacterSelected] = useState(false); // Estado para saber si un personaje ha sido seleccionado

  const handleClick = () => {
    if (isCharacterSelected) {
      navigate("/introduction"); // Navega a la página de destino
    } else {
      alert("Selecciona un personaje 🧑‍💼"); // Muestra alerta si no se ha seleccionado un personaje
    }
  };

  return (
    <div className='bg-customSecondary-800'>
      <PageContainer>
        <Navbar />

        <h1 className="flex flex-row justify-center items-center my-20 text-white text-center font-pixelmixNormal text-3xl">Selecciona tu personaje</h1>

        <div className='mt-10'>
          <CharacterSelection onSelect={setIsCharacterSelected} />
        </div>

        {/* Botón con SVG */}
        <div className="flex justify-center flex-grow mt-20">
          {/* Contenedor del botón */}
          <div
            className={`relative flex items-center justify-center w-[150px] cursor-pointer`}
            onClick={handleClick}
          >
            <h1 className="absolute text-black text-lg text-center font-digital flex flex-row gap-2">
              Seleccionar
            </h1>
            <Button className="w-full h-full" />
          </div>
        </div>

   </PageContainer>
    </div>
  );
}

export default index;