"use client";

import { useTrailer } from "@/hooks/useTrailer";
import Button from "../Button";
import { useEffect } from "react";
import { ButtonList, SelectorList, SelectorSiNo } from "../Selector";

function Configuratore() {
  const { color, setColor, data, setData, setModel, model } = useTrailer();

  useEffect(() => {
    setColor("Green");
    setData({
      oversides: "No",
      rear: "Normal",
      bavero: "No",
      motor: "Motor_1",
      cover: "No",
      suspensions: "No",
      wheel: "Normal",
      secondStandFoot: "No",
      assistedSteering: "No",
    });
  }, []);

  return (
    <div className="lg:p-16 p-1 lg:w-[40%] w-[100%] lg:h-full h-[50%]">
      <div className="w-full h-full  overflow-y-auto pt-10">
        <div className="font-bold text-neutral-700 text-4xl mb-3">
          Dumper RA2 200 - 5,20
        </div>
        <div className="text-md font-normal text-neutral-500 mt-2 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae
          cumque ad? Reiciendis ea quas distinctio nemo eius architecto
          blanditiis.
        </div>

        <SelectorList title="Colore">
          <ButtonList
            text="Verde"
            onChange={() => setColor("Green")}
            isActive={color === "Green"}
          />
          <ButtonList
            text="Grigio"
            onChange={() => setColor("Black_Silver")}
            isActive={color === "Black_Silver"}
          />
          <ButtonList
            text="Nero"
            onChange={() => setColor("Black")}
            isActive={color === "Black"}
          />
          <ButtonList
            text="Blu"
            onChange={() => setColor("Blue")}
            isActive={color === "Blue"}
          />
          <ButtonList
            text="Verde scuro"
            onChange={() => setColor("Dark_Green")}
            isActive={color === "Dark_Green"}
          />
          <ButtonList
            text="Verde e Rosso"
            onChange={() => setColor("Green_Red")}
            isActive={color === "Green_Red"}
          />
          <ButtonList
            text="Inox"
            onChange={() => setColor("Grey_Innox")}
            isActive={color === "Grey_Innox"}
          />
          <ButtonList
            text="Verde e giallo"
            onChange={() => setColor("Yellow_Green")}
            isActive={color === "Yellow_Green"}
          />
        </SelectorList>

        <SelectorList title="Sovrasponde">
          <ButtonList
            text="No"
            onChange={() => setData({ ...data, oversides: "No" })}
            isActive={data.oversides === "No"}
          />
          <ButtonList
            text="50"
            onChange={() => setData({ ...data, oversides: "50" })}
            isActive={data.oversides === "50"}
          />
          <ButtonList
            text="50+30"
            onChange={() => setData({ ...data, oversides: "50+30" })}
            isActive={data.oversides === "50+30"}
          />
        </SelectorList>

        <SelectorSiNo title="Portellone maggiorato">
              <Button
                text="No"
                onChange={() => setData({ ...data, rear: "Normal" })}
                isActive={data.rear === "Normal"}
              />
              <Button
                text="Si"
                onChange={() => setData({ ...data, rear: "Oversized" })}
                isActive={data.rear === "Oversized"}
              />
            </SelectorSiNo>

            <SelectorSiNo title="Bavero">
              <Button
                text="No"
                onChange={() => setData({ ...data, bavero: "No" })}
                isActive={data.bavero === "No"}
              />
              <Button
                text="Si"
                onChange={() => setData({ ...data, bavero: "Si" })}
                isActive={data.bavero === "Si"}
              />
            </SelectorSiNo>

            <SelectorList title="Motore">
              <ButtonList
                text="Cardano"
                onChange={() => setData({ ...data, motor: "Motor_1" })}
                isActive={data.motor === "Motor_1"}
              />
              <ButtonList
                text="Motore orbitale"
                onChange={() => setData({ ...data, motor: "Motor_2" })}
                isActive={data.motor === "Motor_2"}
              />
            </SelectorList>

            <SelectorList title="Telo Pvc">
            <ButtonList
                text="No"
                onChange={() => setData({ ...data, cover: "No" })}
                isActive={data.cover === "No"}
              />
            <ButtonList
                text="Flip Tarp"
                onChange={() => setData({ ...data, cover: "Cover_2" })}
                isActive={data.cover === "Cover_2"}
              />
              <ButtonList
                text="Cabriolè"
                onChange={() => setData({ ...data, cover: "Cover_1" })}
                isActive={data.cover === "Cover_1"}
              />
            </SelectorList>
      </div>
    </div>
  );
}

export default Configuratore;
