"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  AccumulativeShadows,
  Center,
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
  Shadow,
  useGLTF,
} from "@react-three/drei";
import { Vector3 } from "three";
import { DRACOLoader, GLTFLoader } from "three/examples/jsm/Addons.js";
import CanvasLoader from "./CanvasLoader";
import { useTrailer } from "@/hooks/useTrailer";
import Image from "next/image";

const oversides1Normal = [
  "Oversides_1_Rear_Normal_1",
  "Oversides_1_Rear_Normal_2",
  "Oversides_1_Rear_Normal_3",
];
const oversides1Oversized = [
  "Oversides_1_Rear_Oversized_1",
  "Oversides_1_Rear_Oversized_2",
  "Oversides_1_Rear_Oversized_3",
];
const oversides2Normal = [
  "Oversides_2_Rear_Normal_1",
  "Oversides_2_Rear_Normal_2",
  "Oversides_2_Rear_Normal_3",
];
const oversides2Oversized = [
  "Oversides_2_Rear_Oversized_1",
  "Oversides_2_Rear_Oversized_2",
  "Oversides_2_Rear_Oversized_3",
];

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



const Mesh = () => {
  const {
    model,
    color,
    rear,
    oversides,
    cover,
    wheel,
    bavero,
    motor,
    suspensions,
    secondStandFoot,
    assistedSteering,
  } = useTrailer();

  const glb = useGLTF("/model/"+model+"/"+color+".glb");
  // const glb = useGLTF("/Grey_Inox.glb");

  // console.log(glb.nodes);

  useEffect(() => {
    if (rear === "Normal") {
      glb.nodes["Rear_TaileGate_Normal"].visible = true;
      glb.nodes["Rear_Tailgate_Oversized"].visible = false;
    } else {
      glb.nodes["Rear_TaileGate_Normal"].visible = false;
      glb.nodes["Rear_Tailgate_Oversized"].visible = true;
    }
  }, [rear, model, color]);

  useEffect(() => {
    if (oversides === "No") {
      oversides1Normal.map((value) => {
        glb.nodes[value].visible = false;
      });
      oversides1Oversized.map((value) => {
        glb.nodes[value].visible = false;
      });
      oversides2Normal.map((value) => {
        glb.nodes[value].visible = false;
      });
      oversides2Oversized.map((value) => {
        glb.nodes[value].visible = false;
      });
    } else if (oversides === "50cm") {
      if (rear === "Normal") {
        oversides1Normal.map((value) => {
          glb.nodes[value].visible = true;
        });
        oversides1Oversized.map((value) => {
          glb.nodes[value].visible = false;
        });
        oversides2Normal.map((value) => {
          glb.nodes[value].visible = false;
        });
        oversides2Oversized.map((value) => {
          glb.nodes[value].visible = false;
        });
      } else {
        oversides1Normal.map((value) => {
          glb.nodes[value].visible = false;
        });
        oversides1Oversized.map((value) => {
          glb.nodes[value].visible = true;
        });
        oversides2Normal.map((value) => {
          glb.nodes[value].visible = false;
        });
        oversides2Oversized.map((value) => {
          glb.nodes[value].visible = false;
        });
      }
    } else if (oversides === "50+35cm") {
      if (rear === "Normal") {
        oversides1Normal.map((value) => {
          glb.nodes[value].visible = false;
        });
        oversides1Oversized.map((value) => {
          glb.nodes[value].visible = false;
        });
        oversides2Normal.map((value) => {
          glb.nodes[value].visible = true;
        });
        oversides2Oversized.map((value) => {
          glb.nodes[value].visible = false;
        });
      } else {
        oversides1Normal.map((value) => {
          glb.nodes[value].visible = false;
        });
        oversides1Oversized.map((value) => {
          glb.nodes[value].visible = false;
        });
        oversides2Normal.map((value) => {
          glb.nodes[value].visible = false;
        });
        oversides2Oversized.map((value) => {
          glb.nodes[value].visible = true;
        });
      }
    }
  }, [oversides, rear, model, color]);

  useEffect(() => {
    if (cover === "No") {
      cover1.map((value) => {
        glb.nodes[value].visible = false;
      });
      cover2.map((value) => {
        glb.nodes[value].visible = false;
      });
    } else if (cover === "Cover_1") {
      cover1.map((value) => {
        glb.nodes[value].visible = true;
      });
      cover2.map((value) => {
        glb.nodes[value].visible = false;
      });

      if (oversides === "No") {
        glb.nodes["Cover1"].position.set(
          -0.0815862268,
          -0.8344479322,
          1.153275013
        );
        glb.nodes["cover1_2"].position.set(-0.0815862417, 1.8, -2.2030134201);
      } else {
        glb.nodes["Cover1"].position.set(
          -0.0815862268,
          -0.1344479322,
          1.153275013
        );
        glb.nodes["cover1_2"].position.set(
          -0.0815862417,
          2.5017325878,
          -2.2030134201
        );
      }
    } else if (cover === "Cover_2") {
      cover1.map((value) => {
        glb.nodes[value].visible = false;
      });
      cover2.map((value) => {
        glb.nodes[value].visible = true;
      });

      if (oversides === "No") {
        glb.nodes["Cover2"].scale.set(1, 0.9, 1);
      } else {
        glb.nodes["Cover2"].scale.set(1, 1.2, 1);
      }
    }
  }, [cover, oversides, model, color]);

  useEffect(() => {
    if (wheel === "Normal") {
      normalWheel.map((value) => {
        glb.nodes[value].visible = true;
      });
      oversizedWheel.map((value) => {
        glb.nodes[value].visible = false;
      });
      stradalWheel.map((value) => {
        glb.nodes[value].visible = false;
      });
    } else if (wheel === "Oversized") {
      normalWheel.map((value) => {
        glb.nodes[value].visible = false;
      });
      oversizedWheel.map((value) => {
        glb.nodes[value].visible = true;
      });
      stradalWheel.map((value) => {
        glb.nodes[value].visible = false;
      });
    } else if (wheel === "Stradal") {
      normalWheel.map((value) => {
        glb.nodes[value].visible = false;
      });
      oversizedWheel.map((value) => {
        glb.nodes[value].visible = false;
      });
      stradalWheel.map((value) => {
        glb.nodes[value].visible = true;
      });
    }
  }, [wheel, model]);

  useEffect(() => {
    if (bavero === "No") {
      glb.nodes["Bravo_Normal"].visible = false;
      glb.nodes["Bravo_Overside"].visible = false;
    } else {
      if (rear === "Normal") {
        glb.nodes["Bravo_Normal"].visible = true;
        glb.nodes["Bravo_Overside"].visible = false;
      } else {
        glb.nodes["Bravo_Normal"].visible = false;
        glb.nodes["Bravo_Overside"].visible = true;
      }
    }
  }, [bavero, rear, model, color]);

  useEffect(() => {
    if (motor === "Motor_1") {
      glb.nodes["Motor_01"].visible = true;
      glb.nodes["Motor_2"].visible = false;
    } else {
      glb.nodes["Motor_01"].visible = false;
      glb.nodes["Motor_2"].visible = true;
    }
  }, [motor, model, color]);

  useEffect(() => {
    if (secondStandFoot === "No") {
      glb.nodes["Seconf_Stand_Foot"].visible = false;
    } else {
      glb.nodes["Seconf_Stand_Foot"].visible = true;
    }
  }, [secondStandFoot, model, color]);

  useEffect(() => {
    if (suspensions === "No") {
      glb.nodes["Suspension_Holder"].visible = false;
      glb.nodes["Syspension"].visible = false;
    } else {
      glb.nodes["Suspension_Holder"].visible = true;
      glb.nodes["Syspension"].visible = true;
    }
  }, [suspensions, model, color]);

  useEffect(() => {
    if (assistedSteering === "No") {
      glb.nodes["Assisted_steering"].visible = false;
    } else {
      glb.nodes["Assisted_steering"].visible = true;
    }
  }, [assistedSteering, model, color]);

  // useEffect(() => {
  //   glb.scene.rotateX(1);
  // });

  return (
    <>
      <ambientLight 
        intensity={1}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={Math.PI / 2.1}
      />
      <mesh position={[0, 0, 0]} scale={[1,1,1]} castShadow>
        <primitive object={glb.scene} />
      </mesh>
    </>
  );
};

const MeshBotte = () => {

  const glb = useGLTF("/02.glb");

  return (
    <>
      <ambientLight
        intensity={1}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={Math.PI / 2.1}
      />
      <mesh position={[0, 0, 0]} scale={[1, 1, 1]} castShadow>
        <primitive object={glb.scene} />
      </mesh>
    </>
  );
};

export default function TrailerCanvas() {
  const div = useRef<HTMLDivElement>(null);

  // const [centerCount, setCenterCount] = useState(0);

  // const onResize = () => {
  //   setCenterCount((prev) => prev + 1);
  // };

  // useEffect(() => {
  //   console.log(centerCount);
  // }, [centerCount]);

  // useEffect(() => {
  //   window.addEventListener("resize", onResize);

  //   () => {
  //     window.removeEventListener("resize", onResize);
  //   }
  // }, [])

  return (
    <div className="h-full w-full relative" ref={div}>
      {/* <div className="h-full w-full absolute">
        <Image 
          src={"/sfondo2.jpg"}
          alt=""
          fill
          objectFit="cover"
        />
      </div> */}
      <Canvas shadows>
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={3} />
          <Environment preset="studio" />
          <Pavimento />
          <Center>
            <MeshBotte />
          </Center>
          <PerspectiveCamera makeDefault fov={30} position={[45, 0, -20]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

const Pavimento = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
      <planeGeometry attach="geometry" args={[15, 15, 2]} />
      <meshStandardMaterial
        attach="material"
        color="#FFF"
        roughness={0.5}
        metalness={0.1}
      />
      {/* <Shadow
        opacity={0.5}
      /> */}
    </mesh>
  );
};

// camera={{
//   position: [30, 0, 0],
//   fov: 40,
// }}