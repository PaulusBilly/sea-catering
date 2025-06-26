"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/subscription", label: "Subscription" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <h1 className="ml-10 font-semibold text-lg">SEA Catering</h1>
        <NavigationMenu>
          <NavigationMenuList className="hidden gap-5 md:flex">
            {links.map((l) => (
              <NavigationMenuItem key={l.href}>
                <NavigationMenuLink asChild>
                  <Link href={l.href}>{l.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
