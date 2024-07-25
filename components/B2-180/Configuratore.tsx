"use client";

import { useTrailer } from "@/hooks/useTrailer";
import Button from "../Button";
import { useEffect } from "react";
import { ButtonList, SelectorList, SelectorSiNo } from "../Selector";

function Configuratore() {
  const { color, setColor, data, setData, setModel, model } = useTrailer();

  useEffect(() => {
    setColor("0");
    setData({
      motor: "Motor_2",
      motor3_conf: "Motor_3_Conf_01",
      arm: "22+",
      turbo: "No",
      assisted_steering: "No",
      second_stand_foot: "No",
      second_exit: "No",
      wheel: "560",
      top_azoto: "No",
      suspension: "No",
      sollevator: "Si",
      backConf: "Ripper02",
      barraRaso: "No",
    });
  }, []);

  return (
    <div className="lg:p-16 p-1 lg:w-[40%] w-[100%] lg:h-full h-[50%]">
      <div className="w-full h-full  overflow-y-auto pt-10">
        <div className="font-bold text-neutral-700 text-4xl mb-3">
          Botte B2 180
        </div>
        <div className="text-md font-normal text-neutral-500 mt-2 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae
          cumque ad? Reiciendis ea quas distinctio nemo eius architecto
          blanditiis.
        </div>

        <SelectorList title="Colore">
          <ButtonList
            text="Fendt con scritte"
            onChange={() => setColor("0")}
            isActive={color === "0"}
          />
          <ButtonList
            text="Fendt"
            onChange={() => setColor("1")}
            isActive={color === "1"}
          />
          <ButtonList
            text="Serie"
            onChange={() => setColor("2")}
            isActive={color === "2"}
          />
          <ButtonList
            text="New Holland"
            onChange={() => setColor("3")}
            isActive={color === "3"}
          />
          <ButtonList
            text="Massey Ferguson"
            onChange={() => setColor("4")}
            isActive={color === "4"}
          />
          <ButtonList
            text="John Deere"
            onChange={() => setColor("5")}
            isActive={color === "5"}
          />
          <ButtonList
            text="John Deere 2"
            onChange={() => setColor("6")}
            isActive={color === "6"}
          />
          <ButtonList
            text="Nero"
            onChange={() => setColor("7")}
            isActive={color === "7"}
          />
          <ButtonList
            text="Serie Old"
            onChange={() => setColor("8")}
            isActive={color === "8"}
          />
        </SelectorList>

        <SelectorList title="Decompressore">
          <ButtonList
            text="Ballast"
            onChange={() => setData({ ...data, motor: "Motor_1" })}
            isActive={data.motor === "Motor_1"}
          />
          <ButtonList
            text="Lobi in acciaio"
            onChange={() => setData({ ...data, motor: "Motor_2" })}
            isActive={data.motor === "Motor_2"}
          />
          <ButtonList
            text="KTS"
            onChange={() => setData({ ...data, motor: "Motor_3" })}
            isActive={data.motor === "Motor_3"}
          />
        </SelectorList>

        {data.motor === "Motor_3" && (
          <SelectorList title="Accessorio decompressore">
            <ButtonList
              text="Liquido"
              onChange={() =>
                setData({ ...data, motor3_conf: "Motor_3_Conf_01" })
              }
              isActive={data.motor3_conf === "Motor_3_Conf_01"}
            />
            <ButtonList
              text="Elettroventola"
              onChange={() =>
                setData({ ...data, motor3_conf: "Motor_3_Conf_02" })
              }
              isActive={data.motor3_conf === "Motor_3_Conf_02"}
            />
          </SelectorList>
        )}

        <SelectorList title="Braccio">
          <ButtonList
            text="Nessuno"
            onChange={() => setData({ ...data, arm: "No" })}
            isActive={data.arm === "No"}
          />
          <ButtonList
            text="D22 Normale"
            onChange={() => setData({ ...data, arm: "22" })}
            isActive={data.arm === "22"}
          />
          <ButtonList
            text="D22 Telescopico"
            onChange={() => setData({ ...data, arm: "22+" })}
            isActive={data.arm === "22+"}
          />
          <ButtonList
            text="D28 Normale"
            onChange={() => setData({ ...data, arm: "28" })}
            isActive={data.arm === "28"}
          />
          <ButtonList
            text="D28 Telescopico"
            onChange={() => setData({ ...data, arm: "28+" })}
            isActive={data.arm === "28+"}
          />
        </SelectorList>

        {data.arm !== "No" && (
          <SelectorSiNo title="Turbo">
              <Button
                text="No"
                onChange={() => setData({ ...data, turbo: "No" })}
                isActive={data.turbo === "No"}
              />
              <Button
                text="Si"
                onChange={() => setData({ ...data, turbo: "Si" })}
                isActive={data.turbo === "Si"}
              />
            </SelectorSiNo>
        )}

<SelectorList title="Ruote">
            <ButtonList
              text="445 Stradali"
              onChange={() => setData({ ...data, wheel: "445" })}
              isActive={data.wheel === "445"}
            />
            <ButtonList
              text="560 Normali"
              onChange={() => setData({ ...data, wheel: "560" })}
              isActive={data.wheel === "560"}
            />
            {/* <ButtonList
              text="600 Grandi"
              onChange={() => setData({ ...data, wheel: "600" })}
              isActive={data.wheel === "600"}
            /> */}
          </SelectorList>

        <SelectorSiNo title="Sterzata assistita">
            <Button
              text="No"
              onChange={() => setData({ ...data, assisted_steering: "No" })}
              isActive={data.assisted_steering === "No"}
            />
            <Button
              text="Si"
              onChange={() => setData({ ...data, assisted_steering: "Si" })}
              isActive={data.assisted_steering === "Si"}
            />
        </SelectorSiNo>

        <SelectorSiNo title="Piedino secondario">
            <Button
              text="No"
              onChange={() => setData({ ...data, second_stand_foot: "No" })}
              isActive={data.second_stand_foot === "No"}
            />
            <Button
              text="Si"
              onChange={() => setData({ ...data, second_stand_foot: "Si" })}
              isActive={data.second_stand_foot === "Si"}
            />
        </SelectorSiNo>

        <SelectorSiNo title="Saracinesca laterale">
            <Button
              text="No"
              onChange={() => setData({ ...data, second_exit: "No" })}
              isActive={data.second_exit === "No"}
            />
            <Button
              text="Si"
              onChange={() => setData({ ...data, second_exit: "Si" })}
              isActive={data.second_exit === "Si"}
            />
        </SelectorSiNo>

        <SelectorSiNo title="Cisterna d'azoto">
            <Button
              text="No"
              onChange={() => setData({ ...data, top_azoto: "No" })}
              isActive={data.top_azoto === "No"}
            />
            <Button
              text="Si"
              onChange={() => setData({ ...data, top_azoto: "Si" })}
              isActive={data.top_azoto === "Si"}
            />
          </SelectorSiNo>

        <SelectorSiNo title="Ammortizzatori a telaio">
            <Button
              text="No"
              onChange={() => setData({ ...data, suspension: "No" })}
              isActive={data.suspension === "No"}
            />
            <Button
              text="Si"
              onChange={() => setData({ ...data, suspension: "Si" })}
              isActive={data.suspension === "Si"}
            />
        </SelectorSiNo>

        <SelectorSiNo title="Sollevatore">
            <Button
              text="No"
              onChange={() =>
                setData({
                  ...data,
                  sollevator: "No",
                  backConf: "No",
                  barraRaso: "No",
                })
              }
              isActive={data.sollevator === "No"}
            />
            <Button
              text="Si"
              onChange={() =>
                setData({
                  ...data,
                  sollevator: "Si",
                  backConf: "No",
                  barraRaso: "No",
                })
              }
              isActive={data.sollevator === "Si"}
            />
          </SelectorSiNo>

        {data.sollevator === "No" && (
          <SelectorList title="Configurazione posteriore">
              <ButtonList
                text="Nessuna"
                onChange={() =>
                  setData({
                    ...data,
                    backConf: "No",
                    barraRaso:
                      data.barraRaso === "grande" ? "No" : data.barraRaso,
                  })
                }
                isActive={data.backConf === "No"}
              />
              <ButtonList
                text="Ripper 4 ancore"
                onChange={() =>
                  setData({
                    ...data,
                    backConf: "Ripper01",
                    barraRaso:
                      data.barraRaso === "grande" ? "No" : data.barraRaso,
                  })
                }
                isActive={data.backConf === "Ripper01"}
              />
              <ButtonList
                text="Ripper 6 ancore"
                onChange={() =>
                  setData({
                    ...data,
                    backConf: "Ripper02",
                    barraRaso:
                      data.barraRaso === "grande" ? "No" : data.barraRaso,
                  })
                }
                isActive={data.backConf === "Ripper02"}
              />
            </SelectorList>
        )}

        {data.sollevator === "Si" && (
          <SelectorList title="Configurazione posteriore">
              <ButtonList
                text="Nessuna"
                onChange={() =>
                  setData({
                    ...data,
                    backConf: "No",
                    barraRaso:
                      data.barraRaso === "sollevator" ? "No" : data.barraRaso,
                  })
                }
                isActive={data.backConf === "No"}
              />
              <ButtonList
                text="Ripper 4 ancore"
                onChange={() =>
                  setData({
                    ...data,
                    backConf: "Ripper01",
                    barraRaso:
                      data.barraRaso === "sollevator" ? "No" : data.barraRaso,
                  })
                }
                isActive={data.backConf === "Ripper01"}
              />
              <ButtonList
                text="Ripper 6 ancore"
                onChange={() =>
                  setData({
                    ...data,
                    backConf: "Ripper02",
                    barraRaso:
                      data.barraRaso === "sollevator" ? "No" : data.barraRaso,
                  })
                }
                isActive={data.backConf === "Ripper02"}
              />
              <ButtonList
                text="Ripper 13 ancore"
                onChange={() =>
                  setData({
                    ...data,
                    backConf: "Ripper03",
                    barraRaso:
                      data.barraRaso === "sollevator" ? "No" : data.barraRaso,
                  })
                }
                isActive={data.backConf === "Ripper03"}
              />
              <ButtonList
                text="Dischiera"
                onChange={() =>
                  setData({
                    ...data,
                    backConf: "Dischiera01",
                    barraRaso:
                      data.barraRaso === "sollevator" ? "No" : data.barraRaso,
                  })
                }
                isActive={data.backConf === "Dischiera01"}
              />
              <ButtonList
                text="Dischiera alimentata"
                onChange={() =>
                  setData({
                    ...data,
                    backConf: "Dischiera02",
                    barraRaso:
                      data.barraRaso === "sollevator" ? "No" : data.barraRaso,
                  })
                }
                isActive={data.backConf === "Dischiera02"}
              />
            </SelectorList>
        )}

        {data.sollevator === "Si" && (
          <SelectorList title="Barra rasoterra">
              <ButtonList
                text="Nessuna"
                onChange={() => setData({ ...data, barraRaso: "No" })}
                isActive={data.barraRaso === "No"}
              />
              <ButtonList
                text="Daniele"
                onChange={() => setData({ ...data, barraRaso: "Daniele" })}
                isActive={data.barraRaso === "Daniele"}
              />
              <ButtonList
                text="6 uscite"
                onChange={() => setData({ ...data, barraRaso: "6uscite" })}
                isActive={data.barraRaso === "6uscite"}
              />
              <ButtonList
                text="A sollevatore"
                onChange={() =>
                  setData({ ...data, barraRaso: "sollevator", backConf: "No" })
                }
                isActive={data.barraRaso === "sollevator"}
              />
            </SelectorList>
        )}

        {data.sollevator === "No" && (
          <SelectorList title="Barra rasoterra">
              <ButtonList
                text="Nessuna"
                onChange={() => setData({ ...data, barraRaso: "No" })}
                isActive={data.barraRaso === "No"}
              />
              <ButtonList
                text="Daniele"
                onChange={() => setData({ ...data, barraRaso: "Daniele" })}
                isActive={data.barraRaso === "Daniele"}
              />
              <ButtonList
                text="Grande"
                onChange={() =>
                  setData({ ...data, barraRaso: "grande", backConf: "No" })
                }
                isActive={data.barraRaso === "grande"}
              />
            </SelectorList>
        )}
      </div>
    </div>
  );
}

export default Configuratore;
