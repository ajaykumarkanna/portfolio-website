import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from './ui/navigation-menu';
import { cn } from './ui/utils';

interface MainNavigationProps {
  currentPath: string;
}

export function MainNavigation({ currentPath }: MainNavigationProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
          >
            <Link
              to="/"
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                currentPath === "/" 
                  ? "bg-indigo-100 text-indigo-700" 
                  : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100"
              )}
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
          >
            <Link
              to="/portfolio"
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                currentPath === "/portfolio" 
                  ? "bg-indigo-100 text-indigo-700" 
                  : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100"
              )}
            >
              Portfolio
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
          >
            <Link
              to="/admin-login"
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                currentPath === "/admin-login" || currentPath === "/admin"
                  ? "bg-indigo-100 text-indigo-700" 
                  : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100"
              )}
            >
              Admin
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}