import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CasilleroSmall from '../../components/casilleros/CasilleroSmall';
import axios from "axios"; // Importar axios para hacer la solicitud HTTP

const EficienciasModal = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true); // Controla la visibilidad del modal
    const [efficiencies, setEfficiencies] = useState([]); // Estado para almacenar las eficiencias


    // Cargar las eficiencias desde el backend
    useEffect(() => {
        const fetchEfficiencies = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/efficiencies");
                setEfficiencies(response.data.efficiencies); // Asignar las eficiencias al estado

            } catch (error) {
                console.error("Error al obtener eficiencias:", error);
            }
        };

        fetchEfficiencies(); // Llamar a la función para obtener las eficiencias
    }, []);


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
                                <span className="text-customPrimary-600 mb-2 font-digitalThin text-2xl">
                                    {efficiencies[0] ? `${efficiencies[0].id}. ${efficiencies[0].name}` : 'Cargando...'}
                                </span>
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 1: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => {
                                        const isGreen = index < efficiencies[0]?.points; // Color verde si el índice es menor que el número de puntos
                                        const casilleroColor = isGreen ? "#00FF00" : (index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"; // Verde si es un casillero de los puntos, de lo contrario, blanco o color alternativo
                                        return (
                                            <div key={index} className="flex flex-col items-center mx-0">
                                                <CasilleroSmall color={casilleroColor} /> {/* Color según la condición */}
                                                <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fila 2 de 36 Casilleros */}
                            <div className="flex flex-col mb-4">
                                <span className="text-customPrimary-600 mb-2 font-digitalThin text-2xl">
                                    {efficiencies[1] ? `${efficiencies[1].id}. ${efficiencies[1].name}` : 'Cargando...'}
                                </span>
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 1: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => {
                                        const isGreen = index < efficiencies[1]?.points; // Color verde si el índice es menor que el número de puntos
                                        const casilleroColor = isGreen ? "#00FF00" : (index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"; // Verde si es un casillero de los puntos, de lo contrario, blanco o color alternativo
                                        return (
                                            <div key={index} className="flex flex-col items-center mx-0">
                                                <CasilleroSmall color={casilleroColor} /> {/* Color según la condición */}
                                                <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fila 3 de 36 Casilleros */}
                            <div className="flex flex-col mb-4">
                                <span className="text-customPrimary-600 mb-2 font-digitalThin text-2xl">
                                    {efficiencies[2] ? `${efficiencies[2].id}. ${efficiencies[2].name}` : 'Cargando...'}
                                </span>
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 1: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => {
                                        const isGreen = index < efficiencies[2]?.points; // Color verde si el índice es menor que el número de puntos
                                        const casilleroColor = isGreen ? "#00FF00" : (index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"; // Verde si es un casillero de los puntos, de lo contrario, blanco o color alternativo
                                        return (
                                            <div key={index} className="flex flex-col items-center mx-0">
                                                <CasilleroSmall color={casilleroColor} /> {/* Color según la condición */}
                                                <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fila 4 de 36 Casilleros */}
                            <div className="flex flex-col mb-4">
                                <span className="text-customPrimary-600 mb-2 font-digitalThin text-2xl">
                                    {efficiencies[3] ? `${efficiencies[3].id}. ${efficiencies[3].name}` : 'Cargando...'}
                                </span>
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 1: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => {
                                        const isGreen = index < efficiencies[3]?.points; // Color verde si el índice es menor que el número de puntos
                                        const casilleroColor = isGreen ? "#00FF00" : (index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"; // Verde si es un casillero de los puntos, de lo contrario, blanco o color alternativo
                                        return (
                                            <div key={index} className="flex flex-col items-center mx-0">
                                                <CasilleroSmall color={casilleroColor} /> {/* Color según la condición */}
                                                <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fila 5 de 36 Casilleros */}
                            <div className="flex flex-col mb-4">
                                <span className="text-customPrimary-600 mb-2 font-digitalThin text-2xl">
                                    {efficiencies[4] ? `${efficiencies[4].id}. ${efficiencies[4].name}` : 'Cargando...'}
                                </span>
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 1: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => {
                                        const isGreen = index < efficiencies[4]?.points; // Color verde si el índice es menor que el número de puntos
                                        const casilleroColor = isGreen ? "#00FF00" : (index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"; // Verde si es un casillero de los puntos, de lo contrario, blanco o color alternativo
                                        return (
                                            <div key={index} className="flex flex-col items-center mx-0">
                                                <CasilleroSmall color={casilleroColor} /> {/* Color según la condición */}
                                                <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fila 6 de 36 Casilleros */}
                            <div className="flex flex-col mb-4">
                                <span className="text-customPrimary-600 mb-2 font-digitalThin text-2xl">
                                    {efficiencies[5] ? `${efficiencies[5].id}. ${efficiencies[5].name}` : 'Cargando...'}
                                </span>
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 1: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => {
                                        const isGreen = index < efficiencies[5]?.points; // Color verde si el índice es menor que el número de puntos
                                        const casilleroColor = isGreen ? "#00FF00" : (index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"; // Verde si es un casillero de los puntos, de lo contrario, blanco o color alternativo
                                        return (
                                            <div key={index} className="flex flex-col items-center mx-0">
                                                <CasilleroSmall color={casilleroColor} /> {/* Color según la condición */}
                                                <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fila 7 de 36 Casilleros */}
                            <div className="flex flex-col mb-4">
                                <span className="text-customPrimary-600 mb-2 font-digitalThin text-2xl">
                                    {efficiencies[6] ? `${efficiencies[6].id}. ${efficiencies[6].name}` : 'Cargando...'}
                                </span>
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 1: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => {
                                        const isGreen = index < efficiencies[6]?.points; // Color verde si el índice es menor que el número de puntos
                                        const casilleroColor = isGreen ? "#00FF00" : (index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"; // Verde si es un casillero de los puntos, de lo contrario, blanco o color alternativo
                                        return (
                                            <div key={index} className="flex flex-col items-center mx-0">
                                                <CasilleroSmall color={casilleroColor} /> {/* Color según la condición */}
                                                <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fila 8 de 36 Casilleros */}
                            <div className="flex flex-col mb-4">
                                <span className="text-customPrimary-600 mb-2 font-digitalThin text-2xl">
                                    {efficiencies[7] ? `${efficiencies[7].id}. ${efficiencies[7].name}` : 'Cargando...'}
                                </span>
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 1: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => {
                                        const isGreen = index < efficiencies[7]?.points; // Color verde si el índice es menor que el número de puntos
                                        const casilleroColor = isGreen ? "#00FF00" : (index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"; // Verde si es un casillero de los puntos, de lo contrario, blanco o color alternativo
                                        return (
                                            <div key={index} className="flex flex-col items-center mx-0">
                                                <CasilleroSmall color={casilleroColor} /> {/* Color según la condición */}
                                                <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fila 9 de 36 Casilleros */}
                            <div className="flex flex-col mb-4">
                                <span className="text-customPrimary-600 mb-2 font-digitalThin text-2xl">
                                    {efficiencies[8] ? `${efficiencies[8].id}. ${efficiencies[8].name}` : 'Cargando...'}
                                </span>
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 1: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => {
                                        const isGreen = index < efficiencies[8]?.points; // Color verde si el índice es menor que el número de puntos
                                        const casilleroColor = isGreen ? "#00FF00" : (index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"; // Verde si es un casillero de los puntos, de lo contrario, blanco o color alternativo
                                        return (
                                            <div key={index} className="flex flex-col items-center mx-0">
                                                <CasilleroSmall color={casilleroColor} /> {/* Color según la condición */}
                                                <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fila 10 de 36 Casilleros */}
                            <div className="flex flex-col mb-4">
                                <span className="text-customPrimary-600 mb-2 font-digitalThin text-2xl">
                                    {efficiencies[9] ? `${efficiencies[9].id}. ${efficiencies[9].name}` : 'Cargando...'}
                                </span>
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 1: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => {
                                        const isGreen = index < efficiencies[9]?.points; // Color verde si el índice es menor que el número de puntos
                                        const casilleroColor = isGreen ? "#00FF00" : (index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"; // Verde si es un casillero de los puntos, de lo contrario, blanco o color alternativo
                                        return (
                                            <div key={index} className="flex flex-col items-center mx-0">
                                                <CasilleroSmall color={casilleroColor} /> {/* Color según la condición */}
                                                <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fila 11 de 36 Casilleros */}
                            <div className="flex flex-col mb-4">
                                <span className="text-customPrimary-600 mb-2 font-digitalThin text-2xl">
                                    {efficiencies[10] ? `${efficiencies[10].id}. ${efficiencies[10].name}` : 'Cargando...'}
                                </span>
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 1: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => {
                                        const isGreen = index < efficiencies[10]?.points; // Color verde si el índice es menor que el número de puntos
                                        const casilleroColor = isGreen ? "#00FF00" : (index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"; // Verde si es un casillero de los puntos, de lo contrario, blanco o color alternativo
                                        return (
                                            <div key={index} className="flex flex-col items-center mx-0">
                                                <CasilleroSmall color={casilleroColor} /> {/* Color según la condición */}
                                                <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fila 12 de 36 Casilleros */}
                            <div className="flex flex-col mb-4">
                                <span className="text-customPrimary-600 mb-2 font-digitalThin text-2xl">
                                    {efficiencies[11] ? `${efficiencies[11].id}. ${efficiencies[11].name}` : 'Cargando...'}
                                </span>
                                <div className="flex flex-row justify-start items-center">
                                    {/* Fila 1: Numeración de 1 a 36 */}
                                    {Array.from({ length: 36 }, (_, index) => {
                                        const isGreen = index < efficiencies[11]?.points; // Color verde si el índice es menor que el número de puntos
                                        const casilleroColor = isGreen ? "#00FF00" : (index + 1) % 6 === 0 ? "#FFE59F" : "#FFFF"; // Verde si es un casillero de los puntos, de lo contrario, blanco o color alternativo
                                        return (
                                            <div key={index} className="flex flex-col items-center mx-0">
                                                <CasilleroSmall color={casilleroColor} /> {/* Color según la condición */}
                                                <span className="text-white font-digitalThin text-base">{index + 1}</span> {/* Numeración 1-36 */}
                                            </div>
                                        );
                                    })}
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