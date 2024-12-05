import PageContainer from '../../components/PageContainer'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom';
import ButtonBlack from '../../components/ButtonBlack';
import React, { useEffect, useState } from "react";
import axios from 'axios'
import Navbar from '../../components/NavBar';

const iconos = [
    {
        label: "Mi Icono 1",
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" id="Entertainment-Events-Hobbies-Board-Game-Dice--Streamline-Pixel" height={24} width={24} ><desc>{"Entertainment Events Hobbies Board Game Dice Streamline Icon: https://streamlinehq.com"}</desc><title>{"entertainment-events-hobbies-board-game-dice"}</title><g><path d="M12.59609375 22.45375v-1.0925h2.185v-1.0996875h2.1921874999999997v-1.0925h2.1921874999999997v-1.0996875h1.0925v-1.0925h1.0996875V6.023125h-1.0996875V4.930625h-1.0925v1.0925h-2.1921874999999997v1.0996875h-2.1921874999999997v1.0925h-2.185v1.0925h-2.1921874999999997v1.0996875H11.5v10.95375h-1.0925v1.0925Zm4.3771875 -13.145937499999999h2.1921874999999997v1.0996875h-2.1921874999999997Zm-3.2846875000000004 6.5765625000000005H15.884375v2.185h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M16.97328125 3.838125h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M14.78109375 2.7384375h2.1921874999999997v1.0996875h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M12.59609375 1.6459375h2.185v1.0925h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M10.40390625 4.930625h2.1921874999999997v2.1921874999999997h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M10.40390625 0.54625h2.1921874999999997v1.0996875h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M8.211718750000001 20.2615625h2.1921874999999997v1.0996875h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M8.211718750000001 8.2153125h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M8.211718750000001 1.6459375h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M8.211718750000001 15.884375h2.1921874999999997v2.185h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M8.211718750000001 11.5h2.1921874999999997v2.1921874999999997h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M6.01953125 19.169062500000003h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M6.01953125 7.1228125h2.1921874999999997v1.0925h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M6.01953125 2.7384375h2.1921874999999997v1.0996875h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M3.83453125 18.069375h2.185v1.0996875h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M3.83453125 6.023125h2.185v1.0996875h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M3.83453125 3.838125h2.185v1.0925h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M3.83453125 13.692187500000001h2.185v2.1921874999999997h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M3.83453125 9.307812499999999h2.185V11.5h-2.185Z" fill="#000000" strokeWidth={1} /><path d="M2.73484375 16.976875h1.0996875v1.0925h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M2.73484375 4.930625h1.0996875v1.0925h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M1.6423437500000002 6.023125h1.0925v10.95375h-1.0925Z" fill="#000000" strokeWidth={1} /></g></svg>
        ),
    },
]



const FirstActionPage = () => {

    const navigate = useNavigate();

    const [diceNumber, setDiceNumber] = useState(1); // Estado para el número del dado
    const [hasRolled, setHasRolled] = useState(false); // Estado para verificar si ya se giró el dado
    const [productos, setProductos] = useState([]);
    const [productosObtenidos, setProductosObtenidos] = useState([]); // Estado para almacenar los productos obtenidos
    const [dinero, setDinero] = useState(0); // Estado para almacenar el dinero del jugador
    const [nombreJugador, setNombreJugador] = useState(''); // Estado para el nombre del jugador

    // IDs de productos para cada fila
    const productoIDs = [
        [2, 7],     // Primera fila
        [37, 9],    // Segunda fila
        [10, 13],   // Tercera fila
        [15, 19],   // Cuarta fila
        [22, 24],   // Quinta fila
    ];




    // Obtener datos del jugador al cargar la página
    useEffect(() => {
        const fetchPlayerData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/player');
                const { money, name } = response.data;
                setDinero(money); // Actualizar el estado con el dinero recibido
                setNombreJugador(name); // Si el backend ya tiene un nombre almacenado
            } catch (error) {
                console.error('Error al obtener los datos del jugador:', error);
            }
        };

        fetchPlayerData();
    }, []);

    // Función para manejar el cambio del input del jugador
    const handleNombreChange = (e) => {
        setNombreJugador(e.target.value);
    };



    // Cargar productos desde el backend
    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/products');
                setProductos(response.data.products);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };

        fetchProductos();
    }, []);

    // Filtrar productos por ID
    const getProductoById = (id) => {
        const producto = productos.find((prod) => prod.id === id);
        return producto ? producto.product_name : '-'; // Mostrar "-" si no se encuentra
    };



    // Funcion para hacer girar el dado
    const handleDiceRoll = () => {
        if (!hasRolled) {
            const randomNumber = Math.floor(Math.random() * 5) + 2; // Generar número aleatorio entre 2 y 6
            setDiceNumber(randomNumber); // Actualizar el estado con el número generado
            setHasRolled(true); // Marcar como girado

            // Obtener productos correspondientes al número del dado
            const filaProductos = productoIDs[randomNumber - 2]; // Restar 2 porque los índices del array empiezan en 0
            const nombresProductos = filaProductos.map((id) => getProductoById(id));
            setProductosObtenidos(nombresProductos); // Actualizar el estado con los productos obtenidos
        }
    };



    // Funcion para navegar a otra pagina al darle a "Jugar"
    const handleClick = async () => {
        if (!hasRolled) {
            alert("Para jugar se debe girar el dado primero 🎲");
        } else if (!nombreJugador.trim()) {
            alert("Por favor, ingresa tu nombre antes de jugar.");
        } else {
            try {
                // Enviar solo el 'name' directamente como texto
                const response = await axios.post(
                    'http://127.0.0.1:8000/playerName', // Ruta del endpoint
                    nombreJugador, // Enviar el nombre directamente
                    { headers: { 'Content-Type': 'text/plain' } } // Especificar que es texto plano
                );
    
                console.log('Nombre actualizado correctamente:', response.data);
                navigate('/boardGame'); // Redirige al tablero del juego
            } catch (error) {
                console.error('Error al enviar el nombre del jugador:', error);
            }
        }
    };
    
    console.log(diceNumber)

    return (
        <div className='bg-customSecondary-800'>
            <PageContainer>
                <Navbar />

                <h1 className='mt-24 text-center font-pixelmixNormal text-customPrimary-600 text-3xl'>Acciones a Desarrollar</h1>

                <div className='flex flex-row justify-between mt-28'>

                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-row gap-4 '>
                            <h1 className='text-xl font-pixelmixNormal text-customPrimary-600'>
                                Jugador:
                            </h1>
                            <input
                                type="text"
                                placeholder='Ingrese su nombre'
                                className='w-full p-2 border bg-customSecondary-700 border-customPrimary-800 rounded-md font-digitalThin text-customPrimary-500'
                                value={nombreJugador}
                                onChange={handleNombreChange}
                            />
                        </div>

                        <div className='flex flex-row gap-4 '>
                            <h1 className='text-xl font-pixelmixNormal text-customPrimary-600'>Sueldo inicial: </h1>
                            <h2 className='text-xl font-digitalThin text-customPrimary-600'>S/. <span id='price'>{dinero}</span></h2>
                        </div>
                    </div>

                    <div
                        className={`relative flex items-center justify-center w-[150px] ${!hasRolled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        onClick={handleClick}
                    >
                        <h1 className="absolute text-black text-lg text-center font-digital flex flex-row gap-2">
                            Jugar <span>{iconos[0].svgIcon}</span>
                        </h1>
                        <Button className="w-full h-full" />
                    </div>

                </div>

                <div>
                    <div className='w-full border-b-2 border-customSecondary-700 pt-10'></div>
                </div>

                <div className='flex flex-row justify-between mt-10'>

                    <table className='border-collapse border rounded border-customPrimary-800 w-1/2'>
                        <thead>
                            <tr className='bg-customSecondary-700 text-white font-digitalThin font-semibold'>
                                <th className='border border-customSecondary-700 px-4 py-2'># de dado</th>
                                <th className='border border-customSecondary-700 px-4 py-2'>Producto 1</th>
                                <th className='border border-customSecondary-700 px-4 py-2'>Producto 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productoIDs.map((fila, index) => (
                                <tr key={index} className='text-white font-digitalThin'>
                                    <td className='border border-customSecondary-700 px-4 py-2 text-center'>{index + 2}</td>
                                    <td className='border border-customSecondary-700 px-4 py-2 text-center'>{getProductoById(fila[0])}</td>
                                    <td className='border border-customSecondary-700 px-4 py-2 text-center'>{getProductoById(fila[1])}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                    <div className=''>

                        <div className='flex flex-row gap-11'>
                            <div className=''>
                                <h1 className='font-pixelmixNormal text-customPrimary-600'>Productos Iniciales</h1>
                                <p className='font-digitalThin color text-customPrimary-600 '>Gira el dado para obtener 2 productos y empezar el Juego!!</p>
                            </div>

                            <div className="relative flex items-center justify-center w-[120px] cursor-pointer" onClick={handleDiceRoll}>
                                <h1 className="absolute text-white text-base text-center font-digital flex flex-row gap-2">Girar Dado</h1>
                                <ButtonBlack className="w-full h-full" />
                            </div>
                        </div>


                        {/* Dado */}
                        <div className='flex justify-center items-center mt-10'>
                            <img
                                src={`./src/assets/img/dice${diceNumber}.png`}
                                alt={`Dado número ${diceNumber}`}
                                className='w-20 h-20'
                            />
                        </div>

                        {/* Productos obtenidos */}
                        <div className='flex flex-col'>
                            {productosObtenidos.length > 0 && (
                                <div>
                                    <h2 className='font-pixelmixNormal font-semibold text-customTertiary-500'>
                                        Obtuviste:
                                    </h2>
                                    <ul className='list-disc pl-5 mt-4'>
                                        {productosObtenidos.map((producto, index) => (
                                            <li key={index} className='font-digitalThin text-customTertiary-500'>
                                                {producto}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                

                </div>


            </PageContainer>
        </div>
    )
}

export default FirstActionPage
