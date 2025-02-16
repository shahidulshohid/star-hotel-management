import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <header className="shadow-md py-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* logo */}
        <div>
          <Link href="/">Star Hotel</Link>
        </div>
        {/* desktop menu  */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/">Home</NavigationMenuLink>
              <NavigationMenuLink href="/hotel">The Hotel</NavigationMenuLink>
              {/* <NavigationMenuLink href="/rooms"> */}
                <NavigationMenuTrigger>Rooms</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul>
                    <li>
                      <NavigationMenuLink>Rooms Cards</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>Rooms Carousel</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>Rooms Chess View</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        Single Room - Layout 1
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        Single Room - Layout 2
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        Single Room - Layout 3
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
             {/* </NavigationMenuLink> */}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default Navbar;
