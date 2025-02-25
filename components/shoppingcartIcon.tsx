"use client"
import { RootState } from "@/lib/store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const ShoppingcartIcon = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const itemCount = items.length;
  
  return (
    <div className="relative">
      <Link href="/cart">
        <div className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <ShoppingCart size={20} />
          {itemCount > 0 && (
         <div 
         className="absolute  -right-0.5 bg-red-500 text-white text-xs font-bold rounded-full w-3 h-3 p-2 flex items-center justify-center"
         style={{ top: '1px' }}
       >
         {itemCount}
       </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ShoppingcartIcon;