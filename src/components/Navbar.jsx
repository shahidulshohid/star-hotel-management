"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button"
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const pathname = usePathname()
    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
  return (
    <div>
      <header className=" shadow-md py-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8">
          {/* logo  */}
          <div>
            <Link href="/" className="text-2xl md:text-3xl font-semibold">Star Hotel</Link>
          </div>
          {/* desktop menu  */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="hidden lg:flex items-center space-x-8">
                <NavigationMenuLink href="/" className={`${pathname === '/' ? 'text-pink-500 text-semibold border-b-2 border-pink-500': ''}`}>Home</NavigationMenuLink>
                <NavigationMenuLink href="/rooms" className={`${pathname === '/rooms' ? 'text-pink-500 text-semibold border-b-2 border-pink-500': ''}`}>Rooms</NavigationMenuLink>
                <NavigationMenuLink href="/gallery" className={`${pathname == '/gallery' ? 'text-pink-500 text-semibold border-b-2 border-pink-500': ''}`}>Gallery</NavigationMenuLink>
                <NavigationMenuLink href="/blog" className={`${pathname == '/blog' ? 'text-pink-500 text-semibold border-b-2 border-pink-500': ''}`}>Blog</NavigationMenuLink>
                <NavigationMenuLink href="/page" className={`${pathname == '/page' ? 'text-pink-500 text-semibold border-b-2 border-pink-500': ''}`}>Page</NavigationMenuLink>
                <NavigationMenuLink href="/contact" className={`${pathname == '/contact' ? 'text-pink-500 text-semibold border-b-2 border-pink-500': ''}`}>Contact</NavigationMenuLink >
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* dark and light mode  */}
          <div className="hidden lg:flex">
            <div className="flex items-center space-x-4">
              <span>Dark Mode</span>
              <Switch/>
              <Button variant="default">Login</Button>
            </div>
          </div>
          {/* mobile humber menu */}
          <div>
            <Button onClick={toggleMenu} variant="outline">
           {
            openMenu ?  <GiHamburgerMenu /> : <RxCross2 size={24}/>
           }
            </Button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
