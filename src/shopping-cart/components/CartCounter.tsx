'use client'

import { useState } from "react";

interface Props  {
    numero:number
}

export const CartCounter = ({numero}:Props) => {
    const [value,setValue] = useState(numero);
  const changeValue = (valor: number) => {
    setValue(value + valor);
  };

  return (
    <>
      <span className="text-9xl">{value}</span>

      <div className="flex">
        <button
          onClick={() => {
            changeValue(1);
          }}
          className="flex items-center justify-center p-2 bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => {
            changeValue(-1);
          }}
          className="flex items-center justify-center p-2 bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
