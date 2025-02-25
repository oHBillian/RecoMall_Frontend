"use client";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { addItem } from "@/lib/slice/Cartslice";
import { auth } from "@clerk/nextjs/server";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";

interface Productbuttonprops {
  productId: string;
  cartvalue: {
    id: string,
    name: string,
    price: string,
    image: string,
  }
}

const Productbutton: React.FC<Productbuttonprops> = ({ productId,cartvalue }) => {
  const dispatch = useDispatch();
  const { isSignedIn } = useAuth();

  // console.log("cartvalue", cartvalue)
  const onDetailClick = () => {
    window.location.assign(`/product/${productId}`);
  }

  const onAddItemClick = () => {
    try {
      if (isSignedIn) {
        dispatch(addItem({id: cartvalue.id, name: cartvalue.name, price: cartvalue.price,image: cartvalue.image}));
        return;
      }
      window.location.assign('/sign-in');
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="flex justify-between items-center gap-x-2 text-sm">
        <Button asChild size="sm" className="w-full px-4" variant={"outline"} onClick={() => onDetailClick()}>
          <span>Details</span>
        </Button>
        
      <Button size="sm" className="w-full" onClick={() => {onAddItemClick()}}>
        <ShoppingCart /> Add
      </Button>
    </div>
  );
};

export default Productbutton;
