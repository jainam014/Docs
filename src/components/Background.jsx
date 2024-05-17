import React from 'react'

function background() {
  return (
    <>
        <div className='fixed z-[2] h-screen w-full'>
            <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-800 font-semibold text-xl">Documents.</div> 
            <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter">Docs.</h1>
        </div>
        
    </>
  )
}

export default background