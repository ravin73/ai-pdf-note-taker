"use client"
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Layout, Shield } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import UploadPdfDialog from './UploadPdfDialog'
import { useUser } from '@clerk/nextjs'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function SideBar() {
  const { user } = useUser();
  const path = usePathname();
  const GetUserInfo = useQuery(api.user.GetUserInfo, {
    userEmail: user?.primaryEmailAddress?.emailAddress
  })
  
  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress?.emailAddress
  });
  return (
    <div className='shadow-lg h-screen p-7'>
      <div className="grid justify-center">
        <Image
          src={'/logo.svg'}
          alt='logo'
          width={60}
          height={40}

        />
      </div>
      <div className='mt-10'>
        <UploadPdfDialog isMaxFile={fileList?.length >= 5 && !GetUserInfo.upgrade ? true : false}>
          <Button className='w-full'>+ Upload PDF</Button>
        </UploadPdfDialog>
        <Link href={'/dashboard'}>
          <div className={`flex gap-2 items center mt-3 p-4 hover:bg-slate-200 rounded-lg cursor-pointer ${path == '/dashboard' && 'bg-slate-300'}`}>
            <Layout />
            <h2>Workspace</h2>
          </div>
        </Link>
        <Link href={'/dashboard/upgrade'}>
          <div className={`flex gap-2 items center mt-3 p-4 hover:bg-slate-200 rounded-lg cursor-pointer ${path == '/dashboard/upgrade' && 'bg-slate-300'}`}>
            <Shield />
            <h2>Upgrade</h2>
          </div>
        </Link>
      </div>
      {
        !GetUserInfo?.upgrade &&
        <div className="absolute w-[80%] bottom-24">
          <Progress value={(fileList?.length / 5) * 100} />
          <p className="mt-2 text-sm">{(fileList?.length)} out of 5 Pdf Upload</p>
          <p className="mt-2  text-sm text-gray-400">Upgrade to Upload more pdf</p>
        </div>
      }


    </div>
  )
}

export default SideBar
