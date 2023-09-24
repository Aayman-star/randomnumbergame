import Image from "next/image";
import NumberDisplay from "./components/NumberDisplay";
import Wall6 from "/public/image/Wall6.jpg";

export const generateNumber = () => {
  const aNumber = Math.floor(Math.random() * 100);
  return aNumber;
};

export default function Home() {
  const randomNumber = generateNumber();
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
        <h1 className="text-2xl md:text-4xl text-slate-100 font-bold">
          Test Random Number Generator
        </h1>
        <div className="w-full md:w-1/2 text-center">
          {" "}
          <NumberDisplay RandomNumber={randomNumber} />
        </div>
      </div>
    </main>
  );
}
