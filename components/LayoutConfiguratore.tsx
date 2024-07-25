"use client"

import Button from "@/components/Button";
import Configurator from "@/components/Configurator";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";


const Trailer = dynamic(() => import("@/components/TrailerCanvas"), {
  ssr: false,
});

function LayoutConfiguratore({Configurator, Mesh} : {Configurator: React.ReactNode, Mesh: React.ReactElement}) {
  return (
    <div>
      <main className="h-screen w-full">
      <div className="flex flex-col h-full lg:flex-row">
        <div className="lg:w-[60%] w-[100%] lg:h-full h-[50%]">
          <Trailer>
            {Mesh}
          </Trailer>
        </div>
        {Configurator}
        <div className="absolute bottom-0">
          <AiOutlineFullscreen />
        </div>
      </div>
    </main>
    </div>
  )
}

export default LayoutConfiguratore
