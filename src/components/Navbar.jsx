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

const Navbar = () => {
  return (
    <div>
      <header className=" shadow-md py-3">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* logo  */}
          <div>
            <Link href="/">Star Hotel</Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex items-center space-x-8">
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
                <NavigationMenuLink href="/rooms">Rooms</NavigationMenuLink>
                <NavigationMenuLink href="/gallery">Gallery</NavigationMenuLink>
                <NavigationMenuLink href="/blog">Blog</NavigationMenuLink>
                <NavigationMenuLink href="/page">Page</NavigationMenuLink>
                <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="row-0 w-[220px] shadow-md rounded-md px-5 py-4 space-y-2 right-0">
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
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* dark and light mode  */}
          <div>
            <div className="flex items-center">
              <span className="mr-2">Dark And Light</span>
              <Switch />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
