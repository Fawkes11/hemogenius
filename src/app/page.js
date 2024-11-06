'use client'
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-screen flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <Link href={'dashboard'} className="hover:scale-105 hover:border hover:rounded p-2">Go to Dashboard</Link>
    </div>
  );
}
