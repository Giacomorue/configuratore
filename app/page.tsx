import Button from "@/components/Button";
import Configurator from "@/components/Configurator";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";

const Trailer = dynamic(() => import("@/components/TrailerCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="pt-20">
        <div className="px-7 pt-4 text-3xl font-bold">
          Botti
        </div>
      <div className="gap-3 px-7 pt-4 grid grid-cols-3">
        <Link href="/botti/B2-140" className="py-6 text-center border-2 boder-neutral-500 rounded-md hover:border-red-600 transition-all duration-150">
          Botte B2 140
        </Link>
        <Link href="/botti/B2-180" className="py-6 text-center border-2 boder-neutral-500 rounded-md hover:border-red-600 transition-all duration-150">
          Botte B2 180
        </Link>
        <Link href="/botti/B2-200" className="py-6 text-center border-2 boder-neutral-500 rounded-md hover:border-red-600 transition-all duration-150">
          Botte B2 200
        </Link>
        <Link href="/botti/B3-260" className="py-6 text-center border-2 boder-neutral-500 rounded-md hover:border-red-600 transition-all duration-150">
          Botte B3 260
        </Link>
        <Link href="/botti/B3-280" className="py-6 text-center border-2 boder-neutral-500 rounded-md hover:border-red-600 transition-all duration-150">
          Botte B3 280
        </Link>
        <Link href="/botti/B3-300" className="py-6 text-center border-2 boder-neutral-500 rounded-md hover:border-red-600 transition-all duration-150">
          Botte B3 300
        </Link>
        <Link href="/botti/B4-350" className="py-6 text-center border-2 boder-neutral-500 rounded-md hover:border-red-600 transition-all duration-150">
          Botte B4 350
        </Link>
        <Link href="/botti/B4-400" className="py-6 text-center border-2 boder-neutral-500 rounded-md hover:border-red-600 transition-all duration-150">
          Botte B4 400
        </Link>
      </div>
    </main>
  );
}
