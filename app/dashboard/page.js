"use client"
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs'
import { useQuery } from 'convex/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Dashboard() {
  const { user } = useUser();

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });

  return (
    <div>
      <h2 className='font-medium text-3xl  '>Workspace</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10'>
        {fileList?.length > 0
          ? fileList.map((file) => (
              <Link
                key={file.fileId}
                href={'/workspace/' + file.fileId}
                className='flex py-10 px-3 shadow-md rounded-md flex-col items-center justify-center border cursor-pointer hover:scale-95 transition-all'
              >
                <Image src={'/pdf.png'} alt='file' width={44} height={24} />
                <h2 className='mt-3 font-medium text-lg text-center'>
                  {file?.fileName}
                </h2>
                <h2>{/* {file?.createdBy} */}</h2>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div
                key={item}
                className='bg-slate-500 rounded-md h-[150px] animate-pulse'
              />
            ))}
      </div>
    </div>
  );
}

export default Dashboard;

