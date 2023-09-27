"use client";
import Image from "next/image";
import NumberDisplay from "./components/NumberDisplay";
import Wall6 from "/public/image/Wall6.jpg";
import { GET } from "./api/randomNumber/route";
import React, { useEffect, useState } from "react";

const generateNumber = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`/api/randomNumber`, {
    next: { revalidate: 1 },
    cache: "no-store",
  });
  // console.log(`URL:`, process.env.API_URL);
  if (!response.ok) {
    console.log("something went wrong");
  } else {
    const newNumber = await response.json();
    console.log(`Fetched Number :`, newNumber);
    return newNumber.aNumber;
  }
};

export default function Home() {
  const [myNumber, setMyNumber] = useState<any>();

  const fetchNumber = async () => {
    const randomNumber = await generateNumber();
    setMyNumber(randomNumber);
  };
  useEffect(() => {
    fetchNumber();
  }, []);

  // console.log(`The random number generated is : ${myNumber}`);
  return (
    <main className="relative h-screen">
      <div className="absolute inset-0 ">
        <Image
          src={Wall6}
          alt="bg-image"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-y-6 h-full">
        <p>Number generated here : {myNumber}</p>
        <h1 className="text-2xl md:text-4xl text-slate-100 font-bold">
          Test Random Number Generator
        </h1>
        <div className="w-full md:w-1/2 text-center">
          {" "}
          <NumberDisplay RandomNumber={myNumber} />
        </div>
      </div>
    </main>
  );
}
