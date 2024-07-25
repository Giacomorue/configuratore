import Configuratore from '@/components/B4-400/Configuratore'
import Mesh from '@/components/B4-400/Mesh'
import LayoutConfiguratore from '@/components/LayoutConfiguratore'
import React from 'react'

function page() {
  return (
    <div className="h-full w-full">
      <LayoutConfiguratore
        Configurator={<Configuratore />}
        Mesh={<Mesh />}
      />
    </div>
  )
}

export default page