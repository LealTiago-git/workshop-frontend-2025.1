"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchCards } from "../../API/fetchCards";

const Cartas = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getCards() {
      const cardsData = await fetchCards();
      setCards(cardsData);
    }
    getCards();
  }, []);

  return (
    <div className="bg-[#f0f0f8] min-h-screen">
      <header className="bg-[#c85048] p-4">
        <nav className="flex space-x-4">
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
      </header>
      <div className="p-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#a82028]">Cartas Pokémon</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className="border-4 border-[#a82028] rounded-lg p-4 shadow-lg w-64 text-center bg-white"
            >
              <h2 className="text-2xl font-bold mb-2 text-[#70b8f0]">{card.name}</h2>
              <p className="text-[#a8b8c8] mb-4">{card.types.join(", ")}</p>
              <img
                src={card.images.large}
                alt={card.name}
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
