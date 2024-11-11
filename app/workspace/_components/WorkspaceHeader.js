import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader({fileName}) {
  return (
    <div className='p-6 flex justify-between shadow-md'>
      <Image src={'/logo.svg'} alt='logo' width={30} height={20}/>
      <h2 className='font-bold'>{fileName}</h2>
      <div className='flex gap-2 items-center justify-evenly'>
        <Button>Save</Button>
        <UserButton/>
      </div>
      
    </div>
  )
}

export default WorkspaceHeader
