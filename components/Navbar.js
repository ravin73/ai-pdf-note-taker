import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"


const Navitems = [
    {
        id: '1',
        path: '/features',
        label: 'Features',
        active: false,
    },
    {
        id: '2',
        path: '/solutions',
        label: 'Solutions',
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

    const handleNavClick = (id) => {
        setActiveNav(id);
    };
    return (
        <nav className='p-4 shadow-md h-16 '>
            <NavigationMenu className='flex justify-between'>
                <div className="container mx-auto flex justify-between items-center">

                    {/* Logo */}
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" passHref legacyBehavior>
                                <NavigationMenuLink className="inline-flex items-center">
                                    <Image src="/logo.svg" alt="Logo" width={40} height={30} />
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    {/* Nav Items */}
                    <NavigationMenuList className="flex space-x-4 items-center text-slate-300">
                        {Navitems.map((item) => (
                            <NavigationMenuItem key={item.id}>
                                <Link href={item.path} passHref legacyBehavior>
                                    <NavigationMenuLink className="hover:text-white">
                                        {item.label}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}

                        {/* Get Started Button */}
                        <NavigationMenuItem>
                            <Button className="rounded-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-500">
                                <Link href="/sign-in" passHref legacyBehavior>
                                    <NavigationMenuLink>Get Started</NavigationMenuLink>
                                </Link>
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </div>
            </NavigationMenu>
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
//             {Navitems.map((item) => (
//                 <li key={item.id}>
//                     <Link href={item.path}
//                         onClick={() => handleNavClick(item.label)}>
//                         {item.label}
//                     </Link>
//                 </li>
//             ))}
//             <Button
//                 className='rounded-full'>
//                     <Link href='/sign-in'>Get Started</Link>
//                     </Button>
//         </ul>
//     </div>
// </nav>