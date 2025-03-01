import React, { useEffect, useState } from "react";
import { fetchCards } from "../../API/fetchCards";

const Carrossel = () => {
  const [cartas, setCartas] = useState([]);
  const [cartaIdAtual, setCartaIdAtual] = useState(null);

  useEffect(() => {
    async function carregarCartas() {
      const cartasData = await fetchCards();
      setCartas(cartasData);
      if (cartasData.length > 0) {
        setCartaIdAtual(cartasData[0].id);
      }
    }
    carregarCartas();
  }, []);

  const handleAnterior = () => {
    const indiceAtual = cartas.findIndex((carta) => carta.id === cartaIdAtual);
    const indiceAnterior =
      indiceAtual === 0 ? cartas.length - 1 : indiceAtual - 1;
    setCartaIdAtual(cartas[indiceAnterior].id);
  };

  const handleProximo = () => {
    const indiceAtual = cartas.findIndex((carta) => carta.id === cartaIdAtual);
    const indiceProximo =
      indiceAtual === cartas.length - 1 ? 0 : indiceAtual + 1;
    setCartaIdAtual(cartas[indiceProximo].id);
  };

  const getCartaAnterior = () => {
    const indiceAtual = cartas.findIndex((carta) => carta.id === cartaIdAtual);
    const indiceAnterior =
      indiceAtual === 0 ? cartas.length - 1 : indiceAtual - 1;
    return cartas[indiceAnterior];
  };

  const getCartaProxima = () => {
    const indiceAtual = cartas.findIndex((carta) => carta.id === cartaIdAtual);
    const indiceProximo =
      indiceAtual === cartas.length - 1 ? 0 : indiceAtual + 1;
    return cartas[indiceProximo];
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="flex items-center justify-center h-80 rounded-lg md:h-96 mx-auto my-8">
        <button
          type="button"
          className="flex items-center justify-center h-10 w-10 cursor-pointer group focus:outline-none mr-4"
          data-carousel-prev
          onClick={handleAnterior}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Anterior</span>
          </span>
        </button>
        {getCartaAnterior() && (
          <div className="border-4 border-[#a82028] rounded-lg p-4 shadow-lg w-64 text-center bg-white opacity-50">
            <h2 className="text-2xl font-bold mb-2 text-[#70b8f0]">
              {getCartaAnterior().name}
            </h2>
            <p className="text-[#a8b8c8] mb-4">
              {getCartaAnterior().types.join()}
            </p>
            <img
              src={getCartaAnterior().images.large}
              alt={getCartaAnterior().name}
              className="mx-auto"
            />
          </div>
        )}
        {cartas.map((carta) => (
          <div
            key={carta.id}
            className={`${
              carta.id === cartaIdAtual ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <div className="border-4 border-[#a82028] rounded-lg p-4 shadow-lg w-64 text-center bg-white">
              <h2 className="text-2xl font-bold mb-2 text-[#70b8f0]">
                {carta.name}
              </h2>
              <p className="text-[#a8b8c8] mb-4">{carta.types.join()}</p>
              <img
                src={carta.images.large}
                alt={carta.name}
                className="mx-auto"
              />
            </div>
          </div>
        ))}
        {getCartaProxima() && (
          <div className="border-4 border-[#a82028] rounded-lg p-4 shadow-lg w-64 text-center bg-white opacity-50">
            <h2 className="text-2xl font-bold mb-2 text-[#70b8f0]">
              {getCartaProxima().name}
            </h2>
            <p className="text-[#a8b8c8] mb-4">
              {getCartaProxima().types.join()}
            </p>
            <img
              src={getCartaProxima().images.large}
              alt={getCartaProxima().name}
              className="mx-auto"
            />
          </div>
        )}
        <button
          type="button"
          className="flex items-center justify-center h-10 w-10 cursor-pointer group focus:outline-none ml-4"
          data-carousel-next
          onClick={handleProximo}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Próximo</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carrossel;
