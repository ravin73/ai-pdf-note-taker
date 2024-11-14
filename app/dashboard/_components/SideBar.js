"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Layout, Shield, Menu, X } from 'lucide-react'
import Image from 'next/image'
import UploadPdfDialog from './UploadPdfDialog'
import { useUser } from '@clerk/nextjs'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function SideBar() {
  const { user } = useUser();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const GetUserInfo = useQuery(api.user.GetUserInfo, {
    userEmail: user?.primaryEmailAddress?.emailAddress
  });
  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress?.emailAddress
  });

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Toggle button for small screens */}
      <button className="md:hidden p-4" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>

      {/* Sidebar container */}
      <div className={`fixed inset-y-0 left-0 z-40 h-screen w-64 p-7 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0`}>
        {/* Close button for small screens */}
        <button className="absolute top-4 left-4 md:hidden" onClick={toggleSidebar}>
          <X size={24} />
        </button>

        <div className="grid justify-center mt-10">
          <Image src={'/logo.svg'} alt='logo' width={60} height={40} />
        </div>
        <div className='mt-10'>
          <UploadPdfDialog isMaxFile={fileList?.length >= 5 && !GetUserInfo.upgrade ? true : false}>
            <Button className='w-full'>+ Upload PDF</Button>
          </UploadPdfDialog>
          <Link href={'/dashboard'}>
            <div className={`flex gap-2 items-center mt-3 p-4 hover:bg-slate-200 rounded-lg cursor-pointer ${path == '/dashboard' && 'bg-slate-300'}`}>
              <Layout />
              <h2>Workspace</h2>
            </div>
          </Link>
          <Link href={'/dashboard/upgrade'}>
            <div className={`flex gap-2 items-center mt-3 p-4 hover:bg-slate-200 rounded-lg cursor-pointer ${path == '/dashboard/upgrade' && 'bg-slate-300'}`}>
              <Shield />
              <h2>Upgrade</h2>
            </div>
          </Link>
        </div>
        {
          !GetUserInfo?.upgrade &&
          <div className="absolute w-[80%] bottom-24">
            <Progress value={(fileList?.length / 5) * 100} />
            <p className="mt-2 text-sm">{fileList?.length} out of 5 PDF Uploads</p>
            <p className="mt-2 text-sm text-gray-400">Upgrade to upload more PDFs</p>
          </div>
        }
      </div>

      {/* Overlay for small screens */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>}
    </div>
  )
}

export default SideBar
  
  
  // "use client"
  // import { Button } from '@/components/ui/button'
  // import { Progress } from '@/components/ui/progress'
  // import { Layout, Shield } from 'lucide-react'
  // import Image from 'next/image'
  // import React from 'react'
  // import UploadPdfDialog from './UploadPdfDialog'
  // import { useUser } from '@clerk/nextjs'
  // import { useQuery } from 'convex/react'
  // import { api } from '@/convex/_generated/api'
  // import Link from 'next/link'
  // import { usePathname } from 'next/navigation'

  // function SideBar() {
  //   const { user } = useUser();
  //   const path = usePathname();
  //   const GetUserInfo = useQuery(api.user.GetUserInfo, {
  //     userEmail: user?.primaryEmailAddress?.emailAddress
  //   })
    
  //   const fileList = useQuery(api.fileStorage.GetUserFiles, {
  //     userEmail: user?.primaryEmailAddress?.emailAddress
  //   });
  //   return (
  //     <div className='shadow-lg h-screen p-7 '>
  //       <div className="grid justify-center">
  //         <Image
  //           src={'/logo.svg'}
  //           alt='logo'
  //           width={60}
  //           height={40}

  //         />
  //       </div>
  //       <div className='mt-10'>
  //         <UploadPdfDialog isMaxFile={fileList?.length >= 5 && !GetUserInfo.upgrade ? true : false}>
  //           <Button className='w-full'>+ Upload PDF</Button>
  //         </UploadPdfDialog>
  //         <Link href={'/dashboard'}>
  //           <div className={`flex gap-2 items center mt-3 p-4 hover:bg-slate-200 rounded-lg cursor-pointer ${path == '/dashboard' && 'bg-slate-300'}`}>
  //             <Layout />
  //             <h2>Workspace</h2>
  //           </div>
  //         </Link>
  //         <Link href={'/dashboard/upgrade'}>
  //           <div className={`flex gap-2 items center mt-3 p-4 hover:bg-slate-200 rounded-lg cursor-pointer ${path == '/dashboard/upgrade' && 'bg-slate-300'}`}>
  //             <Shield />
  //             <h2>Upgrade</h2>
  //           </div>
  //         </Link>
  //       </div>
  //       {
  //         !GetUserInfo?.upgrade &&
  //         <div className="absolute w-[80%] bottom-24">
  //           <Progress value={(fileList?.length / 5) * 100} />
  //           <p className="mt-2 text-sm">{(fileList?.length)} out of 5 Pdf Upload</p>
  //           <p className="mt-2  text-sm text-gray-400">Upgrade to Upload more pdf</p>
  //         </div>
  //       }


  //     </div>
  //   )
  // }

  // export default SideBar
