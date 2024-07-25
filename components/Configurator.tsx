"use client";

import { useTrailer } from "@/hooks/useTrailer";
import Button from "./Button";
import { useEffect } from "react";
import { ButtonList, SelectorList, SelectorSiNo } from "./Selector";

function Configurator() {
  const { color, setColor, data, setData, setModel, model } = useTrailer();

  useEffect(() => {
    setData({
      motor: "Motor_2",
      motor3_conf: "Motor_3_Conf_01",
      arm: "B220 Maggiorato",
      turbo: "No",
      assisted_steering: "No",
      second_stand_foot: "No",
      second_exit: "No",
      wheel: "Oversized",
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
        <SelectorSiNo
          title="Modello"
        >
          <Button
            text="No"
            onChange={() => setModel("1")}
            isActive={model === "1"}
          />
          <Button
            text="Si"
            onChange={() => setModel("2")}
            isActive={model === "2"}
          />
        </SelectorSiNo>

        <SelectorList title="Accessorio posteriore">
          <ButtonList
            text="No"
            onChange={() => setModel("1")}
            isActive={model === "1"}
          />
          <ButtonList
            text="Si"
            onChange={() => setModel("2")}
            isActive={model === "2"}
          />
        </SelectorList>

        {/* <div className="text-center space-y-3 pb-5">
          <p>Colore</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
            <Button
              text="Rosso e verde"
              onChange={() => setColor("1")}
              isActive={color === "1"}
            />
            <Button
              text="Basico"
              onChange={() => setColor("2")}
              isActive={color === "2"}
            />
            <Button
              text="Bianco e blue"
              onChange={() => setColor("3")}
              isActive={color === "3"}
            />
            <Button
              text="Nuovo"
              onChange={() => setColor("4")}
              isActive={color === "4"}
            />
            <Button
              text="Fendt"
              onChange={() => setColor("5")}
              isActive={color === "5"}
            />
            <Button
              text="Fendt 2"
              onChange={() => setColor("6")}
              isActive={color === "6"}
            />
            <Button
              text="Nero"
              onChange={() => setColor("7")}
              isActive={color === "7"}
            />
            <Button
              text="Arancio e rosso"
              onChange={() => setColor("8")}
              isActive={color === "8"}
            />
          </div>
        </div>

        <div className="text-center space-y-3 pb-5">
          <p>Decompressore</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
            <Button
              text="Decompressore 1"
              onChange={() => setData({ ...data, motor: "Motor_1" })}
              isActive={data.motor === "Motor_1"}
            />
            <Button
              text="Decompressore 2"
              onChange={() => setData({ ...data, motor: "Motor_2" })}
              isActive={data.motor === "Motor_2"}
            />
            <Button
              text="Decompressore 3"
              onChange={() => setData({ ...data, motor: "Motor_3" })}
              isActive={data.motor === "Motor_3"}
            />
          </div>
        </div>

        {data.motor === "Motor_3" && (
          <div className="text-center space-y-3 pb-5">
            <p>Configurazione Motore 3</p>
            <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
              <Button
                text="Bombola"
                onChange={() =>
                  setData({ ...data, motor3_conf: "Motor_3_Conf_01" })
                }
                isActive={data.motor3_conf === "Motor_3_Conf_01"}
              />
              <Button
                text="Ventola"
                onChange={() =>
                  setData({ ...data, motor3_conf: "Motor_3_Conf_02" })
                }
                isActive={data.motor3_conf === "Motor_3_Conf_02"}
              />
            </div>
          </div>
        )}

        <div className="text-center space-y-3 pb-5">
          <p>Braccio</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
            <Button
              text="No"
              onChange={() => setData({ ...data, arm: "No" })}
              isActive={data.arm === "No"}
            />
            <Button
              text="B220"
              onChange={() => setData({ ...data, arm: "B220" })}
              isActive={data.arm === "B220"}
            />
            <Button
              text="B220 Maggiorato"
              onChange={() => setData({ ...data, arm: "B220 Maggiorato" })}
              isActive={data.arm === "B220 Maggiorato"}
            />
            <Button
              text="B250"
              onChange={() => setData({ ...data, arm: "B250" })}
              isActive={data.arm === "B250"}
            />
            <Button
              text="B250 Maggiorato"
              onChange={() => setData({ ...data, arm: "B250 Maggiorato" })}
              isActive={data.arm === "B250 Maggiorato"}
            />
          </div>
        </div>

        {data.arm !== "No" && (
          <div className="text-center space-y-3 pb-5">
            <p>Turbo</p>
            <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
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
            </div>
          </div>
        )}

        <div className="text-center space-y-3 pb-5">
          <p>Ruote</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
            <Button
              text="Stradali"
              onChange={() => setData({ ...data, wheel: "Stradal" })}
              isActive={data.wheel === "Stradal"}
            />
            <Button
              text="Normali"
              onChange={() => setData({ ...data, wheel: "Normal" })}
              isActive={data.wheel === "Normal"}
            />
            <Button
              text="Grandi"
              onChange={() => setData({ ...data, wheel: "Oversized" })}
              isActive={data.wheel === "Oversized"}
            />
          </div>
        </div>

        <div className="text-center space-y-3 pb-5">
          <p>Sterzata assistita</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
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
          </div>
        </div>

        <div className="text-center space-y-3 pb-5">
          <p>Supporto secondario</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
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
          </div>
        </div>

        <div className="text-center space-y-3 pb-5">
          <p>Uscita laterale secondaria</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
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
          </div>
        </div>

        <div className="text-center space-y-3 pb-5">
          <p>Cisterna d&apos;azoto</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
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
          </div>
        </div>

        <div className="text-center space-y-3 pb-5">
          <p>Sospensioni</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
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
          </div>
        </div>

        <div className="text-center space-y-3 pb-5">
          <p>Sollevatore</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
            <Button
              text="No"
              onChange={() => setData({ ...data, sollevator: "No", backConf: "No", barraRaso: "No" })}
              isActive={data.sollevator === "No"}
            />
            <Button
              text="Si"
              onChange={() => setData({ ...data, sollevator: "Si", backConf: "No", barraRaso: "No" })}
              isActive={data.sollevator === "Si"}
            />
          </div>
        </div>

        {data.sollevator === "No" && <div className="text-center space-y-3 pb-5">
          <p>Configurazione dietro</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
            <Button
              text="Nessuna"
              onChange={() => setData({ ...data, backConf: "No", barraRaso: data.barraRaso === "grande" ? "No" : data.barraRaso })}
              isActive={data.backConf === "No"}
            />
            <Button
              text="Ripper 3 ancore"
              onChange={() => setData({ ...data, backConf: "Ripper01", barraRaso: data.barraRaso === "grande" ? "No" : data.barraRaso })}
              isActive={data.backConf === "Ripper01"}
            />
            <Button
              text="Ripper 6 ancore"
              onChange={() => setData({ ...data, backConf: "Ripper02", barraRaso: data.barraRaso === "grande" ? "No" : data.barraRaso })}
              isActive={data.backConf === "Ripper02"}
            />
          </div>
        </div>}

        {data.sollevator === "Si" && <div className="text-center space-y-3 pb-5">
          <p>Configurazione dietro</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
            <Button
              text="Nessuna"
              onChange={() => setData({ ...data, backConf: "No", barraRaso: data.barraRaso === "sollevator" ? "No" : data.barraRaso })}
              isActive={data.backConf === "No"}
            />
            <Button
              text="Ripper 3 ancore"
              onChange={() => setData({ ...data, backConf: "Ripper01", barraRaso: data.barraRaso === "sollevator" ? "No" : data.barraRaso })}
              isActive={data.backConf === "Ripper01"}
            />
            <Button
              text="Ripper 6 ancore"
              onChange={() => setData({ ...data, backConf: "Ripper02", barraRaso: data.barraRaso === "sollevator" ? "No" : data.barraRaso })}
              isActive={data.backConf === "Ripper02"}
            />
            <Button
              text="Ripper 13 ancore"
              onChange={() => setData({ ...data, backConf: "Ripper03", barraRaso: data.barraRaso === "sollevator" ? "No" : data.barraRaso })}
              isActive={data.backConf === "Ripper03"}
            />
            <Button
              text="Dischiera"
              onChange={() => setData({ ...data, backConf: "Dischiera01", barraRaso: data.barraRaso === "sollevator" ? "No" : data.barraRaso })}
              isActive={data.backConf === "Dischiera01"}
            />
            <Button
              text="Dischiera alimentata"
              onChange={() => setData({ ...data, backConf: "Dischiera02", barraRaso: data.barraRaso === "sollevator" ? "No" : data.barraRaso })}
              isActive={data.backConf === "Dischiera02"}
            />
          </div>
        </div>}

        {data.sollevator === "Si" && <div className="text-center space-y-3 pb-5">
          <p>Barra rasoterra</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
            <Button
              text="Nessuna"
              onChange={() => setData({ ...data, barraRaso: "No" })}
              isActive={data.barraRaso === "No"}
            />
            <Button
              text="Daniele"
              onChange={() => setData({ ...data, barraRaso: "Daniele" })}
              isActive={data.barraRaso === "Daniele"}
            />
            <Button
              text="6 uscite"
              onChange={() => setData({ ...data, barraRaso: "6uscite" })}
              isActive={data.barraRaso === "6uscite"}
            />
            <Button
              text="A sollevatore"
              onChange={() => setData({ ...data, barraRaso: "sollevator", backConf: "No" })}
              isActive={data.barraRaso === "sollevator"}
            />
          </div>
        </div>}

        {data.sollevator === "No" && <div className="text-center space-y-3 pb-5">
          <p>Barra rasoterra</p>
          <div className="flex flex-row gap-3 items-center justify-center flex-wrap">
            <Button
              text="Nessuna"
              onChange={() => setData({ ...data, barraRaso: "No" })}
              isActive={data.barraRaso === "No"}
            />
            <Button
              text="Daniele"
              onChange={() => setData({ ...data, barraRaso: "Daniele" })}
              isActive={data.barraRaso === "Daniele"}
            />
            <Button
              text="Grande"
              onChange={() => setData({ ...data, barraRaso: "grande", backConf: "No" })}
              isActive={data.barraRaso === "grande"}
            />
          </div>
        </div>} */}
      </div>
    </div>
  );
}

export default Configurator;
