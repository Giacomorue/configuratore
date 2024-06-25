"use client" 

import { useTrailer } from '@/hooks/useTrailer'
import Button from './Button'

function Configurator() {

  const {
    model,
    setModel,
    color,
    setColor,
    oversides,
    setOversides,
    rear,
    setRear,
    bavero,
    setBavero,
    motor,
    setMotore,
    cover,
    setCover,
    suspensions,
    setSuspensions,
    wheel,
    setWheel,
    secondStandFoot,
    setSecondStandFoot,
    assistedSteering,
    setAssistedSteering
  } = useTrailer();

  return (
    <div className="lg:p-16 p-1 lg:w-[50%] w-[100%] lg:h-full h-[50%]">
      <div className='w-full h-full  overflow-y-auto'>
        <div className='text-center space-y-3 pb-5'>
          <p>Modello</p>
          <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
            <Button
              text="RA200-5"
              onChange={() => setModel("RA200-5")}
              isActive={model === "RA200-5"}
            />
            <Button
              text="RA200-6"
              onChange={() => setModel("RA200-6")}
              isActive={model === "RA200-6"}
            />
            <Button
              text="RA300-6"
              onChange={() => setModel("RA300-6")}
              isActive={model === "RA300-6"}
            />
            <Button
              text="RA300-7"
              onChange={() => setModel("RA300-7")}
              isActive={model === "RA300-7"}
            />
            <Button
              text="RA300-8"
              onChange={() => setModel("RA300-8")}
              isActive={model === "RA300-8"}
            />
            <Button
              text="RA400-8"
              onChange={() => setModel("RA400-8")}
              isActive={model === "RA400-8"}
            />
            <Button
              text="RA400-9"
              onChange={() => setModel("RA400-9")}
              isActive={model === "RA400-9"}
            />
          </div>
        </div>

        <div className='text-center space-y-3 pb-5'>
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
        </div>
      </div>
    </div>
  )
}

export default Configurator