import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from "axios"; // Importar axios para hacer la solicitud HTTP

const EndGameModal = () => {

    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true); // Controla la visibilidad del modal

    const handleClose = () => {
        setIsVisible(false); // Activa la animación de salida
        setTimeout(() => {
            navigate(-1); // Navega después de que termine la animación
        }, 500); // La duración debe coincidir con la de la animación de salida
    };

    const [playerName, setPlayerName] = useState(''); // Estado para el nombre del jugador
    const [money, setMoney] = useState(0); // Estado para el dinero del jugador
    const [totalPoints, setTotalPoints] = useState(0);

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

    // Obtener las eficiencias y calcular la suma de los puntos
    useEffect(() => {
        const fetchEfficiencies = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/efficiencies');
                const efficiencies = response.data.efficiencies;

                // Sumar los puntos de todas las eficiencias
                const totalPoints = efficiencies.reduce((sum, efficiency) => sum + efficiency.points, 0);
                setTotalPoints(totalPoints); // Establecer el total de puntos
            } catch (error) {
                console.error('Error al obtener las eficiencias:', error);
            }
        };

        fetchEfficiencies();
    }, []);

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

                        <div className='flex flex-col justify-center  h-full'>
                            <h1 className='font-digitalThin text-7xl text-customPrimary-60 text-center font-semibold mb-20 text-customPrimary-600'>Acabaste el año con:</h1>

                            <div className='flex justify-around items-center'>
                                <div className='flex flex-row text-customPrimary-600'>
                                    <h1 className='font-pixelmixNormal text-3xl'>Dinero: <span className='font-digitalThin text-3xl'>S/. {money}</span> </h1>

                                </div>

                                <div className='flex flex-row items center text-customPrimary-600'>
                                    <h1 className='font-pixelmixNormal text-3xl'>Puntos: <span className='font-digitalThin text-3xl'>{totalPoints} pts</span> </h1>
                                </div>

                            </div>

                            <div className='border my-20 border-customSecondary-700'></div>

                            <div className='flex justify-around mt-20 '>
                                <div>
                                    <a onClick={() => navigate("/mainPage")} className='cursor-pointer font-pixelmixNormal text-3xl text-white'>Regresar al menu principal</a>
                                </div>

                                <div>
                                    <a onClick={() => navigate("/firstActions")} className='cursor-pointer font-pixelmixNormal text-3xl text-red-600'>Volver a intentar</a>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default EndGameModal


