import React from 'react'
import PageContainer from '../../components/PageContainer'
import Navbar from '../../components/NavBar'
import ButtonCircle from '../../components/buttonCircle'
import ButtonCircleBlack from '../../components/ButtonCircleBlack';
import TextBox from '../../components/TexBox';
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const iconos = [
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" id="Interface-Essential-Calendar-Date--Streamline-Pixel" height={70} width={70} ><desc>{"Interface Essential Calendar Date Streamline Icon: https://streamlinehq.com"}</desc><title>{"interface-essential-calendar-date"}</title><g><path d="m1.6459375 6.569375000000001 19.708125000000003 0 0 15.338125 1.0996875 0 0 -18.6228125 -1.0996875 0 0 -1.0925 -3.2846875000000004 0 0 2.1921874999999997 -1.0925 0 0 -2.1921874999999997 -10.95375 0 0 2.1921874999999997 -1.0925 0 0 -2.1921874999999997 -3.2846875000000004 0 0 1.0925 -1.0996875 0 0 18.6228125 1.0996875 0 0 -15.338125z" fill="#000000" strokeWidth={1} /><path d="M1.6459375 21.9075h19.708125000000003V23H1.6459375Z" fill="#000000" strokeWidth={1} /><path d="M16.976875 0h1.0925v2.1921874999999997h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="m12.5925 10.95375 0 4.3771875 3.2846875000000004 0 0 2.1921874999999997 -3.2846875000000004 0 0 1.0925 4.3843749999999995 0 0 -4.3771875 -3.2846875000000004 0 0 -2.1921874999999997 3.2846875000000004 0 0 -1.0925 -4.3843749999999995 0z" fill="#000000" strokeWidth={1} /><path d="m9.307812499999999 10.95375 -1.0925 0 0 1.0925 -2.1921874999999997 0 0 1.0996875 2.1921874999999997 0 0 4.3771875 -2.1921874999999997 0 0 1.0925 5.476875 0 0 -1.0925 -2.1921874999999997 0 0 -6.569375000000001z" fill="#000000" strokeWidth={1} /><path d="M4.930625 0h1.0925v2.1921874999999997H4.930625Z" fill="#000000" strokeWidth={1} /></g></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" id="Business-Product-Check--Streamline-Pixel" height={70} width={70} ><desc>{"Business Product Check Streamline Icon: https://streamlinehq.com"}</desc><title>{"business-product-check"}</title><g><path d="M20.811406249999997 10.95734375h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M19.71171875 12.04984375h1.0996875v1.0925h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M19.71171875 9.85765625h1.0996875v1.0996875h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M18.61921875 13.14234375h1.0925v1.0996875h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M18.61921875 8.76515625h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="m17.52671875 17.52671875 -3.291875 0 0 1.0925 4.3843749999999995 0 0 -4.3771875 -1.0925 0 0 3.2846875000000004z" fill="#000000" strokeWidth={1} /><path d="m10.95015625 12.04984375 -1.0925 0 0 -1.0925 -1.0996875 0 0 -1.0996875 -1.0925 0 0 1.0996875 -1.0925 0 0 1.0925 1.0925 0 0 1.0925 1.0925 0 0 1.0996875 1.0996875 0 0 1.0925 1.0925 0 0 -1.0925 1.0996875 0 0 -1.0996875 1.0925 0 0 -1.0925 1.0925 0 0 -1.0925 1.0996875 0 0 -1.0996875 1.0925 0 0 -1.0925 -1.0925 0 0 -1.0996875 -1.0996875 0 0 1.0996875 -1.0925 0 0 1.0925 -1.0925 0 0 1.0996875 -1.0996875 0 0 1.0925z" fill="#000000" strokeWidth={1} /><path d="m17.52671875 5.48046875 0 3.2846875000000004 1.0925 0 0 -4.3843749999999995 -4.3843749999999995 0 0 1.0996875 3.291875 0z" fill="#000000" strokeWidth={1} /><path d="M13.14234375 18.61921875h1.0925v1.0996875h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M13.14234375 3.2882812500000003h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M12.04984375 19.71890625h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M12.04984375 2.19578125h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M10.95015625 20.811406249999997h1.0996875v1.0925h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M10.95015625 1.0960937499999999h1.0996875v1.0996875h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M9.85765625 19.71890625h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M9.85765625 2.19578125h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M8.75796875 18.61921875h1.0996875v1.0996875h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M8.75796875 3.2882812500000003h1.0996875v1.0925h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="m5.47328125 17.52671875 0 -3.2846875000000004 -1.0925 0 0 4.3771875 4.3771875 0 0 -1.0925 -3.2846875000000004 0z" fill="#000000" strokeWidth={1} /><path d="m5.47328125 5.48046875 3.2846875000000004 0 0 -1.0996875 -4.3771875 0 0 4.3843749999999995 1.0925 0 0 -3.2846875000000004z" fill="#000000" strokeWidth={1} /><path d="M3.2882812500000003 13.14234375h1.0925v1.0996875h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M3.2882812500000003 8.76515625h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M2.18859375 12.04984375h1.0996875v1.0925h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M2.18859375 9.85765625h1.0996875v1.0996875h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M1.0960937499999999 10.95734375h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /></g></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" id="Shopping-Shipping-Bag-2--Streamline-Pixel" height={70} width={70} ><desc>{"Shopping Shipping Bag 2 Streamline Icon: https://streamlinehq.com"}</desc><title>{"shopping-shipping-bag-2"}</title><g><path d="m21.9003125 4.3843749999999995 -2.185 0 0 1.0925 -1.0996875 0 0 -1.0925 -1.0925 0 0 2.1921874999999997 -4.3843749999999995 0 0 -1.0996875 3.2846875000000004 0 0 -1.0925 -2.185 0 0 -1.0996875 3.2846875000000004 0 0 -1.0925 -2.1921874999999997 0 0 -1.0925 -1.0925 0 0 1.0925 -1.0996875 0 0 1.0925 -1.0925 0 0 3.291875 -1.0925 0 0 -2.1921874999999997 -1.0996875 0 0 2.1921874999999997 -2.1921874999999997 0 0 -1.0996875 -1.0925 0 0 1.0996875 -2.1921874999999997 0 0 -1.0996875 -1.0925 0 0 1.0996875 -1.0996875 0 0 -4.3843749999999995 -1.0925 0 0 4.3843749999999995 -1.0925 0 0 9.854062500000001 1.0925 0 0 -8.7615625 15.3309375 0 0 7.6690625 1.0996875 0 0 6.569375000000001 -15.338125 0 0 1.0925 16.430625 0 0 -1.0925 1.0996875 0 0 -1.0925 1.0925 0 0 -1.0996875 1.0925 0 0 -1.0925 1.0996875 0 0 -5.476875 -1.0996875 0 0 -8.7615625z" fill="#000000" strokeWidth={1} /><path d="M18.615624999999998 2.1921874999999997h1.0996875V4.3843749999999995H18.615624999999998Z" fill="#000000" strokeWidth={1} /><path d="M17.523125 1.0996875h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M15.3309375 0h2.1921874999999997v1.0996875h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M10.95375 9.86125h1.0925v2.185h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M10.95375 2.1921874999999997h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M8.7615625 3.2846875000000004h1.0925V4.3843749999999995h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M7.661875 4.3843749999999995h1.0996875v1.0925h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M6.569375000000001 12.04625h4.3843749999999995v1.0996875h-4.3843749999999995Z" fill="#000000" strokeWidth={1} /><path d="m8.7615625 3.2846875000000004 0 -1.0925 2.1921874999999997 0 0 -1.0925 -3.291875 0 0 1.0925 -1.0925 0 0 1.0925 2.1921874999999997 0z" fill="#000000" strokeWidth={1} /><path d="M5.476875 9.86125h1.0925v2.185H5.476875Z" fill="#000000" strokeWidth={1} /><path d="M5.476875 3.2846875000000004h1.0925V4.3843749999999995H5.476875Z" fill="#000000" strokeWidth={1} /><path d="M4.3771875 4.3843749999999995h1.0996875v1.0925H4.3771875Z" fill="#000000" strokeWidth={1} /><path d="M3.2846875000000004 3.2846875000000004h1.0925V4.3843749999999995H3.2846875000000004Z" fill="#000000" strokeWidth={1} /><path d="M2.185 1.0996875h4.3843749999999995v1.0925h-4.3843749999999995Z" fill="#000000" strokeWidth={1} /><path d="M1.0925 16.430625h1.0925v5.476875H1.0925Z" fill="#000000" strokeWidth={1} /></g></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" id="Business-Products-Data-File-Bars--Streamline-Pixel" height={70} width={70} ><desc>{"Business Products Data File Bars Streamline Icon: https://streamlinehq.com"}</desc><title>{"business-products-data-file-bars"}</title><g><path d="M19.7153125 4.3771875h-3.2846875000000004V1.0925h1.0925V0H2.1921874999999997v23h18.615624999999998V3.2846875000000004h-1.0925Zm0 17.5303125H3.2846875000000004V1.0925h12.04625v4.3843749999999995h4.3843749999999995Z" fill="#000000" strokeWidth={1} /><path d="M18.6228125 2.1921874999999997h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M17.523125 1.0925h1.0996875v1.0996875h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="m15.3309375 16.430625 -1.0925 0 0 -6.5765625000000005 -2.1921874999999997 0 0 6.5765625000000005 -1.0925 0 0 -4.3843749999999995 -2.1921874999999997 0 0 4.3843749999999995 -3.2846875000000004 0 0 -2.1921874999999997 1.0925 0 0 -1.0925 -1.0925 0 0 -2.1921874999999997 1.0925 0 0 -1.0996875 -1.0925 0 0 -2.185 -1.0925 0 0 9.854062500000001 14.2384375 0 0 -1.0925 -1.0996875 0 0 -5.476875 -2.1921874999999997 0 0 5.476875z" fill="#000000" strokeWidth={1} /></g></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" id="Business-Products-Cash-User-Man-Message--Streamline-Pixel" height={70} width={70} ><desc>{"Business Products Cash User Man Message Streamline Icon: https://streamlinehq.com"}</desc><title>{"business-products-cash-user-man-message"}</title><g><path d="M21.9075 1.0996875H23v10.9465625h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M9.86125 0h12.04625v1.0996875H9.86125Z" fill="#000000" strokeWidth={1} /><path d="M17.5303125 12.04625h4.3771875v1.0996875h-4.3771875Z" fill="#000000" strokeWidth={1} /><path d="M17.5303125 7.6690625h1.0925v2.1921874999999997h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M17.5303125 4.3843749999999995h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M16.430625 13.145937499999999h1.0996875v1.0925h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M15.338125 14.2384375h1.0925v1.0996875h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="m15.338125 10.95375 0 1.0925 1.0925 0 0 -1.0925 1.0996875 0 0 -1.0925 -1.0996875 0 0 -2.1921874999999997 1.0996875 0 0 -1.0996875 -1.0996875 0 0 -2.185 1.0996875 0 0 -1.0996875 -1.0996875 0 0 -1.0925 -1.0925 0 0 1.0925 -1.0996875 0 0 1.0996875 1.0996875 0 0 2.185 -1.0996875 0 0 1.0996875 1.0996875 0 0 2.1921874999999997 -1.0996875 0 0 1.0925 1.0996875 0z" fill="#000000" strokeWidth={1} /><path d="m13.145937499999999 13.145937499999999 -1.0925 0 0 3.2846875000000004 3.2846875000000004 0 0 -1.0925 -2.1921874999999997 0 0 -2.1921874999999997z" fill="#000000" strokeWidth={1} /><path d="M13.145937499999999 8.7615625h1.0925v1.0996875h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M13.145937499999999 4.3843749999999995h1.0925v2.185h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M10.95375 21.9075h2.1921874999999997V23h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M8.7615625 20.8078125h2.1921874999999997v1.0996875h-2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M8.7615625 18.6228125h1.0996875v1.0925h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="M8.7615625 1.0996875h1.0996875v6.569375000000001h-1.0996875Z" fill="#000000" strokeWidth={1} /><path d="m3.291875 19.7153125 0 1.0925 2.185 0 0 2.1921874999999997 1.0996875 0 0 -2.1921874999999997 2.185 0 0 -1.0925 -5.4696875 0z" fill="#000000" strokeWidth={1} /><path d="M7.6690625 16.430625h1.0925v1.0925h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M7.6690625 14.2384375h1.0925v1.0996875h-1.0925Z" fill="#000000" strokeWidth={1} /><path d="M5.476875 17.523125h2.1921874999999997v1.0996875H5.476875Z" fill="#000000" strokeWidth={1} /><path d="M3.291875 14.2384375H4.3843749999999995v1.0996875H3.291875Z" fill="#000000" strokeWidth={1} /><path d="M2.1921874999999997 18.6228125h1.0996875v1.0925H2.1921874999999997Z" fill="#000000" strokeWidth={1} /><path d="M1.0996875 20.8078125h2.1921874999999997v1.0996875H1.0996875Z" fill="#000000" strokeWidth={1} /><path d="m2.1921874999999997 13.145937499999999 1.0996875 0 0 -1.0996875 5.4696875 0 0 1.0996875 1.0996875 0 0 5.476875 1.0925 0 0 -7.6690625 -1.0925 0 0 -1.0925 -1.0996875 0 0 -1.0996875 -5.4696875 0 0 1.0996875 -1.0996875 0 0 1.0925 -1.0925 0 0 7.6690625 1.0925 0 0 -5.476875z" fill="#000000" strokeWidth={1} /><path d="M0 21.9075h1.0996875V23H0Z" fill="#000000" strokeWidth={1} /></g></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" id="Logo-Social-Media-Youtube-Circle--Streamline-Pixel" height={70} width={70} ><desc>{"Logo Social Media Youtube Circle Streamline Icon: https://streamlinehq.com"}</desc><title>{"logo-social-media-youtube-circle"}</title><path d="M21.9003125 6.569375000000001h-1.0925V4.3771875h-1.0996875V3.2846875000000004H18.615624999999998V2.1921874999999997h-2.1921874999999997V1.0925h-2.185V0h-5.476875v1.0925H6.569375000000001v1.0996875H4.3771875v1.0925H3.2846875000000004v1.0925H2.185v2.1921874999999997H1.0925v2.1921874999999997H0v5.476875h1.0925v2.1921874999999997h1.0925v2.185h1.0996875v1.0996875h1.0925v1.0925h2.1921874999999997v1.0996875h2.1921874999999997V23h5.476875v-1.0925h2.185v-1.0996875h2.1921874999999997v-1.0925h1.0925V18.615624999999998h1.0996875v-2.185h1.0925v-2.1921874999999997H23v-5.476875h-1.0996875Zm-5.476875 5.476875h-1.0925v1.0996875h-1.0925v1.0925h-1.0996875v1.0925h-1.0925v1.0996875h-2.1921874999999997v1.0925h-1.0925V5.476875h1.0925v1.0925h2.1921874999999997v1.0996875h1.0925v1.0925h1.0996875v1.0925h1.0925v1.0996875h1.0925Z" fill="#DEA100" strokeWidth={1} /></svg>,
];

const buttonNames = [
  "Eventos",
  "Eficiencias",
  "Productos",
  "Proyectos",
  "Recursos",
];

const MainPage = () => {

  const navigate = useNavigate(); // Inicializa el hook useNavigate

  // Definimos las rutas específicas para cada botón
  const handleButtonClick = (route) => {
    navigate(route); // Navega a la ruta especificada
  };

  return (
    <div
      className="bg-customSecondary-800 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('./src/assets/img/fondoPrincipal2.jpg')" }}
    >
      <PageContainer>
        <Navbar />

        {/* Título centrado */}
        <div className="flex justify-center items-center mt-36">
          <h1
            className="text-9xl text-white text-center font-pixelmixNormal" 
            style={{
              WebkitTextStroke: "3px black",
            }}
          >
            Challenge
          </h1>
        </div>

        {/* Contenedor de botones circulares */}
        <div className="flex justify-center items-center gap-14 mt-80">
          {iconos.map((Icon, index) => (
            <div className="relative group cursor-pointer " key={index}>
              {/* Condición para usar ButtonCircleBlack solo en el 6to botón */}
              {index === 5 ? (
                <ButtonCircleBlack />
              ) : (
                <ButtonCircle />
              )}

              {/* Ícono centrado dentro del botón */}
              <div className="absolute inset-0 flex justify-center items-center">
                {Icon}
              </div>

              {/* Título con TextBox */}
              {index !== 5 && (
                <div className="absolute top-[-80px] w-full flex justify-center items-center">
                  {/* TextBox detrás del texto (oculto por defecto) */}
                  <div className="absolute hidden group-hover:block ">
                    <TextBox />
                  </div>
                  {/* Título del botón (también aparece al hover) */}
                  <span className="relative mb-3 text-black text-xl hidden group-hover:block pointer-events-none font-digitalThin">
                    {buttonNames[index]}
                  </span>
                </div>
              )}

              {/* Manejo del click del botón */}
              <div
                className="absolute inset-0"
                onClick={() => {
                  // Aquí puedes poner las rutas específicas que desees
                  if (index === 0) {
                    handleButtonClick("/eventsInfo"); // Ruta para el primer botón
                  } else if (index === 1) {
                    handleButtonClick("/efficienciesInfo"); // Ruta para el segundo botón
                  } else if (index === 2) {
                    handleButtonClick("/productsInfo"); // Ruta para el tercer botón
                  } else if (index === 3) {
                    handleButtonClick("/projectsInfo"); // Ruta para el cuarto botón
                  } else if (index === 4) {
                    handleButtonClick("/resourcesInfo"); // Ruta para el quinto botón
                  } else if (index === 5) {
                    handleButtonClick("/firstActions"); // Ruta para el quinto botón
                  }
                }}
              />
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default MainPage;