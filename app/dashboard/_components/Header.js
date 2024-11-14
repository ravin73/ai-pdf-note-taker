import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-end p-5 gap-x-5'>
      <Link href={'/'}>
        <Button className="rounded-full bg-green-100 text-black">Go Home</Button>
      </Link>
      <UserButton/>
    </div>
  )
}

export default Header
