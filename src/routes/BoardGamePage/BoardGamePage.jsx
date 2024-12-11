import React from 'react'
import NavbarData from '../../components/NavBarData'
import PageContainerGame from '../../components/PageContainerGame'
import Casillero from '../../components/casilleros/Casillero'
import Button from '../../components/Button'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const iconos = [
    {
        label: "Mi Icono 1",
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" id="Entertainment-Events-Hobbies-Board-Game-Dice--Streamline-Pixel" height={24} width={24} ><desc>{"Entertainment Events Hobbies Board Game Dice Streamline Icon: https://streamlinehq.com"}</desc><title>{"entertainment-events-hobbies-board-game-dice"}</title><g><path d="M12.59609375 22.45375v-1.0925h2.185v-1.0996875h2.1921874999999997v-1.0925h2.1921874999999997v-1.0996875h1.0925v-1.0925h1.0996875V6.023125h-1.0996875V4.930625h-1.0925v1.0925h-2.1921874999999997v1.0996875h-2.1921874999999997v1.0925h-2.185v1.0925h-2.1921874999999997v1.0996875H11.5v10.95375h-1.0925v1.0925Zm4.3771875 -13.145937499999999h2.1921874999999997v1.0996875h-2.1921874999999997Zm-3.2846875000000004 6.5765625000000005H15.884375v2.185h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M16.97328125 3.838125h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M14.78109375 2.7384375h2.1921874999999997v1.0996875h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M12.59609375 1.6459375h2.185v1.0925h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M10.40390625 4.930625h2.1921874999999997v2.1921874999999997h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M10.40390625 0.54625h2.1921874999999997v1.0996875h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M8.211718750000001 20.2615625h2.1921874999999997v1.0996875h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M8.211718750000001 8.2153125h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M8.211718750000001 1.6459375h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M8.211718750000001 15.884375h2.1921874999999997v2.185h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M8.211718750000001 11.5h2.1921874999999997v2.1921874999999997h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M6.01953125 19.169062500000003h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M6.01953125 7.1228125h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M6.01953125 2.7384375h2.1921874999999997v1.0996875h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M3.83453125 18.069375h2.185v1.0996875h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M3.83453125 6.023125h2.185v1.0996875h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M3.83453125 3.838125h2.185v1.0925h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M3.83453125 13.692187500000001h2.185v2.1921874999999997h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M3.83453125 9.307812499999999h2.185V11.5h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M2.73484375 16.976875h1.0996875v1.0925h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M2.73484375 4.930625h1.0996875v1.0925h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M1.6423437500000002 6.023125h1.0925v10.95375h-1.0925Z" fill="#000000" strokeWidth={1} /></g></svg>
        ),
    },
    {
        label: "Mi Icono 2",
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" id="Interface-Essential-Signin-Login--Streamline-Pixel" height={24} width={24} ><desc>{"Interface Essential Signin Login Streamline Icon: https://streamlinehq.com"}</desc><title>{"interface-essential-signin-login"}</title><g><path d="m16.42703125 6.88778125 0 1.0925 -1.0996875 0 0 1.0996875 -1.0925 0 0 1.0925 -1.0925 0 0 2.1921874999999997 1.0925 0 0 1.0925 1.0925 0 0 1.0996875 1.0996875 0 0 1.0925 1.0925 0 0 -3.2846875000000004 4.3843749999999995 0 0 -2.1921874999999997 -4.3843749999999995 0 0 -3.2846875000000004 -1.0925 0z" fill="#000000" strokeWidth={1} /><path d="M15.327343749999999 17.84153125h1.0996875v2.1921874999999997h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M15.327343749999999 1.41090625h1.0996875v3.2846875000000004h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="m10.95015625 22.21871875 0 -1.0925 4.3771875 0 0 -1.0925 -4.3771875 0 0 -14.2384375 -1.0925 0 0 16.423437500000002 1.0925 0z" fill="#000000" strokeWidth={1} /><path d="M6.56578125 22.21871875h3.291875v1.0996875h-3.291875Z" fill="#000000" strokeWidth={1} /><path d="M7.66546875 12.36465625h1.0925v2.1921874999999997h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M7.66546875 4.6955937500000005h2.1921874999999997v1.0996875h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M4.38078125 21.12621875h2.185v1.0925h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M5.47328125 3.6030937499999998h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M2.18859375 20.033718750000002h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M3.28109375 2.51059375h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="m2.18859375 0.31840625 0 1.0925 -1.0925 0 0 18.6228125 1.0925 0 0 -17.523125 1.0925 0 0 -1.0996875 12.04625 0 0 -1.0925 -13.138750000000002 0z" fill="#000000" strokeWidth={1} /></g></svg>),
    },
]

const rows = {
    fila1: ["INICIO", 3, 3, 3, 3, null, null, 3, 2, 2, 2, 2, null, null, 2, 2, 1, 1, 1, null, null, 1, 1, 1, 2, 1, null, null, 2, 2],
    fila2: [2, 2, 3, null, null, 3, 3, 3, 3, 3, null, null, 2, 2, 2, 2, 2, null, null, 2, 1, 1, 1, 1, null, null, 1, 1, 2, 2],
    fila3: [2, null, null, 2, 2, 2, 3, 3, null, null, 3, 3, 3, 3, 2, null, null, 2, 2, 2, 2, 2, null, null, 1, 1, 1, 1, 1, null],
    fila4: [null, 1, 2, 2, 2, 2, null, null, 2, 2, 3, 3, 3, null, null, 3, 3, 3, 4, 4, null, null, 4, 4, 4, 4, 3, null, null, 3],
    fila5: [3, 3, 3, 3, null, null, 2, 2, 2, 2, 2, null, null, 2, 3, 3, 3, 3, null, null, 3, 3, 4, 4, 4, null, null, 4, 4, 4],
    fila6: [3, 3, null, null, 3, 3, 3, 3, 2, null, null, 2, 2, 2, 2, 2, null, null, 3, 3, 3, 3, 3, null, null, 3, 4, 4, 4, 4],
    fila7: [null, null, 4, 4, 5, 5, 5, null, null, 5, 5, 5, 4, 4, null, null, 4, 4, 4, 4, 3, null, null, 3, 3, 3, 3, 3, null, null],
    fila8: [3, 3, 3, 3, 3, null, null, 3, 4, 4, 4, 4, null, null, 4, 4, 5, 5, 5, null, null, 5, 5, 5, 4, 4, null, null, 4, 4],
    fila9: [4, 4, 3, null, null, 3, 3, 3, 3, 3, null, null, 4, 4, 4, 4, 4, null, null, 4, 5, 5, 5, 5, null, null, 5, 5, 6, 6],
    fila10: [6, null, null, 6, 6, 6, 5, 5, null, null, 5, 5, 5, 5, 4, null, null, 4, 4, 4, 4, 4, null, null, 3, 3, 3, 3, 3, null],
    fila11: [null, 3, 4, 4, 4, 4, null, null, 4, 4, 5, 5, 5, null, null, 5, 5, 5, 6, 6, null, null, 6, 6, 6, 6, 5, null, null, 5],
    fila12: [5, 5, 5, 5, null, null, 6, 6, 6, 6, 6, null, null, 6, 5, 5, 5, 5, null, null, 5, 5, 6, 6, 6, null, null, 6, 6, "META"],
};

const BoardGamePage = () => {

    const navigate = useNavigate(); // Inicializamos el hook para la navegación
    const location = useLocation();

    const [diceNumber, setDiceNumber] = useState(1); // Empezamos con el dado en el 1 
    const [piecePosition, setPiecePosition] = useState(1);  // Inicia en la casilla 1
    const [rollCount, setRollCount] = useState(0);
    const [isInNullTile, setIsInNullTile] = useState(false); // Nuevo estado para manejar casilleros null

    const handleDiceRoll = () => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(randomNumber);
        
        setPiecePosition((prevPosition) => {
            let newPosition = prevPosition + randomNumber;
    
            const totalCasillas = Object.values(rows).flat();
            const totalCasillasLength = totalCasillas.length;

            // Si la nueva posición supera el número total de casillas, limitamos la posición a la última casilla
            if (newPosition >= totalCasillasLength) {
                newPosition = totalCasillasLength - 1; // Se queda en la última casilla
            }

            const nextTile = totalCasillas[newPosition];
    
            // Imprimir en consola el índice y valor de la casilla actual
            console.log(`Ficha en casilla índice: ${newPosition}, valor: ${nextTile}`);
    
            // Manejar casilleros null
            if (nextTile === null) {
                setIsInNullTile(true); // Activar modo "casillero null"
            } else {
                setIsInNullTile(false); // Desactivar modo "casillero null"
            }
    
            return newPosition;
        });
    
        if (!isInNullTile) {
            // Solo contar la tirada si no estamos en un casillero null
            setRollCount((prevCount) => prevCount + 1);
        }

        // Verificamos si hemos realizado 5 tiradas y la ficha no está en un casillero null
        if (rollCount + 1 === 5 && !isInNullTile) {
            setRollCount(0); // Reseteamos el conteo
    
            const totalCasillas = Object.values(rows).flat();
            const currentCasilla = totalCasillas[piecePosition];
    
            // Si llegamos al casillero "META" (índice 360)
            if (currentCasilla === "META") {
                navigate("/endGame", { state: { background: location } }); // Navegar a la página /endGame
            } else {
                // Navegación según el valor de la casilla
                if (currentCasilla === 1) {
                    navigate("/events", { state: { eventIndex: 0, background: location } });
                } else if (currentCasilla === 2) {
                    navigate("/events", { state: { eventIndex: 1, background: location } });
                } else if (currentCasilla === 3) {
                    navigate("/events", { state: { eventIndex: 2, background: location } });
                } else if (currentCasilla === 4) {
                    navigate("/events", { state: { eventIndex: 3, background: location } });
                } else if (currentCasilla === 5) {
                    navigate("/events", { state: { eventIndex: 4, background: location } });
                } else if (currentCasilla === 6) {
                    navigate("/events", { state: { eventIndex: 5, background: location } });
                }
            }
        }
    };
    
    return (
        <div className="relative bg-customSecondary-700 min-h-screen">
            {/* Imagen de fondo */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('./src/assets/img/wallpaperPixel.png')", opacity: 0.3 }}>
            </div>

            {/* Contenido de la página */}
            <div className="relative z-10">
                <PageContainerGame>
                    <NavbarData />

                    {/* FILA NUMERO 1 */}
                    <div className="mt-14 flex flex-row justify-center items-center" id="fila-1">
                        {rows.fila1.map((casillaValue, index) => {
                            const casillaNumber = index + 1;
                            const isActive = piecePosition === casillaNumber;
                            const isWeekend = casillaValue === null;

                            // Cambiar el color para la casilla "INICIO"
                            const casillaColor = casillaNumber === 1 ? "#7EDB6A" : isWeekend ? "white" : "#FFE59F"; // Cambiar color para "INICIO"

                            return (
                                <div key={casillaNumber} className="flex flex-col items-center relative">
                                    <div className="relative" id={casillaNumber}>
                                        <Casillero color={casillaColor} />
                                        {casillaValue !== null && (
                                            <span className="absolute inset-0 flex items-center justify-center text-black font-digitalThin text-xl">
                                                {casillaValue}
                                            </span>
                                        )}
                                        {isActive && (
                                            <img
                                                src="./src/assets/img/pieceRedF.png"
                                                alt="Ficha roja"
                                                className="absolute w-12 h-12"
                                                style={{
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="w-[55px] bg-customSecondary-800 font-digitalThin border-x-[3px] border-b-[3px] border-black text-center text-white text-[10px]">
                                        {casillaNumber}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Segunda fila */}
                    <div className="mt-5 flex flex-row justify-center items-center" id="fila-2">
                        {rows.fila2.map((casillaValue, index) => {
                            const casillaNumber = index + 31; // Casilla numerada después de la primera fila
                            const isActive = piecePosition === casillaNumber;
                            const isWeekend = casillaValue === null;

                            return (
                                <div key={casillaNumber} className="flex flex-col items-center relative">
                                    <div className="relative" id={casillaNumber}>
                                        <Casillero color={isWeekend ? "white" : "#FFE0B2"} />
                                        {casillaValue !== null && (
                                            <span className="absolute inset-0 flex items-center justify-center text-black font-digitalThin text-xl">
                                                {casillaValue}
                                            </span>
                                        )}
                                        {isActive && (
                                            <img
                                                src="./src/assets/img/pieceRedF.png"
                                                alt="Ficha roja"
                                                className="absolute w-12 h-12"
                                                style={{
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="w-[55px] bg-customSecondary-800 font-digitalThin border-x-[3px] border-b-[3px] border-black text-center text-white text-[10px]">
                                        {casillaNumber}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Tercera fila */}
                    <div className="mt-5 flex flex-row justify-center items-center" id="fila-3">
                        {rows.fila3.map((casillaValue, index) => {
                            const casillaNumber = index + 61; // Casilla numerada después de la primera fila
                            const isActive = piecePosition === casillaNumber;
                            const isWeekend = casillaValue === null;

                            return (
                                <div key={casillaNumber} className="flex flex-col items-center relative">
                                    <div className="relative" id={casillaNumber}>
                                        <Casillero color={isWeekend ? "white" : "#FFCCBC"} />
                                        {casillaValue !== null && (
                                            <span className="absolute inset-0 flex items-center justify-center text-black font-digitalThin text-xl">
                                                {casillaValue}
                                            </span>
                                        )}
                                        {isActive && (
                                            <img
                                                src="./src/assets/img/pieceRedF.png"
                                                alt="Ficha roja"
                                                className="absolute w-12 h-12"
                                                style={{
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="w-[55px] bg-customSecondary-800 font-digitalThin border-x-[3px] border-b-[3px] border-black text-center text-white text-[10px]">
                                        {casillaNumber}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Cuarta fila */}
                    <div className="mt-5 flex flex-row justify-center items-center" id="fila-4">
                        {rows.fila4.map((casillaValue, index) => {
                            const casillaNumber = index + 91; // Casilla numerada después de la primera fila
                            const isActive = piecePosition === casillaNumber;
                            const isWeekend = casillaValue === null;

                            return (
                                <div key={casillaNumber} className="flex flex-col items-center relative">
                                    <div className="relative" id={casillaNumber}>
                                        <Casillero color={isWeekend ? "white" : "#F8BBD0"} />
                                        {casillaValue !== null && (
                                            <span className="absolute inset-0 flex items-center justify-center text-black font-digitalThin text-xl">
                                                {casillaValue}
                                            </span>
                                        )}
                                        {isActive && (
                                            <img
                                                src="./src/assets/img/pieceRedF.png"
                                                alt="Ficha roja"
                                                className="absolute w-12 h-12"
                                                style={{
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="w-[55px] bg-customSecondary-800 font-digitalThin border-x-[3px] border-b-[3px] border-black text-center text-white text-[10px]">
                                        {casillaNumber}
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    {/* Quinta fila */}
                    <div className="mt-5 flex flex-row justify-center items-center" id="fila-5">
                        {rows.fila5.map((casillaValue, index) => {
                            const casillaNumber = index + 121; // Casilla numerada después de la primera fila
                            const isActive = piecePosition === casillaNumber;
                            const isWeekend = casillaValue === null;

                            return (
                                <div key={casillaNumber} className="flex flex-col items-center relative">
                                    <div className="relative" id={casillaNumber}>
                                        <Casillero color={isWeekend ? "white" : "#E1BEE7"} />
                                        {casillaValue !== null && (
                                            <span className="absolute inset-0 flex items-center justify-center text-black font-digitalThin text-xl">
                                                {casillaValue}
                                            </span>
                                        )}
                                        {isActive && (
                                            <img
                                                src="./src/assets/img/pieceRedF.png"
                                                alt="Ficha roja"
                                                className="absolute w-12 h-12"
                                                style={{
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="w-[55px] bg-customSecondary-800 font-digitalThin border-x-[3px] border-b-[3px] border-black text-center text-white text-[10px]">
                                        {casillaNumber}
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    {/* Sexta fila */}
                    <div className="mt-5 flex flex-row justify-center items-center" id="fila-6">
                        {rows.fila6.map((casillaValue, index) => {
                            const casillaNumber = index + 151; // Casilla numerada después de la primera fila
                            const isActive = piecePosition === casillaNumber;
                            const isWeekend = casillaValue === null;

                            return (
                                <div key={casillaNumber} className="flex flex-col items-center relative">
                                    <div className="relative" id={casillaNumber}>
                                        <Casillero color={isWeekend ? "white" : "#D1C4E9"} />
                                        {casillaValue !== null && (
                                            <span className="absolute inset-0 flex items-center justify-center text-black font-digitalThin text-xl">
                                                {casillaValue}
                                            </span>
                                        )}
                                        {isActive && (
                                            <img
                                                src="./src/assets/img/pieceRedF.png"
                                                alt="Ficha roja"
                                                className="absolute w-12 h-12"
                                                style={{
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="w-[55px] bg-customSecondary-800 font-digitalThin border-x-[3px] border-b-[3px] border-black text-center text-white text-[10px]">
                                        {casillaNumber}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Septima fila */}
                    <div className="mt-5 flex flex-row justify-center items-center" id="fila-7">
                        {rows.fila7.map((casillaValue, index) => {
                            const casillaNumber = index + 181; // Casilla numerada después de la primera fila
                            const isActive = piecePosition === casillaNumber;
                            const isWeekend = casillaValue === null;

                            return (
                                <div key={casillaNumber} className="flex flex-col items-center relative">
                                    <div className="relative" id={casillaNumber}>
                                        <Casillero color={isWeekend ? "white" : "#C5CAE9"} />
                                        {casillaValue !== null && (
                                            <span className="absolute inset-0 flex items-center justify-center text-black font-digitalThin text-xl">
                                                {casillaValue}
                                            </span>
                                        )}
                                        {isActive && (
                                            <img
                                                src="./src/assets/img/pieceRedF.png"
                                                alt="Ficha roja"
                                                className="absolute w-12 h-12"
                                                style={{
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="w-[55px] bg-customSecondary-800 font-digitalThin border-x-[3px] border-b-[3px] border-black text-center text-white text-[10px]">
                                        {casillaNumber}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Octava fila */}
                    <div className="mt-5 flex flex-row justify-center items-center" id="fila-8">
                        {rows.fila8.map((casillaValue, index) => {
                            const casillaNumber = index + 211; // Casilla numerada después de la primera fila
                            const isActive = piecePosition === casillaNumber;
                            const isWeekend = casillaValue === null;

                            return (
                                <div key={casillaNumber} className="flex flex-col items-center relative">
                                    <div className="relative" id={casillaNumber}>
                                        <Casillero color={isWeekend ? "white" : "#BBDEFB"} />
                                        {casillaValue !== null && (
                                            <span className="absolute inset-0 flex items-center justify-center text-black font-digitalThin text-xl">
                                                {casillaValue}
                                            </span>
                                        )}
                                        {isActive && (
                                            <img
                                                src="./src/assets/img/pieceRedF.png"
                                                alt="Ficha roja"
                                                className="absolute w-12 h-12"
                                                style={{
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="w-[55px] bg-customSecondary-800 font-digitalThin border-x-[3px] border-b-[3px] border-black text-center text-white text-[10px]">
                                        {casillaNumber}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Novena fila */}
                    <div className="mt-5 flex flex-row justify-center items-center" id="fila-9">
                        {rows.fila9.map((casillaValue, index) => {
                            const casillaNumber = index + 241; // Casilla numerada después de la primera fila
                            const isActive = piecePosition === casillaNumber;
                            const isWeekend = casillaValue === null;

                            return (
                                <div key={casillaNumber} className="flex flex-col items-center relative">
                                    <div className="relative" id={casillaNumber}>
                                        <Casillero color={isWeekend ? "white" : "#B3E5FC"} />
                                        {casillaValue !== null && (
                                            <span className="absolute inset-0 flex items-center justify-center text-black font-digitalThin text-xl">
                                                {casillaValue}
                                            </span>
                                        )}
                                        {isActive && (
                                            <img
                                                src="./src/assets/img/pieceRedF.png"
                                                alt="Ficha roja"
                                                className="absolute w-12 h-12"
                                                style={{
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="w-[55px] bg-customSecondary-800 font-digitalThin border-x-[3px] border-b-[3px] border-black text-center text-white text-[10px]">
                                        {casillaNumber}
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    {/* Decima fila */}
                    <div className="mt-5 flex flex-row justify-center items-center" id="fila-10">
                        {rows.fila10.map((casillaValue, index) => {
                            const casillaNumber = index + 271; // Casilla numerada después de la primera fila
                            const isActive = piecePosition === casillaNumber;
                            const isWeekend = casillaValue === null;

                            return (
                                <div key={casillaNumber} className="flex flex-col items-center relative">
                                    <div className="relative" id={casillaNumber}>
                                        <Casillero color={isWeekend ? "white" : "#B2EBF2"} />
                                        {casillaValue !== null && (
                                            <span className="absolute inset-0 flex items-center justify-center text-black font-digitalThin text-xl">
                                                {casillaValue}
                                            </span>
                                        )}
                                        {isActive && (
                                            <img
                                                src="./src/assets/img/pieceRedF.png"
                                                alt="Ficha roja"
                                                className="absolute w-12 h-12"
                                                style={{
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="w-[55px] bg-customSecondary-800 font-digitalThin border-x-[3px] border-b-[3px] border-black text-center text-white text-[10px]">
                                        {casillaNumber}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Onceava fila */}
                    <div className="mt-5 flex flex-row justify-center items-center" id="fila-11">
                        {rows.fila11.map((casillaValue, index) => {
                            const casillaNumber = index + 301; // Casilla numerada después de la primera fila
                            const isActive = piecePosition === casillaNumber;
                            const isWeekend = casillaValue === null;

                            return (
                                <div key={casillaNumber} className="flex flex-col items-center relative">
                                    <div className="relative" id={casillaNumber}>
                                        <Casillero color={isWeekend ? "white" : "#B2DFDB"} />
                                        {casillaValue !== null && (
                                            <span className="absolute inset-0 flex items-center justify-center text-black font-digitalThin text-xl">
                                                {casillaValue}
                                            </span>
                                        )}
                                        {isActive && (
                                            <img
                                                src="./src/assets/img/pieceRedF.png"
                                                alt="Ficha roja"
                                                className="absolute w-12 h-12"
                                                style={{
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="w-[55px] bg-customSecondary-800 font-digitalThin border-x-[3px] border-b-[3px] border-black text-center text-white text-[10px]">
                                        {casillaNumber}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Doceava fila */}
                    <div className="mt-5 flex flex-row justify-center items-center" id="fila-12">
                        {rows.fila12.map((casillaValue, index) => {
                            const casillaNumber = index + 331; // Casilla numerada después de la primera fila
                            const isActive = piecePosition === casillaNumber;
                            const isWeekend = casillaValue === null;

                            // Cambiar el color para la casilla "META"
                            const casillaColor = casillaNumber === 360 ? "#F15C5C" : isWeekend ? "white" : "#B3E1E7"; // Cambiar color para "META"

                            return (
                                <div key={casillaNumber} className="flex flex-col items-center relative">
                                    <div className="relative" id={casillaNumber}>
                                        <Casillero color={casillaColor} />
                                        {casillaValue !== null && (
                                            <span className="absolute inset-0 flex items-center justify-center text-black font-digitalThin text-xl">
                                                {casillaValue}
                                            </span>
                                        )}
                                        {isActive && (
                                            <img
                                                src="./src/assets/img/pieceRedF.png"
                                                alt="Ficha roja"
                                                className="absolute w-12 h-12"
                                                style={{
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="w-[55px] bg-customSecondary-800 font-digitalThin border-x-[3px] border-b-[3px] border-black text-center text-white text-[10px]">
                                        {casillaNumber}
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    {/* BOTONES Y DADO */}

                    <div className='flex justify-center items-center mt-10 gap-10 '>

                        <div
                            className={`relative flex items-center justify-center w-[150px] cursor-pointer`}
                            onClick={() => navigate("/productsModal", { state: { background: location } })}
                        >
                            <h1 className="absolute text-black text-lg text-center font-digital flex flex-row gap-2">
                                Productos
                            </h1>
                            <Button className="w-full h-full" />
                        </div>


                        <div
                            className={`relative flex items-center justify-center w-[150px] cursor-pointer`}
                            onClick={() => navigate("/resourcesModal", { state: { background: location } })}
                        >
                            <h1 className="absolute text-black text-lg text-center font-digital flex flex-row gap-2">
                                Recursos
                            </h1>
                            <Button className="w-full h-full" />
                        </div>

                        <div className={`relative flex items-center justify-center w-[150px] cursor-pointer`} onClick={handleDiceRoll}>
                            <h1 className="absolute text-black text-lg text-center font-digital flex flex-row gap-2">
                                Girar Dado
                            </h1>
                            <Button className="w-full h-full" />
                        </div>

                        {/* Mostrar imagen del dado */}
                        <div className='flex justify-center items-center'>
                            <img
                                src={`./src/assets/img/dice${diceNumber}.png`} // La ruta de la imagen del dado basado en el número
                                alt={`Dado número ${diceNumber}`}
                                className='w-20 h-20'
                            />
                        </div>

                        <div
                            className={`relative flex items-center justify-center w-[150px] cursor-pointer`}
                            onClick={() => navigate("/eficienciasModal", { state: { background: location } })}
                        >
                            <h1 className="absolute text-black text-lg text-center font-digital flex flex-row gap-2">
                                Eficiencias
                            </h1>
                            <Button className="w-full h-full" />
                        </div>

                        <div
                            className={`relative flex items-center justify-center w-[150px] cursor-pointer`}
                            onClick={() => navigate("/projectsModal", { state: { background: location } })}
                        >
                            <h1 className="absolute text-black text-lg text-center font-digital flex flex-row gap-2">
                                Proyectos
                            </h1>
                            <Button className="w-full h-full" />
                        </div>

                        <div
                            className={`relative flex items-center justify-center w-[150px] cursor-pointer`}
                            onClick={() => navigate("/MainPage")}
                        >
                            <h1 className="absolute text-black text-lg text-center font-digital flex flex-row gap-2">
                                Salir<span>{iconos[1].svgIcon}</span>
                            </h1>
                            <Button className="w-full h-full" colorTop="#fd5050" colorBottom="#fc3434" />
                        </div>

                    </div>


                </PageContainerGame>
            </div>
        </div>
    )
}

export default BoardGamePage