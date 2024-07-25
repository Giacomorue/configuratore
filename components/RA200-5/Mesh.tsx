"use client";

import { useEffect } from "react";
import { useTrailer } from "@/hooks/useTrailer";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { useLoader } from "@react-three/fiber";
import { Material, Mesh, Texture } from "three";
import { OrbitControls } from "@react-three/drei";

const cover1 = ["Cover1", "cover1_2"];

const cover2 = ["Cover2"];

const normalWheel = [
  "Normal_Centre_First",
  "Normal_Centre_Second",
  "Normal_Wheel_First",
  "Normal_Wheel_Second",
];

const oversizedWheel = [
  "Oversized_Centre_First",
  "Oversized_Centre_Second",
  "Oversized_Wheel_First",
  "Oversized_Wheel_Second",
];

const stradalWheel = [
  "Stradal_Centre_First",
  "Stradal_Centre_Second",
  "Stradal_Wheel_First",
  "Stradal_Wheel_Second",
];

const MeshBotte = () => {
  const { color, data, model } = useTrailer();

  const gltf = useLoader(
    GLTFLoader,
    `/RA200-5_${color}.glb`,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco-gltf/"); // Assicurati che questo percorso corrisponda alla posizione dei file decoder Draco
      loader.setDRACOLoader(dracoLoader);
    }
  );

  useEffect(() => {
    if(data.rear === "Normal"){
      gltf.nodes["Rear_TaileGate_Normal"].visible = true;
    }
    else{
      gltf.nodes["Rear_TaileGate_Normal"].visible = false;
    }

    if(data.rear === "Oversized"){
      gltf.nodes["Rear_Tailgate_Oversized"].visible = true;
    }
    else{
      gltf.nodes["Rear_Tailgate_Oversized"].visible = false;
    }

    if(data.oversides == "50"){
      if(data.rear === "Normal"){
        gltf.nodes["Oversides_1_Rear_Normal_1"].visible = true;
        gltf.nodes["Oversides_1_Rear_Normal_2"].visible = true;
        gltf.nodes["Oversides_1_Rear_Normal_3"].visible = true;
      }
      else{
        gltf.nodes["Oversides_1_Rear_Normal_1"].visible = false;
        gltf.nodes["Oversides_1_Rear_Normal_2"].visible = false;
        gltf.nodes["Oversides_1_Rear_Normal_3"].visible = false;
      }

      if(data.rear === "Oversized"){
        gltf.nodes["Oversides_1_Rear_Oversized_1"].visible = true;
        gltf.nodes["Oversides_1_Rear_Oversized_2"].visible = true;
        gltf.nodes["Oversides_1_Rear_Oversized_3"].visible = true;
      }
      else{
        gltf.nodes["Oversides_1_Rear_Oversized_1"].visible = false;
        gltf.nodes["Oversides_1_Rear_Oversized_2"].visible = false;
        gltf.nodes["Oversides_1_Rear_Oversized_3"].visible = false;
      }
    }
    else{
      gltf.nodes["Oversides_1_Rear_Normal_1"].visible = false;
        gltf.nodes["Oversides_1_Rear_Normal_2"].visible = false;
        gltf.nodes["Oversides_1_Rear_Normal_3"].visible = false;
        gltf.nodes["Oversides_1_Rear_Oversized_1"].visible = false;
        gltf.nodes["Oversides_1_Rear_Oversized_2"].visible = false;
        gltf.nodes["Oversides_1_Rear_Oversized_3"].visible = false;
    }

    if(data.oversides == "50+30"){
      if(data.rear === "Normal"){
        gltf.nodes["Oversides_2_Rear_Normal_1"].visible = true;
        gltf.nodes["Oversides_2_Rear_Normal_2"].visible = true;
        gltf.nodes["Oversides_2_Rear_Normal_3"].visible = true;
      }
      else{
        gltf.nodes["Oversides_2_Rear_Normal_1"].visible = false;
        gltf.nodes["Oversides_2_Rear_Normal_2"].visible = false;
        gltf.nodes["Oversides_2_Rear_Normal_3"].visible = false;
      }

      if(data.rear === "Oversized"){
        gltf.nodes["Oversides_2_Rear_Oversized_1"].visible = true;
        gltf.nodes["Oversides_2_Rear_Oversized_2"].visible = true;
        gltf.nodes["Oversides_2_Rear_Oversized_3"].visible = true;
      }
      else{
        gltf.nodes["Oversides_2_Rear_Oversized_1"].visible = false;
        gltf.nodes["Oversides_2_Rear_Oversized_2"].visible = false;
        gltf.nodes["Oversides_2_Rear_Oversized_3"].visible = false;
      }
    }
    else{
      gltf.nodes["Oversides_2_Rear_Normal_1"].visible = false;
        gltf.nodes["Oversides_2_Rear_Normal_2"].visible = false;
        gltf.nodes["Oversides_2_Rear_Normal_3"].visible = false;
        gltf.nodes["Oversides_2_Rear_Oversized_1"].visible = false;
        gltf.nodes["Oversides_2_Rear_Oversized_2"].visible = false;
        gltf.nodes["Oversides_2_Rear_Oversized_3"].visible = false;
    }

    if (data.cover === "No") {
      cover1.map((value) => {
        gltf.nodes[value].visible = false;
      });
      cover2.map((value) => {
        gltf.nodes[value].visible = false;
      });
    } else if (data.cover === "Cover_1") {
      cover1.map((value) => {
        gltf.nodes[value].visible = true;
      });
      cover2.map((value) => {
        gltf.nodes[value].visible = false;
      });

      if (data.oversides === "No") {
        gltf.nodes["Cover1"].position.set(
          -0.0815862268,
          1.6,
          1.153275013
        );
        gltf.nodes["cover1_2"].position.set(-0.0815862417, 1.8, -2.2030134201);
      } else {
        gltf.nodes["Cover1"].position.set(
          -0.0815862268,
          2,
          1.153275013
        );
        gltf.nodes["cover1_2"].position.set(
          -0.0815862417,
          2.5017325878,
          -2.2030134201
        );
      }
    } else if (data.cover === "Cover_2") {
      cover1.map((value) => {
        gltf.nodes[value].visible = false;
      });
      cover2.map((value) => {
        gltf.nodes[value].visible = true;
      });

      if (data.oversides === "No") {
        gltf.nodes["Cover2"].scale.set(1, 0.9, 1);
      } else {
        gltf.nodes["Cover2"].scale.set(1, 1.2, 1);
      }
    }

    if (data.wheel === "Normal") {
      normalWheel.map((value) => {
        gltf.nodes[value].visible = true;
      });
      // oversizedWheel.map((value) => {
      //   gltf.nodes[value].visible = false;
      // });
      stradalWheel.map((value) => {
        gltf.nodes[value].visible = false;
      });
    } else if (data.wheel === "Oversized") {
      normalWheel.map((value) => {
        gltf.nodes[value].visible = false;
      });
      // oversizedWheel.map((value) => {
      //   gltf.nodes[value].visible = true;
      // });
      stradalWheel.map((value) => {
        gltf.nodes[value].visible = false;
      });
    } else if (data.wheel === "Stradal") {
      normalWheel.map((value) => {
        gltf.nodes[value].visible = false;
      });
      // oversizedWheel.map((value) => {
      //   gltf.nodes[value].visible = false;
      // });
      stradalWheel.map((value) => {
        gltf.nodes[value].visible = true;
      });
    }

    if (data.bavero === "No") {
      gltf.nodes["Bravo_Normal"].visible = false;
      gltf.nodes["Bravo_Overside"].visible = false;
    } else {
      if (data.rear === "Normal") {
        gltf.nodes["Bravo_Normal"].visible = true;
        gltf.nodes["Bravo_Overside"].visible = false;
      } else {
        gltf.nodes["Bravo_Normal"].visible = false;
        gltf.nodes["Bravo_Overside"].visible = true;
      }
    }

    if (data.motor === "Motor_1") {
      gltf.nodes["Motor_01"].visible = true;
      gltf.nodes["Motor_2"].visible = false;
    } else {
      gltf.nodes["Motor_01"].visible = false;
      gltf.nodes["Motor_2"].visible = true;
    }

    if (data.secondStandFoot === "No") {
      gltf.nodes["Seconf_Stand_Foot"].visible = false;
    } else {
      gltf.nodes["Seconf_Stand_Foot"].visible = true;
    }

    if (data.suspensions === "No") {
      gltf.nodes["Suspension_Holder"].visible = false;
      gltf.nodes["Syspension"].visible = false;
    } else {
      gltf.nodes["Suspension_Holder"].visible = true;
      gltf.nodes["Syspension"].visible = true;
    }

    if (data.assistedSteering === "No") {
      gltf.nodes["Assisted_steering"].visible = false;
    } else {
      gltf.nodes["Assisted_steering"].visible = true;
    }
  }, [color, data, model]);

  return (
    <>
      <OrbitControls
        enablePan={false}
        zoomToCursor={false}
        enableZoom={true}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.1}
        enableDamping={true}
        dampingFactor={0.1}
        minDistance={15}
        maxDistance={40}
        panSpeed={1}
      />
      <mesh
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
        castShadow
        frustumCulled={true}
      >
        <primitive object={gltf.scene} />
      </mesh>
    </>
  );
};

export default MeshBotte;
