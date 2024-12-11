import React, { useState } from "react";

const CharacterSelection = ({ onSelect }) => {
  const [isSelected, setIsSelected] = useState(false); // Controla si el personaje está seleccionado

  const handleSelect = () => {
    const newSelection = !isSelected; // Alterna entre seleccionado y no seleccionado
    setIsSelected(newSelection);
    onSelect(newSelection); // Notifica al componente padre sobre la selección
  };

  return (
    <div className="flex justify-center items-center">
      {/* Contenedor principal */}
      <div className="flex items-center gap-48">
        {/* Círculo izquierdo */}
        <div className="w-56 h-56 bg-customSecondary-700 rounded-full opacity-50"></div>

        {/* Círculo del medio con texto */}
        <div
          className={`flex flex-col items-center transition-all duration-300 cursor-pointer 
          ${isSelected ? "scale-110 opacity-100" : "scale-100 opacity-50"}`}
          onClick={handleSelect}
        >
          {/* Círculo del medio */}
          <div className="relative w-80 h-80 bg-customSecondary-700 rounded-full">
            <img
              src="./src/assets/img/pj-1.png"
              alt="Personaje"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[350px]"
            />
          </div>
          {/* Texto debajo del personaje */}
          <p className="mt-6 text-lg text-white font-digitalThin">Jefe de proyecto</p>
        </div>

        {/* Círculo derecho */}
        <div className="w-56 h-56 bg-customSecondary-700 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default CharacterSelection;