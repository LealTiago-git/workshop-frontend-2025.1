import React from "react";
import Link from "next/link";
const Pacote = () => {
  return (
    <div>
      <header className="bg-gray-800 p-4">
        <nav className="flex space-x-4">
          <Link href="/" className="text-white">
            INÍCIO
          </Link>
          <Link href="/Cartas" className="text-white">
            CARTAS
          </Link>
          <Link href="/Pacote" className="text-white">
            PACOTE
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Pacote;
