import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


const ProjectsInfo = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true); // Controla la visibilidad del modal

  const handleClose = () => {
    setIsVisible(false); // Activa la animación de salida
    setTimeout(() => {
      navigate(-1); // Navega después de que termine la animación
    }, 500); // La duración debe coincidir con la de la animación de salida
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-customSecondary-800 bg-opacity-70 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-customSecondary-800 p-10 rounded-lg shadow-lg w-5/6 h-5/6 overflow-auto modal-scrollable relative"
            initial={{ y: "-100vh", opacity: 0 }} // Aparece desde arriba
            animate={{ y: "0", opacity: 1, scale: 1 }} // Rebote al entrar
            exit={{ y: "100vh", opacity: 0, scale: 0.8 }} // Desliza hacia abajo al salir
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              duration: 0.5,
            }}
          >

            <div className='flex flex-row justify-end absolute top-0 right-0 p-10' >
              <button
                onClick={handleClose}
                className=" text-red-500 p-1 bg-transparent hover:bg-customSecondary-700 rounded-full"
              >
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8 h-8'>
                  <path d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z" fill="currentColor" />
                </svg>
              </button>
            </div>

            <div className='flex flex-row justify-around items-center h-full'>

              <div className='flex flex-col w-2/6'>
                <div>
                  <h1 className=' text-customPrimary-600 font-pixelmixNormal text-4xl'>Informacion de</h1>
                  <h1 className=' text-white font-pixelmixNormal text-4xl'>Proyectos</h1>
                </div>

                <div className='mt-5 text-white text-xl mb-6 leading-relaxed font-digitalThin text-justify'>
                  <p>
                    Los proyectos son esfuerzos planificados que buscan generar resultados significativos en la gestión del proyecto, con costos generalmente más altos que los productos. Se controlan mediante una lista que incluye número de referencia, nombre, costo y duración.
                    Los proyectos se pueden iniciar en el primer turno de cada mes, y se obtienen beneficios solo al concluirlos.
                  </p>
                </div>
              </div>

              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" className='w-24 h-24'>
                <path d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z" fill="#DEA100" />
              </svg>

              <div className=''>
                <img src="./src/assets/img/proyectosInfo.png" alt="" className='w-[700px]' />
              </div>


            </div>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectsInfo

