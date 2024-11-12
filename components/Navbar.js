import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs';

import { MenuIcon } from 'lucide-react';
import { Button } from './ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { toast } from 'sonner';



const Navitems = [
    {
        id: '1',
        path: '/dashboard',
        label: 'Dashboard',
        active: false,
    },
    {
        id: '2',
        path: '/features',
        label: 'Features',
        active: false,
    },
    {
        id: '3',
        path: '/testimonials',
        label: 'Testimonials',
        active: false,
    }, {
        id: '4',
        path: '/blog',
        label: 'Blog',
        active: false,
    }
];
const Navbar = () => {
    const [activeNav, setActiveNav] = useState(null);
    const { isSignedIn } = useUser();
    const handleNavClick = (id) => {
        setActiveNav(id);
    };
    const [isOpen, setIsOpen] = useState(false);

    // Close the sheet when screen size exceeds 1024px (lg breakpoint in Tailwind)
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setIsOpen(false);
        }
      };
    //   {isSignedIn && toast('User Signed In successfully')}
    //   {!isSignedIn && toast('User Signed Out successfully')}

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
        <nav className='flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20'>
            <div className='flex items-center gap-x-20'>
                <Link href='/'>
                <Image src={'/logo.svg'}
                    alt='Logo'
                    width={40}
                    height={30} />
                </Link>
                <div className='hidden lg:flex gap-x-16 font-medium text-xl text-slate-700'>
                    {Navitems.map((item) => (

                        <Link href={item.path}
                            onClick={() => handleNavClick(item.label)}>
                            {item.label}
                        </Link>

                    ))}
                </div>
            </div>
            <div className='flex gap-x-5 '>
                <div className='flex items-center gap-x-2'>

                    <UserButton />
                    
                    {!isSignedIn && (
                        <Link href={'/sign-in'}>
                            {/* <sp className='hidden font-medium text-slate-600 lg:block'>Sign In</span> */}
                            <Button className='hidden lg:block rounded-full'> Sign In</Button>
                        </Link>
                    )}
                </div>
                <div className='lg:hidden'>
                  
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                        <button onClick={() => setIsOpen(true)}>
                            <MenuIcon />
                            </button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="flex justify-center gap-x-5 mt-16">
                                    <Image src={'/logo.svg'}
                                        alt='Logo'
                                        width={40}
                                        height={30}
                                        className='flex justify-center'
                                    />
                                    <p>AI PDF Notes</p>
                                </SheetTitle>
                                <SheetDescription>
                                    <div className='flex flex-col items-center text-xl justify-center gap-y-5 mt-5'>
                                        {Navitems.map((item) => (

                                            <Link href={item.path}
                                                onClick={() => handleNavClick(item.label)}>
                                                {item.label}
                                            </Link>

                                        ))}
                                        
                                    </div>
                                    <div className='mt-5'>
                                        { !isSignedIn && (
                                        <Link href={'/sign-in'}>
                                        <Button className='w-32 rounded-full'>Sign In</Button>
                                        </Link>
                                       ) }
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>

        </nav>


    )
}

export default Navbar
// <nav className=" p-4 shadow-md h-16">
//     <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-xl font-bold">
// <Image
//     src={'/logo.svg'}
//     alt="Logo"
//     width={40}
//     height={30}
// />

//         </div>
//         <ul className="flex space-x-4 items-center justify-center text-slate-500">
// {Navitems.map((item) => (
//     <li key={item.id}>
//         <Link href={item.path}
//             onClick={() => handleNavClick(item.label)}>
//             {item.label}
//         </Link>
//     </li>
// ))}
//             <Button
//                 className='rounded-full'>
//                     <Link href='/sign-in'>Get Started</Link>
//                     </Button>
//         </ul>
//     </div>
// </nav>