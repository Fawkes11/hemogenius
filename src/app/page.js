'use client'
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-screen flex flex-col gap-4 items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <Link href={'dashboard'} className="w-28 text-center bg-red-400 hover:bg-red-300 hover:scale-105 hover:border-red-600 border border-transparent rounded p-2">Dashboard</Link>
      <Link href={'encuesta'} className="w-28 text-center bg-green-400 hover:bg-green-300 hover:scale-105 hover:border-green-600 border border-transparent rounded p-2">Encuesta</Link>
    </div>
  );
}
