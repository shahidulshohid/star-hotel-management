"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
            <Link href="/">Star Hotel</Link>
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
                <NavigationMenuLink href="/contact" className={`${pathname == '/contact' ? 'text-pink-500 text-semibold border-b-2 border-pink-500': ''}`}>Contact</NavigationMenuLink>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                {/* <NavigationMenuContent className="left-0">
                  <ul className=" w-[220px] shadow-md rounded-md px-5 py-4 space-y-2">
                    <li>
                      <NavigationMenuLink
                        href="/roomCards"
                        className="hover:text-pink-500"
                      >
                        Room Cards
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/roomCarousel"
                        className="hover:text-pink-500"
                      >
                        Room Carousel
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/layout1"
                        className="hover:text-pink-500"
                      >
                        Single Room - Layout 1
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/layout2"
                        className="hover:text-pink-500"
                      >
                        Single Room - Layout 2
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/layout3"
                        className="hover:text-pink-500"
                      >
                        Single Room - Layout 3
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent> */}
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
