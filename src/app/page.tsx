import Image from "next/image";
import NumberDisplay from "./components/NumberDisplay";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-28 bg-stone-300">
      <h1>Test Random Number Generator</h1>
      <NumberDisplay />
    </main>
  );
}
