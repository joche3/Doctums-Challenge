import React from 'react'
import PageContainer from '../../components/PageContainer'
import Navbar from '../../components/NavBar'
import { useNavigate } from "react-router-dom"; // Importamos el hook useNavigate
import TexBoxBig3 from '../../components/TexBoxBig3';

const IntroductionPage = () => {

  const navigate = useNavigate(); // Inicializamos el hook para la navegación

  const handleClick = () => {
    navigate("/MainPage"); // Navega a la página de destino
  };

  return (
    <div className="bg-customSecondary-800">
    <PageContainer>
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] px-6 md:px-20 py-10">
        {/* Texto a la izquierda */}
        <div className="text-left w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl text-white font-pixelmixNormal">
            Introduccion a <br />
            <span className="text-customPrimary-500 font-pixelmixNormal text-4xl">
              CHALLENGE
            </span>
          </h1>
        </div>

        {/* Tarjeta a la derecha */}
        <div className="relative w-full md:w-1/2">
          {/* Fondo con TextBoxBig */}
     
          <TexBoxBig3 className="absolute w-full h-full" />

          {/* Contenido de la tarjeta */}
          <div className="relative p-24">
            {/* Texto del juego */}
            <p className="text-gray-800 text-lg mb-6 leading-relaxed font-digitalThin text-justify">
              Eres el Líder de Proyecto en una empresa, y tu misión es hacer
              frente a situaciones empresariales complejas durante un año.
              Deberás tomar decisiones estratégicas para optimizar tus
              recursos, mejorar las habilidades de tu equipo y superar los
              retos que se presenten en el camino. ¿Estás listo para liderar el
              cambio y lograr el éxito?
            </p>

            {/* Botón con SVG */}
            <div className="flex justify-center mt-14">
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
                  Comenzar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  </div>
  )
}

export default IntroductionPage;
