import PageContainer from '../../components/PageContainer';
import Navbar from '../../components/NavBar';
import { useNavigate } from "react-router-dom"; 
import TexBoxBig3 from '../../components/TexBoxBig3';

const IntroductionPage = () => {

  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/MainPage"); // Navega a la página de destino
  };

  return (
    <div className="bg-customSecondary-800 relative min-h-screen">
      <PageContainer>
        <Navbar />
        <br />
        {/* Contenedor principal */}
        <div className="flex flex-col items-center md:items-start justify-start min-h-[calc(100vh-80px)] px-6 md:px-20 py-10 relative transform -translate-x-[240px]">
          
          {/* Título sobre la tarjeta */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 md:left-[calc(25%-11px)] text-center md:text-left"
            style={{ zIndex: 2 }}
          >
            <h2 className="text-white text-3xl md:text-4xl font-pixelmixNormal">
              Recursos 
            </h2>
          </div>

          {/* Tarjeta alineada a la izquierda */}
          <br /><div
            className="relative w-full md:w-1/2"
            style={{ marginLeft: '-41px' }} // Ajuste exacto
          >
            <TexBoxBig3 className="absolute w-full h-full" />

            <div className="relative p-24">
              <p className="text-gray-800 text-lg mb-6 leading-relaxed font-digitalThin text-justify">

                    Para fortalecer el equipo de la PMO, se podrá contratar personal especializado en áreas estratégicas,
                     impactando las eficiencias según el área y nivel del recurso. Cada contratación aportará habilidades que optimizarán 
                     el desempeño del equipo y los proyectos.Solo será posible realizar una contratación por turno como máximo, garantizando 
                     decisiones estratégicas y una integración adecuada. Esto permitirá gestionar recursos de manera eficiente, maximizando el 
                     impacto posi.
            
              </p>
            </div>
          </div>
        </div>


      {/* Imagen a la derecha de la tarjeta, alineada a la misma altura de la flecha */}
      <div className="absolute top-1/2 right-0 transform translate-y-[-50%] z-40 transform translate-x-[-10%] z-40">
        <img
          src="../../../img/Recursosinfo.png"  
          alt="Imagen"
          className="w-[830px] h-[470px] object-cover rounded-lg"
        />
      </div>
      </PageContainer>

      {/* Botón "Atras" en la esquina superior izquierda */}
      <div
        className="absolute top-4 left-4 z-50"
        onClick={handleClick}  // Puedes poner el mismo `handleClick` para redirigir a la página
      >
        <div
          className="relative w-24 h-12 cursor-pointer"
        >
          <img
            src="./src/assets/other-assets/boton.svg"
            alt="button"
            className="absolute inset-0 w-full h-full"
          />
          <span className="absolute inset-0 flex justify-center items-center text-customSecondary-800 text-xl font-digital">
            Atras
          </span>
        </div>
      </div>

      {/* Flecha centrada en toda la página */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-[240%] -translate-y-1/2 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-16 h-16"
          style={{ color: '#41B5C4' }}
        >
          <path
            fillRule="evenodd"
            d="M2.25 12a.75.75 0 0 1 .75-.75h15.69l-5.22-5.22a.75.75 0 1 1 1.06-1.06l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 1 1-1.06-1.06l5.22-5.22H3a.75.75 0 0 1-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>


    </div>
  );
};

export default IntroductionPage;
