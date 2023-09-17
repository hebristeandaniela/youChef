import Image from 'next/image'
import React from 'react'

export default function CommunityElement({src, title, text}:any) {
  return (
    <div className='flex flex-col items-center gap-4'>
        <Image className="w-[150px]" src={src} alt='imagine comunitate' width={300} height={300} />
        <p className='text-lg text-main font-semibold max-w-sm'>{title}</p>
        <p >{text}</p>
    </div>
  )
}