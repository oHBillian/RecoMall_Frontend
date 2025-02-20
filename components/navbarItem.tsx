"use client"
import { cn } from "@/lib/utils";
import { Category } from "@/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface Maincategories {
  data: Category[];
}
const NavbarItem: React.FC<Maincategories> = ({ data }) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    id: route.id,
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <div className="flex gap-5 text-sm">
      {routes.map((route) => (
        <div
        key={route.id.toString()}
        className={cn(
          "text-black",
          route.active ? "text-black" : "text-gray-500"
        )}
      >
        <Link href={route.href}>{route.label}</Link>
      </div>
      ))}
    </div>
  );
};

export default NavbarItem;
