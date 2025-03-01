"use client";
import Link from "next/link";
import React from "react";
import Carrossel from "./Carrossel/page";
import Pesquisa from "./Pesquisa/page";
export default function Home() {
  return (
    <div>
      <header className="bg-gray-800 p-4">
        <nav className="flex space-between">
          <div className="space-x-4 flex">
            <Link href="/" className="text-white">
              INÍCIO
            </Link>
            <Link href="/Cartas" className="text-white">
              CARTAS
            </Link>
            <Link href="/Pacote" className="text-white">
              PACOTE
            </Link>
          </div>
          <Pesquisa />
        </nav>
      </header>
      <Carrossel />
    </div>
  );
}
