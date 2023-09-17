import React from 'react'

import Image from "next/image";

export default function Recipe({src, text}:any) {
  return (
    <div className='flex flex-col items-center gap-4'>
        <Image className='w-[300px] h-[300px] rounded-lg' src={src} alt='imagine cu reteta' width={300} height={300} />
        <p >{text}</p>
    </div>
  )
}