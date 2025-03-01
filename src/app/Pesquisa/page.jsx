"use client";
import React, { useState, useEffect } from "react";
import { fetchCards } from "../../API/fetchCards";
import Image from "next/image";
import DittoSVG from "../29.svg";

const Pesquisa = () => {
  const [cartas, setCartas] = useState([]);
  const [termoDeBusca, setTermoDeBusca] = useState("");
  const [resultados, setResultados] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const carregarCartas = async () => {
      const cartasData = await fetchCards();
      setCartas(cartasData);
      setCarregado(true);
    };
    carregarCartas();
  }, []);

  const handleSearch = (evento) => {
    const termo = evento.target.value;
    setTermoDeBusca(termo);

    if (termo.length > 0) {
      const cartasFiltradas = cartas.filter((carta) =>
        carta.name.toLowerCase().includes(termo.toLowerCase())
      );
      setResultados(cartasFiltradas);
    } else {
      setResultados([]);
    }
  };

  if (!carregado) {
    return (
      <div className="text-black justify-center items-center flex flex-col">
        <Image src={DittoSVG} alt="Ditto" className="w-20" />
        <p className="text-4xl font-bold mb-6 text-center text-[#a82028]">
          Carregando...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-20">
      <input
        type="text"
        className="bg-white text-[#a82028] p-2 rounded-lg w-full max-w-md outline-2"
        value={termoDeBusca}
        onChange={handleSearch}
        placeholder="Buscar por uma carta..."
      />
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        {resultados.map((carta) => (
          <div
            key={carta.id}
            className="border-4 border-[#a82028] rounded-lg p-4 shadow-lg w-64 text-center bg-white"
          >
            <h2 className="text-2xl font-bold mb-2 text-[#70b8f0]">
              {carta.name}
            </h2>
            <p className="text-[#a8b8c8] mb-4">{carta.types?.join(", ")}</p>
            <img
              src={carta.images.large}
              alt={carta.name}
              className="mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pesquisa;
