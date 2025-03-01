"use client";
import Link from "next/link";
import React from "react";
import Carrossel from "./Carrossel/page";
import Pesquisa from "./Pesquisa/page";
import Image from "next/image";
import PokeballSVG from "./pokeball-pokemon-svgrepo-com.svg";

export default function Home() {
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
        <h1 className="flex flex-col text-4xl font-bold mb-6 text-center text-[#a82028]">
          Bem-vindo ao Pokémon TCG
        </h1>
        <Carrossel />
        <Pesquisa />
      </div>
    </div>
  );
}
