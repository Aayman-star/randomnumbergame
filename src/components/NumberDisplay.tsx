"use client";
import React, { useState, useEffect } from "react";

interface CompProp {
  randomNumber: number;
}

const NumberDisplay = ({ randomNumber }: CompProp) => {
  const [localNumber, setLocalNumber] = useState(randomNumber);
  useEffect(() => {
    setLocalNumber(randomNumber);
  }, [randomNumber]);
  console.log(`Received in the Display Component :`, localNumber);
  // useEffect(() => {
  //   setLocalNumber(RandomNumber);
  // }, [RandomNumber]);
  const generateNewRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setLocalNumber(newNumber);
  };
  return (
    <div className="bg-gradient-to-r from-blue-500  to-purple-500 text-slate-100 p-10 rounded-md shadow-md">
      <div className="flex flex-col items-center justify-center gap-y-4 md:flex-row md:items-center md:justify-between">
        <p className="font-light text-2xl">
          The number Generated is :{" "}
          <span className="font-semibold text-3xl">{localNumber}</span>
        </p>
        <button
          onClick={generateNewRandomNumber}
          className="p-3 border-2 border-slate-200 shadow-md rounded-full">
          New Number
        </button>
      </div>
    </div>
  );
};

export default NumberDisplay;
