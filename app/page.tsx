import Button from "@/components/Button";
import Configurator from "@/components/Configurator";
import Image from "next/image";
import dynamic from "next/dynamic";

const Trailer = dynamic(() => import('@/components/TrailerCanvas'), { ssr: false });

export default function Home() {
  return (
    <main className="h-[calc(100vh-75px)] w-screen mt-[75px]">
      <div className="flex flex-col h-full lg:flex-row">
        <div className="lg:w-[50%] w-[100%] lg:h-full h-[50%]">
          <Trailer />
        </div>
        <Configurator />
      </div>
    </main>
  );
}
