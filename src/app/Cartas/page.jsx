"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchCards } from "../../API/fetchCards";
import Image from "next/image";
import PokeballSVG from "../pokeball-pokemon-svgrepo-com.svg";

const Cartas = () => {
  const [cartas, setCartas] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const carregarCartas = async () => {
      setCarregado(true);
      const cartasData = await fetchCards();
      setCartas(cartasData);
      setCarregado(false);
    };
    carregarCartas();
  }, []);

  return (
    <div className="bg-[#f0f0f8] min-h-screen">
      <header className="bg-[#c85048] p-4 flex items-center justify-between">
        <nav className="flex space-x-4 items-center">
          <Link href="/" className="text-white font-bold">
            INÍCIO
          </Link>
          <Link href="/Cartas" className="text-white font-bold">
            CARTAS
          </Link>
          <Link href="/Pacote" className="text-white font-bold">
            PACOTE
          </Link>
        </nav>
        <Image src={PokeballSVG} alt="Pokeball" className="h-8 w-8 ml-4" />
      </header>
      <div className="p-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#a82028]">
          {carregado ? "Carregando cartas..." : "Cartas Pokémon"}
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {cartas.map((carta) => (
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
    </div>
  );
};

export default Cartas;
