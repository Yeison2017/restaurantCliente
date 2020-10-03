import React from "react";

const Platillo = ({ platillo }) => {
  const {
    nombre,
    imagen,
    existencia,
    categoria,
    precio,
    descripcion,
  } = platillo;
  return (
    <div className="w-full px-3 mb-4">
      <div className="p-5 shadow-md bg-white">
        <div className="lg:flex">
          <div className="lg:w-5/12 xl:w-3/12">
            <img src={imagen} alt="imagen platillo" />
          </div>
          <div className="lg:w-7/12 xl:w-9/12 pl-5">
            <p className="font-bold text-2xl text-yellow-600 mb-4">{nombre}</p>
            <p className="text-gray-600 mb-4">
              Categoria:{" "}
              <span className="text-gray-700 font-bold">
                {categoria.toUpperCase()}
              </span>
            </p>

            <p className="text-gray-600 mb-4">{descripcion}</p>
            <p className="text-gray-600 mb-4">
              Precio:{" "}
              <span className="text-gray-700 font-bold">$ {precio}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platillo;
