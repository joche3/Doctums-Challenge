import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../components/Button'
import axios from "axios"; // Importar axios para hacer la solicitud HTTP
import { Tooltip } from 'react-tooltip';

const ResourcesModal = () => {

    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true); // Controla la visibilidad del modal
    const [resources, setResources] = useState([]);
    const [selectedResources, setSelectedResources] = useState([]);
    const [efficiencies, setEfficiencies] = useState([]); // Almacenar las eficiencias
    const [playerName, setPlayerName] = useState(''); // Estado para el nombre del jugador
    const [money, setMoney] = useState(0); // Estado para el dinero del jugador

    // Obtener los proyectos desde el backend
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/resources")
            .then((response) => {
                setResources(response.data.resources);
                const initialSelection = {};
                response.data.resources.forEach((resource) => {
                    initialSelection[resource.id] = resource.acquired; // Inicializa los checkboxes
                });
                setSelectedResources(initialSelection);
            })
            .catch((error) => console.error("Error fetching resource:", error));
         // Llamada para obtener eficiencias
         axios.get("http://127.0.0.1:8000/efficiencies")
         .then((response) => {
             setEfficiencies(response.data.efficiencies);
         })
         .catch((error) => console.error("Error fetching efficiencies:", error));  
    }, []);


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
    }, 500); // Cada 1.5 segundos
  
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  

    const handleClose = () => {
        setIsVisible(false); // Activa la animación de salida
        setTimeout(() => {
            navigate(-1); // Navega después de que termine la animación
        }, 500); // La duración debe coincidir con la de la animación de salida
    };

    // Manejar el cambio del checkbox
    const handleCheckboxChange = (id) => {
        setSelectedResources((prev) => ({
            ...prev,
            [id]: !prev[id], // Alterna el estado del checkbox
        }));
    };


    // Manejar la ejecución de recursos seleccionados
    const handleExecuteResources = async () => {
        // Filtrar recursos no adquiridos
        const unacquiredResources = resources.filter(resource => !resource.acquired);
        const updatedResources = unacquiredResources.filter(resource => selectedResources[resource.id]);

        if (updatedResources.length === 0) {
            alert("Debes seleccionar al menos 1 recurso que no esté adquirido. ❌");
            return;
        }

        try {
            for (const resource of updatedResources) {
                try {
                    // Intentar comprar el recurso
                    await axios.post(
                        `http://127.0.0.1:8000/resources/${resource.id}/buy`,
                        {}, // Cuerpo vacío porque no se requiere información adicional
                        {
                            headers: { 'Content-Type': 'application/json' },
                        }
                    );

                    // Si la compra es exitosa, actualizar el recurso como adquirido
                    await axios.put(
                        `http://127.0.0.1:8000/resources/${resource.id}`,
                        true,
                        {
                            headers: { 'Content-Type': 'application/json' },
                        }
                    );
                } catch (error) {
                    if (error.response && error.response.status === 422) {
                        const message = error.response.data?.message || "No tienes dinero suficiente.";
                        alert(`No se pudo comprar el recurso "${resource.name}" ❌ ${message}`);
                        console.error(`Error al comprar recurso ${resource.id}:`, error.response.data);
                        return; // Salir del loop si ocurre un error
                    } else {
                        console.error("Error inesperado:", error);
                        throw error;
                    }
                }
            }

            alert("Los recursos han sido comprados correctamente. 🗂️");
            handleClose(); // Cierra el modal después de ejecutar los recursos
        } catch (error) {
            console.error("Error ejecutando los recursos:", error);
            alert("Hubo un error al contratar los recursos. Por favor, inténtalo de nuevo.");
        }
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

                        <div className='flex flex-row justify-between' >
                            <div className>
                                <h2 className='font-digitalThin text-lg text-customPrimary-600'> <span className='font-pixelmixNormal text-sm'>Dinero:</span> S/. {money}</h2> {/* Mostrar el dinero del jugador */}
                            </div>

                            <button
                                onClick={handleClose}
                                className=" text-red-500 p-1 bg-transparent hover:bg-customSecondary-700 rounded-full"
                            >
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8 h-8'>
                                    <path d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>

                        <h1 className='text-center text-customPrimary-600 font-pixelmixNormal text-2xl'> Comprar Recursos </h1>

                        {/* Tabla de proyectos */}
                        <table className="w-3/4 table-auto mx-auto mt-16 border-collapse border border-gray-400">
                            <thead>
                                <tr className="bg-customSecondary-700 text-white font-digitalThin font-semibold">
                                    <th className="border  border-customSecondary-700 px-4 py-2 w-1"># de recurso</th>
                                    <th className="border  border-customSecondary-700 px-4 py-2">Recursos</th>
                                    <th className="border  border-customSecondary-700 px-4 py-2">Precio</th>
                                    <th className="border  border-customSecondary-700 px-4 py-2">Sueldo Mensual</th>
                                    <th className="border  border-customSecondary-700 px-4 py-2 w-1">Seleccionar</th>
                                    <th className="border  border-customSecondary-700 px-4 py-2 w-1">Eficiencia</th>
                                </tr>
                            </thead>
                            <tbody>
                                {resources.map((resource) => (
                                    <tr key={resource.id} className="text-center text-white font-digitalThin">
                                        <td className="border border-customSecondary-700 px-4 py-2">{resource.id}</td>
                                        <td className="border border-customSecondary-700 px-4 py-2">{resource.name}</td>
                                        <td className="border border-customSecondary-700 px-4 py-2">S/. {resource.price}</td>
                                        <td className="border border-customSecondary-700 px-4 py-2">S/. {resource.salaryMonth}</td>
                                        <td className="border border-customSecondary-700 px-4 py-2">
                                            <input
                                                type="checkbox"
                                                checked={selectedResources[resource.id] || false}
                                                onChange={() => handleCheckboxChange(resource.id)}
                                                disabled={resource.acquired} // Desactiva el checkbox si el proyecto está adquirido
                                                className={`form-checkbox h-5 w-5 ${resource.acquired ? 'cursor-not-allowed' : 'cursor-pointer'
                                                    }`}
                                            />
                                        </td>
                                        
                                        <td className="border border-customSecondary-700 py-2">
                                            <div className="flex justify-center items-center">
                                                {/* Círculo con "?" */}
                                                <div
                                                    id={`tooltip-${resource.id}`}
                                                    className="w-5 h-5 flex items-center justify-center bg-customSecondary-700 text-white rounded-full cursor-pointer font-pixelmixNormal text-xs text-center"
                                                    data-tooltip-content={
                                                        efficiencies[6 + resources.indexOf(resource)] // Comienza desde la eficiencia 7
                                                            ? `Afecta: ${efficiencies[6 + resources.indexOf(resource)].name} en +${resource.efficiency_points}`
                                                            : "Información no disponible"
                                                    }
                                                    
                                                >
                                                    ?
                                                </div>
                                                {/* Tooltip */}
                                                <Tooltip
                                                    anchorId={`tooltip-${resource.id}`}
                                                    place="top"
                                                    type="dark"
                                                    style={{ backgroundColor: '#202020', color: '#DEA100' }} // Cambia el color del tooltip
                                                />
                                            </div>
                                        </td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div
                            className="relative flex items-center justify-center w-[170px] mt-10 cursor-pointer mx-auto"
                            onClick={handleExecuteResources}
                        >
                            <h1 className="absolute text-black text-lg text-center font-digital flex flex-row gap-2">
                                Comprar Recursos
                            </h1>
                            <Button className="w-full h-full" colorTop="#FFBD0F" colorBottom="#DEA100" />
                        </div>

                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ResourcesModal
