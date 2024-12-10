import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CasilleroSmall from '../../components/casilleros/CasilleroSmall';

const EficienciasModal = () => {
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
                        className="bg-customSecondary-800 p-6 rounded-lg shadow-lg w-5/6 h-5/6 overflow-auto modal-scrollable"
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

                        <div className='flex flex-row justify-end' >
                            {/* <div>
                                <h1 className='font-pixelmixNormal text-customPrimary-600'>Control de Eficiencias</h1>
                            </div> */}
                            <button
                                onClick={handleClose}
                                className=" text-red-500 p-1 bg-transparent hover:bg-customSecondary-700 rounded-full"
                            >
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8 h-8'>
                                    <path d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>


                        {/* Contenedor principal centrado */}
                        <div className="flex flex-col items-center justify-center mt-5">
                            {/* Fila 1 de 36 Casilleros */}
                            <div className="flex flex-col mb-4">
                                <span className="text-customPrimary-600 mb-2 font-pixelmixNormal">1. Sistema de Gobierno</span> {/* Título arriba de las 36 casillas */}
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 1: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => (
                                        <div key={index} className="flex flex-col items-center mx-0">
                                            {/* Condición para cambiar color en las casillas 6, 12, 18, 24, 30, 36 */}
                                            <CasilleroSmall color={(index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"} /> {/* Cambiar color cada 6 */}
                                            <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Fila 2 de 36 Casilleros */}
                            <div className="flex flex-col mb-4">
                                <span className="text-customPrimary-600 mb-2 font-pixelmixNormal">2. Conocimiento del negocio y de sus desafios</span> {/* Título arriba de las 36 casillas */}
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 2: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => (
                                        <div key={index} className="flex flex-col items-center mx-0">
                                            {/* Condición para cambiar color en las casillas 6, 12, 18, 24, 30, 36 */}
                                            <CasilleroSmall color={(index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"} /> {/* Cambiar color cada 6 */}
                                            <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default EficienciasModal;