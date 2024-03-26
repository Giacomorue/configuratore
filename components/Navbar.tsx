import React from 'react'
import Container from './Container'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='h-[70px] fixed top-0 w-full bg-white border-b border-neutral-300'>
      <Container className='flex flex-row items-center justify-between px-3'>
        <Image 
          src={"/logo.png"}
          alt='logo'
          width={130}
          height={100}
        />
        <div className='bg-red-600 px-3 py-2 shadow-sm shadow-black rounded-md cursor-pointer'>
          <p className='text-white'>Fine Configurazione</p>
        </div>
      </Container>
    </div>
  )
}

export default Navbar