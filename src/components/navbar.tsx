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
    <nav>
      <div>
        <h1>SEA Catering</h1>
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((l) => (
              <NavigationMenuItem key={l.href}>
                <Link href={l.href} passHref>
                  <NavigationMenuLink>{l.label}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
