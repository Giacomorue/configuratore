"use client";

import { useEffect } from "react";
import { useTrailer } from "@/hooks/useTrailer";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { useLoader } from "@react-three/fiber";

const MeshBotte = () => {
  const { color, data, model } = useTrailer();

  const gltf = useLoader(
    GLTFLoader,
    `https://ruetta-bucket.s3.eu-north-1.amazonaws.com/V${model} Scheme_0${color}-transformed.glb`,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco-gltf/"); // Assicurati che questo percorso corrisponda alla posizione dei file decoder Draco
      loader.setDRACOLoader(dracoLoader);
    }
  );

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [gltf]);

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
