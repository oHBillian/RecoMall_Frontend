import GetMaincategories from "@/actions/get-Maincategories";
import Link from "next/link";
import React from "react";
import NavbarItem from "./navbarItem";
import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import ShoppingcartIcon from "./shoppingcartIcon";

const Navbar = async () => {
  const categories = await GetMaincategories();
  const { userId } = await auth();
  const user = await currentUser();

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
        <div className="flex w-1/5 gap-4 items-center">
          <ShoppingcartIcon />
          {userId ? (
            <div className="flex items-center gap-2">
              <span className="text-sm">{user?.firstName || "User"}</span>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <>
              <Link href="/sign-up" className="text-sm flex w-14">สมัครใหม่</Link>
              <h2>|</h2>
              <Link href="/sign-in" className="text-sm flex w-12">ล็อคอิน</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
