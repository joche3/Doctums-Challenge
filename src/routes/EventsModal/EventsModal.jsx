import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TexBoxBig3 from '../../components/TexBoxBig3';
import Button from '../../components/Button'
import axios from "axios"; // Importar axios para hacer la solicitud HTTP
import SquarePixel from '../../components/SquarePixel';
import { useLocation } from 'react-router-dom';


const EventsModal = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true); // Controla la visibilidad del modal
    const [eventData, setEventData] = useState(null); // Estado para almacenar los datos del evento
    const [efficiencies, setEfficiencies] = useState([]); // Estado para almacenar las eficiencias
    const [products, setProducts] = useState([]); // Estado para almacenar los productos
    const [resources, setResources] = useState([]);
    const navigate = useNavigate();
    const [player, setPlayer] = useState(null); // Estado para almacenar los datos del jugador
    const [checkText, setCheckText] = useState("Verificar"); // Estado para el texto del enlace
    const [loadingDots, setLoadingDots] = useState(0); // Estado para el número de puntos de carga
    const eventIndex = location.state?.eventIndex || 0; // Usa 0 como valor por defecto

    useEffect(() => {
        console.log("Event Index:", eventIndex);
        // Función para obtener los eventos
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/events');
                const events = response.data.events;
                if (events.length > 0) {
                    setEventData(events[eventIndex]); // Almacena el primer evento
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        // Función para obtener las eficiencias
        const fetchEfficiencies = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/efficiencies');
                // Asegúrate de que la respuesta contenga la propiedad 'efficiencies'
                if (response.data.efficiencies && Array.isArray(response.data.efficiencies)) {
                    setEfficiencies(response.data.efficiencies); // Almacena las eficiencias
                } else {
                    console.error("La respuesta de eficiencias no contiene un array:", response.data);
                }
            } catch (error) {
                console.error("Error fetching efficiencies:", error);
            }
        };

        // Función para obtener los productos
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/products');
                // Asegúrate de que la respuesta contenga la propiedad 'products'
                if (response.data.products && Array.isArray(response.data.products)) {
                    setProducts(response.data.products); // Almacena los productos
                } else {
                    console.error("La respuesta de productos no contiene un array:", response.data);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        // Función para obtener los recursos
        const fetchResources = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/resources');
                if (response.data.resources && Array.isArray(response.data.resources)) {
                    setResources(response.data.resources); // Almacena los recursos
                } else {
                    console.error("La respuesta de recursos no contiene un array:", response.data);
                }
            } catch (error) {
                console.error("Error fetching resources:", error);
            }
        };

        const fetchPlayer = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/player');
                setPlayer(response.data); // Almacena los datos del jugador
            } catch (error) {
                console.error("Error fetching player data:", error);
            }
        };

        fetchEvents(); // Llama a la función para obtener los eventos
        fetchEfficiencies(); // Llama a la función para obtener las eficiencias
        fetchProducts(); // Llama a la función para obtener los productos
        fetchResources(); // Llama a la función para obtener los recursos
        fetchPlayer(); // Llama a la función para obtener los datos del jugador
    }, [eventIndex]);

    const handleClose = () => {
        setIsVisible(false); // Activa la animación de salida
        setTimeout(() => {
            navigate(-1); // Navega después de que termine la animación
        }, 500); // La duración debe coincidir con la de la animación de salida
    };

    if (!eventData || efficiencies.length === 0 || products.length === 0) {
        return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
    }


    const efficiency1 = efficiencies.find(eff => eff.id === eventData.efficiencie_id_1);
    const efficiency2 = efficiencies.find(eff => eff.id === eventData.efficiencie_id_2);
    const product = products.find(prod => prod.id === eventData.product_id);
    const resource = resources.find(res => res.id === eventData.resource_id);

    const handleCheckEfficiencies = async () => {
        if (!eventData || efficiencies.length === 0 || products.length === 0 || resources.length === 0) {
            return; // Asegúrate de que los datos estén disponibles
        }
    
        // Verificar si los puntos de ambas eficiencias son mayores a 1
        if (efficiency1.points >= 1 && efficiency2.points >= 1) {
        
        // Sumar los puntos de eficiencia
        const newEfficiencyPoints1 = Math.min(efficiency1.points + (product ? product.efficiency_points : 0), 36); // Limitar a 36
        const newEfficiencyPoints2 = Math.min(efficiency2.points + (resource ? resource.efficiency_points : 0), 36); // Limitar a 36
    
            // Actualizar los puntos en el backend
            try {
                await axios.put(`http://127.0.0.1:8000/efficiencies/${efficiency1.id}`, newEfficiencyPoints1); // Enviar solo el número
                await axios.put(`http://127.0.0.1:8000/efficiencies/${efficiency2.id}`, newEfficiencyPoints2); // Enviar solo el número
                
                // Actualizar el campo 'acquired' del producto y recurso
                if (product) {
                    await axios.put(`http://127.0.0.1:8000/products/${product.id}`, true); // Actualizar acquired a true
                }
                if (resource) {
                    await axios.put(`http://127.0.0.1:8000/resources/${resource.id}`, true); // Actualizar acquired a true
                }
    
                // Sumar el dinero del jugador con ifWin
                const newPlayerMoney = player.money + eventData.ifWin; 
                await axios.put("http://127.0.0.1:8000/playerMoney", newPlayerMoney); // Actualizar el dinero del jugador

                alert(`Evento superado! Has recibido tus recompensas. ✅\n\nPuntos totales de ${efficiency1.name}: ${newEfficiencyPoints1}\nPuntos totales de ${efficiency2.name}: ${newEfficiencyPoints2}\nDinero total: ${newPlayerMoney} `);
            } catch (error) {
                console.error("Error updating efficiency points:", error);
                alert("Hubo un error al actualizar los puntos de eficiencia.");
            }
            handleClose(); // Cerrar el modal
        } else {
            // Restar el dinero del jugador con ifLose
            const newPlayerMoney = player.money - eventData.ifLose;
            try {
                await axios.put("http://127.0.0.1:8000/playerMoney", newPlayerMoney); // Actualizar el dinero del jugador
                alert(`Fallaste! Has perdido dinero. ❌\n\nDinero total: ${newPlayerMoney}`);
            } catch (error) {
                console.error("Error updating player money:", error);
                alert("Hubo un error al actualizar el dinero del jugador.");
            }
            handleClose(); // Cerrar el modal
        }
    };

    const handleClick = () => {
        setCheckText("Verificando"); // Cambia el texto
        setLoadingDots(0); // Inicia la carga con un punto
        const intervalId = setInterval(() => {
            setLoadingDots((prevDots) => {
                if (prevDots < 3) {
                    return prevDots + 1;
                } else {
                    return 1;
                }
            });
        }, 400); // Actualiza el número de puntos cada 400ms
        setTimeout(() => {
            clearInterval(intervalId); // Detiene el intervalo después de 5 segundos
            handleCheckEfficiencies(); // Llama a la función después de 5 segundos
        }, 3000); // 5000 ms = 5 segundos
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 bg-customSecondary-700 bg-opacity-70 flex justify-center items-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Aquí se coloca el componente TexBoxBig3 directamente */}
                    <motion.div
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
                        <TexBoxBig3 fillColor1="#343434" fillColor2="#4B4B4B">

                            <div className='flex justify-end mt-5'>
                                <div className='flex items-center justify-center flex-col'>
                                    <h2 className="font-pixelmixNormal text-[12px] text-customPrimary-600 mb-5">Nivel de Evento</h2>
                                    <div style={{ position: 'relative', width: '70px', height: '70px' }}>
                                        <SquarePixel fillColor1="#DEA100" fillColor2="#FFBD0F" />
                                        <span style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            fontSize: '24px', // Ajusta el tamaño del texto
                                            fontWeight: 'bold' // Ajusta el peso de la fuente
                                        }} className='font-pixelmixNormal  text-customSecondary-900'>
                                            {eventData.event_level}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex mt-2 flex-col gap-2 text-customPrimary-600'>
                                <h2 className="font-pixelmixNormal text-lg">Descripcion del Evento</h2>
                                <p className="font-digitalThin text-[15px] text-justify">{eventData.description_event}</p>
                            </div>


                            <div className='flex flex-col mt-5'>
                                <h2 className="font-pixelmixNormal text-lg text-customPrimary-600 ">Eficiencias Requeridas</h2>
                                <div className='flex flex-row justify-center gap-2'>
                                    <div className='mt-2 gap-2 text-customPrimary-600 bg-customSecondary-700 p-4 w-2/4 flex justify-center items-center '>
                                        <p className="font-digitalThin text-[15px] text-center">{efficiency1 ? efficiency1.name : 'Eficiencia no encontrada'}</p>
                                    </div>

                                    <div className='mt-2  gap-2 text-customPrimary-600 bg-customSecondary-700 p-4 w-2/4 flex justify-center items-center'>
                                        <p className="font-digitalThin text-[15px] text-center ">{efficiency2 ? efficiency2.name : 'Eficiencia no encontrada'}</p>
                                    </div>
                                </div>
                            </div>


                            <div className='flex fle-row gap-5 mt-5'>

                                <div className='flex mt-2 flex-col gap-2 text-customPrimary-600 w-2/4'>
                                    <h2 className="font-pixelmixNormal text-lg text-customPrimary-600 ">Modificadores</h2>
                                    <div className="font-digitalThin text-[15px] ">
                                        <h3>Productos:</h3>
                                        {product && (
                                            <li className='w-3/4 text-left'>{product.product_name} +{product.efficiency_points}</li>
                                        )}
                                        <h3 className='mt-2'>Recursos:</h3>
                                        {resource && (
                                            <li className='text-left'>{resource.name} +{resource.efficiency_points}</li>
                                        )}
                                    </div>
                                </div>

                                <div className='flex mt-2 flex-col gap-2 text-customPrimary-600 w-2/4'>
                                    <h2 className="font-pixelmixNormal text-lg text-customPrimary-600 ">Resultado</h2>
                                    <div className="font-digitalThin text-[15px] ">
                                        <h3>Si tiene exito:</h3>
                                            <li className='text-left'>+ S/. {eventData.ifWin}</li>
                                        <h3>Si fracasa:</h3>
                                            <li className='text-left'>- S/. {eventData.ifLose}</li>
                                    </div>
                                </div>

                            </div>

                            <div className='mt-20 flex justify-center items-center'>
                                <a 
                                    onClick={handleClick} 
                                    className="font-pixelmixNormal text-lg text-customPrimary-500 cursor-pointer "
                                >
                                    {checkText}
                                    {Array.from({ length: loadingDots }, (_, i) => (
                                        <span key={i}>.</span>
                                    ))}
                                </a>
                            </div>


                        </TexBoxBig3>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default EventsModal
