"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/subscription", label: "Subscription" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 backdrop-blur">
      <div className="container relative flex h-16 items-center">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="md:hidden p-2 rounded hover:bg-muted">
              <MenuIcon className="h-6  w-6" />
              <span className="sr-only">Open menu</span>
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/40 md:hidden z-60" />
            <Dialog.Content className="fixed left-0 top-0 h-full w-64 bg-white p-6 flex flex-col gap-4 md:hidden data-[state=open]:animate-in z-60">
              <Dialog.Title className="sr-only">burger</Dialog.Title>
              <Dialog.Close asChild>
                <button className="self-end p-2 rounded hover:bg-muted">
                  <XIcon className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </button>
              </Dialog.Close>

              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "px-3 py-2 rounded text-left",
                    pathname === l.href
                      ? "bg-primary text-white"
                      : "hover:bg-muted"
                  )}
                  onClick={() =>
                    (document.activeElement as HTMLElement | null)?.blur()
                  }
                >
                  {l.label}
                </Link>
              ))}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <h1 className="absolute left-1/2 -translate-x-1/2 font-bold text-2xl md:relative md:ml-30 md:left-0 md:translate-x-0">
          SEA Catering
        </h1>

        <div className="hidden md:flex gap-4 ml-auto">
          {links.map((l) => {
            const isActive =
              pathname === l.href || pathname.startsWith(`${l.href}/`);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "px-3 py-2 rounded transition-colors",
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-muted hover:text-primary"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
