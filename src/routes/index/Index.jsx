import React from 'react'
import PageContainer from '../../components/PageContainer'
import Navbar from '../../components/NavBar'
import CharacterSelection from '../../components/CharacterSelection'
import { useNavigate } from "react-router-dom"; // Importamos el hook useNavigate



const index = ({}) => {

  const navigate = useNavigate(); // Inicializamos el hook para la navegación

  const handleClick = () => {
    navigate("/introduction"); // Navega a la página de destino
  };

  return (
    <div className='bg-customSecondary-800'>
      <PageContainer>
        <Navbar/>

        <h1 className=" flex flex-row justify-center items-center my-20  text-white text-center font-pixelmixNormal text-3xl">Selecciona tu personaje</h1>

        <div className='mt-10'>
          <CharacterSelection/>
        </div>

        {/* Botón con SVG */}
        <div className="flex justify-center flex-grow mt-20">
          {/* Contenedor del botón */}
          <div
            className="relative w-48 h-24 cursor-pointer"
            onClick={handleClick}
          >
            {/* SVG del botón */}
            <img
              src="./src/assets/other-assets/boton.svg"
              alt="button"
              className="absolute inset-0 w-full h-full"
            />
            {/* Texto centrado en el SVG */}
            <span className="absolute inset-0 flex justify-center items-center text-customSecondary-800 text-xl font-digital">
              Seleccionar
            </span>
          </div>
        </div>

      </PageContainer>
      

    </div>

    
  )
}

export default index;
