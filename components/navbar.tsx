import GetMaincategories from "@/actions/get-Maincategories";
import Link from "next/link";
import React from "react";
import NavbarItem from "./navbarItem";
import { ShoppingBag, ShoppingCart } from "lucide-react";

const Navbar = async () => {
  const categories = await GetMaincategories();

  return (
    <>
      <div className="w-full flex items-center px-10 py-3 fixed z-50 bg-white">
        <div className="flex items-center w-1/5">
          <h1 className="font-bold">
            <Link href="/">Recomall</Link>
          </h1>
        </div>
        <div className="flex gap-5 text-sm w-full justify-center">
          <NavbarItem data={categories} />
        </div>
        <div className="flex w-1/5 gap-4  items-center ">
          <ShoppingCart size={20} />
          <Link href="/sign-up">สมัครใหม่</Link>
          <h2>|</h2>
          <Link href="/sign-in">ล็อคอิน</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
