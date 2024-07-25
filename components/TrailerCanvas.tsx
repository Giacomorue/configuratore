"use client";

import React, {
  MutableRefObject,
  Suspense,
  useEffect,
  useRef,
  useState,
  useTransition,
  lazy,
} from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import {
  AccumulativeShadows,
  Center,
  ContactShadows,
  Environment,
  PerformanceMonitor,
  PerspectiveCamera,
  RandomizedLight,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import { useTrailer } from "@/hooks/useTrailer";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { useLoader } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import * as THREE from "three";
import Button from "./Button";

import { OrbitControls } from "@react-three/drei";

const MeshBotte = lazy(() => import("./MeshBotte"));

export default function TrailerCanvas({children} : {children: React.ReactNode}) {
  const div = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  const { color, model, data } = useTrailer();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const canvasElement = document.querySelector("#canvas-container");
    if (canvasElement) {
      observer.observe(canvasElement);
    }

    return () => {
      if (canvasElement) {
        observer.unobserve(canvasElement);
      }
    };
  }, []);

  const [shadowCounter, setShadowCounter] = useState(0);

  useEffect(() => {
    setShadowCounter(prev => prev + 1);
  }, [color, model, data]);

  return (
    <div id="canvas-container" className="w-full h-full relative" ref={div}>
      {isVisible && (
        <Canvas
          // gl={{ logarithmicDepthBuffer: true, antialias: true }}
          // dpr={[1, 1]}
          shadows
        >
          <Suspense fallback={<CanvasLoader />}> 
          {/* <ContactShadows resolution={512} frames={1} position={[0, -4, 0]} scale={15} blur={1} opacity={0.2} far={20} key={shadowCounter} /> */}
          <Center>
            {children}
          </Center>
          </Suspense>
          <Hangar />
          {/* <Environment preset="city" /> */}
          <ambientLight intensity={3.5} />
          {/* <directionalLight
            position={[10, 50, 10]}
            intensity={1}
          /> */}
          <directionalLight
            position={[-10, 50, -10]}
            intensity={3.5}
          />
          <directionalLight
            position={[10, 50, 10]}
            intensity={3.5}
          />
          <Leva hidden />
          <PerformanceMonitor />
          <PerspectiveCamera position={[-20, 10, 40]} fov={50} makeDefault />
        </Canvas>
      )}
    </div>
  );
}

function Hangar() {
  const [colorMap, normalMap, roughnessMap, displacementMap] = useTexture([
    "/textures/wall6/Plaster003_1K-JPG_Color.jpg",
    "/textures/wall6/Plaster003_1K-JPG_NormalGL.jpg",
    "/textures/wall6/Plaster003_1K-JPG_Roughness.jpg",
    "/textures/wall6/Plaster003_1K-JPG_Displacement.jpg",
  ]); // Sostituisci con il percorso della tua texture
  const [
    wallColorMap,
    wallNormalMap,
    wallRoughnessMap,
    wallDisplacementMap,
    logoMap,
  ] = useTexture([
    "/textures/wall7/PavingStones126B_1K-JPG_Color.jpg",
    "/textures/wall7/PavingStones126B_1K-JPG_Roughness.jpg",
    "/textures/wall7/PavingStones126B_1K-JPG_NormalGL.jpg",
    "/textures/wall7/PavingStones126B_1K-JPG_Displacement.jpg",
    "/logo.png",
  ]); // Sostituisci con il percorso della tua texture

  // Ripeti la texture per un effetto più realistico
  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
  displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping;

  colorMap.repeat.set(10, 10);
  normalMap.repeat.set(10, 10);
  roughnessMap.repeat.set(10, 10);
  displacementMap.repeat.set(10, 10);

  wallColorMap.wrapS = wallColorMap.wrapT = THREE.RepeatWrapping;
  wallNormalMap.wrapS = wallNormalMap.wrapT = THREE.RepeatWrapping;
  wallRoughnessMap.wrapS = wallRoughnessMap.wrapT = THREE.RepeatWrapping;
  wallDisplacementMap.wrapS = wallDisplacementMap.wrapT = THREE.RepeatWrapping;

  wallColorMap.repeat.set(2, 1);
  wallNormalMap.repeat.set(2, 1);
  wallRoughnessMap.repeat.set(2, 1);
  wallDisplacementMap.repeat.set(2, 1);

  return (
    <>
      {/* Pavimento */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -4.11, 0]}
        receiveShadow
        frustumCulled={true}
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
          displacementScale={0.1}
        />
      </mesh>

      {/* Pareti */}
      <mesh position={[0, 16, -50]} receiveShadow frustumCulled={true}>
        <boxGeometry args={[100, 50, 0.1]} />
        <meshStandardMaterial
          map={wallColorMap}
          normalMap={wallNormalMap}
          roughnessMap={wallRoughnessMap}
          displacementMap={wallDisplacementMap}
          displacementScale={0.1}
        />
      </mesh>

      <mesh
        position={[-50, 16, 0]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
        frustumCulled={true}
      >
        <boxGeometry args={[100, 50, 0.1]} />
        <meshStandardMaterial
          map={wallColorMap}
          normalMap={wallNormalMap}
          roughnessMap={wallRoughnessMap}
          displacementMap={wallDisplacementMap}
          displacementScale={0.1}
        />
      </mesh>

      <mesh
        position={[50, 16, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        receiveShadow
        frustumCulled={true}
      >
        <boxGeometry args={[100, 50, 0.1]} />
        <meshStandardMaterial
          map={wallColorMap}
          normalMap={wallNormalMap}
          roughnessMap={wallRoughnessMap}
          displacementMap={wallDisplacementMap}
          displacementScale={0.1}
        />
      </mesh>

      <mesh position={[0, 16, 50]} receiveShadow frustumCulled={true}>
        <boxGeometry args={[100, 50, 0.1]} />
        <meshStandardMaterial
          map={wallColorMap}
          normalMap={wallNormalMap}
          roughnessMap={wallRoughnessMap}
          displacementMap={wallDisplacementMap}
          displacementScale={0.1}
        />
      </mesh>

      {/* Logo sulla parete posteriore */}
      {/* <mesh position={[0, 15, -49.7]} receiveShadow frustumCulled={true}>
        <planeGeometry args={[80, 30]} />
        <meshStandardMaterial map={logoMap} transparent />
      </mesh> */}

      {/* Logo sulla parete frontale */}
      {/* <mesh position={[0, 15, 49.7]} rotation={[0, Math.PI, 0]} receiveShadow frustumCulled={true}>
        <planeGeometry args={[80, 30]} />
        <meshStandardMaterial map={logoMap} transparent />
      </mesh> */}

      {/* Logo sulla parete destra */}
      <mesh
        position={[49.7, 12, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        receiveShadow
      >
        <planeGeometry args={[75, 25]} />
        <meshStandardMaterial map={logoMap} transparent opacity={0.15} color={"black"} />
      </mesh>

      {/* Logo sulla parete sinistra */}
      <mesh
        position={[-49.7, 12, 0]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <planeGeometry args={[75, 25]} />
        <meshStandardMaterial map={logoMap} transparent opacity={0.15} color={"black"} />
      </mesh>
    </>
  );
}
