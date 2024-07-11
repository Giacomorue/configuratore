"use client";

import { Suspense, useEffect, useRef, useState, useTransition } from "react";
import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
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

const MeshBotte = () => {
  const { color, data, model } = useTrailer();

  const gltf = useLoader(
    GLTFLoader,
    "https://ruetta-bucket.s3.eu-north-1.amazonaws.com/V" + model + " Scheme_0" + color + "-transformed.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco-gltf/"); // Assicurati che questo percorso corrisponda alla posizione dei file decoder Draco
      loader.setDRACOLoader(dracoLoader);
    }
  );

  useEffect(() => {
    gltf.nodes["Main_Body"].visible = true;
    gltf.nodes["Front_Configuration_02"].visible = true;
    // gltf.nodes["Motor1"].visible = false;
    gltf.nodes["Top_Pipe_2"].visible = false;

    gltf.nodes["Configuration_13"].visible = false;

    // gltf.nodes["Solivator"].visible = false;

    if (data.motor === "Motor_1") {
      gltf.nodes["Motor1"].visible = true;
    } else {
      gltf.nodes["Motor1"].visible = false;
    }

    if (data.motor === "Motor_2") {
      gltf.nodes["Motor2"].visible = true;
    } else {
      gltf.nodes["Motor2"].visible = false;
    }
    if (data.motor === "Motor_3") {
      gltf.nodes["Motor-03"].visible = true;
      gltf.nodes["Motor_3_Conf_01"].visible = true;
      gltf.nodes["Motor_3_Conf_02"].visible = true;

      if (data.motor3_conf === "Motor_3_Conf_01") {
        gltf.nodes["Motor_3_Conf_01"].visible = true;
        gltf.nodes["Motor_3_Conf_02"].visible = false;
      } else {
        gltf.nodes["Motor_3_Conf_01"].visible = false;
        gltf.nodes["Motor_3_Conf_02"].visible = true;
      }
    } else {
      gltf.nodes["Motor-03"].visible = false;
      gltf.nodes["Motor_3_Conf_01"].visible = false;
      gltf.nodes["Motor_3_Conf_02"].visible = false;
      gltf.nodes["Motor_3_Conf_01"].visible = false;
      gltf.nodes["Motor_3_Conf_02"].visible = false;
    }

    if (data.arm === "No") {
      gltf.nodes["Support_Arm_01"].visible = false;
      gltf.nodes["Support_Arm_01_Conf"].visible = false;
      gltf.nodes["Support_Arm_02_Conf"].visible = false;
      gltf.nodes["Support_arm_02"].visible = false;
      gltf.nodes["Arm_01"].visible = false;
      gltf.nodes["Arm_02"].visible = false;
      gltf.nodes["3RD_ARM"].visible = false;
      gltf.nodes["4TH_ARM"].visible = false;
      gltf.nodes["Secondary_Close"].visible = true;
      gltf.nodes["Secondary_Close003"].visible = true;
    }

    if (data.arm === "B220") {
      gltf.nodes["Support_Arm_01"].visible = true;
      gltf.nodes["Support_arm_02"].visible = false;
      gltf.nodes["Arm_01"].visible = true;
      gltf.nodes["Arm_02"].visible = false;
      gltf.nodes["3RD_ARM"].visible = false;
      gltf.nodes["4TH_ARM"].visible = false;
      gltf.nodes["Secondary_Close"].visible = false;
      gltf.nodes["Secondary_Close003"].visible = false;

      if (data.turbo === "No") {
        gltf.nodes["Support_Arm_02_Conf"].visible = false;
        gltf.nodes["Support_Arm_01_Conf"].visible = false;
      } else {
        gltf.nodes["Support_Arm_02_Conf"].visible = false;
        gltf.nodes["Support_Arm_01_Conf"].visible = true;
      }
    }

    if (data.arm === "B220 Maggiorato") {
      gltf.nodes["Support_Arm_01"].visible = true;
      gltf.nodes["Support_Arm_01_Conf"].visible = false;
      gltf.nodes["Support_arm_02"].visible = false;
      gltf.nodes["Support_Arm_02_Conf"].visible = false;
      gltf.nodes["Arm_01"].visible = false;
      gltf.nodes["Arm_02"].visible = true;
      gltf.nodes["3RD_ARM"].visible = false;
      gltf.nodes["4TH_ARM"].visible = false;
      gltf.nodes["Secondary_Close"].visible = false;
      gltf.nodes["Secondary_Close003"].visible = false;

      if (data.turbo === "No") {
        gltf.nodes["Support_Arm_02_Conf"].visible = false;
        gltf.nodes["Support_Arm_01_Conf"].visible = false;
      } else {
        gltf.nodes["Support_Arm_02_Conf"].visible = false;
        gltf.nodes["Support_Arm_01_Conf"].visible = true;
      }
    }

    if (data.arm === "B250") {
      gltf.nodes["Support_Arm_01"].visible = false;
      gltf.nodes["Support_Arm_01_Conf"].visible = false;
      gltf.nodes["Support_arm_02"].visible = true;
      gltf.nodes["Support_Arm_02_Conf"].visible = false;
      gltf.nodes["Arm_01"].visible = false;
      gltf.nodes["Arm_02"].visible = false;
      gltf.nodes["3RD_ARM"].visible = true;
      gltf.nodes["4TH_ARM"].visible = false;
      gltf.nodes["Secondary_Close"].visible = false;
      gltf.nodes["Secondary_Close003"].visible = false;

      if (data.turbo === "No") {
        gltf.nodes["Support_Arm_02_Conf"].visible = false;
        gltf.nodes["Support_Arm_01_Conf"].visible = false;
      } else {
        gltf.nodes["Support_Arm_02_Conf"].visible = true;
        gltf.nodes["Support_Arm_01_Conf"].visible = false;
      }
    }

    if (data.arm === "B250 Maggiorato") {
      gltf.nodes["Support_Arm_01"].visible = false;
      gltf.nodes["Support_Arm_01_Conf"].visible = false;
      gltf.nodes["Support_arm_02"].visible = true;
      gltf.nodes["Support_Arm_02_Conf"].visible = false;
      gltf.nodes["Arm_01"].visible = false;
      gltf.nodes["Arm_02"].visible = false;
      gltf.nodes["3RD_ARM"].visible = false;
      gltf.nodes["4TH_ARM"].visible = true;
      gltf.nodes["Secondary_Close"].visible = false;
      gltf.nodes["Secondary_Close003"].visible = false;

      if (data.turbo === "No") {
        gltf.nodes["Support_Arm_02_Conf"].visible = false;
        gltf.nodes["Support_Arm_01_Conf"].visible = false;
      } else {
        gltf.nodes["Support_Arm_02_Conf"].visible = true;
        gltf.nodes["Support_Arm_01_Conf"].visible = false;
      }
    }

    if (data.wheel === "Stradal") {
      gltf.nodes["Stradal_Wheel_First"].visible = true;
      gltf.nodes["Stradal_Wheel_Second"].visible = true;
    } else {
      gltf.nodes["Stradal_Wheel_First"].visible = false;
      gltf.nodes["Stradal_Wheel_Second"].visible = false;
    }

    if (data.wheel === "Normal") {
      gltf.nodes["Normal_Wheel_First"].visible = true;
      gltf.nodes["Normal_Wheel_Second"].visible = true;
    } else {
      gltf.nodes["Normal_Wheel_First"].visible = false;
      gltf.nodes["Normal_Wheel_Second"].visible = false;
    }

    if (data.wheel === "Oversized") {
      gltf.nodes["Oversized_Wheel_First"].visible = true;
      gltf.nodes["Oversized_Wheel_Second"].visible = true;
    } else {
      gltf.nodes["Oversized_Wheel_First"].visible = false;
      gltf.nodes["Oversized_Wheel_Second"].visible = false;
    }

    if (data.assisted_steering === "No") {
      gltf.nodes["Assisted_Steering"].visible = false;
    } else {
      gltf.nodes["Assisted_Steering"].visible = true;
    }

    if (data.second_stand_foot === "No") {
      gltf.nodes["Seconf_Stand_Foot"].visible = false;
    } else {
      gltf.nodes["Seconf_Stand_Foot"].visible = true;
    }

    if (data.second_exit === "No") {
      gltf.nodes["Secondary_Close001"].visible = false;
      gltf.nodes["Secondary_Close002"].visible = false;
    } else {
      gltf.nodes["Secondary_Close001"].visible = true;
      gltf.nodes["Secondary_Close002"].visible = true;
    }

    if (data.top_azoto === "No") {
      gltf.nodes["Top_Cylinder"].visible = false;
    } else {
      gltf.nodes["Top_Cylinder"].visible = true;
    }

    if (data.suspension === "No") {
      gltf.nodes["Suspension"].visible = false;
    } else {
      gltf.nodes["Suspension"].visible = true;
    }

    if (data.sollevator === "No") {
      gltf.nodes["Solivator"].visible = false;
      gltf.nodes["Separate_Funnel_Bar"].visible = true;
    } else {
      gltf.nodes["Solivator"].visible = true;
      gltf.nodes["Separate_Funnel_Bar"].visible = false;
    }

    if (data.backConf === "Ripper01") {
      if (data.sollevator === "Si") {
        gltf.nodes["Configuration_02"].visible = true;
        gltf.nodes["Configuration_12"].visible = false;
      } else {
        gltf.nodes["Configuration_02"].visible = false;
        gltf.nodes["Configuration_12"].visible = true;
        gltf.nodes["Separate_Funnel_Bar"].visible = false;
      }
    } else {
      gltf.nodes["Configuration_02"].visible = false;
      gltf.nodes["Configuration_12"].visible = false;
    }

    if (data.backConf === "Ripper02") {
      if (data.sollevator === "Si") {
        gltf.nodes["Configuration_03"].visible = true;
        gltf.nodes["Configuration_05"].visible = false;
      } else {
        gltf.nodes["Configuration_03"].visible = false;
        gltf.nodes["Configuration_05"].visible = true;
        gltf.nodes["Separate_Funnel_Bar"].visible = false;
      }
    } else {
      gltf.nodes["Configuration_03"].visible = false;
      gltf.nodes["Configuration_05"].visible = false;
    }

    if (data.backConf === "Ripper03") {
      if (data.sollevator === "Si") {
        gltf.nodes["Configuration_06"].visible = true;
      } else {
        gltf.nodes["Configuration_06"].visible = false;
      }
    } else {
      gltf.nodes["Configuration_06"].visible = false;
    }

    if (data.backConf === "Dischiera02") {
      if (data.sollevator === "Si") {
        gltf.nodes["Configuration_08"].visible = true;
      } else {
        gltf.nodes["Configuration_08"].visible = false;
      }
    } else {
      gltf.nodes["Configuration_08"].visible = false;
    }

    if (data.backConf === "Dischiera01") {
      if (data.sollevator === "Si") {
        gltf.nodes["Configuration_09"].visible = true;
      } else {
        gltf.nodes["Configuration_09"].visible = false;
      }
    } else {
      gltf.nodes["Configuration_09"].visible = false;
    }

    if (data.barraRaso === "Daniele") {
      gltf.nodes["Configuration_04"].visible = true;
    } else {
      gltf.nodes["Configuration_04"].visible = false;
    }

    if (data.barraRaso === "grande") {
      gltf.nodes["Configuration_10"].visible = true;
      gltf.nodes["Separate_Funnel_Bar"].visible = false;
    } else {
      gltf.nodes["Configuration_10"].visible = false;
    }

    if (data.barraRaso === "6uscite") {
      gltf.nodes["Configuration_07"].visible = true;
    } else {
      gltf.nodes["Configuration_07"].visible = false;
    }

    if (data.barraRaso === "sollevator") {
      gltf.nodes["Configuration_11"].visible = true;
    } else {
      gltf.nodes["Configuration_11"].visible = false;
    }
  }, [color, data, model]);

  return (
    <>
      {/* <OrbitControls
        enablePan={false}
        enableZoom={true}
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={Math.PI / 2.1}
      /> */}
      <mesh position={[0, 0, 0]} scale={[1, 1, 1]} castShadow>
        <primitive object={gltf.scene} />
      </mesh>
    </>
  );
};

export default function TrailerCanvas() {
  const div = useRef<HTMLDivElement>(null);

  const { color, model, data } = useTrailer();

  const [shadowCounter, setShadowCounter] = useState(0);
  
  useEffect(() => {
    setShadowCounter(prev => prev + 1); 
  }, [color, model, data])

  return (
    <div className="w-full h-full relative" ref={div}>
      <Canvas shadows>
        <Suspense fallback={<CanvasLoader />}>
          <Center>
            <MeshBotte />
          </Center>
          <Hangar />
          <Environment preset="city" />
          <ContactShadows resolution={1024} frames={1} position={[0, -4, 0]} scale={15} blur={0.7} opacity={0.4} far={20} key={shadowCounter} />
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 50, 10]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={100}
            shadow-camera-left={-50}
            shadow-camera-right={50}
            shadow-camera-top={50}
            shadow-camera-bottom={-50}
          />
          <OrbitControls
            enablePan={false}
            zoomToCursor={false}
            enableZoom={true}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.1}
            enableDamping={true}     // Abilita il damping
            dampingFactor={1}      // Fattore di smorzamento
            minDistance={15}         // Distanza minima della telecamera
            maxDistance={45}         
          />
          <Leva hidden />
          <PerspectiveCamera position={[-20, 10, 25]} fov={50} makeDefault />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Hangar() {
  const [colorMap, normalMap, roughnessMap, displacementMap] = useTexture([
    '/textures/floor1/Tiles002_1K-JPG_Color.jpg',
    '/textures/floor1/Tiles002_1K-JPG_NormalGL.jpg',
    '/textures/floor1/Tiles002_1K-JPG_Roughness.jpg',
    '/textures/floor1/Tiles002_1K-JPG_Displacement.jpg'
  ]); // Sostituisci con il percorso della tua texture
  const [
    wallColorMap,
    wallNormalMap,
    wallRoughnessMap,
    wallDisplacementMap,
  ] = useTexture([
    '/textures/wall3/Concrete046_1K-JPG_Color.jpg',
    '/textures/wall3/Concrete046_1K-JPG_Roughness.jpg',
    '/textures/wall3/Concrete046_1K-JPG_NormalGL.jpg', // NormalGL for WebGL
    '/textures/wall3/Concrete046_1K-JPG_Displacement.jpg',
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

  wallColorMap.repeat.set(4, 2.5);
  wallNormalMap.repeat.set(4, 2.5);
  wallRoughnessMap.repeat.set(4, 2.5);
  wallDisplacementMap.repeat.set(4, 2.5);

  return (
    <>
      {/* Pavimento */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4.1, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
          displacementScale={0.1}
        />
      </mesh>

      {/* Parete posteriore */}
      <mesh position={[0, 21, -50]} receiveShadow>
        <boxGeometry args={[100, 50, 0.1]} />
        <meshStandardMaterial
          map={wallColorMap}
          normalMap={wallNormalMap}
          roughnessMap={wallRoughnessMap}
          displacementMap={wallDisplacementMap}
          displacementScale={0.1}
        />
      </mesh>

      {/* Parete sinistra */}
      <mesh position={[-50, 21, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[100, 50, 0.1]} />
        <meshStandardMaterial
          map={wallColorMap}
          normalMap={wallNormalMap}
          roughnessMap={wallRoughnessMap}
          displacementMap={wallDisplacementMap}
          displacementScale={0.1}
        />
      </mesh>

      {/* Parete destra */}
      <mesh position={[50, 21, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[100, 50, 0.1]} />
        <meshStandardMaterial
          map={wallColorMap}
          normalMap={wallNormalMap}
          roughnessMap={wallRoughnessMap}
          displacementMap={wallDisplacementMap}
          displacementScale={0.1}
        />
      </mesh>

      <mesh position={[0, 21, 50]} receiveShadow>
        <boxGeometry args={[100, 50, 0.1]} />
        <meshStandardMaterial
          map={wallColorMap}
          normalMap={wallNormalMap}
          roughnessMap={wallRoughnessMap}
          displacementMap={wallDisplacementMap}
          displacementScale={0.1}
        />
      </mesh>
    </>
  );
}