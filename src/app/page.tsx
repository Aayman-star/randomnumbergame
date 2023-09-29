//import Image from "next/image";
//import NumberDisplay from "../components/NumberDisplay";
//import Wall6 from "/public/image/Wall6.jpg";
//import { GET } from "./api/randomNumber/route";
//import React, { useEffect, useState } from "react";
//import getrandomNumber from "../components/randomNumber";

// const generateNumber = async () => {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const response = await fetch(`${baseUrl}/api/randomNumber`, {
//     cache: "no-store",
//   });
//   // console.log(`URL:`, process.env.API_URL);
//   if (!response.ok) {
//     console.log("something went wrong");
//   } else {
//     const newNumber = await response.json();
//     console.log(`Fetched Number :`, newNumber);
//     return newNumber.aNumber;
//   }
// };

import NumberFetch from "@/components/NumberFetch";

export default function Home() {
  // //const randomNumber = await generateNumber();
  // const randomNumber = getrandomNumber();
  // console.log(randomNumber);
  // // const [myNumber, setMyNumber] = useState<any>();

  // // const fetchNumber = async () => {
  // //   const randomNumber = await generateNumber();
  // //   setMyNumber(randomNumber);
  // // };
  // // useEffect(() => {
  // //   fetchNumber();
  // // }, []);

  // // console.log(`The random number generated is : ${myNumber}`);
  return (
    <div>
      <NumberFetch />
    </div>
  );
}
