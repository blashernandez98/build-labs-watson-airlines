import React from 'react'

function Header() {
  return (
    <header className='flex flex-row w-full justify-between py-3 px-10'>
      <h1 className='text-5xl font-light text-zinc-800'>
        Watson Airlines - Soporte
      </h1>
      <div className='flex gap-2'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Contacto
        </button>
      </div>
    </header>
  )
}

export default Header
