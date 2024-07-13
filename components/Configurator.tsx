"use client";

import { useTrailer } from "@/hooks/useTrailer";
import Button from "./Button";
import { useEffect } from "react";

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
      barraRaso: "No"
    });
  }, []);

  return (
    <div className="lg:p-16 p-1 lg:w-[50%] w-[100%] lg:h-full h-[50%]">
      <div className="w-full h-full  overflow-y-auto pt-10">
        <div className='text-center space-y-3 pb-5'>
          <p>Modello</p>
          <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
            <Button
              text="2 Assi"
              onChange={() => setModel("1")}
              isActive={model === "1"}
            />
            <Button
              text="3 Assi"
              onChange={() => setModel("2")}
              isActive={model === "2"}
            />
            <Button
              text="4 Assi"
              onChange={() => setModel("3")}
              isActive={model === "3"}
            />
          </div>
        </div>

        {/* <div className='text-center space-y-3 pb-5'>
          <p>Colore</p>
          <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
            <Button
              text="Basic"
              onChange={() => setColor("Basic")}
              isActive={color === "Basic"}
            />
            <Button
              text="Black"
              onChange={() => setColor("Black")}
              isActive={color === "Black"}
            />
            <Button
              text="Blue"
              onChange={() => setColor("Blue")}
              isActive={color === "Blue"}
            />
            <Button
              text="Fendt"
              onChange={() => setColor("Fendt")}
              isActive={color === "Fendt"}
            />
            <Button
              text="Inox"
              onChange={() => setColor("Inox")}
              isActive={color === "Inox"}
            />
            <Button
              text="John"
              onChange={() => setColor("John")}
              isActive={color === "John"}
            />
            <Button
              text="Red"
              onChange={() => setColor("Red")}
              isActive={color === "Red"}
            />
            <Button
              text="Zinc"
              onChange={() => setColor("Zinc")}
              isActive={color === "Zinc"}
            />
            <Button
              text="Con Scritte"
              onChange={() => setColor("Con Scritte")}
              isActive={color === "Con Scritte"}
            />
          </div>
        </div>

        <div className='text-center space-y-3 pb-5'>
          <p>Portellone posteriore</p>
          <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
            <Button
              text="Normal"
              onChange={() => setRear("Normal")}
              isActive={rear === "Normal"}
            />
            <Button
              text="Oversized"
              onChange={() => setRear("Oversized")}
              isActive={rear === "Oversized"}
            />
          </div>
        </div>

        <div className='text-center space-y-3 pb-5'>
          <p>Sovrasponde</p>
          <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
            <Button
              text="Senza"
              onChange={() => setOversides("No")}
              isActive={oversides === "No"}
            />
            <Button
              text="50cm"
              onChange={() => setOversides("50cm")}
              isActive={oversides === "50cm"}
            />
            <Button
              text="50+35cm"
              onChange={() => setOversides("50+35cm")}
              isActive={oversides === "50+35cm"}
            />
          </div>
        </div>

        <div className='text-center space-y-3 pb-5'>
          <p>Ruote</p>
          <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
            <Button
              text="Normali"
              onChange={() => setWheel("Normal")}
              isActive={wheel === "Normal"}
            />
            <Button
              text="Grandi"
              onChange={() => setWheel("Oversized")}
              isActive={wheel === "Oversized"}
            />
            <Button
              text="Stradali"
              onChange={() => setWheel("Stradal")}
              isActive={wheel === "Stradal"}
            />
          </div>
        </div>

        <div className='text-center space-y-3 pb-5'>
          <p>Copertura</p>
          <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
            <Button
              text="Senza"
              onChange={() => setCover("No")}
              isActive={cover === "No"}
            />
            <Button
              text="Tipo 1"
              onChange={() => setCover("Cover_1")}
              isActive={cover === "Cover_1"}
            />
            <Button
              text="Tipo 2"
              onChange={() => setCover("Cover_2")}
              isActive={cover === "Cover_2"}
            />
          </div>
        </div>

        <div className='text-center space-y-3 pb-5'>
          <p>Bavero</p>
          <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
            <Button
              text="No"
              onChange={() => setBavero("No")}
              isActive={bavero === "No"}
            />
            <Button
              text="Si"
              onChange={() => setBavero("Si")}
              isActive={bavero === "Si"}
            />
          </div>
        </div>

        <div className='text-center space-y-3 pb-5'>
          <p>Motore ribaltamento</p>
          <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
            <Button
              text="Tipo 1"
              onChange={() => setMotore("Motor_1")}
              isActive={motor === "Motor_1"}
            />
            <Button
              text="Tipo 2"
              onChange={() => setMotore("Motor_2")}
              isActive={motor === "Motor_2"}
            />
          </div>
        </div>

        <div className='text-center space-y-3 pb-5'>
          <p>Sospensioni telaio</p>
          <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
            <Button
              text="No"
              onChange={() => setSuspensions("No")}
              isActive={suspensions === "No"}
            />
            <Button
              text="Si"
              onChange={() => setSuspensions("Si")}
              isActive={suspensions === "Si"}
            />
          </div>
        </div>

        <div className='text-center space-y-3 pb-5'>
          <p>Secondo supporto</p>
          <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
            <Button
              text="No"
              onChange={() => setSecondStandFoot("No")}
              isActive={secondStandFoot === "No"}
            />
            <Button
              text="Si"
              onChange={() => setSecondStandFoot("Si")}
              isActive={secondStandFoot === "Si"}
            />
          </div>
        </div>

        <div className='text-center space-y-3 pb-5'>
          <p>Sterzata assistita</p>
          <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
            <Button
              text="No"
              onChange={() => setAssistedSteering("No")}
              isActive={assistedSteering === "No"}
            />
            <Button
              text="Si"
              onChange={() => setAssistedSteering("Si")}
              isActive={assistedSteering === "Si"}
            />
          </div>
        </div> */}

        <div className="text-center space-y-3 pb-5">
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
        </div>}
      </div>
    </div>
  );
}

export default Configurator;

