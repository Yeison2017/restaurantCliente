import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../firebase";

const Menu = () => {
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerPlatillos = () => {
      const resultado = firebase.db
        .collection("productos")
        .onSnapshot(manejarSnapshot);
    };
    obtenerPlatillos();
  }, []);

  // Snapshot nos permite utilizar la base de datos en tiempo real de firestore
  function manejarSnapshot(snapshot) {}

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menu</h1>
      <Link
        to="/nuevo-platillo"
        className="bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold"
      >
        Agregar Platillo
      </Link>
    </>
  );
};

export default Menu;
