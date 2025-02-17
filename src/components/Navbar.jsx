import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

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
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link ewrrrrrrrrrrrrr</NavigationMenuLink>
                  <NavigationMenuLink>Link ewrrrrrrrrrrrrr</NavigationMenuLink>
                  <NavigationMenuLink>Link ewrrrrrrrrrrrrr</NavigationMenuLink>
                  <NavigationMenuLink>Link ewrrrrrrrrrrrrr</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
